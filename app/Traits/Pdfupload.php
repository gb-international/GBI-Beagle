<?php

namespace App\Traits;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Image;
use Illuminate\Support\Str;

trait Pdfupload  
{
    public function upload($file,$folder='',$imagename='') {
        $strpos = strpos($file,';');
        $sub = substr($file,0,$strpos);
        $ex = explode('/',$sub)[1];
        $name = Str::slug($imagename).time().rand(100,1000000).".".$ex;
        $img = Image::make($file)->resize(1140, 214);
        $upload_path = public_path().$folder;
        $img->save($upload_path.$name);
        return $name;
    }
}
