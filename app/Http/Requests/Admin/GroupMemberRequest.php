<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class GroupMemberRequest extends FormRequest
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
            'tour_id'=>'required|exists:tours,tour_id',
            'school_id'=>'required|exists:schools,id',
            'details' => 'required|array',
            "details.*.first_name" => ['required',new AlphaSpace],
            "details.*.last_name" => ['required',new AlphaSpace],
            "details.*.email" => ['required','email',new EmailValidate],
            "details.*.gender" => "required|in:M,F",
            "details.*.age" => "required|numeric",
            "details.*.mobile" => ['required','numeric',new PhoneNubmerValidate],
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}