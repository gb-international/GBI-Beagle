<?php

namespace App\Http\Controllers\Admin\Payment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Payment\BankDetail;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\Payment\BankDetailRequest;

class BankDetailController extends BaseController
{
    //Fetch all data
    public function all($type, $size=null){
        try{
            if (empty($size)) {
                $size = 10; 
            }
            if (empty($type)) {
                $type = 'school'; 
            }

            $data = BankDetail::where('user_types', $type)->with('education_institude', 'company_user', 'family_user')->latest()->select([
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
    public function store($type, BankDetailRequest $request)
    {

        try{
            $data = array("name" => $request->name??'',
            "bank_name" => $request->bank_name??'',
            "account_number" => $request->account_number??'',
            "account_type" => $request->account_type??'',
            "ifsc_code" => $request->ifsc_code??'',
            "user_types" => $type);
            if($type == "school"){
                $data['edu_institute_id'] = $request->edu_institute_id??NULL;
            }
            else if($type == "family"){
                $data['family_user_id'] = $request->family_user_id??NULL;
            }
            else if($type == "company"){
                $data['company_user_id'] = $request->company_user_id??NULL;
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
    public function show($type, $id)
    {
        try{
            $bank_detail = BankDetail::where(array('id'=> $id, 'user_types'=>$type))->first();
            if(!empty($bank_detail)){
                if($type == "school"){
                    $bank_detail->education_institude;
                }
                else if($type == "company"){
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
    public function edit($type, $id)
    {
        try{
            $bank_detail = BankDetail::where(array('id'=> $id, 'user_types'=>$type))->first();
            if(!empty($bank_detail)){
                if($type == "school"){
                    $bank_detail->education_institude;
                }
                else if($type == "company"){
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
    public function update($type, BankDetailRequest $request, $id)
    {
        try{
            $bank_detail = BankDetail::where(array('id'=> $id, 'user_types'=>$type))->first();
            if(!empty($bank_detail)){
                if($type == "school"){
                    $data['edu_institute_id'] = $request->edu_institute_id??$bank_detail->edu_institute_id;
                }
                else if($type == "family"){
                    $data['family_user_id'] = $request->family_user_id??$bank_detail->family_user_id;
                }
                else if($type == "company"){
                    $data['company_user_id'] = $request->company_user_id??$bank_detail->company_user_id;
                }
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
    public function destroy($type, $id)
    {
        try{
            $bank_detail = BankDetail::where(array('id'=> $id, 'user_types'=>$type))->first();
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
