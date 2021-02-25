<?php

namespace App\Http\Controllers\Admin\Reservation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Schoolbankdetail;
use App\Model\Tour\Tour;
use App\Model\Tour\Userpayment;
use App\Model\Tour\TourUser;

class BookeduserController extends Controller
{
     public function all($tour_id)
    {
        $data = '';
        $tour = Tour::where('tour_id',$tour_id)
            ->select('school_id')
            ->with('school:id,user_id')
            ->first();
        if($tour){
            $user_id = $tour->school->user_id;
            $userpayment = Userpayment::where([
                'user_id'=>$user_id,
                'tour_code'=>$tour_id
            ])->first();
            $where = [['tour_code','=',$tour_id],['user_id','!=', $user_id]];
            if($userpayment){
                if($userpayment->payment_mode == 'self'){
                    $data = TourUser::where($where)->with('user:id,name')->get();
                    if($userpayment->status=='success'){
                        foreach ($data as $d) {
                            $d['payment'] = 'success';
                            $d['paid_by'] = 'teacher';
                        }
                    }else{
                        foreach ($data as $d) {
                            $d['payment'] = 'pending';
                            $d['paid_by'] = 'teacher';
                        }
                    }
                }
                if($userpayment->payment_mode == 'student'){
                    $data = TourUser::where($where)
                                ->with('user:id,name')
                                ->get();
                    foreach ($data as $d ) {
                        if($d->status == 'success'){
                            $d['payment'] = 'success';
                            $d['paid_by'] = 'student';
                        }else{
                            $d['payment'] = 'pending';
                            $d['paid_by'] = 'student';
                        }
                    }
                }
            }else{
                $data = TourUser::where($where)->with('user:id,name')->get();
                foreach ($data as $d) {
                    $d['payment'] = 'pending';
                    $d['paid_by'] = 'none';
                }
            }
        }
        $alldata['data'] = $data;
        return response()->json($alldata);
    }  

    public function edit($id)
    {
        $data = TourUser::where('id',$id)->first();
        return response()->json($data);
    }
    public function show($id)
    {
        $tour = TourUser::where('id',$id)->with('user:id,name')->first();
        return response()->json($tour);
    }
    public function update(Request $request,$id){
        $tour = TourUser::where('id',$id)->first();
        $tour->update($request->all());
        return response()->json('updated successfully');
    }
    public function destroy(TourUser $touruser)
    {
        $touruser->delete();
        return response()->json('successfully deleted');
    }
    public function bankdetails($tour_code){
        $data = Schoolbankdetail::Banks($tour_code)->get();
        return response()->json($data);
    }

}
