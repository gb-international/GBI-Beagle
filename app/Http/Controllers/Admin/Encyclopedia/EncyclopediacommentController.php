<?php

namespace App\Http\Controllers\Admin\Encyclopedia;

use App\Model\Encyclopedia\Encyclopediacomment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EncyclopediacommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Encyclopediacomment::get());
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Encyclopediacomment  $encyclopediacomment
     * @return \Illuminate\Http\Response
     */
    public function show(Encyclopediacomment $encyclopediacomment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Encyclopediacomment  $encyclopediacomment
     * @return \Illuminate\Http\Response
     */
    public function edit(Encyclopediacomment $encyclopediacomment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Encyclopediacomment  $encyclopediacomment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Encyclopediacomment $encyclopediacomment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Encyclopediacomment  $encyclopediacomment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Encyclopediacomment $encyclopediacomment)
    {
        $encyclopediacomment->delete();
        return response()->json('successfull deleted');
    }
}
