<?php
namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class FamilyUser extends Authenticatable
{
    use HasApiTokens, Notifiable, HasRoles;
    protected $table = 'family_users';
    protected $guard = 'family';
    protected $fillable = ['id', 'name', 'email', 'email_verified_at', 'password', 'reset_link', 'link_time', 'status', 'change_password', 'gbi_link', 'client_input', 'phone_no', 'otp', 'father_name', 'mother_name', 'dob', 'address1', 'address2', 'city', 'state', 'country', 'zip_code', 'varified', 'photo', 'gender', 'doc_front', 'doc_back', 'doc_type', 'register_by', 'is_incharge', 'customer_id', 'gstin', 'created_at', 'updated_at', 'deleted_at'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
