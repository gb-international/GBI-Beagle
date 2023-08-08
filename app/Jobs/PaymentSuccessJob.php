<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use App\Model\User\Subscriber;
use App\Model\Notification\Notifier;
use App\Model\Notification\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Mail\PaymentSuccess;
use App\Helpers\SendSms;
use Mail;

class PaymentSuccessJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $details;

    public function __construct($details)
    {
        $this->details = $details;
    }

    public function handle()
    {

        $subscription_id = Subscriber::where('user_id', $this->details['userId'])->first();

        $notification = Notification::create([
                'category' => $this->details['category'], 
                'category_id' => $this->details['category_id'],
                'data' => json_encode([
                    'title' => 'Payment Success',
                    'body' => 'Thank you for choosing GB International as your travel partner.',
                ])
            ]);
        $notifier = Notifier::create([
                    'notification_id' => $notification->id, 
                    'subscription_id' => $subscription_id,
                    'status' => 0, 
                    'service' => 'both',
                ]);
        $sendsms = new SendSms;
        $sendsms->successPaymentSMS($this->details);
        Mail::to($this->details['emailto'])
            ->send( new PaymentSuccess($this->details));
        $notifier->status = 1;
        $notifier->save();
    }
}
