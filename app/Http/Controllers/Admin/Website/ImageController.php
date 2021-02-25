<?php

namespace App\Http\Controllers\Admin\Website;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Illuminate\Support\Facades\File;
class ImageController extends Controller
{
    use ImageTrait;
    public function upload(Request $request){
        $this->validate($request, [
            'image' => 'required|image|mimes:jpeg,png,jpg,bmp,gif,svg|max:2048',
        ]);
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/images/post/');
            $image->move($destinationPath, $name);
            return response()->json(['url'=>'/images/post/'.$name]);
        }
    }

    public function delete(Request $request)
    {
        $image = explode('/',$request->image);
        $path = '/images/post/'.end($image);
        $this->deleteImg($path);
    }

    
}
