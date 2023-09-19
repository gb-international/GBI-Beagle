<?php
/* 
Created by : Manas
Purpose : Manage Notifications 

*/
namespace App\Http\Controllers\Admin\Notification;

use DB;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Model\User\Subscriber;
use App\Model\Notification\Notifier;
use App\Http\Controllers\Controller;
use App\Model\Notification\Notification;
use App\Http\Resources\NotificationResource;


class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($timeSpan, $category, $status, $service)
    {
        if($status == 'Success'){
           $status = 1;
        } else {
           $status = 0;
        }

        if($service == 'both'){
            $service = ['both', 'email','sms'];
        } else {
            $service = [$service];
        }

        if ($timeSpan == 'Monthly') {
            $timeSpan = 30;
        } else if ($timeSpan == 'Yearly'){
            $timeSpan = 365;
        } else {
            $timeSpan = 7;
        }

        //$notifs = Notification::whereIn('category', $category)->get();
        if($category !== 'all'){
            $allData = Notifier::where('status', $status)
            ->where('category', $category)
            ->whereIn('service', $service)
            ->whereBetween('created_at', [Carbon::now()->subDays($timeSpan), Carbon::now()])
            ->latest('created_at')
            ->with('notification')
            ->paginate(7);
        } else {
            $allData = Notifier::where('status', $status)
            ->whereIn('service', $service)
            ->whereBetween('created_at', [Carbon::now()->subDays($timeSpan), Carbon::now()])
            ->latest('created_at')
            ->with('notification')
            ->paginate(7);
        }


        return NotificationResource::collection($allData);
    }


    public function chartIndex($timeSpan, $category, $status, $service)
    {
        if($status == 'Success'){
           $status = true;
        } else {
           $status = false;
        }

        if($service == 'both'){
            $service = ['both','email','sms'];
        } else {
            $service = [$service];
        }

        if ($timeSpan == 'Monthly') {
            $timeSpan = '%m-%Y';
            $timeLimit = 12;
        } else if ($timeSpan == 'Yearly'){
            $timeSpan = '%Y';
            $timeLimit = 5;
        } else {
            $timeSpan = '%d-%m-%Y';
            $timeLimit = 7;
        }

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
     * Store a newly created resource in storage. **/
     
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

    }

    /**
     * Show a resource in view.
     */
    public function show($id)
    {
        $notif = Notifier::find($id);
        return new NotificationResource($notif);
    }

}
