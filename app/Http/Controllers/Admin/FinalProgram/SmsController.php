<?php

/* ************************************************
      Author: Manas
      **************************************************** */
/* Purpose: To control/manage sms form APIs */

namespace App\Http\Controllers\Admin\FinalProgram;

use App\Http\Resources\FeedbackResource;
use App\Mail\SendFeedbackLinkNonUsers;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Rules\PhoneNubmerValidate;
use App\Model\Feedback\Feedback;
use App\Model\User\Information;
use App\Mail\SendFeedbackLink;
use App\Rules\EmailValidate;
use Illuminate\Http\Request;
use App\Helpers\ShortenLink;
use App\Model\Tour\Tour;
use App\Helpers\SendSms;
use App\User;

class SmsController extends Controller
{
    public function sendSms(Request $request)
    {
        $this->validate($request, [
            //'message'=>'required',
            'ph_no'=>'required',
            'it_name'=>'required',
            'start_date'=>'required',
            'link'=>'required',
        ]);

        $phArray = explode(',', $request->ph_no);

        foreach($phArray as $ph_no){
            $sendsms = new SendSms;
            $sendsms->finalProgram($ph_no, $request->it_name, $request->start_date, $request->link);
        }
        return response()->json(['message'=>'SMS Successfully Sent']);
    }
}
