<?php

namespace App\Http\Requests\Admin\Sightseeing;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\AlphaSpace;

class SightseeingRequest extends FormRequest
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
            'state_id' => 'required|exists:states,id',
            'city_id' => 'required|exists:cities,id',
            'name' => ['required',new AlphaSpace],
            'address'=>'required',
            'description'=>'required',
            'adult_price' => 'required|numeric',
            'child_price' => 'required|numeric',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['status' => 422, 'error' =>$validator->errors()]));
    }
}

// {
//     "name": "India Gate",
//     "state_id": 1,
//     "city_id": 1,
//     "image": "data:image/jpeg;base64,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",
//     "alt": "india.jpg",
//     "adult_price": "0",
//     "child_price": "0",
//     "address": "Kartavya Path, India Gate, New Delhi, Delhi 110001",
//     "description": "The India Gate is a war memorial located near the Kartavya path on the eastern edge of the \"ceremonial axis\" of New Delhi, formerly called Rajpath."
// }
