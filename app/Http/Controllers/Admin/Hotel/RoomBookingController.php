<?php
/* 
Created by : Manas
Purpose : Manage Room Booking

*/

namespace App\Http\Controllers\Admin\Hotel;

use App\Model\Hotel\BookedRooms;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RoomBookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(BookedRooms::select([
            'id','hotel_id','room_id','room_category','customer_id', 'occupancy_type'
            ])
            ->latest('updated_at')
            ->paginate($size));
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
        $this->validate($request,[
            'price'=>'required',
            'check_in'=>'required',
            'check_out'=>'required',
            'hotel_id' => 'required',
            'room_category' => 'required',
            'price' => 'required',
            'person' => 'required',
            'customer_id' => 'required',
            'max_capacity' => 'required',
            'meal_plan' => 'required'
        ]);
       
        BookedRooms::create($request->all());
        return response()->json('Successfully Created');         
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BookedRooms  $bookedroom
     * @return \Illuminate\Http\Response
     */
    public function show(BookedRooms $bookedroom)
    {
        return response()->json($bookedroom);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\BookedRooms  $bookedroom
     * @return \Illuminate\Http\Response
     */
    public function edit(BookedRooms $bookedroom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\BookedRooms  $bookedroom
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BookedRooms $bookedroom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BookedRooms  $bookedroom
     * @return \Illuminate\Http\Response
     */
    public function destroy(BookedRooms $bookedroom)
    {
        $bookedroom->delete();
        return response()->json('Deleted');
    }
}
