<?php
/* 
Created by : Manas
Purpose : Manage Hotel Rooms 

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Resources\Admin\HotelCollection;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;
use App\Http\Requests\Admin\Hotel\RoomRequest;
use App\Model\Hotel\Room;
use App\Model\Hotel\RoomPriceDetail;
use App\Model\Hotel\RoomImages;
use App\Http\Controllers\Admin\BaseController;
class RoomController extends BaseController
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
    public function store(RoomRequest $request)
    {
        try{  
            $data = array("room_category_id"=>$request->room_category_id??null, "description" => $request->description??'',"maximum_occupancy"=>$request->maximum_occupancy??0,
            "inches"=>$request->inches??0, "meal_plan_type"=>$request->meal_plan_type??'', "length"=>$request->length??0, "width" => $request->width??0, "height" => $request->height??'', "currency_type" => $request->currency_type??0);

            $room = Room::create($data);
            $room_id =  $room->id??0;
            if($request->room_price_details){
                foreach($request->room_price_details as $room_price_details){
                    RoomPriceDetail::create(array("room_id"=>$room_id, "occupancy_type"=>$room_price_details['occupancy_type']??'', "net_rate"=>$room_price_details['net_rate']??'',
                     "rack_rate"=>$room_price_details['rack_rate']??'', "discount"=>$room_price_details['discount']??''));
                }
            }

            if($request->images){
                foreach($request->images as $imagedata) {
                    $imagename = explode('.',$imagedata['name'])[0];
                    $img=$this->AwsFileUpload($imagedata['file'],config('gbi.room_image'),$imagename);
                    RoomImages::create(['room_id'=>$room_id,'image'=>$img,'alt'=>$imagename]);
                }
            }

        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull created');

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
    public function update(RoomRequest $request, Room $room)
    {
        try{
            $data = array("room_category_id"=>$request->room_category_id??$room->room_category_id, "description" => $request->description??$room->description,"maximum_occupancy"=>$request->maximum_occupancy??$room->maximum_occupancy, "meal_plan_type"=>$request->meal_plan_type??$room->meal_plan_type,
            "inches"=>$request->inches??$room->inches, "length"=>$request->length??$room->length, "width" => $request->width??$room->width, "height" => $request->height??$room->height, "currency_type" => $request->currency_type??$room->currency_type);

            $room->update($data);
            if($request->room_price_details){
                foreach($request->room_price_details as $room_price_details){
                    RoomPriceDetail::updateOrInsert(array("id"=>$room_price_details['id']??0), array("room_id"=>$room->id, "occupancy_type"=>$room_price_details['occupancy_type']??'', "net_rate"=>$room_price_details['net_rate']??'',
                     "rack_rate"=>$room_price_details['rack_rate']??'', "discount"=>$room_price_details['discount']??''));
                }
            }

            if($request->new_images){
                foreach($request->new_images as $imagedata) {
                    $imagename = explode('.',$imagedata['name'])[0];
                    $img=$this->AwsFileUpload($imagedata['file'],config('gbi.room_image'),$imagename);
                    RoomImages::create(['room_id'=>$room->id,'image'=>$img,'alt'=>$imagename]);
                }
            }
            
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successful updated');
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
            // 'check_in' => 'required',
            // 'chceck_out' => 'required',          
      ]);
    }

}
