<?php

namespace App\Http\Requests\Api\Payment;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class SchoolTripPaymentRequest extends FormRequest
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
            'school_name' => 'required',
            'trip_name' => 'required',
            'no_of_student'=> 'required|numeric',
            'ph_no' => 'required',
            'banner_link'=> 'required',
            //'slug'=> '',
            //'source'=> '',
            //'destination'=> '',
            'amount_paid'=> 'required|numeric',
            'start_date'=> 'required|date_format:Y-m-d',
            'end_date'=> 'required|date_format:Y-m-d',
            'payment_date'=> 'required|date_format:Y-m-d',
            'payment_status'=> 'required',
            'booking_status'=> 'required',
        ];

    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['status' => 422, 'error' =>$validator->errors()]));
    }

}
