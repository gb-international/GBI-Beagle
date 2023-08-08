<?php

namespace App\Helpers;
use App\Model\LinkShortner\ShortLink;
use Str;

class ShortenLink  
{
    public function shorten($link){

        $data['link'] = $link;

        do {
          $data['shortCode'] = Str::random(6);
          $checkDB = ShortLink::where('shortCode', $data['shortCode'])->count();
        } while ($checkDB != 0);
   
        $shLink = ShortLink::create($data);

        return $shLink->shortCode;
    }
}
