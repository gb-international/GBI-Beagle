<?php
/* 
Created by : Ajay yadav 
Purpose : Manage school 

*/
namespace App\Http\Controllers\Admin\School;
use App\Model\School\School;
use App\Model\School\EducationInstitute as EduInstitute;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;
use App\User;
use App\Model\User\Information;
use App\Helpers\SendSms;
use App\Jobs\SendLoginDetialJob;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(School::select([
            'id','school_name','principal_email_id','principal_name','user_id','updated_at'
            ])
            ->with('incharge:id,name')
            ->latest('updated_at')
            ->paginate($size));
    }

    public function login($id){
        $school = School::where('id',$id)->first();
         $eduInstitute;
        if(EduInstitute::where('email',$school->principal_email_id)->exists()){
            $eduInstitute = $this->updateEduInstitute(EduInstitute::where('email',$school->principal_email_id)->first(),$school);
        }else{
            $eduInstitute = $this->createEduInstitute($school);
        }
        $sendsms = new SendSms;
        $message = 'Please check your email to get the GBI Login Credentials';
        $sendsms->sendLoginDetails($school->principal_mobile_number,$message);
        $emaildata = [
            'email'=>$eduInstitute->email,
            'password'=>$eduInstitute->email
        ];
        SendLoginDetialJob::dispatchNow($emaildata);

        return response()->json('Successfully created');
    }

    public function index()
    {
        return response()->json(School::get(['id','school_name']));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $school = school::create($this->validateSchool($request));
        return response()->json($school);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\School  $school
     * @return \Illuminate\Http\Response
     */
    public function show(School $school)
    {
        $school->tours;
        return response()->json($school);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\School  $school
     * @return \Illuminate\Http\Response
     */
    public function edit(School $school)
    {
        return response()->json($school);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\School  $school
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school)
    {
        if($request->principal_email_id == $school->principal_email_id){
            $request->principal_email_id = null;
        }
        if($request->principal_mobile_number == $school->principal_mobile_number){
            $request->principal_mobile_number = null;
        }
        $school->update($this->validateSchool($request));
        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\School  $school
     * @return \Illuminate\Http\Response
     */
    public function destroy(School $school)
    {
        $school->delete();
        return response()->json('successfully deleted');
    }

    // Validate School
    public function validateSchool($request)
    {
      return $this->validate($request, [
            // 'surname' => 'required|in:Mr,Mrs,Miss,Ms',
            'school_name' => ['required',new AlphaSpace],
            'finance_email_id' => ['required','email',new EmailValidate],
            'principal_email_id' => $request->principal_email_id != null ? ['required','email',new EmailValidate,'unique:edu_institutes,email'] : '',
    		'mobile' => 'required|numeric|regex:/^[0-9\-\+]{9,11}$/ix',
            'street' => 'required',
            'principal_name'=>['required',new AlphaSpace],
            'principal_mobile_number'=> $request->principal_mobile_number != null ? 'required|numeric|regex:/^[0-9\-\+]{9,11}$/ix|unique:edu_institutes,phone_no' : '',
            'city_name' => 'required',
            'state_name' => 'required',
            'country_name' => 'required',
            'pincode' => 'required|numeric|min:1',
            'address' => 'required',
      ]);
    }

    protected function createEduInstitute($data){
        $edu_institute = new EduInstitute();
        $edu_institute->name = $data->principal_name??'';
        $edu_institute->email = $data->principal_email_id??'';
        $edu_institute->password = bcrypt($data->principal_email_id??'');
        $edu_institute->status = 1;
        $edu_institute->is_incharge = 1;
        $edu_institute->role_type = 1; // teacher
        // exit;
        $edu_institute->school_id = $data->id??0;
        $edu_institute->phone_no = $data->principal_mobile_number??0;
        $edu_institute->varified = 1;
        $edu_institute->photo = 'user.png';
        $edu_institute->change_password = 0;
        $edu_institute->save();
        return $edu_institute;
    }
    protected function updateEduInstitute($edu_institute,$data){
        $edu_institute->name = $data->principal_name;
        $edu_institute->password = bcrypt($data->principal_email_id);
        $edu_institute->status = 1;
        $edu_institute->is_incharge = 1;
        $edu_institute->school_id= $data->id;
        $edu_institute->save();
        return $edu_institute;
    }
}
