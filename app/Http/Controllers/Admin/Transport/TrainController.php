<?php
/* 
Created by : Ajay yadav 
Purpose : Manage train 

*/
namespace App\Http\Controllers\Admin\Transport;

use App\Model\Transport\Train;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TrainController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(Train::select([
            'id','code','name','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        return response()->json(Train::get());
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
        Train::create($this->validateTrain($request));
        return response()->json('successfully added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\train  $train
     * @return \Illuminate\Http\Response
     */
    public function show(Train $train)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\train  $train
     * @return \Illuminate\Http\Response
     */
    public function edit(Train $train)
    {
        return response()->json($train);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\train  $train
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Train $train)
    {
        $train->update($this->validateTrain($request));
        return response()->json('successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\train  $train
     * @return \Illuminate\Http\Response
     */
    public function destroy(Train $train)
    {
        $train->delete();
        return response()->json('successfully deleted');
    }

    public function validateTrain($request)
    {
        return $this->validate($request,[
            'code' => 'required|numeric',
            'name' => 'required'
        ]);
    }
}
