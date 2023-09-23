<?php

namespace App\Http\Requests\Admin\School;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;
class SchoolRequest extends FormRequest
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
            'school_name' => ['required',new AlphaSpace],
            'finance_email_id' => ['required','email',new EmailValidate],
            'principal_email_id' => ['required','email', 'unique:users,email', 'unique:schools,principal_email_id',new EmailValidate],
            'mobile' => ['required','numeric',new PhoneNubmerValidate],
            'street' => 'required',
            'principal_name'=>['required',new AlphaSpace],
            'principal_mobile_number'=>['required','numeric', 'unique:informations,phone_no','unique:schools,principal_mobile_number',new PhoneNubmerValidate],
            'city_name' => 'required',
            'state_name' => 'required',
            'country_name' => 'required',
            'pincode' => 'required|numeric|min:1',
            'address' => 'required',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
