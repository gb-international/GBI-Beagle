<?php

      /************************************************
      Template Type: Transport Model
      Author:@Ajay

      ****************************************************/

namespace App\Model\Transport;

use Illuminate\Database\Eloquent\Model;

class Transport extends Model
{
    protected $fillable = ['transType','transName','transLocation','transPrice','transContact','transEmail'];
}
