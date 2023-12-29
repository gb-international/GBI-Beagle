<?php
/* created by : Manas 
Purpose : Manage bankdetails of Corporate Users  */

namespace App\Http\Controllers\Admin\Tour;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyBankDetailRequest;
use Validator;
use Illuminate\Validation\Rule; //import Rule class 
use App\Model\Tour\Corpbankdetail;
use Auth;
use App\Rules\AlphaSpace;

class CorpbankdetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function all($size)
    {
        return response()->json(Corpbankdetail::select([
            'id','name','bank_name','account_number','ifsc_code','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    
    public function index()
    {
        return Corpbankdetail::get();
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
    public function store(CompanyBankDetailRequest $request)
    {
        $data = array("name" => $request->name??'',
        "bank_name" => $request->bank_name??'',
        "account_number" => $request->account_number??'',
        "account_type" => $request->account_type??'',
        "ifsc_code" => $request->ifsc_code??'',
        "tour_code" => $request->tour_code??'');
        if(!empty($request->company_user_id)){
            $data['company_user_id'] = $request->company_user_id??'';
        }
        else{
            $data['user_id'] = Auth::guard("user-api")->user()->id;
        }
        Corpbankdetail::create($data);
        return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Corpbankdetail  $bankdetail
     * @return \Illuminate\Http\Response
     */
    public function show(Corpbankdetail $corpbankdetail)
    {
        return $corpbankdetail;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Corpbankdetail  $corpbankdetail
     * @return \Illuminate\Http\Response
     */
    public function edit(Corpbankdetail $corpbankdetail)
    {
        return response()->json($corpbankdetail);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bankdetail  $bankdetail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Corpbankdetail $corpbankdetail)
    {
        $validator = Validator::make($request->all(), [ 
            'name' => 'required',
            'bank_name' => 'required',
            'account_number' => ['required', Rule::unique('corp_bankdetails')->ignore($corpbankdetail->id)],
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
     * @param  \App\Corpbankdetail  $corpbankdetail
     * @return \Illuminate\Http\Response
     */
    public function destroy(Corpbankdetail $corpbankdetail)
    {
        $corpbankdetail->delete();
        return response()->json('successfully deleted');
    }

    // Validate Escort
    public function validateBankdetail($request)
    {
      return $this->validate($request, [
            'name' => ['required',new AlphaSpace],
            'bank_name' => ['required',new AlphaSpace],
            'account_number' => 'required',
            'account_type' => 'required',
            'ifsc_code' => 'required',
      ]);
    }
}
