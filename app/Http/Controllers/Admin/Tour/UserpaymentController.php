<?php

namespace App\Http\Controllers\Admin\Tour;

use App\Http\Requests\Payment\PaymentGatewayRequest;
use App\Http\Requests\Payment\ChequePaymentRequest;
use App\Http\Requests\Payment\PaymentOrderRequest;
use App\Http\Requests\Payment\CashPaymentRequest;
use App\Http\Controllers\API\BaseController;
use Illuminate\Support\Facades\Config;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Payment;
use Razorpay\Api\Api;
use Carbon\Carbon;

class UserpaymentController extends BaseController
{
    protected $api;
    //Constructor 
    protected function __construct() {
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
    public function makeOrder(PaymentOrderRequest $request){
        $discount = 0;
        if($request->discount_coupon_id){
            $discount = (($request->amount??0)*DiscountCoupon::where('id', $request->discount_coupon_id)->first('discount')->discount??0)/100;
        }

        $amount = ($request->amount??0)-$discount;
    }
}




