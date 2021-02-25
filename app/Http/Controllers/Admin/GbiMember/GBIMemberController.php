<?php

/* 
Created by : Ajay yadav 
Purpose : Manage Gbi member 

*/

namespace App\Http\Controllers\Admin\GbiMember;
use App\Http\Controllers\Controller; 
use App\User;
use App\Model\User\Information;
use Validator;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;
use App\Rules\EmailValidate;
use App\Rules\AlphaSpace;
class GBIMemberController extends Controller
{

    public function all($size)
    {
        return response()->json(User::select([
            'id','name','email','updated_at'
            ])
            ->where('user_role','1')
            ->latest('updated_at')
            ->paginate($size));
    }

	public function index()
	{
		return User::where('user_role','1')->get();
	}

    public function register(Request $request){ 

        $validator = Validator::make($request->all(), [ 
            'name' => ['required',new AlphaSpace],
            'address' => 'required|min:3',
            'email' => ['required','email',new EmailValidate],
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }

        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input);

        $user->user_role = '1';
        $user->user_type = $request->RoleName;

        $user->save();

        $user->assignRole($request->RoleName);

        // Add more information to the informations table
        
        $more  = new Information();
        $more->user_id = $user->id;
        $more->phone_no = $request->phone_no;
        $more->dob = $request->dob;
        $more->address = $request->address;
        $more->varified = '1';
        $more->photo = 'user.png';
        $more->gender = '';
        $more->save();
        // End more information 
        return response()->json('Successfully Registered !!!');

    }

    public function destroy(User $user){
        $user->delete();
        return response()->json('successfully deleted');
    }

    // Sales man list
    
    public function memberType($type = 'salesman')
    {
        return User::select('id','name','email')->where('user_type',$type)->get();
    }
}
