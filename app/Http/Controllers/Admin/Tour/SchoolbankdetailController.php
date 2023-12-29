<?php
/* created by : Ajay yadav 
Purpose : Manage bankdetail of gbi  */
namespace App\Http\Controllers\Admin\Tour;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SchoolBankDetailRequest;
use Validator;
use App\Model\Tour\Schoolbankdetail;
use Auth;
use App\Rules\AlphaSpace;

class SchoolbankdetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function all($size)
    {
        return response()->json(Schoolbankdetail::select([
            'id','name','bank_name','account_number','ifsc_code','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    
    public function index()
    {
        return Schoolbankdetail::get();
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
    public function store(SchoolBankDetailRequest $request)
    {
        $data = array("name" => $request->name??'',
        "bank_name" => $request->bank_name??'',
        "account_number" => $request->account_number??'',
        "account_type" => $request->account_type??'',
        "ifsc_code" => $request->ifsc_code??'',
        "tour_code" => $request->tour_code??'');
        if(!empty($request->edu_institutes??'')){
            $data['edu_institute_id'] = $request->edu_institutes??'';
        }
        else{
            $data['user_id'] = Auth::guard("user-api")->user()->id;
        }
        Schoolbankdetail::create($data);
        return response()->json(["Message"=> "Successfully Added..."]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Schoolbankdetail  $bankdetail
     * @return \Illuminate\Http\Response
     */
    public function show(Schoolbankdetail $schoolbankdetail)
    {
        return $schoolbankdetail;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Schoolbankdetail  $schoolbankdetail
     * @return \Illuminate\Http\Response
     */
    public function edit(Schoolbankdetail $schoolbankdetail)
    {
        return response()->json($schoolbankdetail);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bankdetail  $bankdetail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Schoolbankdetail $schoolbankdetail)
    {
        $validator = Validator::make($request->all(), [ 
            'name' => 'required',
            'bank_name' => 'required',
            'account_number' => 'required|unique:schoolbankdetails,account_number,'.$schoolbankdetail->id.',id',
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
        $schoolbankdetail->update($data);
        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Schoolbankdetail  $schoolbankdetail
     * @return \Illuminate\Http\Response
     */
    public function destroy(Schoolbankdetail $schoolbankdetail)
    {
        $schoolbankdetail->delete();
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
