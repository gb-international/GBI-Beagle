<?php
/* created by : Ajay yadav 
Purpose : Manage bankdetail of gbi  */
namespace App\Http\Controllers\Admin\Tour;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
    public function store(Request $request)
    {
        $data = $this->validateBankdetail($request);
        $data['user_id'] = 26;
        Schoolbankdetail::create($data);
        return response()->json(['Message'=> 'Successfully Added...']);
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
        
        $schoolbankdetail->update($this->validateBankdetail($request));
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
