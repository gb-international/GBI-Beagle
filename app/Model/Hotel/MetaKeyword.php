<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MetaKeyword extends Model
{
    use HasFactory;
    protected $table = "meta_keywords";
    protected $fillable = ['title', 'created_at', 'updated_at', 'deleted_at'];
}
