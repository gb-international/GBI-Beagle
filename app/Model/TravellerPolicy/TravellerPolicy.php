<?php

namespace App\Model\TravellerPolicy;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Model\TravellerPolicy\TravellerPolicyCategory;
use App\Model\Location\Country;
class TravellerPolicy extends Model
{
    use HasFactory;
    protected $table = 'traveller_policys';
    protected $fillable = ['id', 'customer_type', 'country_id', 'name', 'traveller_policy_category_id', 'policy_type', 'description', 'created_at', 'updated_at', 'deleted_at'];

    public function policy_category()
    {
        return $this->belongsTo(TravellerPolicyCategory::class, 'traveller_policy_category_id')->select('id','name',);
    }
    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id')->select('id','name',);
    }
}
