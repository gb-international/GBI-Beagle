<?php

namespace App\Http\Requests\Admin\Reservation;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;

class HotelRequest extends FormRequest
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
            'tour_code'=> 'required|exists:tours,tour_id',
            'tour_id'=> 'required|exists:tours,id',
            'hotel_id' => 'required|exists:hotels,id',
            'price'=>'required|numeric',
            'check_in'=>'required|date',
            'check_out'=>'required|date|after_or_equal:check_in',
        ];
    }
    
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['status' => 422, 'error' =>$validator->errors()]));
    }
}

