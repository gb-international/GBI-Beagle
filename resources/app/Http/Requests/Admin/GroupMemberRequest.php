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
            'data' => 'required|array',
            "data.*.first_name" => ['required',new AlphaSpace],
            "data.*.last_name" => ['required',new AlphaSpace],
            "data.*.email" => ['required','email',new EmailValidate],
            "data.*.gender" => "required|in:M,F",
            "data.*.age" => "required|numeric",
            "data.*.mobile" => ['required','numeric',new PhoneNubmerValidate],
            "data.*.srNo" => "required|numeric",
            "data.*.sr_no" => "required|numeric",
            "data.*.tour_id"=> "required|exists:tours,tour_id",
            "data.*.school_id"=> "required|exists:schools,id",
            "data.*.user_type"=> "required|in:student,teacher",
            "data.*.is_paid"=> "required|numeric",
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}