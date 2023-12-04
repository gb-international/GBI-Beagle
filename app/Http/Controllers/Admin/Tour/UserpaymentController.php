<?php

namespace App\Http\Controllers\Admin\Tour;

use App\Http\Requests\Payment\PaymentGatewayRequest;
use App\Http\Requests\Payment\ChequePaymentRequest;
use App\Http\Requests\Payment\PaymentOrderRequest;
use App\Http\Requests\Payment\CashPaymentRequest;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\BaseController;
use Illuminate\Support\Facades\Config;
use Illuminate\Http\Request;
use App\Model\Tour\Payment;
use Razorpay\Api\Api;
use Carbon\Carbon;

class UserpaymentController extends BaseController
{
    protected $api;
    //Constructor to connected razorpay authentication
    public function __construct() {
        $this->api = new Api(Config::get('services.razorpay.razorpay_key_id'), Config::get('services.razorpay.razorpay_secret'));
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
        $discount = 0;
        if($request->discount_coupon_id){
            $discount = (($request->amount??0)*DiscountCoupon::where('id', $request->discount_coupon_id)->first('discount')->discount??0)/100;
        }
        $order = $this->api->order->create(array('amount' => $amount*100, 'currency' => 'INR'));
        $orderId = $order->id??'';
        $status = $order->status??'';
        $amount = $order->amount??'';
        if($order->id){

        }
        else{
            return $this->sendError("Something went wrong!");
        }

    }

    public function chequeRecord(ChequePaymentRequest $request){
        try{
            $cheque_record = Payment::create([
                'cheque_bank_name' => $request->bank_name??'',
                'date_of_issue' => $request->date_of_issue??'',
                'ifsc_code' => $request->ifsc_code??'',
                'cheque_number' => $request->cheque_number??'',
                'amount' => $request->amount??0,
                'total_amount' => $request->amount??0,
                'total_tour_price' => $request->tour_price??0,
                'tour_id' => $request->tour_id??null,
                'school_id' => $request->school_id??null,
                'status' => 'pending',
                'customer_type' => 'GBI Member',
                'payment_by_user_id' => 196,
                'payment_mode'=>'cheque', 
                'payment_by'=>$request->payment_by??null, 
            ]);
            if($cheque_record){
                return response()->json(['Message'=> 'Cheque record added']);            
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
            $cash_record = Payment::create([
                'amount' => $request->amount??0,
                'total_amount' => $request->amount??0,
                'total_tour_price' => $request->tour_price??0,
                'tour_id' => $request->tour_id??null,
                'school_id' => $request->school_id??null,
                'status' => 'success',
                'customer_type' => 'GBI Member',
                'payment_by_user_id' => 196,
                'payment_mode'=>'cash', 
                'payment_by'=>$request->payment_by??null, 
            ]);
            if($cash_record){
                if ($request->hasFile('doc_proof')) {
                    $doc_proof = $request->doc_proof;
                    $doc_proof_name = time().'-'.$doc_proof->getClientOriginalName();
                    $path = config('gbi.doc_proof') . $doc_proof_name;
                    \Storage::disk('s3')->put($path, file_get_contents($doc_proof));
                    $cash_record->doc_proof = $doc_proof_name;
                    $cash_record->save();
                }
                return response()->json(['Message'=> 'Check record added']);            
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
        
    }
}






