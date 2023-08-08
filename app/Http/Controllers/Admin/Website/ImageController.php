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
            $path = $request->file('image')->store('images/img', 's3');
            $path = \Storage::disk('s3')->url($path);
            return response()->json(['url'=>$path]);
        }
    }

    public function delete(Request $request)
    {
        $this->AwsDeleteImage($request->image);
    }    
}
