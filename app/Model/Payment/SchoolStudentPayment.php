<?php

namespace App\Model\Payment;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SchoolStudentPayment extends Model
{
    use HasFactory;
    protected $table = 'school_student_trips';
    protected $fillable = [
        'id',
        'school_name',
        'no_of_student',
        'banner_link',
        'slug',
        'source',
        'destination',
        'amount_paid',
        'start_date',
        'end_date',
        'ph_number',
        'payment_date',
        'payment_status',
        'booking_status',
        'created_at',
        'updated_at',
    ];
}

