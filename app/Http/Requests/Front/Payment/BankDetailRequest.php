<?php

namespace App\Http\Requests\Front\Payment;

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
        $bank_id = request()->route('id')??0;
        $current_user;
        if((request()->route('family')??'') == "family"){
            $current_user = "family";
        }
        else if((request()->route('school')??'') == "school"){
            $current_user = "school";
        }
        else {
            $current_user = "company";
        }
        return [
            'name' => 'required',
            'bank_name' => 'required',
            'account_number' => ['required', Rule::unique('bank_details')->ignore($bank_id)->where('user_types',$current_user)],
            'account_type' => 'required',
            'ifsc_code' => 'required',
        ];
    }
}
