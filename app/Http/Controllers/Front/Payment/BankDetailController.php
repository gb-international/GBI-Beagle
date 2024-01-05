<?php

namespace App\Http\Controllers\Front\Payment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Payment\BankDetail;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Front\Payment\BankDetailRequest;
use Auth;

class BankDetailController extends BaseController
{
    //Fetch all data
    public function all($guard_name, $size=null){
        try{
            if (empty($size)) {
                $size = 10; 
            }
            $data = BankDetail::where('user_types', $guard_name)->with('education_institude', 'company_user', 'family_user')->latest()->select([
                'id', 'edu_institute_id', 'company_user_id', 'family_user_id', 'name','bank_name','account_number', 'account_type', 'ifsc_code','created_at', 'updated_at'
                ])->paginate($size);
            return response()->json($data);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

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
    public function store($guard_name, BankDetailRequest $request)
    {
        try{
            $user = Auth::guard($guard_name."-api")->user();
            $data = array("name" => $request->name??'',
            "bank_name" => $request->bank_name??'',
            "account_number" => $request->account_number??'',
            "account_type" => $request->account_type??'',
            "ifsc_code" => $request->ifsc_code??'',
            "user_types" => $guard_name);
            if($guard_name == "school"){
                $data['edu_institute_id'] = $user->id??NULL;
            }
            else if($guard_name == "family"){
                $data['family_user_id'] = $user->id??NULL;
            }
            else if($guard_name == "company"){
                $data['company_user_id'] = $user->id??NULL;
            }
            BankDetail::create($data);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($guard_name, $id)
    {
        try{
            $bank_detail = BankDetail::where(array('id'=> $id, 'user_types'=>$guard_name))->first();
            if(!empty($bank_detail)){
                if($guard_name == "school"){
                    $bank_detail->education_institude;
                }
                else if($guard_name == "company"){
                    $bank_detail->company_user;   
                }
                else{
                    $bank_detail->family_user;
                }
                return response()->json($bank_detail);
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($guard_name, $id)
    {
        try{
            $bank_detail = BankDetail::where(array('id'=> $id, 'user_types'=>$guard_name))->first();
            if(!empty($bank_detail)){
                if($guard_name == "school"){
                    $bank_detail->education_institude;
                }

                else if($guard_name == "company"){
                    $bank_detail->company_user;   
                }

                else{
                    $bank_detail->family_user;
                }
                return response()->json($bank_detail);
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
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
    public function update($guard_name, BankDetailRequest $request, $id)
    {
        try{
            $bank_detail = BankDetail::where(array('id'=> $id, 'user_types'=>$guard_name))->first();
            if(!empty($bank_detail)){
                $bank_detail->name = $request->name??$bank_detail->name;
                $bank_detail->bank_name = $request->bank_name??$bank_detail->bank_name;
                $bank_detail->account_number = $request->account_number??$bank_detail->account_number;
                $bank_detail->account_type = $request->account_type??$bank_detail->account_type;
                $bank_detail->ifsc_code = $request->ifsc_code??$bank_detail->ifsc_code;
                $bank_detail->save();
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($guard_name, $id)
    {
        try{
            $bank_detail = BankDetail::where(array('id'=> $id, 'user_types'=>$guard_name))->first();
            if(!empty($bank_detail)){
                $bank_detail->delete();
                return response()->json('successfully deleted');
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
