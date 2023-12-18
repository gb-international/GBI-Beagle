<?php
/* 
Created by : Manas
Edited by : Rahul
Purpose : Login & register using guard
*/
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\Otp;
use App\Model\User\Information;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use App\Model\School\School;
// use Illuminate\Support\Facades\Auth;
use Auth;
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
use App\CompanyUser;
use App\FamilyUser;
use App\User;

class AuthController extends Controller{
    
/**
    * @OA\Post(
    * path="/login-user",
    * operationId="Login",
    * tags={"Login"},
    * summary="User Login",
    * description="Login User Here",
    *     @OA\RequestBody(
    *         @OA\JsonContent(),
    *         @OA\MediaType(
    *            mediaType="multipart/form-data",
    *            @OA\Schema(
    *               type="object",
    *               required={"email", "password"},
    *               @OA\Property(property="email", type="email"),
    *               @OA\Property(property="password", type="password")
    *            ),
    *        ),
    *    ),
    *      @OA\Response(
    *          response=200,
    *          description="Login Successfully",
    *          @OA\JsonContent()
    *       ),
    *      @OA\Response(
    *          response=422,
    *          description="Unprocessable Entity",
    *          @OA\JsonContent()
    *       ),
    *      @OA\Response(response=400, description="Bad request"),
    *      @OA\Response(response=404, description="Resource Not Found"),
    * )
    */
    public function login(Request $request){
        $validator = Validator::make($request->all(), [ 
            'email' => ['required','email',new EmailValidate],
            'password' => 'required',
            'login_type' =>  'required|in:user,school,company,family'
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];
        if($request->login_type == 'school'){
            if (Auth::guard('school')->attempt($credentials)) {
                config(['auth.guards.school-api.provider' => 'school']);
                $token = Auth::guard('school')->user()->createToken('MyToken',['school'])->accessToken;                
                return response()->json(['token' => $token, 'user'=>Auth::guard('school')->user()], 200);
            }
            else {
                return response()->json(['error' => 'UnAuthorised'], 401);
            }
        }
        if($request->login_type == 'user'){
            if(Auth::guard('user')->attempt($credentials)) {
                config(['auth.guards.user-api.provider' => 'users']);
                $token = Auth::guard('user')->user()->createToken('MyToken',['user'])->accessToken;                
                return response()->json(['token' => $token, 'user'=>Auth::guard('user')->user()], 200);
            }
            else {
                return response()->json(['error' => 'UnAuthorised'], 401);
            }
        }
        if($request->login_type == 'company'){
            if(Auth::guard('company')->attempt($credentials)) {
                config(['auth.guards.company-api.provider' => 'companys']);
                $token = Auth::guard('company')->user()->createToken('MyToken',['company'])->accessToken;                
                return response()->json(['token' => $token, 'company'=>Auth::guard('company')->user()], 200);
            }
            else {
                return response()->json(['error' => 'UnAuthorised'], 401);
            }
        }
        if($request->login_type == 'family'){
            if(Auth::guard('family')->attempt($credentials)) {
                config(['auth.guards.family-api.provider' => 'familys']);
                $token = Auth::guard('family')->user()->createToken('MyToken',['family'])->accessToken;                
                return response()->json(['token'=>$token, 'family'=>Auth::guard('family')->user()], 200);
            }
            else {
                return response()->json(['error' => 'UnAuthorised'], 401);
            }
        }
    }

    /** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 

    /**
    * @OA\Post(
    * path="/register-user",
    * operationId="Register",
    * tags={"Register"},
    * summary="User Register",
    * description="User Register here",
    *     @OA\RequestBody(
    *         @OA\JsonContent(),
    *         @OA\MediaType(
    *            mediaType="multipart/form-data",
    *            @OA\Schema(
    *               type="object",
    *               required={"name", "email", "password", "c_password"},
    *               @OA\Property(property="name", type="text"),
    *               @OA\Property(property="email", type="text"),
    *               @OA\Property(property="password", type="password"),
    *               @OA\Property(property="c_password", type="password")
    *            ),
    *        ),
    *    ),
    *      @OA\Response(
    *          response=201,
    *          description="Successfully Registered !!!",
    *          @OA\JsonContent()
    *       ),
    *      @OA\Response(
    *          response=200,
    *          description="Successfully Registered !!!",
    *          @OA\JsonContent()
    *       ),
    *      @OA\Response(
    *          response=422,
    *          description="Unprocessable Entity",
    *          @OA\JsonContent()
    *       ),
    *      @OA\Response(response=400, description="Bad request"),
    *      @OA\Response(response=404, description="Resource Not Found"),
    * )
    */

    public function register(Request $request) 
    { 
        $validator = Validator::make($request->all(), [ 
            'client_type' =>  'required|in:family,company,school',
            'name' => 'required',  
            'email' => ['required_if:client_type,school', 'email',new EmailValidate, 'unique:edu_institutes,email'],
            'company_email' => ['required_if:client_type,company', 'email',new EmailValidate, 'unique:company_users,email'],
            'family_email' => ['required_if:client_type,family', 'email',new EmailValidate, 'unique:family_users,email'],
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);
       
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }
        if($request->client_type == "family"){
            $family_user = new FamilyUser();
            $family_user->name = $request->name??null;
            $family_user->email = $request->family_email??null;
            $family_user->password = bcrypt($request->password);
            $family_user->varified = '1';
            $family_user->photo = 'user.png';
            $family_user->gender = '';
            $family_user->save();
            $sendsms = new SendSms; // send welcome sms
            $sendsms->signUpSMS($request->phone_no, $family_user);
        }
        else if($request->client_type == "school"){
            $eduInstitute = new EduInstitute();
            $eduInstitute->name = $request->name??null;
            $eduInstitute->email = $request->email??null;
            $eduInstitute->password = bcrypt($request->password);
            $eduInstitute->varified = '1';
            $eduInstitute->photo = 'user.png';
            $eduInstitute->gender = '';
            $eduInstitute->save();
            $sendsms = new SendSms; // send welcome sms
            $sendsms->signUpSMS($request->phone_no,$eduInstitute);
        }
        else if($request->client_type == "company"){
            $company_user = new CompanyUser();
            $company_user->name = $request->name??null;
            $company_user->email = $request->company_email??null;
            $company_user->password = bcrypt($request->password);
            $company_user->varified = '1';
            $company_user->photo = 'user.png';
            $company_user->gender = '';
            $company_user->save();
            $sendsms = new SendSms; // send welcome sms
            $sendsms->signUpSMS($request->phone_no,$company_user);
        }
        return response()->json('Successfully Registered !!!');
    }
    
    
    public function logout(Request $request){
        $user_type = $this->user_category($request->user_type??'');
        $accessToken = Auth::guard($user_type)->user()->token();
        \DB::table('oauth_refresh_tokens')
        ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);
            
            $accessToken->revoke();
        // return $user_type;
        // $accessToken = auth()->user()->token();
        // Auth::user()->tokens->each(function($token,$key){
        //     $token->delete();
        // });

        // $refreshToken = DB::table('oauth_refresh_tokens')
        //     ->where('access_token_id', $accessToken->id)
        //     ->update([
        //         'revoked' => true
        //     ]);

        // $accessToken->revoke();

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
