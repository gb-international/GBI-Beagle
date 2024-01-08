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
use App\Model\Tour\Payment;
use Carbon\Carbon;
use Validator;
use App\Http\Requests\Payment\ChequePaymentRequest;
use App\Http\Requests\Payment\CashPaymentRequest;
use App\User;
use App\Helpers\Payment as PaymentHelper;

class UserpaymentController extends BaseController
{
    protected $razorpay_payment_helper;
    protected $payment_helper;

    //Constructor to connected razorpay authentication
    public function __construct() {
        $this->razorpay_payment_helper = new RazorpayPaymentHelper;
        $this->payment_helper = new PaymentHelper;
    }
    

    /**
     * Create customer in razorpay.
     * If not exist otherwise fetch customer data (Check customer exist razorpay both email & phone number is same). 
     * Save customer id in table according to customer type, Create order in razorpay & saved record in database.
    */
    
    public function makeOrder(PaymentOrderRequest $request)
    {
        $guard = Auth::getDefaultDriver();
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

    //Get payment history pay by use
    public function all($size=null)
    {
        if (empty($size)) {
            $size = 10; 
        }
        $guard = Auth::getDefaultDriver();
        $customer_type = trim(str_replace("-api", "", $guard));
        if($customer_type == "school"){
            $data = MarketingCampaign::latest()->paginate($size);
        }

        // foreach ($data as $marketing_campaign){
        //     $marketing_campaign->meta_keywords;
        // }
        // return response()->json($data);
    }

    /**
     * Saved record of cheque or demand draft.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
     public function chequeOrdraftRecord($guard_name, ChequePaymentRequest $request){
        try{
            $user = Auth::guard($guard_name.'-api')->user();
            $cheque_record = $this->payment_helper->chequeOrdraft($request, $guard_name, $user, $guard_name);
            if($cheque_record){ 
                if ($request->hasFile('doc_proof')) {
                    $cheque_record->doc_proof = $this->uploadImage($request->doc_proof);
                    $cheque_record->save();
                }
                return response()->json(['Message'=> 'Cheque/draft record added']);            
            }
            else{
                return $this->sendError("Something went wrong!");
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Saved record of Cash.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function cashRecord($guardname, CashPaymentRequest $request){
        try{
            $user = Auth::guard($guardname.'-api')->user();
             $cash_record = $this->payment_helper->cash($request, $guardname, $user, $guardname);
            if($cash_record){
                if ($request->hasFile('doc_proof')) {
                    $cash_record->doc_proof = $this->uploadImage($request->doc_proof);
                    $cash_record->save();
                }
                return response()->json(['Message'=> 'Successfully added']);            
            }
            else{
                return $this->sendError("Something went wrong!");
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage());
        }
    }
    
    /**
    * Upload image in amazon.
    */
    protected function uploadImage($doc_proof){
        $doc_proof_name = time().'-'.$doc_proof->getClientOriginalName();
        $path = config('gbi.doc_proof') . $doc_proof_name;
        \Storage::disk('s3')->put($path, file_get_contents($doc_proof));
        return $doc_proof_name;
    }
}
