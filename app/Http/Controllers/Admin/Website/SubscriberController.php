<?php

namespace App\Http\Controllers\Admin\Website;

use App\Http\Controllers\Controller;
use App\Model\User\Subscriber;
use App\User;
use Illuminate\Http\Request;
use App\Jobs\SubscribeJob;

class SubscriberController extends Controller
{

    public function all($size)
    {
        return response()->json(Subscriber::select([
            'id','user_id','email','status','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function store(Request $request)
    {
        $data = $this->validate($request,[
            'email'=>'unique:subscribers,email|required|email'
        ]);
        
        // check if user in users table
        if($user = User::where('email',$data['email'])->first()){
            $data['user_id'] = $user->id;
            Subscriber::create($data);
        }else{
            // add data to table
            Subscriber::create($data);
        }

        SubscribeJob::dispatch($data);        
        return response()->json('You have successfully subscribed');
        
        return $request->all();
    }

    public function destroy($id)
    {
        $subscribe = Subscriber::where('id',$id)->first();
        $subscribe->delete();
        return response()->json('successfully deleted');
    }
}
