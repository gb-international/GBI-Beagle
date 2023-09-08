<?php
namespace App\Http\Controllers\Front;
use App\Model\Encyclopedia\Encyclopedia;
use App\Model\Encyclopedia\Encyclopediacomment;
use App\Model\Itinerary\Itinerary;
use App\Model\Itinerary\Itinerarypdf;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Http\Controllers\Admin\BaseController;
class EncyclopediaController extends BaseController
{
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

    public function Pdf($slug){
        $data = Itinerarypdf::where('slug',$slug)
            ->select(['name','slug','id'])
            ->first();
        return response()->json($data);
    }
    public function search(Request $request){

        try{
            $validator = Validator::make($request->all(), [
                'state_name' => 'required|exists:encyclopedias,state_name',
                'city_name' => 'exists:encyclopedias,city_name',
            ]);

            if ($validator->fails()) {
                return $this->errorValidate($validator->errors(), 422);
            }

            if(!empty($request->city_name??'')){
                $data = Encyclopedia::with('comments','images','itinerarypdfs','comments.user','comments.user.information')->where('state_name',$request->state_name??'')->where('city_name',$request->city_name??'')->get();
            }
            else{
                $data = Encyclopedia::with('comments','images','itinerarypdfs','comments.user','comments.user.information')->where('state_name',$request->state_name??'')->get();
            }
            
            return $this->sendResponse($data,'Successful', 200);
        }
        catch(Exception $e){
           return $this->sendError($e->getMessage(), 500);
        }
    }
}
