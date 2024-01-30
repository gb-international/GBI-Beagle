<?php
/* created by : Ajay yadav 
Purpose : Manage tour of gbi  */
namespace App\Http\Controllers\Admin\Tour;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Tour\Tour;
use App\Model\Tour\Payment as PaymentModel;
use App\Http\Resources\TourCollection;
use App\Model\Reservation\Bookedbus;
use App\Model\Reservation\Bookedescort;
use App\Model\Reservation\Bookedflight;
use App\Model\Reservation\Bookedhotel;
use App\Model\Reservation\Bookedrestaurant;
use App\Model\Reservation\Bookedtrain;
use App\Model\Reservation\Bookedsightseeing;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\TourRequest;
use Validator;

class TourController extends BaseController
{
    public function paymentThrough(Request $request){
       try{
           $validator = Validator::make($request->all(), [ 
               'tour_id'=>'required|exists:tours,id',
               'payment_through_status'=>'required|in:0,1',
           ]);
           
           if ($validator->fails()) {
               return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
           }
           $payment_count = PaymentModel::where('tour_id', $request->tour_id)->count();
           if($payment_count > 0){
               return $this->sendError("Payment done or processing");
           }
           $tour = Tour::where('id', $request->tour_id)->first();
           $tour->payment_through_status = $request->payment_through_status??0;
           $tour->save();
           return response()->json('successfully updated!');
       }
       catch(Exception $e){
           return $this->sendError($e->getMessage());
       }
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function all($size)
    {
        return response()->json(Tour::with('school:id,school_name')
            ->latest('updated_at')
            ->paginate($size));
    }

    public function school($size)
    {
        return response()->json(Tour::where('customer_type', 'school')->with('school:id,school_name')
            ->latest('updated_at')
            ->paginate($size));
    }

    public function corporate($size)
    {
        return response()->json(Tour::where('customer_type', 'corporate')->with('company:id,company_name')
            ->latest('updated_at')
            ->paginate($size));
    }

    public function general($size)
    {
        return response()->json(Tour::where('customer_type', 'general')->with('family:id,family_name')
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return new TourCollection(Tour::with('school')->get());
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
    public function store(TourRequest $request)
    {
        try{
            $data = array();
            $data['customer_type'] = $request->customer_type??0; 
            $data['school_id'] = $request->school_id??0; 
            $data['company_id'] = $request->company_id??0; 
            // $data['family_id'] = $request->family_id??0; 
            $data['itinerary_id'] = $request->itinerary_id??0; 
            $data['tour_id'] = $request->tour_id??0; 
            $data['travel_code'] = $request->travel_code??''; 
            $data['tour_start_date'] = $request->tour_start_date??''; 
            $data['tour_end_date'] = $request->tour_end_date??''; 
            $data['tour_price'] = $request->tour_price??0; 
            $tour = Tour::create($data);
            return response()->json(['Message'=> 'Successfully Added...']);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function show(Tour $tour)
    {
        // Sql Query for this code
        // SELECT trains.name FROM trains INNER JOIN bookedtrains ON trains.id = bookedtrains.train_id where tour_id = 2

        $escorts = Bookedescort::with('escort')->where('tour_id',$tour->id)->get();
        $trains = Bookedtrain::with('train')->where('tour_id',$tour->id)->get();
        $flights = Bookedflight::with('flight')->where('tour_id',$tour->id)->get();
        $hotels = Bookedhotel::with('hotel')->where('tour_id',$tour->id)->get();
        $buses = Bookedbus::with('bus')->where('tour_id',$tour->id)->get();
        $restaurant = Bookedrestaurant::with('restaurant')->where('tour_id',$tour->id)->get();
        $sightseeing = Bookedsightseeing::with('sightseeing')->where('tour_id',$tour->id)->get()->groupBy('itineraryday_id');
        
        if($tour->customer_type == 'school'){
            $data = ['itinerary'=>$tour->itinerary,'entity'=>$tour->school,'tour'=>$tour,'escort'=>$escorts,'train'=>$trains,'flight'=>$flights,'hotel'=>$hotels,'restaurant'=>$restaurant,'bus'=>$buses,'sightseeing'=>$sightseeing];
        }
        else if($tour->customer_type == 'corporate'){
            $data = ['itinerary'=>$tour->itinerary,'entity'=>$tour->company,'tour'=>$tour,'escort'=>$escorts,'train'=>$trains,'flight'=>$flights,'hotel'=>$hotels,'restaurant'=>$restaurant,'bus'=>$buses,'sightseeing'=>$sightseeing];
        }
        else if($tour->customer_type == 'general'){
            $data = ['itinerary'=>$tour->itinerary,'entity'=>$tour->family,'tour'=>$tour,'escort'=>$escorts,'train'=>$trains,'flight'=>$flights,'hotel'=>$hotels,'restaurant'=>$restaurant,'bus'=>$buses,'sightseeing'=>$sightseeing];
        }
        
        
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function edit(Tour $tour)
    {
        return response()->json($tour);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function update(TourRequest $request, Tour $tour)
    {
        try{
            $data = array();
            $data['customer_type'] = $request->customer_type??$tour->customer_type; 
            $data['school_id'] = $request->school_id??$tour->school_id; 
            $data['company_id'] = $request->company_id??$tour->company_id; 
            // $data['family_id'] = $request->family_id??$tour->family_id; 
            $data['itinerary_id'] = $request->itinerary_id??$tour->itinerary_id; 
            $data['tour_id'] = $request->tour_id??$tour->tour_id; 
            $data['travel_code'] = $request->travel_code??$tour->travel_code; 
            $data['tour_start_date'] = $request->tour_start_date??$tour->tour_start_date; 
            $data['tour_end_date'] = $request->tour_end_date??$tour->tour_end_date; 
            $data['tour_price'] = $request->tour_price??$tour->tour_price; 
            $tourUpdate = $tour->update($data);
            return response()->json(['message'=>'Successfully Updated']);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage());
        }
        // $tour->update($this->validateTour($request));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tour $tour)
    {
        $tour->delete();
        return response()->json('successfully deleted');
    }

    // Validate Escort
    public function validateTour($request)
    {
      return $this->validate($request, [
            'school_id' => '',
            'company_id' => '',
            // 'family_id' => '',
            'customer_type' => 'required',
            'itinerary_id' => 'required',
            'tour_id' => 'required',
            'travel_code' => 'required',
            'tour_start_date' => 'required',
            'tour_end_date' => 'required',
            'tour_price' => 'required',
      ]);
    }
}
