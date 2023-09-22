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
        $user = Auth::user();
        $validator = Validator::make($request->all(),[
            'body' => 'required',
            'encyclopedia_id' => 'required|exists:encyclopedias,id'
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }

        $data = [
            'encyclopedia_id' => $request->encyclopedia_id,
            'user_id' => $user->id,
            'body' => $request->body,
            'parent_id' => $request->parent_id
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
