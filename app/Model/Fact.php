<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fact extends Model
{
    use HasFactory;
    protected $table = 'facts';
    protected $fillable = ['id', 'name', 'description', 'status', 'created_at', 'updated_at', 'deleted_at'];
}
