<?php

/* ************************************************
      Author: Manas
      **************************************************** */
/* Purpose: To control/manage Payment Link APIs */

namespace App\Http\Controllers\Admin\Payment;

use App\Mail\SendPaymentLink;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Model\User\Information;
use App\Rules\EmailValidate;
use Illuminate\Http\Request;
use App\Model\Tour\Tour;
use App\Helpers\SendSms;
use App\User;

class PaymentLinkController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function sendLink(Request $request)
    { 

        $this->validate($request, [
            'tour_id'=>'required',
            'email'=>'required',
            'amount'=>'required',
        ]);

        $name = 'Customer';
        $user = User::where('email',$request->email)->first();
        if($user){
          $name = $user->name;
        }
        $link = env('APP_URL').'/payment-link/'.$request->tour_id.'/'.$request->amount;
        Mail::send(new SendPaymentLink($request->email, $link, $name));
        $sendsms = new SendSms;
        $sendsms->paymentLink($request->ph_no, $link, $name);
        return response()->json($link);
    }
}
