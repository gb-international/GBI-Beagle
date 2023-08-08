<?php
/* 
Created by : Manas
Purpose : Manage Hotel Rooms 

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Resources\Admin\HotelCollection;
use App\Model\Hotel\HotelNew as Hotel;
use App\Model\Hotel\HotelRooms;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;
use App\Rules\AlphaSpace;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size)
    {
        return response()->json(HotelRooms::select([
            'id','name', 'room_category', 'room_price'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        $room = HotelRooms::select('id','name', 'room_category', 'room_price')->get();
        return response()->json($room);
        //return RoomCollection::collection(HotelRooms::all());
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
        $data = $this->validateRoom($request);
        if($request->image){
            $count = 0;
            foreach($request->image as $img){
              $data['image'][$count] = $this->AwsFileUpload($img,config('gbi.room_image'),$request->alt);
              $count++;
            }
        }
        $data['image'] = serialize($data['image']);
        $room = HotelRooms::create($data);
        return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\room  $room
     * @return \Illuminate\Http\Response
     */
    public function show(HotelRooms $room)
    {
        return response()->json($room);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\room  $room
     * @return \Illuminate\Http\Response
     */
    public function edit(HotelRooms $room)
    {
        return response()->json($room);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\room  $room
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HotelRooms $room)
    {
        $data = $this->validateRoom($request);
        if($request->image){
            $count = 0;
            foreach($request->image as $img){
             if($img != $room->image[$count]){
                $data['image'][$count] = $this->AwsFileUpload($img,config('gbi.room_image'),$request->alt);
                $this->AwsDeleteImage($room->image[$count]);
             }
             $count++;
            }
        }
        $room->update($data);
        return response()->json(['message'=>$data]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\room  $room
     * @return \Illuminate\Http\Response
     */
    public function destroy(HotelRooms $room)
    {
        $this->AwsDeleteImage($room->image);
        $room->delete();
        return response()->json('successfully deleted');
    }


    // Validate room

    public function validateRoom($request)
    {
         return $this->validate($request, [

            'hotel_id' => 'required',
            'name' => ['required',new AlphaSpace],
            'room_category' => 'required',
            'room_price' => 'required',
            'ep_price' => 'required',
            'cp_price' => 'required',
            'map_price' => 'required',
            'apai_price' => 'required',
            'amenities' => 'required',
            'description' => 'required',
            'dimensions' => 'required',
            'room_images' => 'required',
            'occupancy_type' => 'required',
            'occ_price' => 'required',
            'max_occ' => 'required',
            'check_in' => 'required',
            'chceck_out' => 'required',          
      ]);
    }

}
