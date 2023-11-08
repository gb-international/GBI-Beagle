<?php

namespace App\Http\Requests\Admin\Hotel;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;

class BanquetCategoryRequest extends FormRequest
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
            'title'=> 'required', 
            'description'=> 'required',
            'dimension_type'=> 'required',
            'length'=> 'required|numeric', 
            'width'=> 'required|numeric',
            'height'=> 'required|numeric',
            'area'=> 'required|numeric',
            'seating_type'=> 'required',
            'no_of_people'=> 'required|numeric'
        ];
    }

    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
