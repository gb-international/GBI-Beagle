<?php
/*
Created by : Ajay yadav 
Purpose : GBI States (Blog ) manage here

*/
namespace App\Http\Controllers\Admin\Location;

use App\Model\Location\State;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Rules\AlphaSpace;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\state\StateRequest;
class StateController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(State::with('country')
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        return response()->json(State::with('country')->get());
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
    public function store(StateRequest $request)
    {
        try{
            $state = new State();
            $state->country_id = $request->country_id??'';
            $state->name = $request->name??'';
            $state->save();
            return $this->sendResponse($state,'Successfully Added...');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\State  $state
     * @return \Illuminate\Http\Response
     */
    public function show(State $state)
    {
        return response()->json($state);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\State  $state
     * @return \Illuminate\Http\Response
     */
    public function edit(State $state)
    {
        return response()->json($state);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\State  $state
     * @return \Illuminate\Http\Response
     */
    public function update(StateRequest $request, State $state)
    {
        try{
            $data = array();
            $data['country_id'] = $request->country_id??'';
            $data['name'] = $request->name??'';
            $state->update($data);
            return $this->sendResponse($state,'Successfully Updated');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\State  $state
     * @return \Illuminate\Http\Response
     */
    public function destroy(State $state)
    {
        $state->delete();
        return response()->json('successfully deleted');
    }

    public function validateState($request)
    {
      return $this->validate($request, [
        'name' => ['required','unique:states',new AlphaSpace],
        'country_id' => 'required',
      ]);
    }
}
