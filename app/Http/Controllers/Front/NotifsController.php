<?php
/* 
Created by : Manas
Purpose : Get Notifications at Frontend

*/
namespace App\Http\Controllers\Front;
use DB;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Model\User\Subscriber;
use App\Model\Notification\Notifier;
use App\Http\Controllers\Controller;
use App\Model\Notification\Notification;
use App\Http\Resources\NotificationResource;
class NotifsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($user_id, $sort)
    {
        $sub = Subscriber::where('user_id', $user_id)->first();
        $notifs = [];
        if($sub){
            if($sort == 'read'){
                $notifs = Notifier::where('subscription_id', $sub->id)
                        ->where('read', 1)
                        ->orderBy('created_at', 'desc')
                        ->paginate(5);
            } else if($sort == 'unread'){
                $notifs = Notifier::where('subscription_id', $sub->id)
                        ->where('read', 0)
                        ->orderBy('created_at', 'desc')
                        ->paginate(5);
            } else {
                $notifs = Notifier::where('subscription_id', $sub->id)
                        ->orderBy('created_at', 'desc')
                        ->paginate(5);
            }
        }
        
        return NotificationResource::collection($notifs);
    }

    public function indexOld($user_id, $sort)
    {

        $sub = Subscriber::where('user_id', $user_id)->first();

        if($sort == 'read'){
            $notifs = Notifier::where('subscription_id', $sub->id)
                    ->where('read', 1)
                    ->orderBy('created_at')
                    ->paginate(5);
        } else if($sort == 'unread'){
            $notifs = Notifier::where('subscription_id', $sub->id)
                    ->where('read', 0)
                    ->orderBy('created_at')
                    ->paginate(5);
        } else {
            $notifs = Notifier::where('subscription_id', $sub->id)
                    ->orderBy('created_at')
                    ->paginate(5);
        }
        
        return NotificationResource::collection($notifs);

    }

    public function markRead(Request $request)
    {    
        $notif = Notifier::find($request->id);
        $notif->read = 1;
        $notif->save();

        $notifCount = Notifier::where('subscription_id', $notif->subscription_id)
                    ->where('read', 0)
                    ->count();
        return response()->json($notifCount);
    }

    public function notifCount($sub_id)
    {    
        $notifCount = Notifier::where('subscription_id', $sub_id)
                    ->where('read', 0)
                    ->count();
        return response()->json($notifCount);
    }


    public function alert($category, $status, $service)
    {

        if($category !== 'all'){
            $allData = Notifier::select(
            DB::raw("(sum(status)) as count"),
            DB::raw("(DATE_FORMAT(created_at, '$timeSpan')) as timeSpan"))
            ->orderBy('created_at')
            ->where('category', $category)
            ->whereIn('service', $service)
            ->groupBy(DB::raw("DATE_FORMAT(created_at, '$timeSpan')"))
            ->where('status', $status)
            ->limit($timeLimit)
            ->get();
        } else {
            $allData = Notifier::select(
            DB::raw("(sum(status)) as count"),
            DB::raw("(DATE_FORMAT(created_at, '$timeSpan')) as timeSpan"))
            ->orderBy('created_at')
            ->whereIn('service', $service)
            ->groupBy(DB::raw("DATE_FORMAT(created_at, '$timeSpan')"))
            ->where('status', $status)
            ->limit($timeLimit)
            ->get();
        }

        return response()->json($allData);
    }
   
    /**
     * Store a newly created resource in storage.
     
    public function store()
    {
       $notification = Notification::all();
       foreach ($notification as $notif) {
           $ntr = Notifier::where('notification_id', $notif->id)->get();
           foreach ($ntr as $nt) {
               $nt->category = $notif->category;
               $nt->save();
           }
       }

    }*/

    /**
     * Show a resource in view.
     */
    public function show($id)
    {
        $notif = Notifier::find($id);
        return new NotificationResource($notif);
    }

}
