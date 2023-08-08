<?php
/*
Created by : Manas
Purpose : Manage Room Category

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Controllers\Controller;
use App\Model\Hotel\RoomCategory;
use Illuminate\Http\Request;
//use App\Traits\ImageTrait;

class RoomCategoryController extends Controller
{
    
    public function all($size)
    {
        return response()->json(RoomCategory::select([
            'id','description','title','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return response()->json(RoomCategory::select([
            'id','description','title','updated_at'
            ])
            ->latest('updated_at')
            ->get());
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $data = $request->all();

        /*if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            //$data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.hotel_image'),$imagename);
            $data['alt'] = $imagename;
        }*/
        RoomCategory::create($data);
        return response()->json('succesfull created');
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
        $roomcategory = RoomCategory::find($id);
        $data = $request->all();        
        /*if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            //$data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.hotel_image'),$imagename);
            $this->AwsDeleteImage($roomcategory->image);
        }else{
            unset($data['image']);
        }*/
        $roomcategory->update($data);
        return response()->json('succesfull created');
    }

    public function destroy($id)
    {
        $roomcategory = RoomCategory::find($id);
        //$this->AwsDeleteImage($roomcategory->image);
        $roomcategory->delete();
        return response()->json('successfully deleted');
    }
}
