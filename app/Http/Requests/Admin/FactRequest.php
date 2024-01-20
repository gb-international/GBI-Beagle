<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\AlphaSpace;

class FactRequest extends FormRequest
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
        $fact_id = request()->route('id')??0;
        return [
            'name' => ['required','unique:facts,name,'.$fact_id.',id'],
            'description' => 'required',
            'status' => 'required|in:0,1',
            'city_id' =>'exists:cities,id',
            'state_id'=>'exists:states,id',
            'country_id' => 'exists:countries,id',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
