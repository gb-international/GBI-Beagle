<?php
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\User;
use App\Otp;
use App\Model\User\Information;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use App\Model\School\School;
use Illuminate\Support\Facades\Auth;
// use Auth;
use Validator;
use DB;
use Image;
use GuzzleHttp\Client;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use App\Helpers\SendSms;
use App\Jobs\ChangePasswordJob;
use App\Rules\EmailValidate;
use App\Model\User\Subscriber;
use App\Model\Notification\Notifier;
use App\Model\School\EducationInstitute as EduInstitute;

class AuthController extends Controller{

    public function login(Request $request){ 
        // dd($request->segments(2));
        // exit;
        // Check if a user with the specified number exists
        $edu_institute = EduInstitute::where('phone_no', $request->phone_no)->first();
        if (!$edu_institute) {
            return response()->json([
                'message' => 'Invalid phone number',
                'status' => 422
            ], 422);
        }

        // Check if otp is valid
        $otpVerify = Otp::where('otp_send', $request->otp)->where('phone_no', $request->phone_no)->first();
        if (!$otpVerify) {
            return response()->json([
                'message' => 'Invalid OTP',
                'status' => 422
            ], 422);
        }
        
        // // Retrieve user data
        // $user = EduInstitute::findOrFail($edu_institute->id);
        // if (!$user) {
        //     return response()->json([
        //         'message' => 'Invalid user',
        //         'status' => 422
        //     ], 422);
        // }

        // if ($user->user_type == 'GBI Member') {
        //     return response()->json([
        //         'message' => 'You are not allowed to login!!',
        //         'sta tus' => 422
        //     ], 422);
        // }

        
        // If a user with the email was found - check if the specified password
        
       /* if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Wrong email or password',
                'status' => 422
            ], 422);
        } 

        // If a user with the email was found after otp validation then login user

        if ($request->phone_no != $user->information->phone_no) {
            return response()->json([
                'message' => 'Wrong email or phone number',
                'status' => 422
            ], 422);
        } */
        
        
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
        try {
            $authGuard = Auth::guard('edu_institutes_api');
            if(!$authGuard->attempt(['email' => $edu_institute->email, 'password' => $edu_institute->email])){
                $data = 'Invalid Login Credentials';
                $code = 401;
            } else {
                $user = $authGuard->user();
                $token = $user->createToken('user')->accessToken;
                $code = 200;
                $data = [
                    'user' => $user,
                    'token' => $token,
                ];
            }
        } catch (Exception $e) {
            $data = ['error' => $e->getMessage()];
        }
        return response()->json($data, $code);
        // return(Auth::guard('edu_institutes')->user());
        // exit;
        // return Auth::guard()->getName();
        // $guardName =Auth::guard('edu_institutes')->getName();
        if(Auth()->guard('edu_institutes_api')->attempt(['email' => $edu_institute->email, 'password' => $edu_institute->email])){
        // if(Auth::guard('education')->attempt()){
            return "Yes";

        }
        else{
            return "No";
        }
        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $edu_institute->email,
            'password' => $edu_institute->password,
            // 'provider' => 'education_institute',
            'scope' => 'edu_institutes',
        ];

        $request = Request::create('/oauth/token', 'POST', $data);
        
        $response = app()->handle($request);
        return $response->getStatusCode();
        // Check if the request was successful
        if ($response->getStatusCode() != 200) {
            return response()->json([
                'message' => 'Wrong details, please try again',
                //'response' => $response,
                'status' => 422
            ], 422);
        }

        // $sub_id = null;
        // $sub = Subscriber::where('user_id', $user->id)->first();
        // if($sub){
        //     $sub_id = $sub->id;
        // }

        // Get the data from the response
        $data = json_decode($response->getContent());
        // $userData = [
        //     'id' => $user->id,
        //     'name'=>$user->name,
        //     'email'=>$user->email,
        //     'photo'=>$user->information->photo,
        //     'phone_no'=>$user->information->phone_no,
        //     'father_name'=>$user->information->father_name,
        //     'user_profession'=>$user->information->user_profession,
        //     'city'=>$user->information->city,
        //     'state'=>$user->information->state,
        //     'country'=>$user->information->country,
        //     'status'=>$user->status,
        //     'is_incharge'=>$user->is_incharge,
        //     'school_id'=>$user->information->school_id,
        //     'company_id'=>$user->information->company_id,
        //     'client_type'=>$user->information->client_type,
        //     'change_password' => $user->information->change_password,
        //     'subscription_id' => $sub_id
        // ];
        // Format the final response in a desirable format
        return response()->json([
            'token' => $data->access_token,
            'refresh_token' => $data->refresh_token,
            'edu_institute' => $edu_institute,
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
        // if($request->email != 'csrikhi@gbinternational.in'){
            $validator = Validator::make($request->all(), [ 
                'name' => 'required', 
                'email' => ['required','email',new EmailValidate, 'unique:edu_institutes,email'],
                'password' => 'required', 
                'c_password' => 'required|same:password', 
            ]);
        // } else {
            // $validator = Validator::make($request->all(), [ 
            //     'name' => 'required', 
            //     'password' => 'required', 
            //     'c_password' => 'required|same:password', 
            // ]);
        // }
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']??''); 
        $eduInstitute = EduInstitute::create($input);
        $eduInstitute->varified = '1';
        $eduInstitute->photo = 'user.png';
        $eduInstitute->gender = '';
        $eduInstitute->save();
        $sendsms = new SendSms; // send welcome sms
        $sendsms->signUpSMS($request->phone_no,$eduInstitute);
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
