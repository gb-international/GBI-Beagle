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
            'description' => 'required',
            'no_of_room'=>'required|numeric|min:1',
            'star_category' => 'required',
            'hotel_type' => 'required|in:apartment,hotel,homestay',
            'email' => ['required','email',new EmailValidate],
            'phone_number' => ['required','numeric',new PhoneNubmerValidate],
            'no_of_banquet' => 'numeric',
            'hotel_policies_description' => 'required',
            'safety_hygiene_description' => 'required',
            'city_id' =>'required|exists:cities,id',
            'state_id'=>'required|exists:states,id',
            'country_id' => 'required|exists:countries,id',
            'address' => 'required',
            'pincode' => 'required',
            'rooms' => 'required|array',
            'rooms.*' => 'required|exists:rooms,id',
            'banquet' => 'required_with:no_of_banquet|integer|min:0|array',
            'banquet.*' => 'required|exists:banquets,id',
            'amenities' => 'required|array',
            'amenities.*' => 'required|exists:amenities,id',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
