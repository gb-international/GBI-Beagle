<?php
namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Softon\Indipay\Facades\Indipay; 
use App\Model\Tour\Tour;
use App\Model\Tour\TourUser;
use App\Model\Tour\Trackpayment;
use App\Model\Tour\Userpayment;
use App\User;
use App\Helpers\SendSms;
use App\Helpers\Crypto;
use App\Jobs\PaymentSuccessJob;
use App\Model\School\Groupmember;

class FrontPaymentController extends Controller
{
  public $form;
  public function test(Request $request){
    //$requests = $request->all();
    //unset($requests['token']);
    //$requests['user_id'] = 2;
    
    $internet_charge = ceil((($request->tour_price/0.9646)*3.54)/100);// internet charge
    $amount = $request->tour_price + $internet_charge;

    $track = Trackpayment::create([
      'user_id'=>$request->user_id,
      'travel_code'=>$request->travel_code,
      'tour_id'=>$request->tour_id,
      'school_id'=>$request->school_id,
      'company_id'=>$request->company_id,
      'amount'=>(int)$amount,
      "billing_name" => $request->billing_name,
      "billing_address" => $request->billing_address,
      "billing_city" =>  $request->billing_city,
      "billing_state" => $request->billing_state,
      "billing_country" => $request->billing_country,
      "billing_zip" =>  $request->billing_zip,
      "billing_tel" =>  $request->billing_tel,
      "billing_email" => $request->billing_email,
      "delivery_name" => $request->delivery_name,
      "delivery_address" => $request->delivery_address,
      "delivery_city" => $request->delivery_city,
      "delivery_state" => $request->delivery_state,
      "delivery_country" => $request->delivery_country,
      "delivery_zip" => $request->delivery_zip,
      "delivery_tel" => $request->delivery_tel,
      "delivery_email" => $request->delivery_email
    ]);

   /* $parameters = [
      'tid' => rand(11,999),
      'order_id' => $track->id,
      'amount' => (int)$amount,
    ];*/

    $data = [
        'order_id' => $track->id,
        'amount' => $amount
    ];

    $this->paymentData($request, $data);
    $order = Indipay::prepare($this->form);
    return Indipay::process($order);
    //return $result;
  }

  public function payment(Request $request){ 

    $check = Userpayment::where(['user_id'=>$request->user_id,'tour_code'=>$request->tour_id])->first();
    if($check){
      header("Location: /payment-cancel");
      dd();
    }    
    $data = Tour::where('travel_code',$request->travel_code)->first();
    $user = User::where('id',$request->user_id)->first();
    // add gst and internet charge amount here
    $amount = $data->tour_price;
    if($user->is_incharge =='1'){
      $tour_user = TourUser::where('travel_code',$request->travel_code)
        ->select('is_paid')
        ->groupBy('is_paid')
        ->selectRaw('count(*) as total, is_paid')
        ->get();
        if($tour_user){
          $amount = $data->tour_price * $tour_user[1]->total;
        }else{
          header("Location: /payment-cancel");
          dd();
        }
    }

    $internet_charge = ceil((($amount/0.9646)*3.54)/100);// internet charge
    $amount = $amount + $internet_charge;
    $track = Trackpayment::create([
      'user_id'=>$request->user_id,
      'travel_code'=>$request->travel_code,
      'tour_id'=>$request->tour_id,
      'school_id'=>$request->entity_id,
      'amount'=>(int)$amount,
    ]);

    $form_data['order_id'] = $track->id;
    $form_data['amount'] = (int)$amount;
    $this->paymentData($request,$form_data);
    $order = Indipay::prepare($this->form);
    $result = Indipay::process($order);
    return $result;
  }
  
  public function cancel(Request $request){
    $track = Trackpayment::where('id',(int)$request->orderNo)->first();
    $track->delete();
    header("Location: /payment-cancel");
    dd($track);
  }

