<?php
namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\School\Groupmember;
use App\User;
use Auth;
class GroupmemberController extends Controller
{
    public function index(Request $request){
        $this->validate($request, [ 
            'tour_id' => 'required',
            'user_type'=>'required'
        ]);
        $where = ['tour_id'=>$request->tour_id,'user_type'=>$request->user_type];
        $data = Groupmember::where($where)
            ->get([
                'id','user_type','tour_id',
                'first_name','last_name',
                'email','gender','mobile','age'
            ]);
        return response()->json($data);
    }

    public function studentStore(Request $request){

        $user = Auth::user();
        foreach ($request->all() as $data) {
            $data['user_id'] = $user->id;
            Groupmember::create($data);
        }
        return response()->json(['success','Data added successfully']);
    }

    public function update(Request $request){
        $group_member = Groupmember::find($request->id);
        $group_member->update($request->all());
        return response()->json('success');
    }

    public function destroy(Request $request){
        $member = Groupmember::find($request->id);
        $member->delete();
        return response()->json("Successfully deleted");
    }
}
