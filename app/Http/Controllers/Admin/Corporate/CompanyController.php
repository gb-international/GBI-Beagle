<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Company 

*/
namespace App\Http\Controllers\Admin\Corporate;
use App\Model\Corporate\Company;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\CompanyUser;
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
        return response()->json(Company::select([
            'id','company_name','incharge_email_id','incharge_name','user_id','updated_at','company_user_id'
            ])
            ->with('incharge:id,name')
            ->latest('updated_at')
            ->paginate($size));
    }

    public function login($id){
        $company = Company::where('id',$id)->first();
        $company_user = CompanyUser::where('email',$company->incharge_email_id)->first();
        if($company_user == null){
            $company_user = $this->createUser($company);
        }else{
            $company_user = $this->updateUser($company_user,$company);
        }
        if($company_user->id != $company->company_user_id){
            $company->company_user_id = $company_user->id;
            $company->save();
        }

        $sendsms = new SendSms;
        $message = 'Please check your email to get the GBI Login Credentials';
        $sendsms->sendLoginDetails($company->incharge_mobile_number,$message);
        $emaildata = [
            'email'=>$company_user->email,
            'password'=>$company_user->email
        ];
        // exit;
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
        $company = Company::create($this->validateCompany($request));
        // return response()->json($company);
        return response()->json($this->validateCompany($request));
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
        $company->update($this->validateCompany($request));
        return response()->json(['message'=>'Successfully Updated']);
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
        'company_email_id' => $request->company_email_id != null ?['required','email',new EmailValidate]:'',
        'incharge_email_id' => ['required','email',new EmailValidate],
        'mobile' => ['required',new PhoneNubmerValidate],
        'street' => 'required',
        'incharge_name'=>['required',new AlphaSpace],
        'incharge_mobile_number'=> $request->incharge_mobile_number != null ? 'required|numeric|regex:/^[0-9\-\+]{9,11}$/ix|unique:company_users,phone_no' : '',
        'city_name' => 'required',
        'state_name' => 'required',
        'country_name' => 'required',
        'pincode' => 'required|numeric|min:1',
        'address' => 'required',
      ]);
    }

    protected function createUser($data){
        $company_user = new CompanyUser(); 
        $company_user->name = $data->incharge_name;
        $company_user->email = $data->incharge_email_id;
        $company_user->password = bcrypt($data->incharge_email_id);
        $company_user->status = 1;
        $company_user->is_incharge = '1';
        $company_user->company_id = $data->id;
        $company_user->phone_no = $data->incharge_mobile_number;
        $company_user->varified = '1';
        $company_user->photo = 'user.png';
        $company_user->change_password = 0;
        $company_user->save();
        return $company_user;
    }
    protected function updateUser($company_user,$data){
        $company_user->name = $data->incharge_name;
        $company_user->password = bcrypt($data->incharge_email_id);
        $company_user->status = 1;
        $company_user->is_incharge = '1';
        $company_user->company_id = $data->id;
        $company_user->save();
        return $company_user;
    }
}
