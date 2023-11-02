<?php
/*
Created by : Manas
Purpose : Manage Banquet Category

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Controllers\Controller;
use App\Model\Hotel\BanquetCategory;
use Illuminate\Http\Request;
use Validator;
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
        return response()->json(BanquetCategory::select(['id','description','title','updated_at'])->latest('updated_at')->get());
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
            $banquet_category = new BanquetCategory();
            $banquet_category->title = $request->title??'';
            $banquet_category->description = $request->description??'';
            $banquet_category->save();
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull created');
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
        try{
            $validator = Validator::make($request->all(), [ 
                'title'=>'required',
                'description'=>'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
            }            
            $banquetcategory = BanquetCategory::find($id);
            $banquetcategory->title = $request->title??$banquetcategory->title;
            $banquetcategory->description = $request->description??$banquetcategory->description;
            $banquetcategory->save();
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull updated');
    }

    public function destroy($id)
    {
        try{
            $data = BanquetCategory::where('id',$id)->first();
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
