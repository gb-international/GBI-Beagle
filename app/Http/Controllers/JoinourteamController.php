<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Url;
use App\Mail\SendMailresume;
use Mail;
use Illuminate\Http\Request;

class JoinourteamController extends Controller
{
    public function joinTeam()
    {
    	return view('front.join-our-team');
    }
    public function resumeSend(Request $request)
    {
    	$this->validate($request, [
    		'firstname' => 'required',
    		'lastname' => 'required',
    		'email' => 'required|email',
    		'contactno' => 'required|numeric|min:10',
    		'address' => 'required',
    		'state' => 'required',
    		'city' => 'required',
    		'zipcode' => 'required|numeric',
    		'postvancy' => 'required',
    		'resume' => 'required',
    		'messagescon' => 'required',

    	]);

	   	if(Input::hasFile('resume')){
		$file = Input::file('resume');
		$file->move(public_path().'/resume/', $file->getClientOriginalName());
		$url = URL::to("/") .'/resume/'. $file->getClientOriginalName();
		}
		  	$data = array(
    			'firstname'=>$request->firstname,
    			'lastname'=>$request->lastname,
    			'email'=>$request->email,
    			'contactno'=>$request->contactno,
    			'address'=>$request->address,
    			'state'=>$request->state,
    			'city'=>$request->city,
    			'zipcode'=>$request->zipcode,
    			'postvancy'=>$request->postvancy,
    			'messagescon'=>$request->messagescon
    			);
    		
    	Mail::to('jyoti_shaw@gbinternational.in')->send( new SendMailresume ($data['firstname'], $data['lastname'], $data['email'], $data['contactno'], $data['address'], $data['state'], $data['city'], $data['zipcode'], $data['postvancy'], $data['messagescon'], $url));
        return redirect()->back()->with('success','send mail successfully');
    }
}
