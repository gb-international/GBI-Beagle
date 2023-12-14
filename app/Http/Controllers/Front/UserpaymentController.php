<?php
namespace App\Http\Controllers\Front;
use App\Helpers\RazorpayPayment as RazorpayPaymentHelper;
use App\Http\Requests\Payment\PaymentGatewayRequest;
use App\Http\Requests\Payment\PaymentOrderRequest;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Model\Tour\Userpayment;
use App\Model\Tour\TourUser;
use Auth;

use App\Http\Controllers\Admin\BaseController;

class UserpaymentController extends BaseController
{
    protected $razorpay_payment_helper;

    //Constructor to connected razorpay authentication
    public function __construct() {
        $this->razorpay_payment_helper = new RazorpayPaymentHelper;
    }

    /**
     * Create customer in razorpay.
     * If not exist otherwise fetch customer data (Check customer exist razorpay both email & phone number is same). 
     * Save customer id in table according to customer type, Create order in razorpay & saved record in database.
    */
    
    public function makeOrder(Request $request)
    {
        $customer_type = $request->customer_type??'school';
        $guard = Auth::getDefaultDriver();
        return $guard;
        $customer_type = trim(str_replace("-api", "", $guard));
        try{
            $user = Auth::guard($guard)->user();
            $customer = $this->razorpay_payment_helper->createCustomer($user);
            $payment = $this->razorpay_payment_helper->createOrder($request, $customer_type, $user);
            $payment->customer_id = $customer->id??'';
            return response()->json($payment);            
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage());
        }
        // Auth::guard('school-api')->user();
    }

    public function store(Request $request){
        $user = Auth::user();
        $this->validate($request, [ 
            'tour_code' => 'required',
            'amount' => 'required',
            'payment_mode' => 'required',
            'user_id' => 'required',
        ]);
        /*if($user->is_incharge == "1"){*/
            $checkDuplicate = Userpayment::where(['user_id'=>$request->user_id,'tour_code'=>$request->tour_code])->get();
            if($checkDuplicate->count()){
                return response()->json(['error'=>'You have already made payment']);
            }
            Userpayment::create($request->all());
       /* }else{
            $tour = TourUser::where([
                'user_id'=>$user->id,
                'tour_id'=>$request->tour_code
            ])->first();
            $tour->update($request->all());
        }*/
        return response()->json('successfully paid');
        
    }

    public function tourPayStatus(Request $request){
        // check if teacher has paid 
        $data = Userpayment::select('status')->where([
            'tour_code'=>$request->tour_code,
            'payment_mode'=>'self'
        ])->first();
        // if teacher has not paid then check if student has paid
        if(!$data){
            // if teacher not paid then check if student has paid
            $data = Userpayment::select('status')->where(['tour_code'=>$request->tour_code,'user_id'=>$request->user_id])->first();
        }
        return response()->json($data);
    }

    /**
     * Call payment data from razorpay by payment id. 
     * saved payment record & payment type is card, upi, wallet & netbanking.
     * 
     */ 
    
    public function paymentRecord(PaymentGatewayRequest $request){
        try{
            $payment = $this->razorpay_payment_helper->checkPayment($request);
                return response()->json("Payment successfully");
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage());
        }
    }
}
