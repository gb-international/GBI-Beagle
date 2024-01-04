<?php

namespace App\Http\Requests\Admin\Payment;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;
class BankDetailRequest extends FormRequest
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
        $user_type = request()->route('user_type')??'';
        $bank_id = request()->route('id')??0;
        return [
            'name' => 'required',
            'bank_name' => 'required',
            'edu_institute_id' => $user_type == 'school' ? 'required|exists:edu_institutes,id' : '',
            'family_user_id' => $user_type == 'family' ? 'required|exists:family_users,id' : '',
            'company_user_id' => $user_type == 'company' ? 'required|exists:company_users,id' : '',
            'account_number' => ['required', Rule::unique('bank_details')->ignore($bank_id)->where('user_types',$user_type)],
            'account_type' => 'required',
            'ifsc_code' => 'required',
        ];
    }

    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
