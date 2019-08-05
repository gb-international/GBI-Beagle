<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Image;
use App\Escort;


class EscortController extends Controller
{
    public function allEscort()
	{
		$escort = Escort::orderBy('id', 'DESC')->get();
       	return response()->json([
           'escort'=>$escort ],200);
	}

    public function save_escort(Request $request){
 		
 	 	$this->validate($request,[
		     'name' => 'required|min:2',
		     'salaryPerday' => 'required|numeric|min:1',
		     'phoneno' => 'required|numeric',
		     'email'=>'required',
		     'address'=>'required|min:2'
		]);

        $escort = new Escort();
        $escort->user_id = Auth::user()->id;
        $escort->name = $request->name;
        $escort->salaryPerday = $request->salaryPerday;
        $escort->phoneno = $request->phoneno;
        $escort->email = $request->email;
        $escort->address = $request->address;
        $escort->save();
    }
    public function edit_escort($id){
	    $escort = Escort::find($id);
	     return response()->json([
	            'escort'=>$escort
	        ],200);
    }
    public function update_escort(Request $request,$id){
        $escort = Escort::find($id);
        $this->validate($request,[
             'name' => 'required|min:2',
             'salaryPerday' => 'required|numeric|min:1',
             'phoneno' => 'required|numeric',
             'email'=>'required',
             'address'=>'required|min:2'
        ]);
        $escort->user_id = Auth::user()->id;
        $escort->name = $request->name;
        $escort->salaryPerday = $request->salaryPerday;
        $escort->phoneno = $request->phoneno;
        $escort->email = $request->email;
        $escort->address = $request->address;
        $escort->save();
    }
    public function delete_escort($id){
        $escort = Escort::find($id);
        $escort->delete();
    }
}
