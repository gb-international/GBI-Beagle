<?php
/*
Edited by : Rahul Rawat store function
Purpose : Manage store function and validation  
*/
namespace App\Http\Controllers\Front;

use App\Model\School\EducationInstitute as EduInstitute;
use App\Http\Requests\Front\FeedbackRequest;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Resources\FeedbackResource;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use App\Rules\PhoneNubmerValidate;
use App\Model\Feedback\Feedback;
use App\Model\User\Information;
use App\Mail\AccountRegistered;
use App\Mail\FeedbackReceived;
use App\Rules\EmailValidate;
use Illuminate\Http\Request;
use App\Model\Tour\Tour;
use App\Helpers\SendSms;
use App\User;
use Auth;

class FeedbackController extends BaseController
{
   
    /* Store a new Fedback. */
    public function store(FeedbackRequest $request)
    {
        // $this->validate($request, [
        //     'tour_id'=>'required',
        //     'trip_itenerary'=>'required',
        //     'place_of_stay'=>'required',
        //     'food_quality'=>'required',
        //     'transport_arrangements'=>'required',
        //     'recommend_to_others'=>'required',
        //     'travel_again'=>'required',
        //     'escort_hospitality'=>'required',
        //     'comments'=>''
        // ]);
        $user_type = $this->user_category($request->user_type??'');
        //Checking if user exists
        $edu_institute = EduInstitute::where('email',$request->email)->first();

        if($edu_institute === null){
            $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyz@#%^&*()-';
            $pass = substr(str_shuffle($permitted_chars), 0, 15);

            $edu_institute = new EduInstitute;
            $edu_institute->name = $request->name??'';
            $edu_institute->email = $request->email??'';
            $edu_institute->password = bcrypt($pass);
            $edu_institute->phone_no = $request->ph_no;
            $edu_institute->save();
            $edu_institute->password = $pass;
            Mail::send(new AccountRegistered($edu_institute));
        }

        $feedback = new Feedback;
        // $feedback->user_id = $user->id;
        $feedback->edu_institute_id = $edu_institute->id;
        $feedback->tour_id = $request->tour_id;
        $feedback->trip_itenerary = $request->trip_itenerary;
        $feedback->place_of_stay = $request->place_of_stay;
        $feedback->food_quality = $request->food_quality;
        $feedback->transport_arrangements = $request->transport_arrangements;
        $feedback->recommend_to_others = $request->recommend_to_others;
        $feedback->travel_again = $request->travel_again;
        $feedback->escort_hospitality = $request->escort_hospitality;
        $feedback->comments = $request->comments;

        $feedback->save();
        Mail::send(new FeedbackReceived($edu_institute));

        return response()->json('Feedback Submitted');
    }
     /* Fetch Fedback list. */
    public function list()
    {
        return FeedbackResource::collection(Feedback::orderBy('created_at', 'desc')->where('public', 1)->get());
    }

}
