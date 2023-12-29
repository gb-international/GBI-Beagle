<?php

namespace App\Http\Controllers\Admin\Tour;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\BaseController;
use Illuminate\Http\Request;
use App\Http\Requests\FamilyBankDetailRequest;
use App\Model\Tour\FamilyBankdetail;
use Auth;
class FamilybankdetailController extends BaseController
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
    public function store(FamilyBankDetailRequest $request)
    {
        $bank_detail = new FamilyBankdetail();
        $bank_detail->name = $request->name??'';
        $bank_detail->bank_name = $request->bank_name??'';
        $bank_detail->account_number = $request->account_number??'';
        $bank_detail->account_type = $request->account_type??'';
        $bank_detail->ifsc_code = $request->ifsc_code??'';
        $bank_detail->tour_code = $request->tour_code??'';
        if(!empty($request->family_user_id)){
            $bank_detail->family_user_id = $request->family_user_id??'';
        }
        else{
            $bank_detail->user_id = Auth::guard("user-api")->user()->id;
        }
        $bank_detail->save();
        return response()->json("Successfully created");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        
        $validator = Validator::make($request->all(), [ 
            'name' => 'required',
            'bank_name' => 'required',
            'account_number' => ['required', Rule::unique('family_bankdetails')->ignore($id)],
            'account_type' => 'required',
            'ifsc_code' => 'required',
            'tour_code' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
        }
        $data = array("name" => $request->name??$schoolbankdetail->name,
        "bank_name" => $request->bank_name??$schoolbankdetail->bank_name,
        "account_number" => $request->account_number??$schoolbankdetail->account_number,
        "account_type" => $request->account_type??$schoolbankdetail->account_type,
        "ifsc_code" => $request->ifsc_code??$schoolbankdetail->ifsc_code,
        "tour_code" => $request->tour_code??$schoolbankdetail->tour_code);
        $corpbankdetail->update($data);
        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
