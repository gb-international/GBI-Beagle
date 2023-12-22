<?php
/* 
Created by : Ajay yadav 
Edited by : Rahul Rawat update function
Purpose : Manage front user login and register  
*/
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\User;
use Illuminate\Validation\Rule; //import Rule class 
use App\Model\User\Information;
use App\Model\User\Subscriber;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use App\Model\User\UserSocial;
use App\Model\School\School;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Rules\PhoneNubmerValidate;
use DB;
use Image;
use GuzzleHttp\Client;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use App\Helpers\SendSms;
use App\Jobs\ChangePasswordJob;
use App\Rules\EmailValidate;
use App\Traits\ImageTrait;
use App\Http\Resources\SocialResource;
use App\Model\Corporate\Company;

class UserController extends Controller{
    public $successStatus = 200;
    private $id = 'csrikhi@gbinternational.in';
    private $pwd = 'Roger224225g32@';
    use ImageTrait;

    /** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(){ 
        
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')->accessToken; 
            $success['status'] = $user->status;
            return response()->json(['success' => $success], $this-> successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
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
            return response()->json(['error'=>$validator->errors()], 422);            
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

        // subscribe for newsletter
        if( !$subscriber = Subscriber::where('email',$user->email)->first()){
            $data['email'] = $user->email;
            $data['user_id'] = $user->id;
            Subscriber::create($data);
        }

        
        $sendsms = new SendSms; // send welcome sms
        $sendsms->signUpSMS($request->phone_no,$user);
        // send email
        WelcomeJob::dispatch($user);
        return response()->json('Successfully Registered !!!');
    }

    public function update($guard_name, Request $request)
    {
        $user = Auth::guard($guard_name."-api")->user();
        $user_id = $user->id??0;
        if($guard_name == "school"){
            $validator = Validator::make($request->all(), [ 
                'name' => 'required',
                'email' => ['required','email',new EmailValidate, Rule::unique('edu_institutes')->ignore($user_id)],
                'phone_no' => ['required','numeric',new PhoneNubmerValidate, Rule::unique('edu_institutes')->ignore($user_id)], 
            ]);
            
            if ($validator->fails()) { 
                return response()->json(['error'=>$validator->errors()], 422);            
            }
            
            // if user is already subscribed
            if($subscriber = Subscriber::where('edu_institute_id',$user_id)->first()){
                $subscriber->status = $request->subscribe??$subscriber->status;
                $subscriber->email = $request->email??$user->email;
                $subscriber->save();           
            }else{            
                if($request->subscribe){
                    $data['email'] = $request->email??$user->email;
                    $data['edu_institutes'] = $user_id;
                    Subscriber::create($data);
                }
            }

            $user->school_id = $request->school_id??$user->school_id;
            $user->profession_name = $request->profession_name??$user->profession_name;
            $user->profession_address = $request->profession_address??$user->profession_address;
            $user->institution_code = $request->institution_code??$user->institution_code; 
            $user->address = $request->address??$user->address;
            $user->admission_year = $request->admission_year??$user->admission_year;
            $user->user_class = $request->user_class??$user->user_class;
        }
        elseif($guard_name == "company"){
            $validator = Validator::make($request->all(), [ 
                'name' => 'required', 
                'email' => ['required','email',new EmailValidate, Rule::unique('company_users')->ignore($user_id)],
                'phone_no' => ['required','numeric',new PhoneNubmerValidate, Rule::unique('company_users')->ignore($user_id)],
            ]);
            
            if ($validator->fails()) { 
                return response()->json(['error'=>$validator->errors()], 422);            
            } 

            // if user is already subscribed
            if($subscriber = Subscriber::where('company_user_id',$user_id)->first()){
                $subscriber->status = $request->subscribe??$subscriber->status;
                $subscriber->email = $request->email??$user->email;
                $subscriber->save();           
            }else{            
                if($request->subscribe){
                    $data['email'] = $request->email??$user->email;
                    $data['company_user_id'] = $user_id;
                    Subscriber::create($data);
                }
            }

            $user->employee_id = $request->employee_id??$user->employee_id;
            $user->company_name = $request->company_name??$user->company_name;
            $user->company_address = $request->company_address??$user->company_address;
            $user->company_code = $request->company_code??$user->company_code; 
            $user->address1 = $request->address1??$user->address1; 
            $user->address2 = $request->address2??$user->address2; 
        }
        elseif($guard_name == "family"){
            $validator = Validator::make($request->all(), [ 
                'name' => 'required', 
                'email' => ['required','email',new EmailValidate, Rule::unique('family_users')->ignore($user_id)],
                'phone_no' => ['required','numeric',new PhoneNubmerValidate, Rule::unique('family_users')->ignore($user_id)],
            ]);
            
            if ($validator->fails()) { 
                return response()->json(['error'=>$validator->errors()], 422);            
            }
            $user->address1 = $request->address1??$user->address1; 
            $user->address2 = $request->address2??$user->address2; 
            // if user is already subscribed
            if($subscriber = Subscriber::where('family_user_id',$user_id)->first()){
                $subscriber->status = $request->subscribe??$subscriber->status;
                $subscriber->email = $request->email??$user->email;
                $subscriber->save();           
            }else{            
                if($request->subscribe){
                    $data['email'] = $request->email??$user->email;
                    $data['family_user_id'] = $user_id;
                    Subscriber::create($data);
                }
            }
        }
        $user->name = $request->name??$user->name;
        $user->email = $request->email??$user->email;
        $user->gbi_link = $request->gbi_link??$user->gbi_link;
        $user->phone_no = $request->phone_no??$user->phone_no;
        $user->father_name = $request->father_name??$user->father_name;
        $user->mother_name = $request->mother_name??$user->mother_name;
        $user->dob = $request->dob??$user->dob;
        $user->city = $request->city??$user->city;
        $user->state = $request->state??$user->state;
        $user->country = $request->country??$user->country;
        $user->zip_code = $request->zip_code??$user->zip_code;
        $user->gender = $request->gender??$user->gender;
        $user->save();        
        return response()->json('Successuflly updated');
    }

    public function UserImage($guard_name, Request $request){
        $user = Auth::guard($guard_name."-api")->user();
        if ($request->hasFile('photo')) {
            // exit;
           $file = $request->file('photo');
           $name = time().'-'.$file->getClientOriginalName();
           $filePath = config('gbi.user_image') . $name;
           \Storage::disk('s3')->put($filePath, file_get_contents($file));
           $user->photo = $name;
        }
        // $information = Information::where('user_id', $user->id)->first();
        $user->save();
        return response()->json(['photo'=>$user->photo]);
    }

    public function UserDocs($guard_name, Request $request){
        // $user = Auth::user();
        $validator = Validator::make($request->all(), [ 
            'docFront' => 'required|file|max:5000',
            'docBottom' => 'required|file|max:5000',
            'docType' => 'required',
        ]);
        
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }
        $user = Auth::guard($guard_name."-api")->user();

        // $information = Information::where('user_id', $user->id)->first();
        $user->doc_type = $request->docType;

        if ($request->hasFile('docFront')) {
           $file1 = $request->docFront;
           $name1 = time().'-'.$file1->getClientOriginalName();
           $filePath1 = config('gbi.user_docs') . $name1;
           \Storage::disk('s3')->put($filePath1, file_get_contents($file1));
           $user->doc_front = $name1;
       }

       if ($request->hasFile('docBottom')) {
           $file2 = $request->file('docBottom');
           $name2 = time().'-'.$file2->getClientOriginalName();
           $filePath2 = config('gbi.user_docs') . $name2;
           \Storage::disk('s3')->put($filePath2, file_get_contents($file2));
           $user->doc_back = $name2;
       }
       $user->save();
        
        return response()->json(['docType'=>$user->doc_type, 'docFront'=>$user->doc_front, 'docBack'=>$user->doc_back]);
    }
    // User Edit 
    /** 
    * details api 
    * 
    * @return \Illuminate\Http\Response 
    */ 
    /**
    * @OA\Post(
    * path="/details",
    * operationId="Details",
    * tags={"Details"},
    *   security={
    *    {
    *     "passport": {}},
    *    },
    
    * summary="User Details",
    * description="User Details here",
    *     @OA\RequestBody(
    *         @OA\JsonContent()
    *    ),
    *      @OA\Response(
    *          response=200,
    *          description="Successfully get details !!!",
    *          @OA\JsonContent()
    *       ),
    *      @OA\Response(response=400, description="Bad request"),
    *      @OA\Response(response=404, description="Resource Not Found"),
    *      @OA\Response(response=401, description="Unauthentication"),
    * )
    */
    public function details($guard_name) 
    {  
        $user = Auth::guard($guard_name."-api")->user();
        return response()->json(['success' => $user], $this->successStatus); 
    } 
    
