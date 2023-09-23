<?php

namespace App\Http\Requests\Admin\Customer;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;
use Illuminate\Http\Request;

class UpdateCustomerRequest extends FormRequest
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
        // $product_id = ;

    return ["scv"=>      $id = $this->route('id')];
        // return [$r];
        return [
            'user_id'=>'required|exists:users,id',
            'name'=>['required',new AlphaSpace],
            'email_id' => ['required','email', 'unique:users,email', new EmailValidate],
            'phone_number'=>['required','numeric', 'unique:informations,phone_no', new PhoneNubmerValidate],
            'father_name'=>['required',new AlphaSpace],
            'mother_name'=>['required',new AlphaSpace],
            'dob' => 'required|date|date_format:Y-m-d',
            'gender' => 'required|in:male,female',
            'user_profession' => 'required|in:corporate,student,general',
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
