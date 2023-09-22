<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;

class ItineraryRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
      *
     * @return array
     */
    public function rules()
    {
        return [
            'source' => 'required|min:2|max:100',
            'destination' => 'required|different:source|min:3|max:100',
            'noofdays' => 'required|numeric|min:1|max:15',
            'title' => 'required|min:3|max:50',
            'description' => 'required|min:3',
            'tourtype' => 'required',
            'food' => 'required|numeric|between:0,1',
            'photo' => 'required',
            // 'photo_alt' => '',
            // 'detail_photo.*' => 'image|file',
            'hotel_type'=>'required',
            'bus'=>'required|numeric|between:0,1',
             'train'=>'required|numeric|between:0,1',
            'flight'=>'required|numeric|between:0,1',
            'price'=>'required|numeric|min:0',
            'client_type'=>'required',
            'meta_title'=>'required',
            'meta_description' => 'required',
            'itinerarydays.*.day' => 'required',
            'itinerarydays.*.day_source' => 'required',
            'itinerarydays.*.day_destination' => 'required|different:day_source',
            'itinerarydays.*.day_description' => 'required',
            // 'tags.*.id' => 'required',
            // 'tourtypes.*.id' => 'required',
            // 'seasons.*.id' => 'required',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['status' => 422, 'error' =>$validator->errors()]));
    }
}