    public function show($guard_name){
        $user = Auth::guard($guard_name."-api")->user();
        return response()->json(['success' => $user], $this-> successStatus); 
    }
    /// user more information on model from model
    public function infoUpdate($guard_name, Request $request){
        $user = Auth::guard($guard_name."-api")->user();
        if($guard_name == "school"){
            if($request->school_id == 'other'){
                    $validator = Validator::make($request->all(), [ 
                        'profession_name'=>'required|unique:schools,school_name',
                        'profession_address' => 'required',
                ]);
                if ($validator->fails()) { 
                    return response()->json(['error'=>$validator->errors()], 401);            
                }
    
                $data = array('school_name'=>$request->profession_name,'address'=>$request->profession_address);
                $school = School::create($data);
                $user->school_id = $school->id;
            }
            else{
                $user->school_id = $request->school_id??0;
            }
            $user->role_type = $request->user_profession??$user->user_profession;
            $user->profession_name = $request->profession_name??$user->profession_name;
            $user->profession_address = $request->profession_address??$user->profession_name;
            $user->institution_code = $request->institution_code??$user->institution_code;
        }
        else if($guard_name == "company"){
            if($request->company_id == 'other'){
                $validator = Validator::make($request->all(), [ 
                'company_name' => ['required', Rule::unique('companies')->ignore($user->id)],
                'company_address' => 'required']);
                if ($validator->fails()) { 
                    return response()->json(['error'=>$validator->errors()], 401);            
                }

                $data = array('company_name'=>$request->company_name,'address'=>$request->company_address);
                $company = Company::create($data);
                $user->company_id = $company->id;
            }
            else{
                $user->company_id = $request->company_id??0;
            }
            $user->employee_id = $request->employee_id??$user->employee_id;
            $user->company_name = $request->company_name??$user->company_name;
            $user->company_address = $request->company_address??$user->company_address;
            $user->company_code = $request->company_code??$user->company_code;
        }
        $user->status = 1;
        $user->save();
        return response()->json('success');
    }

