<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class BanquetCategories extends Model
{
    protected $guarded = [];

    protected $table = "banquet_category";


    public function banquet(){
        return $this->belongsTo('App\Model\Hotel\Banquet');
    }

}
