<?php

namespace App\Http\Requests\Admin\Hotel;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class HotelRequest extends FormRequest
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
            'name' => ['required',new AlphaSpace],
            'state'=>'required',
            'city' =>'required',
            'pincode' => 'required',
            'country' => 'required',
            'address' => 'required',
            'phoneno' => ['required','numeric',new PhoneNubmerValidate],
            'email' => ['required','email',new EmailValidate],
            'rooms'=>'required|numeric|min:1',
            'room_categories' => 'required|array',
            'star_category' => 'required',
            'banquets' => 'required',
            'banquet_categories' => 'required|array',
            'amenities' => 'required|array',
            'amenities.*' => 'required|array',
            'meta_keywords' => 'required|array',
            "meta_keywords.*.title" => 'required',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
