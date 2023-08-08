<?php
/*
Created by : Manas
Purpose : GBI Job applications

*/
namespace App\Http\Controllers\Admin\Jobs;

use App\Http\Resources\JobAppResource;
use App\Http\Controllers\Controller;
use App\Model\Jobs\JobApplications;
use Illuminate\Http\Request;

class JobApplicationController extends Controller
{
     /**
     * Display a listing of the resource (sorted New to Old).
     */
    public function index()
    {    
        $data = JobApplications::orderBy('updated_at', 'desc')->paginate(5);
        return JobAppResource::collection($data);
    }

    /**
     * Display a listing of the resource (sorted Old to New).
     */
    public function indexOld()
    {    
        $data = JobApplications::orderBy('updated_at')->paginate(5);
        return JobAppResource::collection($data);
    }
    /**
     * Display the specified resource.
     */
    public function show($id)
    {
      $data = JobApplications::where('id',$id)->first();
      return response()->json($data);
    }
    public function saveStatus(Request $request){
        $data = JobApplications::find($request->id);
        $data->status = $request->status;
        $data->save();
        return response()->json("Status Changed!");
    }
}
