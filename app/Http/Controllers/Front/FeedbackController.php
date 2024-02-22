<?php
namespace App\Http\Controllers\Front;
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
class FeedbackController extends Controller
{
   
    /* Store a new Fedback. */
    public function store(Request $request)
    {

        //Checking if user exists
        $info = Information::where('phone_no',$request->ph_no)->first();
        
        if($info){
            $user = User::findOrFail($info->user_id);
        }
        
        
        if($info === null){

            $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyz@#%^&*()-';
            $pass = substr(str_shuffle($permitted_chars), 0, 15);

            $user = new User;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($pass);
            $user->user_role = '2';
            $user->save();

            $user_info = new Information;
            $user_info->user_id = $user->id;
            $user_info->phone_no = $request->ph_no;
            $user_info->save();

            $user->password = $pass;
            Mail::send(new AccountRegistered($user));
        }

        $this->validate($request, [
            'tour_id'=>'required',
            'trip_itenerary'=>'required',
            'place_of_stay'=>'required',
            'food_quality'=>'required',
            'transport_arrangements'=>'required',
            'recommend_to_others'=>'required',
            'travel_again'=>'required',
            'escort_hospitality'=>'required',
            'comments'=>''
        ]);

        $feedback = new Feedback;
        $feedback->user_id = $user->id;
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
        Mail::send(new FeedbackReceived($user));

        return response()->json('Feedback Submitted');
    }
     /* Fetch Fedback list. */
    public function list()
    {
        return FeedbackResource::collection(Feedback::orderBy('created_at', 'desc')->where('public', 1)->get());
    }

}
