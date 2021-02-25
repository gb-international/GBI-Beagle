<?php

      /************************************************
      Template Type: Collection Resource for the Escort
      Author:@Ajay

      ****************************************************/

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class EscortCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
