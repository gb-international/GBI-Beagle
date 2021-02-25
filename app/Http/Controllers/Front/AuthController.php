<?php
/* 
Created by : Ajay yadav 
Purpose : Manage front user login and register 

*/
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\User;
use App\Model\User\Information;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use App\Model\School\School;
use Illuminate\Support\Facades\Auth;
use Validator;
use DB;
use Image;
use GuzzleHttp\Client;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use App\Helpers\SendSms;
use App\Jobs\ChangePasswordJob;
use App\Rules\EmailValidate;


class AuthController extends Controller{

    public function login(Request $request){ 
        
        
        // Check if a user with the specified email exists
        $user = User::whereEmail($request->email)->first();
        if (!$user) {
            return response()->json([
                'message' => 'Wrong email or password',
                'status' => 422
            ], 422);
        }
        
        
        
        // If a user with the email was found - check if the specified password
        
        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Wrong email or password',
                'status' => 422
            ], 422);
        }
        
        
        // Send an internal API request to get an access token
        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();
        
        // Make sure a Password Client exists in the DB
        if (!$client) {
            return response()->json([
                'message' => 'Laravel Passport is not setup properly.',
                'status' => 500
            ], 500);
        }
        
        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $request->email,
            'password' => $request->password,
        ];
   

        $request = Request::create('/oauth/token', 'POST', $data);
        
        $response = app()->handle($request);
        // Check if the request was successful
        if ($response->getStatusCode() != 200) {
            return response()->json([
                'message' => 'Wrong email or password',
                'status' => 422
            ], 422);
        }

        // Get the data from the response
        $data = json_decode($response->getContent());
        $userData = [
            'name'=>$user->name,
            'email'=>$user->email,
            'photo'=>$user->information->photo,
            'phone_no'=>$user->information->phone_no,
            'father_name'=>$user->information->father_name,
            'user_profession'=>$user->information->user_profession,
            'city'=>$user->information->city,
            'state'=>$user->information->state,
            'country'=>$user->information->country,
            'status'=>$user->status,
            'is_incharge'=>$user->is_incharge,
            'school_id'=>$user->information->school_id,
            'change_password' => $user->information->change_password
        ];
        // Format the final response in a desirable format
        return response()->json([
            'token' => $data->access_token,
            'refresh_token' => $data->refresh_token,
            'user' => $userData,
            'status' => 200
        ]);
    }
    /** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function register(Request $request) 
    { 
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => ['required','email',new EmailValidate],
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input);

        // Add more information to the informations table
        $more  = new Information();
        $more->user_id = $user->id;
        $more->gbi_link = $request->gbi_link;
        $more->phone_no = $request->phone_no;
        $more->otp = $request->otp;
        $more->varified = '1';
        $more->photo = 'user.png';
        $more->gender = '';
        $more->save();
        $sendsms = new SendSms; // send welcome sms
        $sendsms->signUpSMS($request->phone_no,$user);
        return response()->json('Successfully Registered !!!');
    }

    public function logout(Request $request){

        $accessToken = auth()->user()->token();
        Auth::user()->tokens->each(function($token,$key){
            $token->delete();
        });

        $refreshToken = DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        $accessToken->revoke();

        return response()->json('Logged out successfully');
    }

    public function refresh(Request $request){

        $client = DB::table('oauth_clients')
                    ->where('password_client',true)
                    ->first();
        $data = [
            'grant_type' => 'refresh_token',
            'refresh_token' => $request->refresh_token,
            'client_id' => $client->id,
            'client_secret' =>  $client->secret,
            'scope' => '',
        ];

        $request = Request::create('/oauth/token', 'POST', $data);
        $response = app()->handle($request);

        // Check if the request was successful
        if ($response->getStatusCode() != 200) {
            return response()->json([
                'message' => 'Try again',
                'status' => 422
            ], 422);
        }

        // Get the data from the response
        $data = json_decode($response->getContent());
        
        return response()->json([
            'token' => $data->access_token,
            'refresh_token' => $data->refresh_token,
            'user' => '',
            'status' => 200
        ]);
    }
}
