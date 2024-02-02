<?php

namespace App\Http\Controllers\Admin\Tour;

use App\Http\Requests\Payment\ChequePaymentRequest;
use App\Http\Requests\Payment\PaymentOrderRequest;
use App\Http\Requests\Payment\CashPaymentRequest;
use App\Http\Controllers\Controller;
use App\User;
use Auth;
use App\Http\Controllers\Admin\BaseController;
use Illuminate\Http\Request;
use App\Model\Tour\Payment;
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
     * Saved record of cheque or demand draft.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
    public function chequeOrdraftRecord(ChequePaymentRequest $request){
        try{
            $tour_type = request()->route('tour_type')??'';
            $user_id = null;
            if($tour_type == "school"){ 
                $user_id = $request->incharge_edu_institute_id??null;
            }
            else if($tour_type == "company"){
                $user_id = $request->incharge_company_user_id??null;
            }
            else if($tour_type == "family"){
                $user_id = $request->incharge_family_user_id??null;
            }
            $user = Auth::guard('user-api')->user();
            $alreadyPay = $this->payment_helper->alreadyPay($user_id, $request->tour_id??0, $tour_type);
            if($alreadyPay == 1){
                return response()->json(array('message'=>"Payment already done or processing"), 409);   
            }

            $cheque_record = $this->payment_helper->chequeOrdraft($request, "user", $user, $tour_type);
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
    public function cashRecord(CashPaymentRequest $request){
        try{
            $tour_type = request()->route('tour_type')??'';
            $user_id = null;
            if($tour_type == "school"){ 
                $user_id = $request->incharge_edu_institute_id??null;
            }
            else if($tour_type == "company"){
                $user_id = $request->incharge_company_user_id??null;
            }
            else if($tour_type == "family"){
                $user_id = $request->incharge_family_user_id??null;
            }

            $user = Auth::guard('user-api')->user();
            $alreadyPay = $this->payment_helper->alreadyPay($user_id, $request->tour_id??0, $tour_type);
            if($alreadyPay == 1){
                return response()->json(array('message'=>"Payment already done or processing"), 409);   
            }
             $cash_record = $this->payment_helper->cash($request, "user", $user, $tour_type, $user_id);
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
    * Udated status of payment.
    */

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

    /**
    * Upload image in amazon.
    */
    protected function uploadImage($doc_proof){
        $doc_proof_name = time().'-'.$doc_proof->getClientOriginalName();
        $path = config('gbi.doc_proof') . $doc_proof_name;
        \Storage::disk('s3')->put($path, file_get_contents($doc_proof));
        return $doc_proof_name;
    }

    /**
     * Fetch payment History 
     */
    public function allHistory($user, $tour_type, $tour_id, $size=10){
        try{
            $fetch_column = array('id', 'tour_id', 'customer_type', 'payment_mode', 'payment_by_user_id', 'tour_price', 'amount', 'total_amount', 'status', 'doc_proof', 'order_payment_status');

            if($tour_type == "family"){
                $fetch_column[] = 'payment_by_family_user_id';  
            }
            else if($tour_type == "school"){
                $fetch_column[] = 'payment_by_edu_institute_id';    
            }
            else if($tour_type == "company"){
                $fetch_column[] = 'payment_by_company_user_id';  
            }

            $data = Payment::where(array('order_payment_status'=>1,'tour_id'=>$tour_id, 'customer_type'=>$tour_type))->paginate($size, $fetch_column);
            return response()->json($data);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }   
    }

}






