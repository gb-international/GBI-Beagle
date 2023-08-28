<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;
class UpdateMemberRequest extends FormRequest
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
            "first_name" => ['required',new AlphaSpace],
            "last_name" => ['required',new AlphaSpace],
            "email" => ['required','email',new EmailValidate],
            "gender" => "required|in:M,F",
            "age" => "required|numeric",
            "mobile" => ['required','numeric',new PhoneNubmerValidate],
            "srNo" => "required|numeric",
            "tour_id"=> "required|exists:tours,tour_id",
            "school_id"=> "required|exists:schools,id",
            "user_type"=> "required|in:student,teacher",
            "is_paid"=> "required|numeric",
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['status' => 422, 'error' =>$validator->errors()]));
    }    
}
