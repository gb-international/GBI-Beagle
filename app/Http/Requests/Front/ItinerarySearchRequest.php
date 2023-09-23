<?php
namespace App\Http\Requests\Front;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;

class ItinerarySearchRequest extends FormRequest
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
            'transport_type' => 'required|in:flight,car,train,bus',
            'flight' => 'required_if:transport_type,flight|in:1|numeric',
            'bus' => 'required_if:transport_type,bus|in:1|numeric',
            'train' => 'required_if:transport_type,train|in:1|numeric',
            'source' => 'required|array',
            'destination' => 'required|array',
            'source.*' => 'required',
            'destination.*' => 'required|different:source.*',
            'client_type' => 'required|in:eduInstitute,corporate,general',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
