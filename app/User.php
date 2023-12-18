<?php

namespace App;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
//use Illuminate\Support\Facades\Hash;
use App\Otp;

class User extends Authenticatable
{
    use HasApiTokens,Notifiable;
    use HasRoles;
    protected $guard = 'user';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'user_role', 'password','department_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
    * The attributes that should be cast.
    *
    * @var array
    */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function validateForPassportPasswordGrant($password)
    {
        if($this->where('password', $password)->exists())
        {
            return true; 
        }
    }

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }

    
      /**
     * Add a mutator to ensure hashed passwords
     */

    public function information()
    {
        return $this->hasOne('App\Model\User\Information');    
    }

    public function search()
    {
        return $this->hasMany('App\Search');    
    }

    public function encyclopediacomments(){
        return $this->hasMany('App\Model\Encyclopedia\Encyclopediacomment');
    }
    // now we can delete usertravel because 'bookedusers' is working now
    public function UserTravel(){
        return $this->hasMany('App\Model\Tour\TourUser','user_id')->orderBy('created_at','DESC');
    }

    public function bookedusers(){
        return $this->hasMany('App\Model\Reservation\Bookeduser','user_id')->orderBy('created_at','DESC');
    }
    public function frontbooking()
	{
		return $this->hasMany('App\Model\Tour\Frontbooking');
    }
    
    
    public function AauthAccessToken(){
        return $this->hasMany('App\Model\User\OauthAccessToken');
    }
    
    public function subscribe(){
        return $this->hasOne('App\Model\User\Subscriber');
    }

    public function social(){
        return $this->hasMany('App\Model\User\UserSocial');
    }

    /*public function UserRole(){
        return $this->hasOne('App\Model\RoleAndPermission\RoleUser','model_id','id');
    }*/

    public function userRole(){
        return $this->hasOne('App\Model\RoleAndPermission\UserRole','user_id','id');
    }

    public function scopeIncharge($query)
    {
        return $query->where('is_incharge', 1);
    }

    public function department(){
        return $this->hasOne('App\Model\User\Department');
    }

    public function getAllPermissionsAttribute() {
        $permissions = [];
        foreach (Permission::all() as $permission) {
            if (Auth::user()->can($permission->name)) {
                $permissions[] = $permission->name;
            }
        }
        return $permissions;
    }

}
