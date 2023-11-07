<?php
/*
Created by : Manas
Purpose : Manage Banquet Category

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Controllers\Controller;
use App\Model\Hotel\BanquetCategory;
use Illuminate\Http\Request;
use App\Http\Requests\Admin\Hotel\BanquetCategoryRequest;
use Validator;
//use App\Traits\ImageTrait;

class BanquetCategoryController extends Controller
{    
    public function all($size)
    {
        return response()->json(BanquetCategory::select([
            'id', 'title', 'description', 'dimension_type', 'length', 'width', 'height', 'area', 'seating_type', 'no_of_people', 'updated_at'
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

    public function store(BanquetCategoryRequest $request)
    {
        try{
            $banquet_category = new BanquetCategory();
            $banquet_category->title = $request->title??'';
            $banquet_category->description = $request->description??'';
            $banquet_category->dimension_type = $request->dimension_type??'';
            $banquet_category->length = $request->length??0; 
            $banquet_category->width = $request->width??0; 
            $banquet_category->height = $request->height??0; 
            $banquet_category->area = $request->area??0; 
            $banquet_category->seating_type = $request->seating_type??0; 
            $banquet_category->no_of_people = $request->no_of_people??0; 
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

    public function update(BanquetCategoryRequest $request, $id)
    {
        try{
            $banquetcategory = BanquetCategory::find($id);
            $banquetcategory->title = $request->title??$banquetcategory->title;
            $banquetcategory->description = $request->description??$banquetcategory->description;
            $banquetcategory->dimension_type = $request->dimension_type??$banquetcategory->dimension_type;
            $banquetcategory->length = $request->length??$banquetcategory->length; 
            $banquetcategory->width = $request->width??$banquetcategory->width; 
            $banquetcategory->height = $request->height??$banquetcategory->height; 
            $banquetcategory->area = $request->area??$banquetcategory->area; 
            $banquetcategory->seating_type = $request->seating_type??$banquetcategory->seating_type; 
            $banquetcategory->no_of_people = $request->no_of_people??$banquetcategory->no_of_people; 
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
