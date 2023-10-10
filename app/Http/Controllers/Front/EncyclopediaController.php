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

    public function PostComment(Request $request){
        // $user_type = $this->user_category("school");
        // return $user_type;
        // $user = Auth::user();

        // $user_category = new UserCategory(); 
        // $user_type = $user_category->user_category($request->user_profession??'');
        // return $user_type;
        $user_type = $this->user_category($request->user_type??'');
        $edu_institutes = Auth::guard($user_type)->user();

        // $edu_institutes = Auth::guard($user_type)->user();
        // $edu_institutes_id =  12;
        $validator = Validator::make($request->all(),[
            'body' => 'required',
            'encyclopedia_id' => 'required|exists:encyclopedias,id'
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }

        $data = [
            'encyclopedia_id' => $request->encyclopedia_id,
            'edu_institute_id' => $edu_institutes->id??0,
            'body' => $request->body,
            'parent_id' => $request->parent_id??NULL
        ];
        $data = Encyclopediacomment::create($data);
        return response()->json($data);
    }

    public function Pdf($slug){
        $data = Itinerarypdf::where('slug',$slug)
            ->select(['name','slug','id'])
            ->first();
        return response()->json($data);
    }
}
