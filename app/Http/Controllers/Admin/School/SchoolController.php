<?php
/* 
Created by : Ajay yadav 
Purpose : Manage school 

*/
namespace App\Http\Controllers\Admin\School;
use App\Model\School\School;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;
use App\User;
use App\Model\User\Information;
use App\Helpers\SendSms;
use App\Jobs\SendLoginDetialJob;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\School\SchoolRequest;

class SchoolController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(School::select(['id','school_name','principal_email_id','principal_name','user_id','updated_at'])->with('incharge:id,name')->latest('updated_at')->paginate($size));
    }

    public function login($id){
        try{
            $school = School::where('id',$id)->first();
            $user = User::where('email',$school->principal_email_id)->first();
            if(!$user){
                $user = $this->createUser($school);
            }else{
                $user = $this->updateUser($user,$school);
            }
            if($school->user_id != $user->id){
                $school->user_id = $user->id;
                $school->save();
            }

            $sendsms = new SendSms;
            $message = 'Please check your email to get the GBI Login Credentials';
            $sendsms->sendLoginDetails($school->principal_mobile_number,$message);
            $emaildata = [
                'email'=>$user->email,
                'password'=>$user->email
            ];
            
            SendLoginDetialJob::dispatchNow($emaildata);
            return $this->sendResponse('', 'Successfully Created', 201);
            // return response()->json('Successfully created');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
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
    public function store(SchoolRequest $request)
    {
        try{
            $data = array();
            $data['school_name'] = $request->school_name??'';
            $data['finance_email_id'] = $request->finance_email_id??'';
            $data['principal_email_id'] = $request->principal_email_id??'';
            $data['mobile'] = $request->mobile??'';
            $data['street'] = $request->street??'';
            $data['principal_name'] = $request->principal_name??'';
            $data['principal_mobile_number'] = $request->principal_mobile_number??'';
            $data['city_name'] = $request->city_name??'';
            $data['state_name'] = $request->state_name??'';
            $data['country_name'] = $request->country_name??'';
            $data['pincode'] = $request->pincode??'';
            $data['address'] = $request->address??'';
            $school = School::create($data);
            return $this->sendResponse($school,'Successfully Updated');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
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
    public function update(SchoolRequest $request, School $school)
    {
        try{
            $data = array();
            $data['school_name'] = $request->school_name??$school->school_name;
            $data['finance_email_id'] = $request->finance_email_id??$school->finance_email_id;
            $data['principal_email_id'] = $request->principal_email_id??$school->principal_email_id;
            $data['mobile'] = $request->mobile??$school->mobile;
            $data['street'] = $request->street??$school->street;
            $data['principal_name'] = $request->principal_name??$school->principal_name;
            $data['principal_mobile_number'] = $request->principal_mobile_number??$school->principal_mobile_number;
            $data['city_name'] = $request->city_name??$school->city_name;
            $data['state_name'] = $request->state_name??$school->state_name;
            $data['country_name'] = $request->country_name??$school->country_name;
            $data['pincode'] = $request->pincode??$school->pincode;
            $data['address'] = $request->address??$school->address;
            $school->update($data);
            return $this->sendResponse($data,'Successfully Updated');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
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

    // Validate Escort
    public function validateSchool($request)
    {
      return $this->validate($request, [
            'school_name' => ['required',new AlphaSpace],
            'finance_email_id' => ['required','email',new EmailValidate],
            'principal_email_id' => ['required','email',new EmailValidate],
    		'mobile' => 'required|numeric|regex:/^[0-9\-\+]{9,11}$/ix',
            'street' => 'required',
            'principal_name'=>['required',new AlphaSpace],
            'principal_mobile_number'=>'',
            'city_name' => 'required',
            'state_name' => 'required',
            'country_name' => 'required',
            'pincode' => 'required|numeric|min:1',
            'address' => 'required',
      ]);
    }

    protected function createUser($data){
        $user = new User();
        $user->name = $data->principal_name;
        $user->email = $data->principal_email_id;
        $user->password = bcrypt($data->principal_email_id);
        $user->status = 1;
        $user->is_incharge = '1';
        $user->save();
        $more  = new Information();
        $more->school_id = $data->school_id;
        $more->user_profession = 'teacher';
        $more->user_id = $user->id;
        $more->phone_no = $data->principal_mobile_number;
        $more->varified = '1';
        $more->photo = 'user.png';
        $more->change_password = 0;
        $more->save();
        return $user;
    }
    protected function updateUser($user,$data){
        $user->name = $data->principal_name;
        $user->password = bcrypt($data->principal_email_id);
        $user->status = 1;
        $user->is_incharge = '1';
        $more = Information::where('user_id',$user->id)->first();
        $more->school_id= $data->id;

        $more->save();
        $user->save();
        return $user;
    }
}
