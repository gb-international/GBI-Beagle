<?php

namespace App\Http\Controllers\Admin\Location;

use App\Model\Location\State;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Rules\AlphaSpace;

class StateController extends Controller
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
    public function store(Request $request)
    {
        $this->validateState($request);
        $state = new State();
        $state->country_id = $request->country_id;
        $state->name = $request->name;
        $state->save();
       return response()->json(['Message'=> 'Successfully Added...']);
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
    public function update(Request $request, State $state)
    {
        $state->update($this->validateState($request));
        return response()->json(['message'=>'Successfully Updated']);
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
