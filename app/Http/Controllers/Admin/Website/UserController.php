<?php

namespace App\Http\Controllers\Admin\Website;

use App\Model\Website;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\User;
use App\Model\User\Information;
class UserController extends Controller
{
    public function all($size)
    {
        return response()->json(User::select([
            'id','name','email','updated_at'
            ])
            ->where('user_role',2)
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index(){
        return response()->json(User::where('user_role',2)->get()); 
    }

    public function show($id){
        return response()->json(User::with(['information','information.school'])->where('id',$id)->first()); 
    }
}
