<?php
   
namespace App\Model\LinkShortner;
   
use Illuminate\Database\Eloquent\Model;
   
class ShortLink extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'shortCode', 'link'
    ];
}