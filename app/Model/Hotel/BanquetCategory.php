<?php
namespace App\Model\Hotel;
use Illuminate\Database\Eloquent\Model;

class BanquetCategory extends Model
{
    protected $guarded = [];
    protected $table = "banquetcategorys";
    protected $fillable = ['id', 'title', 'description', 'dimension_type', 'length', 'width', 'height', 'area', 'seating_type', 'people', 'created_at', 'updated_at', 'deleted_at'];
}
