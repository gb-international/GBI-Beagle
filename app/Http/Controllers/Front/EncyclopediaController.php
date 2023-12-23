<?php

namespace App\Http\Controllers\Front;
use App\Model\Encyclopedia\Encyclopedia;
use App\Model\Encyclopedia\Encyclopediacomment;
use App\Model\Itinerary\Itinerary;
use App\Model\Itinerary\Itinerarypdf;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Http\Controllers\API\BaseController;

class EncyclopediaController extends BaseController
{
    public function shortItineraryBasedOnEncyclopedia($state, $size = null){
        try {
            if (!$size) {
                $size = 10;
            }
            $itinerary = Itinerary::where('destination', $state)->latest('id')->paginate($size);
            if (!empty($itinerary)) {
                return $this->sendResponse($itinerary, 'Success', 200);
            } else {
                return $this->sendError('data not found', 404);
            }
        }
        catch (Exception $e) {
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function itineraryBasedOnEncyclopedia($state, $size = null){
        try {
            if (!$size) {
                $size = 10;
            }

            $itinerary = Itinerary::where('destination', $state)->latest('id')->paginate($size);
            if (!empty($itinerary)) {
                return $this->sendResponse($itinerary, 'Success', 200);
            } else {
                return $this->sendError('data not found', 404);
            }
        }
        catch (Exception $e) {
            return $this->sendError($e->getMessage(), 500);
        }
    } 
    public function encyclopediaBasedOnItineraryDestinatiopn($state, $size = null){
        try {
            if (!$size) {
                $size = 10;
            }

            $encyclopedia = Encyclopedia::where('state_name', $state)->orWhere('city_name', $state)->latest('id')->paginate($size);
            if (!empty($encyclopedia)) {
                return $this->sendResponse($encyclopedia, 'Success', 200);
            } else {
                return $this->sendError('data not found', 404);
            }
        }
        catch (Exception $e) {
            return $this->sendError($e->getMessage(), 500);
        }
    }
    

    public function index()
    {
      return response()->json(Encyclopedia::whereNotNull('thumbnail')->select('thumbnail','state_name', 'country', 'slug')->get());
    }
    public function view($slug)
    {     
      $data = Encyclopedia::with('comments','images','itinerarypdfs','comments.user','comments.user.information')->where('slug',$slug)->first();
      return response()->json($data);
    }

    public function getComment($id){
        return response()->json(Encyclopediacomment::with('user','user.information')->where('encyclopedia_id',$id)->orderBy('created_at','DESC')->get());
    }
    
    public function PostComment($guard_name, Request $request){
        
        $user = Auth::guard($guard_name."-api")->user();
        $validator = Validator::make($request->all(),[
            'body' => 'required',
            'encyclopedia_id' => 'required|exists:encyclopedias,id'
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }
        $encyclopedia_comment = new Encyclopediacomment;
        if($guard_name == "school"){
            $encyclopedia_comment->edu_institute_id = $user->id??0;
        }
        else if($guard_name == "company"){
            $encyclopedia_comment->company_user_id = $user->id??0;
        }
        else if($guard_name == "family"){
            $encyclopedia_comment->family_user_id = $user->id??0;
        }
        $encyclopedia_comment->encyclopedia_id = $request->encyclopedia_id; 
        $encyclopedia_comment->body = $request->body; 
        $encyclopedia_comment->parent_id = $request->parent_id??NULL; 
        $encyclopedia_comment->save(); 
        return response()->json($encyclopedia_comment);
    }

    public function Pdf($slug){
        $data = Itinerarypdf::where('slug',$slug)
            ->select(['name','slug','id'])
            ->first();
        return response()->json($data);
    }
}
