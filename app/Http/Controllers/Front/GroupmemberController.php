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
        ]);

        return response()->json(Groupmember::where('tour_id',$request->tour_id)->get());
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
