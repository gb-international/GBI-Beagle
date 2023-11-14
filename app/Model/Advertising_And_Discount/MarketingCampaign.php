<?php

namespace App\Model\Advertising_And_Discount;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Helpers\UniqueSlug;

class MarketingCampaign extends Model
{
    use HasFactory;
    protected $table = "marketing_campaigns";
    protected $fillable = ['title', 'description', 'slug','alt','image','start_date','end_date'];
    
    public function meta_keywords(){
        return $this->belongsToMany('App\Model\Hotel\MetaKeyword');
    }

    public function setTitleAttribute($value)
    {
        $this_id = $this->id??0;
        $this->attributes['title'] = $value;
        $marketing_campaign = new MarketingCampaign;
        $unique_slug_helper = new UniqueSlug(); 
        $unique_slug = $unique_slug_helper->unique_slug(Str::slug($value,'-'), $marketing_campaign, $this_id, 'slug');
        $this->attributes['slug'] = $unique_slug;
    }
}
