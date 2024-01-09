<?php

namespace App\Http\Requests\Admin\Advertising_And_Discount;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use App\Rules\AlphaSpace;

class DiscountCouponRequest extends FormRequest
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
        $client_type = request()->route('client_type')??'';
        $curr_discount_coupon_id = $this->discount_coupon->id??0;
        return [
            'client_type'=>'required|in:school,corporate,family',
            'name' => ['required', new AlphaSpace],
            'description' => 'required',
            'coupon_code' => ['required','unique:discount_coupons,name,'.$curr_discount_coupon_id.',id'],
            'price'=>'required|numeric|min:1',
            'discount' =>'required|numeric|between:0,100',
            'use_time_per_user' => 'required|numeric|min:1',
            'start_date' => 'required|date_format:Y-m-d H:i|after:today',
            'end_date' => 'required|date_format:Y-m-d H:i|after_or_equal:start_date',
            'edu_institute_id' => $client_type == 'school' ?'required|array':'',
            'edu_institute_id.*' => $client_type == 'school' ?'required|exists:edu_institutes,id':'',
            'company_user_id' => $client_type == 'corporate' ?'required|array':'',
            'company_user_id.*' => $client_type == 'corporate' ? 'required|exists:company_users,id' : '',
            'family_user_id' => $client_type == 'family' ?'required|array':'',
            'family_user_id.*' => $client_type == 'family' ?'required|exists:family_users,id':'',
        ];
    } 
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
