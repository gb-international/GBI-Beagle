<?php
namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller;
use App\Model\User\Subscriber;
use App\User;
use Illuminate\Http\Request;
use App\Jobs\SubscribeJob;
use App\Model\School\EducationInstitute as EduInstitute;
class SubscriberController extends Controller
{

    public function store(Request $request){
        $data = $this->validate($request,[
            'email'=>'unique:subscribers,email|required|email',
            'name'=>'required',
            'client_type'=> ''
        ]);
        
        // check if user in users table
        if($eduInstitute = EduInstitute::where('email',$data['email'])->first()){
            $data['edu_institute_id'] = $eduInstitute->id??12;
            Subscriber::create($data);
        }else{
            // add data to table
            Subscriber::create($data);
        }
        SubscribeJob::dispatchNow($data);        
        return response()->json('success');
    }

    public function unsubscribe($id){
        
    }
}
