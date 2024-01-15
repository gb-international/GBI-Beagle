<?php

namespace App\Http\Requests\Admin\Policy;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;

class TravellerPolicyRequest extends FormRequest
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
        $traveller_policy_id = request()->route('id')??0;
        return [
            'name' => ['required','unique:traveller_policys,name,'.$traveller_policy_id.',id'],
            'traveller_policy_category_id' => 'required|exists:traveller_policy_categorys,id',  
            'policy_type'=> 'required|in:domestic,international',
            'description'=> 'required',
            'status'=> 'required|in:0,1',
        ];
    }
} 
