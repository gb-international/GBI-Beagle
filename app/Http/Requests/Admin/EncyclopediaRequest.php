<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class EncyclopediaRequest extends FormRequest
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
        $_thisId = $this->id??0;

        return [
            'type'=> 'required|in:country,state,city',
            'country'=>'required_if:type,country,state',
            'state_name'=>'required_if:type,state,city',
            'city_name'=>['required_if:type,city', 'unique:encyclopedias,city_name,'.$_thisId.',id'],
            'description'=>'required',
            'map_link'=>'required',
            'meta_title'=>'required',
            'meta_description' => 'required',
            'food_title' => 'required',
            'food_description' => 'required',
            'culture_title' => 'required',
            'culture_description' => 'required',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
