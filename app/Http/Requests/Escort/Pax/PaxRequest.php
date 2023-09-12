<?php

namespace App\Http\Requests\Escort\Pax;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class PaxRequest extends FormRequest
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
    public function rules(){
        return [  
            'tour_code'=>'required|exists:tours,tour_id',
            'escort_id'=>'required|exists:escorts,id',
            'total_male'=>'required|numeric',
            'total_female'=>'required|numeric',
            'absent_male'=>'required|numeric|lte:total_male',
            'absent_female'=>'required|numeric|lte:total_female',
            'message'=>'required',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['status' => 422, 'error' =>$validator->errors()]));
    }    
}
