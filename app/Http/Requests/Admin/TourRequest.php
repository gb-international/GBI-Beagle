<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class TourRequest extends FormRequest
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
            'customer_type' => 'required',
            'school_id' => 'required_if:customer_type,school',
            'company_id' => 'required_if:customer_type,corporate',
            'family_id' => 'required_if:customer_type,family',
            'itinerary_id' => 'required|exists:itineraries,id',
            'tour_id' => 'required|unique:tours',
            'travel_code' => 'required',
            'tour_start_date' => 'required|date',
            'tour_end_date' => 'required|date|after_or_equal:start_date',
            'tour_price' => 'required',          
        ];
    }
}
