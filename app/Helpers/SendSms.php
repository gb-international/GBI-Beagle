<?php

namespace App\Helpers;

class SendSms{
    private $id = 'csrikhi@gbinternational.in';
    private $pwd = 'Roger224225g32@';
    
    public static function send($mobile,$template_id,$message){
        $phone = '91'.$mobile;
        $id = 'csrikhi@gbinternational.in';
        $pwd = 'Roger224225g32@';
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$id."&Pwd=".urlencode($pwd)."&PhNo=".$phone."&TemplateID=".$template_id."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }


    public function signUpSMS($mobile,$user){
        $phone = '91'.$mobile;
        $message = "Dear ".ucfirst($user->name).".Thank you for registering your self with Go With GBI.Now you can start your journey with us by selecting the destinations of your choice.";
        $template_id = 1007302686286761362;
        
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TemplateID=".$template_id."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }

    public function  otpSMS($mobile,$otp){
        $phone = '91'.$mobile;
        $message = "Dear Customer Your One Time Password is $otp .This OTP will remain valid for 90 seconds";
        $template_id = 1007633512302840127;
        
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TemplateID=".$template_id."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }

    public function sendLoginDetails($mobile,$message){
        $phone = '91'.$mobile;
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }

    public function frontBookingUserSms($user,$itinerary){
        $phone = '91'.$user->information->phone_no;
        $message = "Dear ".ucfirst($user->name)." Thanks for booking Itinerary : ".$itinerary." . Our Agent will Contact you soon.";
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }

    public function successPaymentSMS($user){
        $phone = '91'.$user['phone_no'];
        $message = "Dear ".ucfirst($user['name'])." Payment successfully completed now you can open your tour Dashboard.";
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }

    
    public function escortLoginLink($phoneno,$name){
        $phone = '91'.$phoneno;
        $link = \config('gbi.escort_login_link');
        $message = "Dear ".ucfirst($name)." Please click on this link $link and login with your registerd mobile number with GBI.";
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }



//https://www.businesssms.co.in/smsaspx?Id=csrikhi@gbinternational.in&Pwd=Roger224225g32@&PhNo=918920397458&TEXT=hello





}