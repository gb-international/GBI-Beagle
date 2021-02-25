<?php

namespace App;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;


class User extends Authenticatable
{
    use HasApiTokens,Notifiable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
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


    public function getAllPermissionsAttribute() {
        $permissions = [];
        foreach (Permission::all() as $permission) {
            if (Auth::user()->can($permission->name)) {
                $permissions[] = $permission->name;
            }
        }
        return $permissions;
    }

    public function scopeIncharge($query)
    {
        return $query->where('is_incharge', 1);
    }

}
