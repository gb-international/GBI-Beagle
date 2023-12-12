<?php
namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class FamilyUser extends Model
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $table = 'family_users';
    protected $guard = 'family';
    protected $fillable = ['id', 'name', 'email', 'email_verified_at', 'password', 'reset_link', 'link_time', 'status', 'change_password', 'gbi_link', 'client_input', 'phone_no', 'otp', 'father_name', 'mother_name', 'dob', 'address1', 'address2', 'city', 'state', 'country', 'zip_code', 'varified', 'photo', 'gender', 'doc_front', 'doc_back', 'doc_type', 'register_by', 'is_incharge', 'created_at', 'updated_at', 'deleted_at'];
}
