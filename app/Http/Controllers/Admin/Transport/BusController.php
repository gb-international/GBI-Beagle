<?php
// php artisan make:controller Transport\BusController --resource --model=bus
/* 
Created by : Ajay yadav 
Purpose : Manage Transport 

*/
namespace App\Http\Controllers\Admin\Transport;

use App\Model\Transport\Bus;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BusCollection;

class BusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(Bus::select([
            'id','company_name','seater','seat_type','updated_at','price'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        return new BusCollection(Bus::get());
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
        Bus::create($this->validateBus($request));
        return response()->json(['Message'=> 'successfull']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\bus  $bus
     * @return \Illuminate\Http\Response
     */
    public function show($bus)
    {
        $bus = Bus::where('id',$bus)->first();
        return response()->json($bus);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\bus  $bus
     * @return \Illuminate\Http\Response
     */
    public function edit($bus)
    {
        $bus = Bus::where('id',$bus)->first();
        return response()->json($bus);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\bus  $bus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bus $bus)
    {
        $bus->update($this->validateBus($request));
        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\bus  $bus
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bus $bus)
    {
        $bus->delete();

        return response()->json('successfully deleted');
    }

    public function validateBus($request)
    {
        return $this->validate($request,[
            'company_name' => 'required',
            'seater' => 'required',
            'seat_type' => 'required',
            'price' => 'required' 
        ]);
    }
}