  public function response(Request $request){
    $response = Indipay::response($request);
    if($response['order_status'] == 'Success'){
      $track = Trackpayment::where('id',$response['order_id'])->first();
      $user = User::where('id',$track->user_id)->first();
      $data = [
        'user_id' => $track->user_id,
        'school_id'=>$track->school_id,
        'tour_code' => $track->tour_id,
        'payment_mode' => 'self',
        'payment_type'=>'net',
        'amount' => $track->amount,
        'status' => strtolower($response['order_status']),
        'payment_data' => json_encode($response),
      ];
      //Update Group Payment Status
      if($track->payment_mode == 'self'){
          $group = Groupmember::whereIn('tour_id', [$track->tour_id])
                    ->update(['payment_status' => $response['order_status']]);
      } else if ($track->payment_mode == 'student'){
        
          /*$group = Groupmember::where(['user_id', $user->id, 'tour_id', $track->tour_id])->first();

        if($group){
          $group->update(['payment_status' => $response['order_status']]);
        } else {
          Groupmember::where(['email', $user->email, 'tour_id', $track->tour_id])->update(['payment_status' => $response['order_status']]);
        }*/
        Groupmember::where(['email', $user->email, 'tour_id', $track->tour_id])->update(['payment_status' => $response['order_status']]);
      }
      if($user->is_incharge == '1'){
        Userpayment::create($data);
      }else{
        $touruser = TourUser::where(['tour_code'=>$track->tour_id,'user_id'=>$user->id])
                      ->first();
        $touruser->update($data);
      }
      $user=['name'=>$response['billing_name'],'phone_no'=>$response['billing_tel']];
      //$sendsms = new SendSms;
      //$sendsms->successPaymentSMS($user);
      //$email_data['emailto'] = $response['billing_email'];
      // pass data to send the email here ($user is just dummy)
      $notifData = [
        'category' => 'payments',
        'category_id' => $track->id,
        'userId' => $track->user_id,
        'name' => $response['billing_name'],
        'phone_no' => $response['billing_tel'],
        'emailto' => $response['billing_email'],
      ];
      event(new \App\Events\SendNotification(['title' => 'Your Payment was successful.']));
      PaymentSuccessJob::dispatch($notifData);
      $track->delete();
      header("Location:/tour-list");
      dd($response);
    }else{
      header("Location: /payment-cancel");
      dd();
    }
  }
  public function paymentData($request,$data){
    $this->form = [
      'tid' => rand(11,999),
      'order_id'=>$data['order_id'],
      'merchant_id' => 206523,
      'amount' => $data['amount'],
      "billing_name" => $request->billing_name,
      "billing_address" => $request->billing_address,
      "billing_city" =>  $request->billing_city,
      "billing_state" => $request->billing_state,
      "billing_country" => $request->billing_country,
      "billing_zip" =>  $request->billing_zip,
      "billing_tel" =>  $request->billing_tel,
      "billing_email" => $request->billing_email,
      "delivery_name" => $request->delivery_name,
      "delivery_address" => $request->delivery_address,
      "delivery_city" => $request->delivery_city,
      "delivery_state" => $request->delivery_state,
      "delivery_country" => $request->delivery_country,
      "delivery_zip" => $request->delivery_zip,
      "delivery_tel" => $request->delivery_tel,
      "delivery_email" => $request->delivery_email
    ];
  }

  public function viewPaymentDeails(Request $data){

    $tour_price = Tour::where('tour_id', $data->tour_id)->pluck('tour_price');

    if($data->payment_mode == 'student'){
        $payment = Userpayment::where('user_id', $data->user_id)->where('tour_code', $data->tour_id)->first();
    } else {
        $payment = Userpayment::where('school_id', $data->school_id)->where('tour_code', $data->tour_id)->first();
    }
    if($payment){
      $payment->base_price = $tour_price[0];
      $payment->payment_data = json_decode($payment->payment_data);
      return response()->json($payment);
    } else {
      return response()->json(array(
                    'code'      =>  404,
                    'message'   =>  'No Payment Data'
                ), 404);
    }
    
  }
}
