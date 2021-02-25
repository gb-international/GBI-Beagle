<?php

namespace App\Http\Controllers\Admin\Tour;

use App\Model\Tour\Tourtype;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TourtypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(Tourtype::select('id','name','updated_at')
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        return response()->json(Tourtype::get());
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
        Tourtype::create($this->validateTourtype($request));
        return response()->json(['Message'=> 'successfull']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function show(Tourtype $tourtype)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function edit(Tourtype $tourtype)
    {
        return response()->json($tourtype);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tourtype $tourtype)
    {
        $tourtype->update($this->validateTourtype($request));
        return response()->json(['Message'=> 'successfull']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tourtype $tourtype)
    {
        $tourtype->delete();
        return response()->json('successfully deleted');
    }

    public function validateTourtype($request)
    {
        return $this->validate($request,[
            'name'=>'required|unique:tourtypes,name' 
        ]);
    }
}
