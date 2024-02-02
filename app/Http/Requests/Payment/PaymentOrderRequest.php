<?php

namespace App\Http\Requests\Payment;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;

class PaymentOrderRequest extends FormRequest
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
        $login_type = "";
        if(request()->route('school')){
           $login_type = request()->route('school')??'';
        }
        else if(request()->route('family')){
            $login_type = request()->route('family')??'';
        }
        else if(request()->route('company')){
            $login_type = request()->route('company')??'';
        }
        return [
            'amount'  => 'required|numeric|gt:0',
            'tour_id' => 'required|exists:tours,id',
            'school_id' =>($login_type == 'school') ? 'required|exists:schools,id' : '',
            'company_id' =>($login_type == 'company') ? 'required|exists:companies,id' : '',
            'family_id' =>($login_type == 'family') ? 'required|exists:family_users,id' : '',
            'discount_coupon_id' => 'discount_coupons,id',
            'tour_price' => 'required|numeric|gt:0',
            'payment_by' => 'required|in:cash,self,student,teacher,company,family',
            // 'customer_type' => 'required|in:school,company,family,user',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
