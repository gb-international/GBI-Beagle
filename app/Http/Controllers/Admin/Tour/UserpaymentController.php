<?php

namespace App\Http\Controllers\Admin\Tour;

use App\Http\Requests\Payment\PaymentGatewayRequest;
use App\Http\Requests\Payment\ChequePaymentRequest;
use App\Http\Requests\Payment\PaymentOrderRequest;
use App\Http\Requests\Payment\CashPaymentRequest;
use App\Http\Controllers\Controller;
use App\User;
use Auth;
use App\Http\Controllers\Admin\BaseController;
use Illuminate\Support\Facades\Config;
use Illuminate\Http\Request;
use App\Model\Tour\Payment;
use Razorpay\Api\Api;
use Carbon\Carbon;
use Validator;
use App\Helpers\Payment as PaymentHelper;

class UserpaymentController extends BaseController
{
    protected $payment_helper;
    //Constructor to connected razorpay authentication
    public function __construct() {
        $this->payment_helper = new PaymentHelper;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function all($size)
    {
        return response()->json(Userpayment::select([
            'id','tour_code','amount','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return response()->json(Userpayment::orderBy('created_at')->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $userpayment = Userpayment::where('id',$id)
            ->firstOrFail()
            ->adminFormat();
        return response()->json($userpayment);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Userpayment $userpayment)
    {
        $userpayment->delete();
        return response()->json('successfully deleted');
    }

    /**
     * Create order in razorpay.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function makeOrder(PaymentOrderRequest $request){
        // return response()->json("tt");
        try{
            $user = Auth::guard('user-api')->user();
            $discount = 0;
            if($request->discount_coupon_id){
                $discount = (($request->amount??0)*DiscountCoupon::where('id', $request->discount_coupon_id)->first('discount')->discount??0)/100;
            }
            $amount = ($request->amount??0)-$discount;
            
            $customer = $this->api->customer->create(array("name"=>$user->name??'', "email"=>$user->email??'', "contact"=>$user->phone_no??'', "fail_existing"=>0, "gstin"=>$user->gstin??null, "notes"=>array("address"=>$user->address??null,"city"=>$user->city??null,"zip_code"=>$user->zip_code??null, "country"=>$user->country??null, "state"=>$user->state??null, "country_code"=>$user->country_code??null)));    
            $user->customer_id = $customer->id??'';
            $user->save();

            $order = $this->api->order->create(array('amount' => $amount*100, 'currency' => 'INR'));
            $orderId = $order->id??'';
            if($order->id){
                $status = $order->status??'';
                $amount = ($order->amount??0)/100;
                $payment = new Payment;
                $payment->amount = $amount;
                $payment->discount = $discount;
                $payment->order_id = $orderId;
                $payment->total_amount = $amount;
                $payment->status =$status;
                $payment->discount_coupon_id = $request->discount_coupon_id;
                $payment->tour_id = $request->tour_id;
                $payment->school_id = $request->school_id;
                $payment->customer_type = 'GBI Member';
                $payment->payment_by_user_id = $user->id??0;
                $payment->payment_mode = 'payment gateway';
                $payment->payment_by = $request->payment_by??null;
                $payment->tour_price = $request->tour_price??0;
                $payment->save();
                $payment->customer_id = $customer->id??'';
                return response()->json($payment);  
            }
            else{
                return $this->sendError("Something went wrong!");
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage());
        }
    }

    public function chequeOrdraftRecord(ChequePaymentRequest $request){
        $user = Auth::guard('user-api')->user();
        $customer_type = $request->customer??'user';
        try{
            $cheque_record = $this->payment_helper->chequeOrdraft($request, $customer_type, $user);
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
    public function cashRecord(CashPaymentRequest $request){
        try{
            $user = Auth::guard('user-api')->user();
            $customer_type = $request->customer??'user';
            $cash_record = $this->payment_helper->cash($request, $customer_type, $user);
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
    public function paymentRecord(PaymentGatewayRequest $request){
        try{
            $data = $this->api->payment->fetch($request->razorpay_payment_id??'');
            if($data->order_id){
                $payment = Payment::where("order_id", $data->order_id??'')->first(); 
                $payment->razorpay_payment_id = $request->razorpay_payment_id??'';
                $payment->razorpay_signature = $request->razorpay_signature??'';
                $payment->amount = ($data->amount??0)/100;
                $payment->tax_amount = $data->tax??0;
                $payment->fee_amount = $data->fee??0;
                $payment->total_amount = (($data->amount??0)/100)+$data->tax??0+$data->fee??0;
                $payment->payment_method = $data->method??'';
                $payment->status = $data->status;
                $payment->payment_date = Carbon::now('Asia/Kolkata')->format('Y-m-d H:i:s');
                $payment->save();
                return response()->json("Payment successfully");
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage());
        }
    }

    //Update check status
    public function chequeStatus(Request $request){
        $validator = Validator::make($request->all(), [ 
            'payment_id' => 'required|exists:payments,id',
            'status' => 'required|in:pending,success',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
        }
        $payment = Payment::find($request->payment_id??0);
        if($payment){
            $payment->status = $request->status;
            $payment->payment_date = Carbon::now('Asia/Kolkata')->format('Y-m-d H:i:s');
            $payment->save();
            return response()->json("Payment successfully");
        }   
        else{
            return $this->sendError("No Such Payment Found!");  
        }
    }
    protected function uploadImage($doc_proof){
        $doc_proof_name = time().'-'.$doc_proof->getClientOriginalName();
        $path = config('gbi.doc_proof') . $doc_proof_name;
        \Storage::disk('s3')->put($path, file_get_contents($doc_proof));
        return $doc_proof_name;
    }
}






