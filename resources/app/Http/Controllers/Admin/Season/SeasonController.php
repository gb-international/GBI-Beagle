<?php
/* 
Created by : Manas 
Purpose : Manage Seasons
*/
namespace App\Http\Controllers\Admin\Season;

use App\Model\Season\Season;
use App\Model\DefaultSet\DefaultSet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SeasonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(Season::latest('created_at')
            ->paginate($size));
    }
    public function index()
    {
        return response()->json(Season::get());
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = Season::create($this->validateSeason($request));
        $data->save();
        return response()->json(['Message'=> 'successfull']);
    }

    public function currentSeason(){
        return response()->json(DefaultSet::where('id', '1')
            ->first());
    }

    public function setSeason(Request $request){
        $data = DefaultSet::where('id', '1')
        ->first();
        $data->current = $request->current;
        $data->save();
        return response()->json(['Message'=> 'successfull']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Season $season
     * @return \Illuminate\Http\Response
     */
    public function show(Season $season)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Season $season
     * @return \Illuminate\Http\Response
     */
    public function edit(Season $season)
    {
        return response()->json($season);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Season $season
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Season $season)
    {
        //$season->update($this->validateSeason($request));
        $data = $this->validateSeason($request);
        $season->update($data);
        return response()->json(['Message'=> 'successfull']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Season $season
     * @return \Illuminate\Http\Response
     */
    public function destroy(Season $season)
    {
        $season->delete();
        return response()->json('successfully deleted');
    }

    public function validateSeason($request)
    {
        return $this->validate($request,[
            'name'=>'required',
            'description'=>'required'
        ]);
    }
}
