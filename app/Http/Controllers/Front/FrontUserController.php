<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Front user 

*/
namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Model\Tour\Tour;
use App\Model\Itinerary\Itinerary;
use App\User;
use App\Search;
use App\Model\User\UserMoreInfo;
use Auth;
use DB;
use Image;
use Session;
use Hash;
class FrontUserController extends Controller
{
	// Check Login for the user
	public function checklogin(Request $request){
		$this->validate($request, [
	      'email'   => 'required|email',
	      'password'  => 'required|alphaNum|min:3'
	     ]);

        $more = UserMoreInfo::where('email', $request->email)->first();
        if(Hash::check($request->get('password'),$more->password)){
            return response()->json(['id'=>$more->id,'user_role'=>'2']);
        }else{
            return response()->json(['msg', 'Incorrect Login Details'])->setStatusCode(404);
        }
	}
	// Logout Function for the user to logout the user
	public function logout(){
	    Auth::logout();
    }

    // Register user 
    public function UserRegister(Request $request){
  
    	$this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:user_more_infos',
            'phone_no'=>'required',
            'otp' => 'required',
            'password' => 'required|confirmed|min:6'
        ]);

        $more = new UserMoreInfo();

        $more->name = $request->name;
        $more->email = $request->email;
        $more->password = bcrypt($request->password);
        $more->gbi_link = $request->gbi_link;
        $more->client_type = $request->client_type;// Client type
        $more->client_input = $request->client_input; // client input
        $more->phone_no = $request->phone_no;
        $more->otp = $request->otp;
        $more->varified = '1';
        $more->photo = 'user.png';
        $more->gender = '';

        $more->save();
        return response()->json('Successfully Registered !!!');
    }
    public function userdata($id){
    	//$id = Auth::user()->id;
    	if(isset($id)){

	        $data =  User::with('search','information')->where('id',$id)->get();

	        $upcoming_tour = Tour::leftjoin('itineraries', 'itineraries.id', '=', 'tours.itinerary_id')
	            ->select('itineraries.title','itineraries.photo','tours.itinerary_id','tours.tour_start_date')
	            ->orderBy('tours.tour_start_date','desc')
	            ->where('tours.status','1')
	            ->take(8)
	            ->get();


	        // Popular Detination 
        	$popular_detination = DB::table('tours')
			    ->selectRaw("itineraries.title,'itineraries.photo',tours.itinerary_id, COUNT('tours.itinerary_id') as itineraryCount")
			    ->join('itineraries', 'itineraries.id', '=', 'tours.itinerary_id')
			    ->groupBy('itineraries.title','tours.itinerary_id','itineraries.photo')
			    ->orderBy('itineraryCount', 'desc')
			    ->take(3)
			    ->get();

	        // User Recent Search
			$recent_search = Search::leftjoin('itineraries', 'itineraries.id', '=', 'searches.search')
	            ->select('itineraries.title','itineraries.photo','searches.search')
	            ->where('searches.user_id',$id)
	            ->orderBy('searches.id','desc')
	            ->take(3)
	            ->get();

	        // Return data
	            return response()->json(['data'=>$data,'upcoming_tour'=>$upcoming_tour,'popular_detination'=>$popular_detination,'recent_search'=>$recent_search]);
	    }else{
	    	return response()->json('message','Please Enter user id');
	    }
    }
    public function UserImage(Request $request,$id){
            $strpos = strpos($request->input('photo'),';');
            $sub = substr($request->input('photo'),0,$strpos);
            $ex = explode('/',$sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->input('photo'))->resize(138, 138);
            $upload_path = public_path()."/uploadimage/";
            $img->save($upload_path.$name);
    	    UserMoreInfo::where('id', $id)->update(array('photo' => $name));
    	    return response()->json(['photo'=>$name]);
    }
    // User Edit 

    public function edit($id){
        $data = UserMoreInfo::where('id',$id)->get();
        //$user = User::find($id);
      return response()->json($data[0]);
    }

    // User Update data
    public function update(Request $request, $id){
        $more = UserMoreInfo::find($id);
        $this->validate($request, [
            'name' => 'required',
            //'gender' => 'gender',
            // 'email' => 'required|email',
            // 'phone_no'=>'required',
             'father_name'=> 'required'
            // 'mother_name'=> 'required',
            // 'dob'=> 'required',
            // 'address'=> 'required',
            // 'city'=> 'required',
            // 'state'=> 'required',
            // 'country'=> 'required',
            // 'zip_code'=> 'required',
            // 'user_class'=> 'required',
            // 'admission_year'=> 'required|numeric'
        ]);


        $more->name = $request->name;
        $more->email = $request->email;
        $more->client_type = $request->client_type;
        $more->client_input = $request->client_input;


        $more->father_name = $request->father_name;
        $more->mother_name = $request->mother_name;
        $more->dob = $request->dob;
        $more->address = $request->address;
        $more->city = $request->city;
        $more->state = $request->state;
        $more->country = $request->country;
        $more->zip_code = $request->zip_code;
        $more->user_class = $request->user_class;
        $more->admission_year = $request->admission_year;
        $more->gender = $request->gender;

        $more->update();

        return response()->json('successfully Updated');
    }

    public function details()
    {
        return response()->json('This is details page');
    }

}
