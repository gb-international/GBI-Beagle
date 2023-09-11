<?php

namespace App\Http\Requests\Admin\Reservation;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;

class BusesRequest extends FormRequest
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
            'tour_id' => 'required|exists:tours,id',
            'tour_code' => 'required|exists:tours,tour_id',
            'bus_id' => 'required|exists:buses,id',
            'source' => 'required|min:3|max:100',
            'destination' => 'required|different:source|min:3|max:100',
            'departure' =>'required|date',
            'arrival' => 'required|date|after_or_equal:departure',
            'price' => 'required|numeric',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['status' => 422, 'error' =>$validator->errors()]));
    }
}
