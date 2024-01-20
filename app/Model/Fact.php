<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fact extends Model
{
    use HasFactory;
    protected $table = 'facts';
    protected $fillable = ['id', 'name', 'description', 'status', 'country_id', 'state_id', 'city_id', 'meta_keyword', 'meta_title', 'meta_description', 'created_at', 'updated_at', 'deleted_at'];
     
    public function city()
    {
        return $this->belongsTo(Location\City::class, 'city_id')->select('id','name','state_id', 'country_id');
    }
}
