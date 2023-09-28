<?php

namespace App\Model\School;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class EducationInstitute extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $table = 'edu_institutes';
    protected $guard = 'school';
    protected $fillable = ['id', 'name', 'school_id', 'role_type', 'email', 'email_verified_at', 'password', 'reset_link', 'link_time', 'status', 'change_password', 'gbi_link', 'client_input', 'phone_no', 'otp', 'father_name', 'mother_name', 'dob', 'address', 'city', 'state', 'country', 'zip_code', 'user_class', 'admission_year', 'varified', 'photo', 'gender', 'doc_front', 'doc_back', 'doc_type', 'profession_name', 'profession_address', 'institution_code', 'register_by', 'remember_token', 'created_at', 'updated_at', 'deleted_at'];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function validateForPassportPasswordGrant($password)
    {
        return true;
        if($this->where('otp', $password)->exists())
        {
            return true; 
        }
    }

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }
}



