<?php

namespace App\Http\Controllers\Admin\Customer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\Customer\CustomerRequest;
use App\Http\Requests\Admin\Customer\CustomerStatusRequest;
use App\Http\Requests\Admin\Customer\UpdateCustomerRequest;
use App\User;
use App\Model\User\Information;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;


class CustomerController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(CustomerRequest $request)
    {
         try{
            $user = new User();
            $user->name = $request->name??'';
            $user->email = $request->email_id??'';
            $user->password = bcrypt($request->password??'');
            $user->status = 1;
            $user->is_incharge = '1';
            $user->save();
            $more_information = new Information();
            $more_information->user_profession = $request->user_profession??'';
            $more_information->user_id = $user->id??0;
            $more_information->phone_no = $request->phone_number??'';
            $more_information->varified = '1';
            $more_information->photo = 'user.png';
            $more_information->change_password = 0;
            $more_information->father_name = $request->father_name??'';
            $more_information->mother_name = $request->mother_name??'';
            $more_information->dob = $request->dob??'';
            $more_information->gender = $request->gender??'';
            $more_information->city = $request->city_name??'';
            $more_information->state = $request->state_name??'';
            $more_information->country = $request->country_name??'';
            $more_information->zip_code = $request->pincode??'';
            $more_information->city = $request->city_name??'';
            $more_information->address = $request->address??'';
            $more_information->save();
            $user_information = array('user'=>$user, 'information'=>$more_information);
            return $this->sendResponse($user_information,'Successfully Created', 201);
         }
         catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
         }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try{
            $user = User::where('id',$id??0)->firstOrFail();
            $more_information = Information::where('user_id',$id??0)->firstOrFail();
            $user_information = array('user'=>$user, 'information'=>$more_information);
            return $this->sendResponse($user_information,'Successfully Created', 200);
         }
         catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
         }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            $information_id = $more_information->id??0;
            $validator = Validator::make($request->all(), [
                'name'=>['required',new AlphaSpace],
                'email_id' => ['required','email', 'unique:users,email,'.$id.',id', new EmailValidate],
                'phone_number'=>['required','numeric', 'unique:informations,phone_no, '.$id.',user_id', new PhoneNubmerValidate],
                'father_name'=>['required',new AlphaSpace],
                'mother_name'=>['required',new AlphaSpace],
                'dob' => 'required|date|date_format:Y-m-d',
                'gender' => 'required|in:male,female',
                'user_profession' => 'required|in:corporate,student,general',
                'city_name' => 'required',
                'state_name' => 'required',
                'country_name' => 'required',
                'pincode' => 'required|numeric|min:1',
                'address' => 'required',
            ]);
            if ($validator->fails()) {
                return $this->errorValidate($validator->errors(), 422);
            }
            $user = User::where('id',$id??0)->firstOrFail();
            $more_information = Information::where('user_id',$id??0)->firstOrFail();

            $user->name = $request->name??$user->name;
            $user->email = $request->email_id??$user->email_id;
            $user->save();
            $more_information->user_profession = $request->user_profession??$more_information->user_profession;
            $more_information->user_id = $user->id??$more_information->user_id;
            $more_information->phone_no = $request->phone_number??$more_information->phone_no;
            $more_information->father_name = $request->father_name??$more_information->father_name;
            $more_information->mother_name = $request->mother_name??$more_information->mother_name;
            $more_information->dob = $request->dob??$more_information->dob;
            $more_information->gender = $request->gender??$more_information->gender;
            $more_information->city = $request->city_name??$more_information->city;
            $more_information->state = $request->state_name??$more_information->state;
            $more_information->country = $request->country_name??$more_information->country;
            $more_information->zip_code = $request->pincode??$more_information->zip_code;
            $more_information->city = $request->city_name??$more_information->city;
            $more_information->address = $request->address??$more_information->address;
            $more_information->save();
            $user_information = array('user'=>$user, 'information'=>$more_information);
            return $this->sendResponse($user_information,'Successfully Created', 201);
         }
         catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
         }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            User::where('id',$id??0)->delete();
            Information::where('user_id',$id??0)->delete();
            return $this->sendResponse('','Successfully Created', 200);
         }
         catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
         }
    }
    public function status(CustomerStatusRequest $req){
        try{
            $user = User::where('id',$req->user_id??0)->firstOrFail();
            $user->approval_status = $req->status??0;
            $user->save();
            return $this->sendResponse($user,'Status updated');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function all($user_profession_type, $size = null){
        try {
            if (!$size) {
                $size = 10;
            }
            $user = User::WhereHas('information',  function ($q) use ($user_profession_type) {
                $q->where('user_profession',$user_profession_type);
            })->with('information')->latest()->paginate($size);
            if (!empty($user)) {
                return $this->sendResponse($user, 'success', 200);
            } else {
                return $this->sendError('data not found', 404);
            }
        }
        catch (Exception $e) {
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
