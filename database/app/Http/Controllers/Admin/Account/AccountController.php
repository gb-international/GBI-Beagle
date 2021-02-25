<?php
/* 
Created by : Ajay yadav 
Purpose : Manage accountant itinerary which is sent to sales man 

*/

namespace App\Http\Controllers\Admin\Account;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Http\Resources\Admin\AccountCollection;
use App\Model\Account\Account;
use App\User;
use App\Model\Tour\Tour;
use Auth;
use Notification;
use App\Notifications\NewSalesAlertNotification;


class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        $data['data'] = Account::leftjoin('itineraries', 'itineraries.id', '=', 'accounts.itinerary_id')
                ->leftjoin('users', 'users.id', '=' ,'accounts.salesdp_id')
                ->select('itineraries.title','accounts.price','accounts.status','accounts.id','users.name')
                ->where('accounts.status' ,'!=', 'confirm')
                ->orderBy('accounts.id','desc')
                ->paginate($size);
        return response()->json($data['data']);
    }

    public function index()
    {
        $data['data'] = Account::leftjoin('itineraries', 'itineraries.id', '=', 'accounts.itinerary_id')
                ->leftjoin('users', 'users.id', '=' ,'accounts.salesdp_id')
                ->select('itineraries.title','accounts.price','accounts.status','accounts.id','users.name')
                ->orderBy('accounts.id','desc')
                ->get();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request,[
            'itinerary_id'=>'required',
            'price'=>'required|numeric',
            'salesdp_id'=>'required'
        ]);

        $check = Account::where(['itinerary_id'=>$request->input('itinerary_id'),'salesdp_id'=>$request->input('salesdp_id')])->get();
         if(count($check) > 0){
            return $response['error'] = 'error';
         }else{
            $account = new Account();
            $account->itinerary_id = $request->input('itinerary_id');
            $account->price = $request->input('price');
            $account->salesdp_id = $request->input('salesdp_id');
            $account->added_by = Auth::user()->id;
            $account->save();
            $data = [];
            $data['id'] = $account->salesdp_id;
            $data['from'] = Auth::user()->name;
            $data['body'] = 'has sent you an itinerary, Cost : '.$account->price;
            $data['itinerary_id'] = $account->itinerary_id;
            $this->sendNotification($data);
            return $response['success'] = 'success';
         }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Account::leftjoin('itineraries', 'itineraries.id', '=', 'accounts.itinerary_id')
                ->leftjoin('salesdps', 'salesdps.id', '=' ,'accounts.salesdp_id')
                ->select('itineraries.title','accounts.price','accounts.status','accounts.id','accounts.selling_price','accounts.no_of_client','accounts.start_date','accounts.end_date','accounts.booking_id','salesdps.name','salesdps.phoneno')
                ->orderBy('accounts.id','desc')
                ->where('accounts.id',$id)
                ->get();
        return response()->json($data[0]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Account::leftjoin('itineraries', 'itineraries.id', '=', 'accounts.itinerary_id')
                ->select('itineraries.title','accounts.selling_price','accounts.start_date','accounts.end_date','accounts.no_of_client')
                ->where('accounts.id',$id)
                ->orderBy('accounts.id','desc')
                ->get();
        return $data[0];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $account = Account::find($id);
        $account->status = $request->status;

        if($request->status == 'confirm'){
            $this->validate($request,[
                'booking_id'=>'required|unique:accounts'
            ]);

            $tour = new Tour();
            $tour->tour_id = $request->booking_id;
            $tour->tour_start_date = $request->start_date;
            $tour->tour_end_date = $request->end_date;
            $tour->itinerary_id = $account->itinerary_id;
            $tour->school_id = $account->client_id;
            $tour->tour_price = $request->selling_price;
            $tour->save();


            $account->booking_id = $request->booking_id;
            $account->save();
            return $response['success'] = 'success';
        }else{
            $account->save();
            return $response['error'] = 'error';
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $account = Account::where('id','=',$id)->delete();
        return response()->json('Successfully Deleted');
    }

    // Sales Department Controlling functions

    public function sales_itinerary()
    {
        $id = Auth::user()->id;
        $data['data'] = Account::leftjoin('itineraries', 'itineraries.id', '=', 'accounts.itinerary_id')
                ->leftjoin('salesdps', 'salesdps.id', '=' ,'accounts.salesdp_id')
                ->select('itineraries.title','itineraries.noofdays','accounts.price','accounts.status','accounts.id','salesdps.created_at','accounts.itinerary_id')
                ->orderBy('accounts.id','desc')
                ->where('accounts.salesdp_id',$id)
                ->get();
        return response()->json($data);
    }

    public function account_booking_store(Request $request,$id)
    {
        $this->validate($request,[
            'selling_price'=>'required|numeric',
            'no_of_client'=>'required|numeric',
            'start_date'=>'required',
            'end_date'=>'required',
            'client_id'=>'required'
        ]);
        $account = Account::find($id);
        $account->selling_price = $request->selling_price;
        $account->no_of_client = $request->no_of_client;
        $account->start_date = $request->start_date;
        $account->end_date = $request->end_date;
        $account->client_id = $request->client_id;
        $account->save();
        $user = User::where('id',$account->added_by)->first();
        if($account){

            $data = [];
            $data['id'] = $account->added_by;
            $data['from'] = Auth::user()->name;
            $data['body'] = 'has sent you an itinerary, Selling Price : '.$account->selling_price;
            $data['itinerary_id'] = $account->itinerary_id;
            $this->sendNotification($data);

            return $response['success'] = 'success';
        }else{
            return $response['error'] = 'error';
        }
    }



    public function sendNotification($data)
    {

        $user = User::find($data['id']);

        $details = [
                'from' => $data['from'],
                'body' => $data['body'],
                'itinerary_id' => $data['itinerary_id']
        ];

        Notification::send($user,new NewSalesAlertNotification($details));
        return 'success';
    }

    public function notificationList()
    {
        $notifications = auth()->user()->notifications;
        return response()->json($notifications);
    }

    public function markRead($id)
    {
        $notification = auth()->user()->notifications()->where('id', $id)->first();

        if ($notification) {
            $notification->markAsRead();
            return response()->json('success');
        }
    }

}
