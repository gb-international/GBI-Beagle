<?php

      /************************************************
      Template Type: Collection Resource for the Salesdp
      Author:@Ajay

      ****************************************************/

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class SalesdpCollection extends ResourceCollection
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
