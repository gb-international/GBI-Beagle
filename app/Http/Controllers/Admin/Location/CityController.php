<?php
/* 
Created by : Ajay yadav 
Purpose : Manage City 

*/

namespace App\Http\Controllers\Admin\Location;

use App\Model\Location\City;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CityCollection;
use App\Rules\AlphaSpace;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(City::with('state')
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        return CityCollection::collection(City::with('state')->get());
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
        City::create($this->validateCity($request));
       return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function show(City $city)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function edit(City $city)
    {
      return response()->json($city);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, City $city)
    {   
        $validated =  $this->validate($request, [
            'name' => ['required',new AlphaSpace],
            'country_id' => 'required',
            'state_id' => 'required',
        ]);
        $city->update($validated);
        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function destroy(City $city)
    {
        $city->delete();
        return response()->json('successfully deleted');
    }

    public function validateCity($request)
    {
      return $this->validate($request, [
        'name' => ['required','unique:cities',new AlphaSpace],
        'country_id' => 'required',
        'state_id' => 'required',
      ]);
    }
}
