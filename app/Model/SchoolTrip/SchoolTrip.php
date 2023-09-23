<?php

namespace App\Model\SchoolTrip;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Helpers\UniqueSlug;

class SchoolTrip extends Model
{
    use HasFactory;
    protected $table = 'school_trips';
    protected $fillable = [
        'id',
        'school_name',
        'trip_name',
        'ph_no',
        'no_of_student',
        'no_of_teachers',
        'banner_link',
        'slug1',
        'slug2',
        'source',
        'destination',
        'amount_paid',
        'amount_pending',
        'amount_total',
        'amt_per_pax',
        'start_date',
        'end_date',
        'payment_date',
        'payment_status',
        'booking_status',
        'created_at',
        'updated_at',
    ];
    public function setSchoolNameAttribute($value)
    {
        $this_id = $this->id??0;
        $this->attributes['school_name'] = $value;
        $school_trip = new SchoolTrip;
        $unique_slug_helper = new UniqueSlug(); 
        $unique_slug = $unique_slug_helper->unique_slug(Str::slug($value,'-'), $school_trip, $this_id, 'slug1');
        $this->attributes['slug1'] = $unique_slug;
    }
    public function setTripNameAttribute($value)
    {
        $this_id = $this->id??0;
        $this->attributes['trip_name'] = $value;
        $school_trip = new SchoolTrip;
        $unique_slug_helper = new UniqueSlug(); 
        $unique_slug = $unique_slug_helper->unique_slug(Str::slug($value,'-'), $school_trip, $this_id, 'slug2');
        $this->attributes['slug2'] = $unique_slug;
    }

}

