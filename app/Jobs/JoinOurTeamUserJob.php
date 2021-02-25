<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Mail\JoinOurTeamUser;
use Mail;

class JoinOurTeamUserJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $details;

    public function __construct($details)
    {
        $this->details = $details;
    }

    public function handle()
    {
        Mail::to($this->details['emailto'])->send( new JoinOurTeamUser($this->details));
    }
}
