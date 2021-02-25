<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Flight 

*/
namespace App\Http\Controllers\Admin\Transport;
use App\Http\Resources\AirCollection;
use App\Model\Transport\Flight;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FlightController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(Flight::select([
            'id','name','code'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return response()->json(Flight::get());
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
        flight::create($this->validateFlight($request));
        return response()->json('successfully added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\flight  $flight
     * @return \Illuminate\Http\Response
     */
    public function show(Flight $flight)
    {
        return response()->json($flight);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\flight  $flight
     * @return \Illuminate\Http\Response
     */
    public function edit(Flight $flight)
    {
        return response()->json($flight);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\flight  $flight
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Flight $flight)
    {
        $flight->update($this->validateFlight($request));
        return response()->json('successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\flight  $flight
     * @return \Illuminate\Http\Response
     */
    public function destroy(Flight $flight)
    {
        $flight->delete();
        return response()->json('successfully deleted');
    }

    public function validateFlight($request)
    {
        return $this->validate($request,[
            'code' => 'required',
            'name' => 'required'
        ]);
    }
}
