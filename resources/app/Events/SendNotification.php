<?php
  
namespace App\Events;
  
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
  
class SendNotification implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
  
    public $data;
    
    public function __construct($data)
    {
        $this->data = $data;
    }
  
    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return ['send-notification'];
    }
  
    /**
     * The event's broadcast name.
     *
     * @return string
     */
    /*public function broadcastAs()
    {
        return 'UserEvent';
    }*/
    /**
     * The event's broadcast name.
     *
     * @return string
     */
    /*public function broadcastWith()
    {
        return [$this->data];
    }*/
}