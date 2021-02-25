<?php

namespace App\Http\Controllers\Front;
use App\Model\Encyclopedia\Encyclopedia;
use App\Model\Encyclopedia\Encyclopediacomment;
use App\Model\Itinerary\Itinerary;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;


class EncyclopediaController extends Controller
{
    public function index()
    {
    	return response()->json(Encyclopedia::select('thumbnail','state_name','slug')->get());
    }
    public function view($slug)
    {    	


        $data = Encyclopedia::with('comments','images','itinerarypdfs','comments.user','comments.user.information')->where('slug',$slug)->first();
        
    	return response()->json($data);
    }

    public function getComment($id){
        return response()->json(Encyclopediacomment::with('user','user.information')->where('encyclopedia_id',$id)->orderBy('created_at','DESC')->get());
    }

    public function PostComment(Request $request){
        $user = Auth::user();
        $this->validate($request,[
            'body' => 'required',
            'encyclopedia_id' => 'required'
        ]);
        $data = [
            'encyclopedia_id' => $request->encyclopedia_id,
            'user_id' => $user->id,
            'body' => $request->body,
            'parent_id' => $request->parent_id
        ];
        $data = Encyclopediacomment::create($data);
        return response()->json($data);
    }
}
