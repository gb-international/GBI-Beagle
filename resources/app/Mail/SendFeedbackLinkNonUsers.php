<?php

/*
Sending Email Link for Feedback Form to Non-Registered users.
*/

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendFeedbackLinkNonUsers extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    
    public function __construct($email, $link)
    {
        $this->data = new \stdClass();
        $this->data->name = null;
        $this->data->email = $email;
        $this->data->link =  $link;
    }

    public function build()
    {
        return $this->subject('Feedback on your Trip with GBI')
            ->to($this->data->email)
            ->markdown('emails.feedback-link')->with('data',$this->data);
    }
}