<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\http\request;

class SendMailresume extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public $firstname;
    public $lastname; 
    public $name;
    public $email;
    public $contactno;
    public $address; 
    public $state;
    public $city;
    public $zipcode;
    public $postvancy;
    public $messagescon;
    public $url;
    

    public function __construct($firstname, $lastname, $email, $contactno, $address, $state, $city, $zipcode, $postvancy, $messagescon , $url )
    {
        
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->email = $email;
        $this->contactno = $contactno;
        $this->address = $address;
        $this->state = $state;
        $this->city = $city;
        $this->zipcode = $zipcode;
        $this->postvancy = $postvancy;
        $this->messagescon = $messagescon;
        $this->url = $url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {   
        $firstname = $this->firstname;
        $lastname = $this->lastname;
        $email = $this->email;
        $contactno = $this->contactno;
        $address = $this->address;
        $state = $this->state;
        $city = $this->city;
        $zipcode = $this->zipcode;
        $postvancy = $this->postvancy;
        $messagescon = $this->messagescon;
        $url = $this->url;

        return $this->view('email.resumemail', compact("messagescon"))->subject('subject');
    }
}
