<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FrontBookingUser extends Mailable
{
    use Queueable, SerializesModels;

    private $user;
    
    public function __construct($user)
    {
        $this->user = $user;
    }

    public function build()
    {
        return $this->subject('GBI-Booking')
                ->markdown('email.frontbookinguser')->with('data',$this->user);
    }
}
