<?php

namespace App\Model\Payment;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Helpers\UniqueSlug;

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

    public function setSchoolNameAttribute($value)
    {
        $this->attributes['school_name'] = $value;
        $schoolStudentPayment = new SchoolStudentPayment;
        $unique_slug_helper = new UniqueSlug(); 
        $unique_slug = $unique_slug_helper->unique_slug(Str::slug($value,'-'), $schoolStudentPayment);
        $this->attributes['slug'] = $unique_slug;
    }   
}

