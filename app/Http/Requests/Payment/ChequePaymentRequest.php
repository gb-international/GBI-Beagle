<?php

namespace App\Http\Requests\Payment;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\AlphaSpace;

class ChequePaymentRequest extends FormRequest
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
            'bank_name' => ['required',new AlphaSpace],
            'date_of_issue' => 'required|date|after_or_equal:today|date_format:Y-m-d',
            'ifsc_code' => 'required',
            'cheque_number' => 'required',
            'amount' => 'required|numeric|gt:0',
            'tour_price' => 'required|numeric|gt:0',
            'tour_id' => 'required|exists:tours,id',
            'school_id' => 'required|exists:schools,id',
            'payment_by' => 'required|in:cash,self,student,teacher',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
