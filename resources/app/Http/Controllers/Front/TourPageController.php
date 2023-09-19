<?php
/* 
Created by : Manas 
Purpose : Display Tour Data in Tour Page
*/
namespace App\Http\Controllers\Front;

use App\Model\SchoolTrip\SchoolTrip;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Otp;

class TourPageController extends Controller
{

    /**
     * Displaying Tour data.
     */
    public function getData($slug1, $slug2, $otp, $oid)
    {
        $otpData = Otp::where('id', $oid)->where('otp_send', $otp)->first();
        $tourData = array();
        if($otpData){
            $tourData = SchoolTrip::where('slug1', $slug1)->where('slug2', $slug2)->where('ph_no', $otpData->phone_no)->first();
            if($tourData){
                $tourData['logged'] = true;
            } else {
                $tourData = array();
                $tourData['logged'] = false;
            }
            
        } else {
            $tourData['logged'] = false;
        }
        
        //$tourData->start_date = $tourData->start_date->format('Y-m-d');
        return response()->json($tourData);
    }
}
