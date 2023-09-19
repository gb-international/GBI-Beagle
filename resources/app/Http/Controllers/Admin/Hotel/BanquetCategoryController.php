<?php
/*
Created by : Manas
Purpose : Manage Banquet Category

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Controllers\Controller;
use App\Model\Hotel\BanquetCategory;
use Illuminate\Http\Request;
//use App\Traits\ImageTrait;

class BanquetCategoryController extends Controller
{
    
    public function all($size)
    {
        return response()->json(BanquetCategory::select([
            'id','description','title','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return response()->json(BanquetCategory::select([
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
        BanquetCategory::create($data);
        return response()->json('succesfull created');
    }

    public function show($id)
    {
        $banquetcategory = BanquetCategory::find($id);
        return response()->json($banquetcategory);
    }

    public function edit($id)
    {
        $banquetcategory = BanquetCategory::find($id);
        return response()->json($banquetcategory);
    }

    public function update(Request $request, $id)
    {
        $banquetcategory = BanquetCategory::find($id);
        $data = $request->all();        
        /*if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            //$data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.hotel_image'),$imagename);
            $this->AwsDeleteImage($banquetcategory->image);
        }else{
            unset($data['image']);
        }*/
        $banquetcategory->update($data);
        return response()->json('succesfull created');
    }

    public function destroy($id)
    {
        $banquetcategory = BanquetCategory::find($id);
        //$this->AwsDeleteImage($banquetcategory->image);
        $banquetcategory->delete();
        return response()->json('successfully deleted');
    }
}
