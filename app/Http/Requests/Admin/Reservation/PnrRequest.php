<?php

namespace App\Http\Requests\Admin\Reservation;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
class PnrRequest extends FormRequest
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
            'transport_type'=> 'required|in:bus,flight,train',
            'tour_code'=> 'required|exists:tours,tour_id',
            'data' => 'required|array',
            'data.*.transport_bus_id' => 'required_if:transport_type,bus|exists:bookedbuses,id',
            'data.*.transport_flight_id' => 'required_if:transport_type,flight|exists:bookedflights,id',
            'data.*.transport_train_id' => 'required_if:transport_type,train|exists:bookedtrains,id',
            'data.*.bus_number' => 'required_if:transport_type,bus',
            'data.*.pnr_flight_number' => 'required_if:transport_type,flight|size:6',
            'data.*.pnr_train_number' => 'required_if:transport_type,train|size:10',
            'data.*.seat_available' => 'required|numeric',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['status' => 422, 'error' =>$validator->errors()]));
    }
}
