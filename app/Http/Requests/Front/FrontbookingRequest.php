<?php

namespace App\Http\Requests\Front;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
class FrontbookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
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
            'start_date' => 'required|date|after:today',
            'end_date' => 'required|date|after_or_equal:start_date',
            'person' => 'required',
            'adults'=>'required|numeric',
            'children'=>'required|numeric',
            'infants'=>'required|numeric',
            'room' => 'required|numeric',
            'occupancy_type' => 'required|in:Single,Double,Triple, Quad',
            'sightseen'=> 'array',
            'city_id' => 'array',
            'transport' => 'array',
            'noofday' => 'numeric',
            'itinerary_id' => 'required|exists:itineraries,id',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['status' => 422, 'error' =>$validator->errors()]));
    }
}
