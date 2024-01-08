<?php

namespace App\Http\Requests\Payment;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;

class CashPaymentRequest extends FormRequest
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
        $client_type = request()->route('user')??'';
        $tour_type = request()->route('tour_type')??'';
        $login_type = "user";
         if(request()->route('school')){
            $login_type = request()->route('school')??'';
        }
        else if(request()->route('family')){
            $login_type = request()->route('family')??'';
        }
        else if(request()->route('company')){
            $login_type = request()->route('company')??'';
        }
        return [
            'amount' => 'required|numeric|gt:0',
            'tour_price' => 'required|numeric|gt:0',
            'tour_id' => 'required|exists:tours,id',
            'school_id' =>(($login_type == 'school') || ($client_type == "user" && $tour_type == "school")) ? 'required|exists:schools,id' : '',
            'company_id' =>(($login_type == 'company') || ($client_type == "user" && $tour_type == "company")) ? 'required|exists:companies,id' : '',
            'family_id' =>(($login_type == 'family') || ($client_type == "family" && $tour_type == "family")) ? 'required|exists:family_users,id' : '',
            'doc_proof' => 'required|file|max:5000',
            'status' => 'required|in:pending,success',
            'payment_by' => 'required|in:cash,self,student, teacher',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
