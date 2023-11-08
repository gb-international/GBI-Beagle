<?php

namespace App\Http\Requests\Admin\Hotel;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;
class BanquetRequest extends FormRequest
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
            'description' => 'required',
            'no_of_banquet' => 'numeric',
            'star_category' => 'required',
            'email' => ['required','email',new EmailValidate],
            'phone_number' => ['required','numeric',new PhoneNubmerValidate],
            'address' => 'required',
            'city_id' =>'required|exists:cities,id',
            'state_id'=>'required|exists:states,id',
            'country_id' => 'required|exists:countries,id',
            'pincode' => 'required',
            'banquet_category' => 'required|array',
            'banquet_category.*' => 'required|exists:banquetcategorys,id',
            'amenities' => 'required|array',
            'amenities.*' => 'required|exists:amenities,id',
        ];
    }

    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
