<?php
/* 
Created by : Manas 
Purpose : Manage Events
*/
namespace App\Http\Controllers\Admin\Event;

use App\Model\Event\Event;
use App\Traits\ImageTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;
    public function all($size)
    {
        return response()->json(Event::latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        return response()->json(Event::get());
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
        $data = Event::create($this->validateEvent($request));
        if($request->photo){
            $data->photo = $this->AwsFileUpload($request->photo,config('gbi.event_image'),$request->photo_alt);
        }
        if($request->detail_photo){
            $data->detail_photo = $this->AwsFileUpload($request->detail_photo,config('gbi.event_image'),$request->detail_photo_alt);
        }
        $data->save();
        return response()->json(['Message'=> 'successfull']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        return response()->json($event);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        //$event->update($this->validateEvent($request));
        $data = $this->validateEvent($request);

        // thumbnail photo upload
        if($request->photo != $event->photo){
            $data['photo'] = $this->AwsFileUpload($request->photo,config('gbi.event_image'),$request->photo_alt);
            if($event->photo){
                $this->AwsDeleteImage($event->detail_photo);
            }
        }else{
            unset($data['photo']);
        }
        // detail photo upload
        if($request->detail_photo != $event->detail_photo){
            $data['detail_photo'] = $this->AwsFileUpload($request->detail_photo,config('gbi.event_image'),$request->detail_photo_alt);
            if($event->detail_photo){
                $this->AwsDeleteImage($event->detail_photo);
            }
        }else{
            unset($data['detail_photo']);
        }
        $event->update($data);
        return response()->json(['Message'=> 'successfull']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        $event->delete();
        return response()->json('successfully deleted');
    }

    public function validateEvent($request)
    {
        return $this->validate($request,[
            'name'=>'required',
            'description'=>'required',
            'date'=>'required|date|after:today',
            'time'=>'required',
            'photo'=>'required',
            'detail_photo'=>'required',
            'itinerary_id' => 'required|exists:itineraries,id',
        ]);
    }
}
