<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Image;
use App\Client;
class ClientController extends Controller
{
    //
    public function allClient()
	{
		$client = Client::orderBy('id', 'DESC')->get();;
       	return response()->json([
           'client'=>$client ],200);
	}
	public function save_client(Request $request){
		//code for adding client
		$this->validate($request,[
		     'name' => 'required|min:2',
		     'phoneno' => 'required|numeric',
		     'email'=>'required',
		     'address'=>'required|min:2',
		     'dob'=>'required',
		     'schoolName'=>'required'
		]);
        $client = new Client();
        $client->name = $request->name;
        
        $client->phoneno = $request->phoneno;
        $client->email = $request->email;
        $client->address = $request->address;
        $client->dob = $request->dob;
        $client->schoolName = $request->schoolName;
        $client->save();
	}
}
