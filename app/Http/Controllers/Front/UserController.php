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

    public function update(Request $request)
    {
        $user_category = new UserCategory(); 
        $user_type = $user_category->user_category($request->user_profession??'');
        $edu_institutes = Auth::guard($user_type)->user();
        
        $userId = Auth::guard('school')->user()->id??0;
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => ['required','email',new EmailValidate, 'unique:edu_institutes,email,'.$userId.',id'],
            'phone_no' => ['required','numeric',new PhoneNubmerValidate, 'unique:edu_institutes,phone_no,'.$userId.',id'],
        ]);
        
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }
        $edu_institutes = Auth::guard('school')->user();
        $edu_institutes->name = $request->name??$edu_institutes->name;
        $edu_institutes->email = $request->email??$edu_institutes->email;
        $edu_institutes->gbi_link = $request->gbi_link??$edu_institutes->gbi_link;
        $edu_institutes->school_id = $request->school_id??$edu_institutes->school_id;
        $edu_institutes->profession_name = $request->profession_name??$edu_institutes->profession_name;
        $edu_institutes->profession_address = $request->profession_address??$edu_institutes->profession_address;
        $edu_institutes->institution_code = $request->institution_code??$edu_institutes->institution_code;
        $edu_institutes->phone_no = $request->phone_no??$edu_institutes->phone_no;
        $edu_institutes->father_name = $request->father_name??$edu_institutes->father_name;
        $edu_institutes->mother_name = $request->mother_name??$edu_institutes->mother_name;
        $edu_institutes->dob = $request->dob??$edu_institutes->dob;
        $edu_institutes->address = $request->address??$edu_institutes->address;
        $edu_institutes->city = $request->city??$edu_institutes->city;
        $edu_institutes->state = $request->state??$edu_institutes->state;
        $edu_institutes->country = $request->country??$edu_institutes->country;
        $edu_institutes->zip_code = $request->zip_code??$edu_institutes->zip_code;
        $edu_institutes->user_class = $request->user_class??$edu_institutes->user_class;
        $edu_institutes->admission_year = $request->admission_year??$edu_institutes->admission_year;
        $edu_institutes->gender = $request->gender??$edu_institutes->gender;
        $edu_institutes->save();
        $edu_institute_id = $edu_institutes->edu_institute_id??0;
        // if user is already subscribed
        if($subscriber = Subscriber::where('edu_institute_id',$edu_institute_id)->first()){
            $subscriber->status = $request->subscribe??'';
            $subscriber->edu_institute_id = $edu_institute_id;
            $subscriber->save();           
        }else{            
            if($request->subscribe){
                $data['email'] = $user->email??'';
                $data['edu_institutes'] = $edu_institute_id;
                Subscriber::create($data);
            }
        }
        
        return response()->json('Successuflly updated');
    }

    public function UserImage(Request $request){
        $user = Auth::user();
        if ($request->hasFile('photo')) {
           $file = $request->file('photo');
           $name = time().'-'.$file->getClientOriginalName();
           $filePath = config('gbi.user_image') . $name;
           \Storage::disk('s3')->put($filePath, file_get_contents($file));
       }
        $information = Information::where('user_id', $user->id)->first();
        $information->photo = $name;
        $information->save();
        return response()->json(['photo'=>$information->photo]);
    }

    public function UserDocs(Request $request){
        $user = Auth::user();

        $validator = Validator::make($request->all(), [ 
            'docFront' => 'required|file|max:5000',
            'docBottom' => 'required|file|max:5000',
            'docType' => 'required',
        ]);

        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }

        $information = Information::where('user_id', $user->id)->first();
        $information->docType = $request->docType;

        if ($request->hasFile('docFront')) {
           $file1 = $request->docFront;
           $name1 = time().'-'.$file1->getClientOriginalName();
           $filePath1 = config('gbi.user_docs') . $name1;
           \Storage::disk('s3')->put($filePath1, file_get_contents($file1));
           $information->docFront = $name1;
       }

       if ($request->hasFile('docBottom')) {
           $file2 = $request->file('docBottom');
           $name2 = time().'-'.$file2->getClientOriginalName();
           $filePath2 = config('gbi.user_docs') . $name2;
           \Storage::disk('s3')->put($filePath2, file_get_contents($file2));
           $information->docBack = $name2;
       }
       $information->save();
        
        return response()->json(['docType'=>$information->docType, 'docFront'=>$information->docFront, 'docBack'=>$information->docBack]);
    }
    // User Edit 
/** 
     * details api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function details() 
    { 
        $user = auth()->user();
        return $user;
        $user = Auth::user();
        $information = $user->information;
        $search = $user->search;
        return response()->json(['success' => $user], $this-> successStatus); 
    } 

    public function show(){
        $user = Auth::guard('school')->user();
        $information = $user->information;
        $information = $user->subscribe;
        return response()->json(['success' => $user], $this-> successStatus); 
    }
    /// user more information on model from model
    public function infoUpdate(Request $request){

        $user_category = new UserCategory(); 
        $user_type = $user_category->user_category($request->user_profession??'');
        $edu_institutes = Auth::guard($user_type)->user();
        $edu_institutes->status = 1;
        $edu_institutes->user_profession = $request->user_profession??'';
        $edu_institutes->profession_name = $request->profession_name??'';
        $edu_institutes->profession_address = $request->profession_address??'';
        
        if($request->school_id == 'other'){
            $this->validate($request,[
                'profession_name'=>'required|unique:schools,school_name',
                'profession_address' => 'required'
            ]);
            $data = ['school_name'=>$request->profession_name,'address'=>$request->profession_address];
            $school = School::create($data);
            $edu_institutes->school_id = $school->id;
        }
        else{
            $edu_institutes->school_id = $request->school_id??0;
        }
        $edu_institutes->institution_code = $request->institution_code;
        

        $edu_institutes->save();
        // $user->save();
        return response()->json('success');
    }

    public function UpdatePassword(Request $request){
        $user = auth()->guard('school')->user();
        // return Hash::make($request->new_password);
        $request->validate([
            'current_password' => ['required', new MatchOldPassword($user)],
            'new_password' => ['required'],
            'confirm_password' => ['same:new_password'],
        ]);
        $user->update(['password'=> Hash::make($request->new_password)]);
        $info = Information::where('user_id',$user->id)->first();
        $info->change_password = 1;
        $info->save(); 
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
