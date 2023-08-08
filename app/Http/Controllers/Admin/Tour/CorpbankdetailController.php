<?php
/* created by : Manas 
Purpose : Manage bankdetails of Corporate Users  */

namespace App\Http\Controllers\Admin\Tour;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
    public function store(Request $request)
    {
        $data = $this->validateBankdetail($request);
        $data['user_id'] = 26;
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
    public function update(Request $request, Corpbankdetail $sorpbankdetail)
    {
        
        $Corpbankdetail->update($this->validateBankdetail($request));
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
