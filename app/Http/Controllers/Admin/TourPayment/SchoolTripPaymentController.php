<?php

namespace App\Http\Controllers\Admin\TourPayment;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\BaseController;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\Api\Payment\SchoolTripPaymentRequest;
use App\Model\Payment\SchoolStudentPayment;

class SchoolTripPaymentController extends BaseController
{
    public function uniqueSlug(String $school_name){
        $slug_name = Str::slug($school_name, '-'); //Convert Input to Str Slug
        $school_student_payment = new SchoolStudentPayment;

        //Check if this Slug already exists 
        $checkSlug = $school_student_payment->whereSlug($slug_name)->exists();
        $slug = '';
        if($checkSlug){
            //Slug already exists.
    
            //Add numerical prefix at the end. Starting with 1
            $numericalPrefix = 1;
    
            while(1){
                //Check if Slug with final prefix exists.
                $newSlug = $slug_name."_".$numericalPrefix++; //new Slug with incremented Slug Numerical Prefix
                $newSlug = Str::slug($newSlug); //String Slug
    
    
                $checkSlug = $school_student_payment->whereSlug($newSlug)->exists(); //Check if already exists in DB
                //This returns true if exists.
    
                if(!$checkSlug){
    
                    //There is not more coincidence. Finally found unique slug.
                    $slug = $newSlug; //New Slug 
    
                    break; //Break Loop
                
                }
    
    
            }
    
        }else{
            //Slug do not exists. Just use the selected Slug.
            $slug = $slug_name;
        }
        return $slug;
    }
    public function store(SchoolTripPaymentRequest $request){
        $slug = $this->uniqueSlug(trim($request->school_name));
        try {
            $school_trip_payment = SchoolStudentPayment::create([
                'school_name' => $request->school_name,
                'no_of_student' => $request->no_of_student,
                'banner_link' => $request->banner_link,
                'slug' => $slug,
                'ph_number' => $request->ph_number,
                'source' => $request->source,
                'destination' => $request->destination,
                'amount_paid' => $request->amount_paid,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'payment_date' => $request->payment_date,
                'payment_status' => $request->payment_status,
                'booking_status' => $request->booking_status,
            ]);

            if ($school_trip_payment) {
                return $this->sendResponse($school_trip_payment, 'Add school_trip_payment successfully.', 201);
            }
        }

        catch (Exception $e) {
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function all($size = null){
        try {
            if (!$size) {
                $size = 10;
            }
            $school_trip_payment = SchoolStudentPayment::latest()->paginate($size);
            if (!empty($school_trip_payment)) {
                return $this->sendResponse($school_trip_payment, 'success', 200);
            } else {
                return $this->sendError('data not found', 404);
            }
        }
        catch (Exception $e) {
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function update(Request $request, $id){
        try {
            $school_trip_payment = SchoolStudentPayment::where('id', $id)->get()->first();
            if (is_null($school_trip_payment)) {
                return $this->sendError('School student payment data not found');
            }
            $slug = isset($request->school_name)&&!empty($request->school_name)?($this->uniqueSlug(trim($request->school_name))):$school_trip_payment->slug;
            $school_trip_payment->school_name;
            $slug = $slug;
            $school_trip_payment->school_name = $request->school_name ?? $school_trip_payment->school_name;
            $school_trip_payment->ph_number = $request->ph_number ?? $school_trip_payment->ph_number;
            $school_trip_payment->no_of_student = $request->no_of_student ?? $school_trip_payment->no_of_student;
            $school_trip_payment->banner_link = $request->banner_link ?? $school_trip_payment->banner_link;
            $school_trip_payment->slug = $request->slug ?? $school_trip_payment->slug;
            $school_trip_payment->source = $request->source ?? $school_trip_payment->source;
            $school_trip_payment->destination = $request->destination ?? $school_trip_payment->destination;
            $school_trip_payment->amount_paid = $request->amount_paid ?? $school_trip_payment->amount_paid;
            $school_trip_payment->start_date = $request->start_date ?? $school_trip_payment->start_date;
            $school_trip_payment->end_date = $request->end_date ?? $school_trip_payment->end_date;
            $school_trip_payment->payment_date = $request->payment_date ?? $school_trip_payment->payment_date;
            $school_trip_payment->payment_status = $request->payment_status ?? $school_trip_payment->payment_status;
            $school_trip_payment->booking_status = $request->booking_status ?? $school_trip_payment->booking_status;
            if ($school_trip_payment->save()) {
                return $this->sendResponse($school_trip_payment, 'school trip payment updated successfully');
            }
        } catch (Exception $e) {
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function delete($id){
        $school_trip_payment = SchoolStudentPayment::where('id', $id)->get()->first();
        if (is_null($school_trip_payment)) {
            return $this->sendError('School student payment id does not exist');
        }
        $school_trip_payment->delete();
        return $this->sendResponse('', 'Deleted successfully.');
    }
    public function show($id)
    {
        $school_trip_payment = SchoolStudentPayment::find($id);
        if (is_null($school_trip_payment)) {
            return $this->sendError('School trip payment not found.', 404);
        }
        return $this->sendResponse($school_trip_payment, 'School trip payment retrieved successfully.');
    }
}