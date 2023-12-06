<?php
namespace App\Helpers;
use App\Model\Tour\Payment as PaymentModel;
class Payment  
{
    public function chequeOrdraft($data, $customer_type, $user){
        $payment = new PaymentModel();
        $payment->payment_mode = $data->payment_mode??'';
        $payment->bank_name = $data->bank_name??'';
        $payment->date_of_issue = $data->date_of_issue??'';
        $payment->branch = $data->branch??'';
        $payment->bank_holder_name = $data->bank_holder_name??'';
        $payment->account_number = $data->account_number??'';
        $payment->ifs_code = $data->ifs_code??'';
        $payment->cheque_number = $data->cheque_number??'';
        $payment->amount = $data->amount??0;
        $payment->tour_price = $data->tour_price??0;
        $payment->tour_id = $data->tour_id??0;
        $payment->school_id = $data->school_id??0;
        $payment->payment_by = $data->payment_by??null;
        $payment->status = $data->status??null;
        $payment->customer_type = $data->customer_type??null;
        $payment->payment_by = $request->payment_by??null;
        if($data->customer_type == "user"){
            $payment->payment_by_user_id = $user->id??null;
        }
        return $payment;
    }
    public function cash($data, $customer_type, $user){
        $payment = new PaymentModel();
        $payment->amount = $request->amount??0;
        $payment->total_amount = $request->amount??0;
        $payment->tour_price = $request->tour_price??0;
        $payment->tour_id = $request->tour_id??null;
        $payment->school_id = $request->school_id??null;
        $payment->status = $request->status??null;
        $payment->customer_type = $customer_type;
        if($data->customer_type == "user"){
            $payment->payment_by_user_id = $user->id??null;
        }
        $payment->payment_mode = "cash"; 
        $payment->payment_by=$request->payment_by??null; 
        return $payment;
    }
}