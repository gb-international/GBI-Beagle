<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Escorts

*/

namespace App\Http\Controllers\Admin\Escort;

use App\Http\Resources\EscortCollection;
use App\Model\Escort\Escort;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Helpers\SendSms;

use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class EscortController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(Escort::select([
            'id','salaryPerday','name','phoneno','email'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        return new EscortCollection(Escort::all());
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
        Escort::create($this->validateEscort($request));
        return response()->json(['Message'=> $request]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Escort  $escort
     * @return \Illuminate\Http\Response
     */
    public function show(Escort $escort)
    {
        return response()->json($escort);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Escort  $escort
     * @return \Illuminate\Http\Response
     */
    public function edit(Escort $escort)
    {
        return response()->json($escort);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Escort  $escort
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Escort $escort)
    {   
        $escort->update($this->validateEscort($request));
        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Escort  $escort
     * @return \Illuminate\Http\Response
     */
    public function destroy(Escort $escort)
    {
        $escort->delete();
        return response()->json('successfully deleted');
    }
    
    public function sendLink(Request $request)
    {
        $sendsms = new SendSms;
        $get = $sendsms->escortLoginLink($request->escort_phone_no,$request->name);
        
        return response()->json('successfully Sent');
    }


    // Validate Escort
    public function validateEscort($request)
    {
      return $this->validate($request, [
            'name' => ['required',new AlphaSpace],
            'email' => ['required','email',new EmailValidate],
    		'phoneno' => ['required','numeric',new PhoneNubmerValidate],
            'address' => 'required|min:3',
            'salaryPerday' => 'required|numeric|min:1'
      ]);
    }
}
