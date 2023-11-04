<?php

namespace App\Http\Requests\Admin\Hotel;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;
class RoomRequest extends FormRequest
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
            'room_category_id' => 'required|exists:room_categories,id',
            'description' => 'required',
            'maximum_occupancy'=>'required|numeric|min:1',
            'inches'=>'required|numeric|min:1',
            'length'=>'required|numeric|min:1',
            'width'=>'required|numeric|min:1',
            'height'=>'required|numeric|min:1',
            'currency_type'=>'required',
            "meal_plan_type"=>'required|in:apai,mpai,cpai,epai',
            'room_price_details' => 'required|array',
            'room_price_details.*.occupancy_type' => 'required|in:single,double,triple,quadruple',
            'room_price_details.*.net_rate' => 'required||numeric',
            'room_price_details.*.rack_rate' => 'required|numeric',
            'room_price_details.*.discount' => 'required||numeric',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}


