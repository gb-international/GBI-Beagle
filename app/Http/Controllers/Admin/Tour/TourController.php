<?php
/* created by : Ajay yadav 
Purpose : Manage tour of gbi  */
namespace App\Http\Controllers\Admin\Tour;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Model\Tour\Tour;
use App\Http\Resources\TourCollection;
use App\Model\Reservation\Bookedbus;
use App\Model\Reservation\Bookedescort;
use App\Model\Reservation\Bookedflight;
use App\Model\Reservation\Bookedhotel;
use App\Model\Reservation\Bookedrestaurant;
use App\Model\Reservation\Bookedtrain;
use App\Model\Reservation\Bookedsightseeing;

class TourController extends Controller
{
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
        if($size == 'all'){
            return response()->json(Tour::where('customer_type', 'school')->with('school:id,school_name')
            ->latest('updated_at')
        );
        }else {
            return response()->json(Tour::where('customer_type', 'school')->with('school:id,school_name')
            ->latest('updated_at')
            ->paginate($size));
        }
    }

    public function corporate($size)
    {
        if($size == 'all'){
            return response()->json(Tour::where('customer_type', 'corporate')->with('company:id,company_name')
            ->latest('updated_at')
        );
        }else {
        return response()->json(Tour::where('customer_type', 'corporate')->with('company:id,company_name')
            ->latest('updated_at')
            ->paginate($size));
        }
    }

    public function general($size)
    {
        if($size == 'all'){
            return response()->json(Tour::where('customer_type', 'general')->with('family:id,family_name')
            ->latest('updated_at')
        );
        }else {
        return response()->json(Tour::where('customer_type', 'general')->with('family:id,family_name')
            ->latest('updated_at')
            ->paginate($size));
        }
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
    public function store(Request $request)
    {
        $tour = Tour::create($this->validateTour($request));
        return response()->json(['Message'=> 'Successfully Added...']);
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
        //$sightseeing = array_filter( $sightseeing);
        
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
    public function update(Request $request, Tour $tour)
    {
        $tour->update($this->validateTour($request));
        return response()->json(['message'=>'Successfully Updated']);
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
            'family_id' => '',
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
