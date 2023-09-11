<?php

namespace App\Http\Requests\Admin\Corporate;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;
class CorporateRequest extends FormRequest
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
            'company_name' => ['required',new AlphaSpace],
            'company_email_id' => ['required','email',new EmailValidate],
            'incharge_email_id' => ['required','email',new EmailValidate],
    		'mobile' => ['required',new PhoneNubmerValidate],
            'street' => 'required',
            'incharge_name'=>['required',new AlphaSpace],
            'incharge_mobile_number'=>['required',new PhoneNubmerValidate],
            'city_name' => 'required',
            'state_name' => 'required',
            'country_name' => 'required',
            'pincode' => 'required|numeric|min:1',
            'address' => 'required',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['status' => 422, 'error' =>$validator->errors()]));
    }
}
