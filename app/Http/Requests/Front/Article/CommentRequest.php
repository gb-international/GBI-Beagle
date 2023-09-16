<?php

namespace App\Http\Requests\Front\Article;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class CommentRequest extends FormRequest
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
            'post_id'=>'required|exists:article_posts,id',
            'name'=>'required',
            'description'=>'required',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['status' => 422, 'error' =>$validator->errors()]));
    }
}