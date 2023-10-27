<?php
/*
Created by : Manas
Purpose : Manage Room Category

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Controllers\Controller;
use App\Model\Hotel\RoomCategory;
use Illuminate\Http\Request;
use Validator;
//use App\Traits\ImageTrait;

class RoomCategoryController extends Controller
{
    
    public function all($size)
    {
        return response()->json(RoomCategory::select([
            'id','description','title','updated_at'])->latest('updated_at')->paginate($size));
    }

    public function index()
    {
        return response()->json(RoomCategory::select(['id','description','title','updated_at'])->latest('updated_at')->get());
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [ 
                'title'=>'required',
                'description'=>'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
            }
            $room_category = new RoomCategory();
            $room_category->title = $request->title??'';
            $room_category->description = $request->description??'';
            $room_category->save();
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull created');
    }

    public function show($id)
    {
        $roomcategory = RoomCategory::find($id);
        return response()->json($roomcategory);
    }

    public function edit($id)
    {
        $roomcategory = RoomCategory::find($id);
        return response()->json($roomcategory);
    }

    public function update(Request $request, $id)
    {
        try{
            $validator = Validator::make($request->all(), [ 
                'title'=>'required',
                'description'=>'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
            }            
            $room_category = RoomCategory::find($id);
            $room_category->title = $request->title??$room_category->title;
            $room_category->description = $request->description??$room_category->description;
            $room_category->save();
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull updated');
    }

    public function destroy($id)
    {
        try{
            $data = RoomCategory::where('id',$id)->first();
            if(!empty($data)){
                $data->delete();
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('Successfully deleted');
    }
}
