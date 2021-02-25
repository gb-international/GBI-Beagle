<?php

namespace App\Http\Controllers\Admin\Website;

use App\Model\Website;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class WebsiteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Website::get());
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
     * @param  \App\Website  $website
     * @return \Illuminate\Http\Response
     */
    public function show(Website $website)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Website  $website
     * @return \Illuminate\Http\Response
     */
    public function edit(Website $website)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Website  $website
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Website $website)
    {
        $validate = $this->validate($request, [
          'video' => 'required',
        ]);
        
        // $video = $this->uploadVideo($request->input('video'));
        $website->video = $request->input('video');
        $website->save();
        return response()->json('Successfull');
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Website  $website
     * @return \Illuminate\Http\Response
     */
    public function destroy(Website $website)
    {
        //
    }

    // public function uploadVideo($data){
    //     $filename = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($data, 0, strpos($data, ';')))[1])[1];
    //     $explode = explode(',', $data); // explode file 
    //     $data = base64_decode($explode[1]);
    //     $url =  public_path().'/assets/front/' . $filename;
    //     file_put_contents($url , $data);
    //     return $filename;
    // } 
}
