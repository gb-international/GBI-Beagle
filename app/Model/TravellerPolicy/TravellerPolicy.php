<?php

namespace App\Model\TravellerPolicy;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TravellerPolicy extends Model
{
    use HasFactory;
    protected $table = 'traveller_policys';
    protected $fillable = ['id', 'name', 'traveller_policy_category_id', 'policy_type', 'description', 'created_at', 'updated_at', 'deleted_at'];
}
