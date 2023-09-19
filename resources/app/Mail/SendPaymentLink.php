<?php

/*
Sending Payment Link Mail.
*/

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendPaymentLink extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    
    public function __construct($email, $link, $name)
    {
        $this->data = new \stdClass();
        $this->data->name = $name;
        $this->data->email = $email;
        $this->data->link =  $link;
    }

    public function build()
    {
        return $this->subject('Payment Link from GBI')
            ->to($this->data->email)
            ->markdown('emails.payment-link')->with('data',$this->data);
    }
}