    public function UpdatePassword($guard_name, Request $request){
        $user = Auth::guard($guard_name."-api")->user();
        $request->validate([
            'current_password' => ['required', new MatchOldPassword($user)],
            'new_password' => ['required'],
            'confirm_password' => ['required','same:new_password'],
        ]);
        $user->update(['password'=> Hash::make($request->new_password), 'change_password'=>1]);
        // $info = Information::where('user_id',$user->id)->first();
        // $info->change_password = 1;
        // $info->save(); 
        ChangePasswordJob::dispatchNow($user);
        return response()->json('Password change successfully.');
    }

    public function socialIndex($userId){
         $user = User::find($userId);
         return new SocialResource($user);
    }

    public function socialAuth(Request $request){
         $user = User::where('id', $request->userId)->first();
         $social = UserSocial::where('user_id', $user->id)->where('provider', $request->provider)->first();
         if($social){
            $social->code = $request->code;
            $social->save();
         } else {
            $social = new UserSocial;
            $social->code = $request->code;
            $social->provider = $request->provider;
            $social->user_id = $user->id;
            $social->save();
         }

         return new SocialResource($user);

         //return response()->json($social);
    }

    public function logout(Request $request){
        if(Auth::user()){
            Auth::user()->AauthAccessToken()->delete();
        }
        return response()->json('Logout successfull');
    }
}
