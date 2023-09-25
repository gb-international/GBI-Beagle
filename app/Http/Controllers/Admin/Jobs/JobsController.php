<?php
/*
Created by : Manas
Purpose : GBI Job/Positions management

*/
namespace App\Http\Controllers\Admin\Jobs;
use App\Http\Controllers\Controller;
use App\Model\Jobs\JobPositions;
use App\Rules\AlphaSpace;
use Illuminate\Http\Request;

class JobsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(JobPositions::select([
            'id','title', 'job_type', 'updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return response()->json(JobPositions::select([
            'id','title', 'job_type', 'updated_at'
            ])
            ->latest('updated_at')
            ->get(7));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $jobPositions = JobPositions::create($this->validateJob($request));
        return response()->json('Succesfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Job\JobPositions  $JobPos
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $JobPos = JobPositions::find($id);
        return response()->json($JobPos);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Job\JobPositions  $JobPos
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $JobPos = JobPositions::find($id);
        return response()->json($JobPos);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Job\JobPositions $JobPos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $JobPos = JobPositions::find($id);
        $JobPos->update($this->validateJob($request));
        return response()->json('Succesfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Job\JobPositions  $JobPos
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $JobPos = JobPositions::find($id);
        $JobPos->delete();
        return response()->json('Succesfully deleted');
    }
        // Validate Job 
        public function validateJob($request)
        {
            return $this->validate($request, [
                'title' => ['required',new AlphaSpace],
                'description' => 'required',
                'job_type' => 'required|in:Reservations,Technology & Design, Operation, Finance, Product & Project Management, Sales & Marketing',
            ]);
        }
}
