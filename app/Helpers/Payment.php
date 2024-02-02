<?php
namespace App\Helpers;
use App\Model\Tour\Payment as PaymentModel;
class Payment  
{
    public function alreadyPay($user_id, $tour_id, $guardname){
        $tour = PaymentModel::where(array('tour_id'=> $tour_id, 'order_payment_status'=>1))->first();
        if($tour){
            if($guardname == "school"){ 
                if(($tour->customer_type == $guardname || $tour->customer_type == "user") && ($tour->payment_by_edu_institute_id == $user_id || $tour->incharge_edu_institute_id == $user_id)){
                    return 1;
                }
            }
            else if($guardname == "company"){
                if(($tour->customer_type == $guardname || $tour->customer_type == "user") && ($tour->payment_by_company_user_id == $user_id || $tour->incharge_company_user_id == $user_id)){
                    return 1;
                }
            }
            else if($guardname == "family"){
                if(($tour->customer_type == $guardname || $tour->customer_type == "user") && ($tour->payment_by_family_user_id == $user_id || $tour->incharge_family_user_id == $user_id)){
                    return 1;
                }
            }
        }
        return 0;
    }
    public function chequeOrdraft($data, $customer_type, $user, $client_type){
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
        if($client_type == "school"){
            $payment->school_id = $data->school_id??NULL;
            $payment->incharge_edu_institute_id = $data->incharge_edu_institute_id??null;;
        }
        else if($client_type == "family"){
            $payment->family_id = $data->family_id??null;
            $payment->incharge_family_user_id =$data->incharge_family_user_id??null;
        }
        else if($client_type == "company"){
            $payment->company_id = $data->company_id??null;
            $payment->incharge_company_user_id = $data->incharge_company_user_id??null;
        }
        $payment->payment_by = $data->payment_by??null;
        $payment->status = $data->status??null;
        $payment->customer_type = $customer_type??null;
        $payment->payment_by = $request->payment_by??null;
        if($customer_type == "user"){
            $payment->payment_by_user_id = $user->id??null;
        }
        else if($customer_type == "school"){
            $payment->payment_by_edu_institute_id = $user->id??null;
        }
        else if($customer_type == "company"){
            $payment->payment_by_company_user_id = $user->id??null;
        }
        else if($customer_type == "family"){
            $payment->payment_by_family_user_id = $user->id??null;
        }
        
        return $payment;
    }
    public function cash($data, $customer_type, $user, $client_type){
        $payment = new PaymentModel();
        $payment->amount = $data->amount??0;
        $payment->total_amount = $data->amount??0;
        $payment->tour_price = $data->tour_price??0;
        $payment->tour_id = $data->tour_id??null;
        if($client_type == "school"){
            $payment->school_id = $data->school_id??NULL;
            $payment->incharge_edu_institute_id = $data->incharge_edu_institute_id??null;;
        }
        else if($client_type == "family"){
            $payment->family_id = $data->family_id??null;
            $payment->incharge_family_user_id =$data->incharge_family_user_id??null;
        }
        else if($client_type == "company"){
            $payment->company_id = $data->company_id??null;
            $payment->incharge_company_user_id = $data->incharge_company_user_id??null;
        }
        $payment->status = $data->status??'pending';
        $payment->customer_type = $customer_type;
        if($customer_type == "user"){
            $payment->payment_by_user_id = $user->id??null;
        }
        else if($customer_type == "school"){ 
            $payment->payment_by_edu_institute_id = $user->id??null;
        }
        else if($customer_type == "company"){
            $payment->payment_by_company_user_id = $user->id??null;
        }
        else if($customer_type == "family"){
            $payment->payment_by_family_user_id = $user->id??null;
        }
        $payment->payment_mode = "cash"; 
        $payment->payment_by = $data->payment_by??null; 
        return $payment;
    }
}