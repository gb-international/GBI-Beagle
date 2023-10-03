<?php

namespace App\Http\Requests\Front;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;


class FeedbackRequest extends FormRequest
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
            'email' => ['required','email',new EmailValidate],
            'tour_id'=>'required|exists:tours,id',
            'trip_itenerary' => 'required',
            'place_of_stay'=>'required',
            'food_quality'=>'required',
            'transport_arrangements'=>'required',
            'recommend_to_others'=>'required',
            'travel_again'=>'required',
            'escort_hospitality'=>'required',
            'comments'=>''
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
