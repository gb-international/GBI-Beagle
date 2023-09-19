<?php

namespace App\Jobs;

use Mail;
use Illuminate\Bus\Queueable;
use App\Model\User\Subscriber;
use App\Model\Notification\Notifier;
use App\Model\Notification\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;


class Notifications implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $data;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $data = $this->data;
        $data['title'] = strip_tags($data['title']);
        $data['body'] = strip_tags($data['body']);

        if($data['notification_type'] == 'posts'){
            $subsribers = Subscriber::where('client_type', $data['client_type'])->where('posts_notification', '1')->get();
            if($subsribers->count() > 0){
                $notification = Notification::create([
                    'category' => $data['category'], 
                    'category_id' => $data['category_id'],
                    'data' => json_encode([
                        'title' => $data['title'],
                        'body' => $data['body'],
                    ])
                ]);
            
                foreach ($subsribers as $sub) {
                    $notifier = Notifier::create([
                        'notification_id' => $notification->id, 
                        'category' => $data['category'],
                        'subscription_id' => $sub->id, 
                        'status' => 0, 
                        'service' => 'email',
                    ]);
                    //Mail::send(new postNotification($data));
                    $notifier->status = 1;
                    $notifier->save();
                    //event(new \App\Events\SendNotification($data));
                }
            }
        }
        else if($data['notification_type'] == 'promotion'){
            $subsribers = Subscriber::where('client_type', $data['client_type'])->where('promotion_notification', '1')->get();
            if($subsribers->count() > 0){
                $notification = Notification::create([
                    'category' => $data['category'], 
                    'category_id' => $data['category_id'],
                    'data' => json_encode([
                        'title' => $data['title'],
                        'body' => $data['body'],
                    ])
                ]);
            
                foreach ($subsribers as $sub) {
                    $notifier = Notifier::create([
                        'notification_id' => $notification->id,
                        'category' => $data['category'],
                        'subscription_id' => $sub->id, 
                        'status' => 0, 
                        'service' => 'email',
                    ]);
                    //Mail::send(new promotionNotification($data));
                    $notifier->status = 1;
                    $notifier->save();
                    //event(new \App\Events\SendNotification($data));
                }
            }
        }
        else if($data['notification_type'] == 'travel'){
            $subsribers = Subscriber::where('client_type', $data['client_type'])->where('travel_notification', '1')->get();
            if($subsribers->count() > 0){
                $notification = Notification::create([
                    'category' => $data['category'], 
                    'category_id' => $data['category_id'],
                    'data' => json_encode([
                        'title' => $data['title'],
                        'body' => $data['body'],
                    ])
                ]);
            
                foreach ($subsribers as $sub) {
                    $notifier = Notifier::create([
                        'notification_id' => $notification->id,
                        'category' => $data['category'],
                        'subscription_id' => $sub->id, 
                        'status' => 0, 
                        'service' => 'email',
                    ]);
                    //Mail::send(new postNotification($data));
                    $notifier->status = 1;
                    $notifier->save();
                    //event(new \App\Events\SendNotification($data));
                }
            }
        }
        else if($data['notification_type'] == 'website'){
            $subsribers = Subscriber::where('client_type', $data['client_type'])->where('website_notification', '1')->get();
            if($subsribers->count() > 0){
                $notification = Notification::create([
                    'category' => $data['category'], 
                    'category_id' => $data['category_id'],
                    'data' => json_encode([
                        'title' => $data['title'],
                        'body' => $data['body'],
                    ])
                ]);
            
                foreach ($subsribers as $sub) {
                    $notifier = Notifier::create([
                        'notification_id' => $notification->id,
                        'category' => $data['category'],
                        'subscription_id' => $sub->id, 
                        'status' => 0, 
                        'service' => 'email',
                    ]);
                    //Mail::send(new websiteNotification($data));
                    $notifier->status = 1;
                    $notifier->save();
                    //event(new \App\Events\SendNotification($data));
                }
            }
        }
       // return response()->json($data);
    }
}
