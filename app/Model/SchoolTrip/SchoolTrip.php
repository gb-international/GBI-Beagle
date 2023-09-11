<?php

namespace App\Model\SchoolTrip;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}

