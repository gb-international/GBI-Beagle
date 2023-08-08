<?php

/*
Sending Email Link for Feedback Form to Registered users.
*/

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendFeedbackLink extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    
    public function __construct($user, $link)
    {
        $this->user = $user;
        $this->user->link = $link;
    }

    public function build()
    {
        return $this->subject('Feedback on your Trip with GBI')
                ->to($this->user->email, $this->user->name)
                ->markdown('emails.feedback-link')->with('data',$this->user);
    }
}