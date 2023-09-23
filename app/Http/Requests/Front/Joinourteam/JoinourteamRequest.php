<?php

namespace App\Http\Requests\Front\Joinourteam;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;
class JoinourteamRequest extends FormRequest
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
            'firstname' => ['required',new AlphaSpace],
    		'lastname' => ['required',new AlphaSpace],
    		'email' => ['required','email',new EmailValidate],
    		'contactno' => ['required','numeric',new PhoneNubmerValidate],
    		'address' => 'required',
    		'state' => ['required',new AlphaSpace],
    		'city' => ['required',new AlphaSpace],
    		'zipcode' => 'required|numeric',
    		'applyingfor' => 'required',
    		'resume' => 'required',
    		'messagescon' => 'required',
            'current_company'=>'required',
            'job_exp'=>'required|numeric',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
