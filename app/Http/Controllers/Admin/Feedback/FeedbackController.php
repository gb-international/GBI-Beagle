<?php

/* ************************************************
      Author: Manas
      **************************************************** */
/* Purpose: To control/manage feedback form APIs */

namespace App\Http\Controllers\Admin\Feedback;

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

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource (sorted New to Old).
     */
    public function index()
    {    

        $feedbacks = Feedback::orderBy('updated_at', 'desc')->paginate(5);
        return FeedbackResource::collection($feedbacks);

    }

    /**
     * Display a listing of the resource (sorted Old to New).
     */

    public function indexOld()
    {    

        $feedbacks = Feedback::orderBy('updated_at')->paginate(5);
        return FeedbackResource::collection($feedbacks);

    }

    /**
     * Post feedback to the website.
     */

    public function postComment(Request $request)
    {    

        $feedback = Feedback::find($request->id);
        $feedback->public = 1;
        $feedback->save();
        return FeedbackResource($feedback);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Send the feedback form link to the user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function sendLink(Request $request)
    { 

        $this->validate($request, [
            'tour_id'=>'required',
            'email'=>'required',
            'ph_no'=>'required',
        ]);
        
       $user = null;

       if($request->email){
         $user = User::where('email',$request->email)->first();
       }

       if($user !== null){
        $shLink = new ShortenLink;
        $link = env('APP_URL').'/sh/'.$shLink->shorten('feedback-form/'.$request->tour_id);

        Mail::send(new SendFeedbackLink($user, $link));

        $sendsms = new SendSms;
        $sendsms->feedbackLink($request->ph_no, $link, $user->name);

        return response()->json($link);
       }
      
       if($user === null){
        $shLink = new ShortenLink;
        $link = env('APP_URL').'/sh/'.$shLink->shorten('feedback-link/'.$request->tour_id);
        
        if($request->email){
         Mail::send(new SendFeedbackLinkNonUsers($request->email, $link));
        }

        $sendsms = new SendSms;
        $sendsms->feedbackLink($request->ph_no, $link, 'Customer');

        return response()->json($link);
       }
    }

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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      $data = Feedback::where('id',$id)->first();
      return response()->json($data);
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
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
