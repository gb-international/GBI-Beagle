<?php

namespace App\Http\Requests\Admin\School;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use App\Rules\PhoneNubmerValidate;

class SchoolTripRequest extends FormRequest
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
        $updateId = $this->id??0;
        return [
            'school_name' => 'required',
            'trip_name' => 'required|unique:school_trips,trip_name,'.$updateId.',id',
            'no_of_student'=> 'required|numeric',
            'no_of_teachers'=> 'required|numeric',
            'ph_no'=>['required','numeric', new PhoneNubmerValidate],
            'amount_paid'=> 'required|numeric',
            'amount_pending'=> 'required|numeric',
            'amount_total'=> 'required|numeric',
            'amt_per_pax'=> 'required|numeric',
            'start_date'=> 'required|date_format:Y-m-d|after:today',
            'end_date'=> 'required|date_format:Y-m-d|after_or_equal:start_date',
            'payment_date'=> 'required|date_format:Y-m-d',
            'payment_status'=> 'required|numeric',
            'booking_status'=> 'required|numeric',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
