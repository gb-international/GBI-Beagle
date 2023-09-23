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
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\EscortRequest;

class EscortController extends BaseController
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
    public function store(EscortRequest $request)
    {
        try{
            $data = array();
            $data['name'] = $request->name??'';
            $data['email'] = $request->email??'';
            $data['phoneno'] = $request->phoneno??'';
            $data['address'] = $request->address??'';
            $data['salaryPerday'] = $request->salaryPerday??'';
            $result = Escort::create($data);
            return response()->json(['Message'=> $result]);
            // return $this->sendResponse($result, "Successfully Inserted");
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage());
        }
        // Escort::create($this->validateEscort($request));
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
    public function update(EscortRequest $request, Escort $escort)
    {   
        try{
            $data = array();
            $data['name'] = $request->name??$escort->name;
            $data['email'] = $request->email??$escort->email;
            $data['phoneno'] = $request->phoneno??$escort->phoneno;
            $data['address'] = $request->address??$escode->address;
            $data['salaryPerday'] = $request->salaryPerday??$escode->salaryPerday;
            $result = $escort->update($data);
            return response()->json(['message'=>'Successfully Updated']);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage());
        }
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
