<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Company 

*/
namespace App\Http\Controllers\Admin\Corporate;
use App\Model\Corporate\Company;
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
use App\Http\Requests\Admin\Corporate\CorporateRequest;


class CompanyController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(Company::select(['id','company_name','incharge_email_id','incharge_name','user_id','updated_at'])
            ->with('incharge:id,name')
            ->latest('updated_at')
            ->paginate($size));
    }

    public function login($id){
        $company = Company::where('id',$id)->first();
        $user = User::where('email',$company->incharge_email_id)->first();
        if($user == null){
            $user = $this->createUser($company);
        }else{
            $user = $this->updateUser($user,$company);
        }
        if($company->user_id != $user->id){
            $company->user_id = $user->id;
            $company->save();
        }

        $sendsms = new SendSms;
        $message = 'Please check your email to get the GBI Login Credentials';
        $sendsms->sendLoginDetails($company->incharge_mobile_number,$message);
        $emaildata = [
            'email'=>$user->email,
            'password'=>$user->email
        ];
        SendLoginDetialJob::dispatchNow($emaildata);

        return response()->json('Successfully created');
    }

    public function index()
    {
        return response()->json(Company::get(['id','company_name']));
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
    public function store(CorporateRequest $request)
    {
        try {
            $data = array();
            $data['company_name'] = $request->company_name??'';
            $data['company_email_id'] = $request->company_email_id??'';
            $data['incharge_email_id'] = $request->incharge_email_id??'';
            $data['mobile'] = $request->mobile??'';
            $data['street'] = $request->street??'';
            $data['incharge_name'] = $request->incharge_name??'';
            $data['incharge_mobile_number'] = $request->incharge_mobile_number??'';
            $data['city_name'] = $request->city_name??'';
            $data['state_name'] = $request->state_name??'';
            $data['country_name'] = $request->country_name??'';
            $data['pincode'] = $request->pincode??'';
            $data['address'] = $request->address??'';
            $result = Company::create($data);
            return $this->sendResponse($result,'Successfully Created', 201);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        $company->tours;
        return response()->json($company);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company)
    {
        return response()->json($company);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company)
    {
        try {
            $data = array();
            $data['company_name'] = $request->company_name??$company->company_name;
            $data['company_email_id'] = $request->company_email_id??$company->company_email_id;
            $data['incharge_email_id'] = $request->incharge_email_id??$company->incharge_email_id;
            $data['mobile'] = $request->mobile??$company->mobile;
            $data['street'] = $request->street??$company->street;
            $data['incharge_name'] = $request->incharge_name??$company->incharge_name;
            $data['incharge_mobile_number'] = $request->incharge_mobile_number??$company->incharge_mobile_number;
            $data['city_name'] = $request->city_name??$company->city_name;
            $data['state_name'] = $request->state_name??$company->state_name;
            $data['country_name'] = $request->country_name??$company->country_name;
            $data['pincode'] = $request->pincode??$company->pincode;
            $data['address'] = $request->address??$company->address;
            $result = $company->update($data);
            return $this->sendResponse($data,'Successfully updated', 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        $company->delete();
        return response()->json('successfully deleted');
    }

    // Validate Escort
    public function validateCompany($request)
    {
      return $this->validate($request, [
            'company_name' => ['required',new AlphaSpace],
            'company_email_id' => ['required','email',new EmailValidate],
            'incharge_email_id' => ['required','email',new EmailValidate],
    		'mobile' => 'required|numeric|regex:/^[0-9\-\+]{9,11}$/ix',
            'street' => 'required',
            'incharge_name'=>['required',new AlphaSpace],
            'incharge_mobile_number'=>'',
            'city_name' => 'required',
            'state_name' => 'required',
            'country_name' => 'required',
            'pincode' => 'required|numeric|min:1',
            'address' => 'required',
      ]);
    }

    protected function createUser($data){
        $user = new User();
        $user->name = $data->incharge_name;
        $user->email = $data->incharge_email_id;
        $user->password = bcrypt($data->incharge_email_id);
        $user->status = 1;
        $user->is_incharge = '1';
        $user->save();
        $more  = new Information();
        $more->company_id = $data->company_id;
        $more->user_profession = 'corporate';
        $more->client_type = 'corporate';
        $more->user_id = $user->id;
        $more->phone_no = $data->incharge_mobile_number;
        $more->varified = '1';
        $more->photo = 'user.png';
        $more->change_password = 0;
        $more->save();
        return $user;
    }
    protected function updateUser($user,$data){
        $user->name = $data->incharge_name;
        $user->password = bcrypt($data->incharge_email_id);
        $user->status = 1;
        $user->is_incharge = '1';
        $more = Information::where('user_id',$user->id)->first();
        $more->company_id = $data->id;

        $more->save();
        $user->save();
        return $user;
    }
}
