<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Gallery\Gallery;

use App\Model\Encyclopedia\Encyclopedia;
use App\Model\Encyclopedia\EncyclopediaImage;

class GalleryController extends Controller
{

    public function index($slug){
        $gallery = Gallery::where('category',$slug)
            ->with([
                'school:id,school_name','images'
            ])
            ->simplePaginate(10);
        return response()->json($gallery);
    }

    public function show($slug){
        $id = explode('-',$slug);
        $id = end($id);
        $data = Gallery::where('id',$id)
            ->with(['images','school:id,school_name'])
            ->first();
        return response()->json($data);
    }
}