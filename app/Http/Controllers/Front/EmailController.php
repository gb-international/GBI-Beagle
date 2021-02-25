<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Email 

*/
namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;
use App\Jobs\SendEmailJob;
use Mail;

class EmailController extends Controller
{
    // Send Link to users email account and create a session for that link
    public function send_link_email(Request $request){
        $email = $request->email_link;
        $user_data = User::where('email',$email)->first();

        if($user_data){
            // send email
            $key = bin2hex(random_bytes(24));
            $time = Carbon::now()->toDateTimeString();
            $user_data->reset_link = $key;
            $user_data->link_time = $time;
            $user_data->save();
            $link = url('/').'/reset/'.$key;
            $data = ['name'=>$user_data->name,'email'=>$email,'link'=>$link,'valid'=>'1 hour'];
            
            SendEmailJob::dispatch($data);

            return response()->json(['success','send mail successfully']);
        }else{
            return response()->json(['error', 'Incorrect Email Detail']);
        }
    }

    public function reset_email_password($link){
        $user = ['message' => 'Link is not valid anymore !!!','email'=>''];
        if($data = User::where('reset_link',$link)->first()){
            $now = Carbon::now()->toDateTimeString();
            $startTime = Carbon::parse($data->link_time);
            $finishTime = Carbon::parse($now);
            $totalDuration = $finishTime->diffInSeconds($startTime);
            if($totalDuration <= 3600){// vlaid for 1 hours
                // valid link
                $user = [];
                $user = ['email' => $data->email,'link'=>$link];
                return view('front.reset-password')->with('user',$user);
            }else{
                return view('front.reset-password')->with('user',$user);
            }
        }else{
            return view('front.reset-password')->with('user',$user);
        }
    }

    public function submit_password(Request $request){
        $this->validate(request(), [
         'password' => 'required|confirmed'
        ]);
        $user = User::where('email',$request->email)->first();
        $now = Carbon::now()->toDateTimeString();
        $startTime = Carbon::parse($user->link_time);
        $finishTime = Carbon::parse($now);
        $totalDuration = $finishTime->diffInSeconds($startTime);
        if($totalDuration <= 3600){// vlaid for 1 hours
            $user->password = bcrypt($request->password);
            $user->save();
            return view('front.password-status',['success'=>'Password Updated']);
        }else{
            return view('front.password-status',['error'=>'Try Again Later !!!!!']);
        }
    }
}
