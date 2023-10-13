<?php
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Gallery\Gallery;
use App\Model\Encyclopedia\Encyclopedia;
use App\Model\Encyclopedia\EncyclopediaImage;
use App\Http\Controllers\Admin\BaseController;

class GalleryController extends BaseController
{

    public function index($categorytype, $size=0){
        if (empty($size)) {
            $size = 10;
        }
        $gallery = Gallery::where('category',$categorytype)
            ->with([
                'school:id,school_name','images'
            ])
            ->simplePaginate($size);
        return response()->json($gallery);
    }

    public function show($slug){
        // $id = explode('-',$slug);
        // $id = end($id);
        try{
        $data = Gallery::where('slug',$slug)
            ->with(['images','school:id,school_name'])
            ->first();
            if(empty($data)){
                return $this->sendError("data does not found", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json($data);
    }

    public function search($qry, $categorytype){
        $data = Gallery::where('title','like',"%$qry%")
            ->where('category', $categorytype)
            ->get();
        return response()->json($data);
    }
}