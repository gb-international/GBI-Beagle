<?php

namespace App\Model\TravellerPolicy;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TravellerPolicyCategory extends Model
{
    use HasFactory;
    protected $table = 'traveller_policy_categorys';
    protected $fillable = ['id', 'name', 'created_at', 'updated_at', 'deleted_at'];
}
