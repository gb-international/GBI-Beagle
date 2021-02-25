<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Itinerary 

*/
namespace App\Http\Controllers\Admin\Itinerary;

use App\Model\Itinerary\Itinerary;
use App\Model\Itinerary\Itineraryday;
use App\Model\Tour\Tourtype;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;

class ItineraryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;
    public function all($size)
    {
        return response()->json(Itinerary::select([
            'id','title','source','destination','noofdays'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        // return Itinerary::all();
       return response()->json(Itinerary::all());
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
        
        $data = $this->validateItinerary($request);
        // linux and windows file staructure image path error and uploadig error.
        $data['photo']=$this->thumbnail($request->photo,'/uploadimage/',$request->photo_alt);

        $data['detail_photo'] = $this->banner($request->detail_photo,'/uploadimage/',$request->detail_photo_alt);
        $itinerary = new Itinerary();
        $id = $itinerary->insertGetId($data);
        $itinerary = Itinerary::where('id',$id)->first();

        $dayModels = [];
        foreach ($request->itinerarydays as $data) {
            $dayModels[] = new Itineraryday($data);
        }
        $itinerary->itinerarydays()->saveMany($dayModels);
        // Tour Type
        $dayModels = [];
        foreach ($request->tourtypes as $data) {
            $dayModels[] = $data['id'];
        }
        $dayModels = Tourtype::find($dayModels);
        $itinerary->tourtypes()->attach($dayModels);
        return response()->json(['success'=>'Successfully added']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function show(Itinerary $itinerary)
    {
        $itinerary->itinerarydays;
        return response()->json($itinerary);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function edit(Itinerary $itinerary)
    {
        $itinerary->itinerarydays;
        $itinerary->tourtypes;
        return response()->json($itinerary);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Itinerary $itinerary)
    {
        $data = $this->validateItinerary($request);
        if($request->photo){
            $name = $this->thumbnail($request->photo,'/uploadimage/',$request->photo_alt);
            $data['photo'] = $name;
            $image = '/uploadimage/' . $itinerary->photo;
            if(file_exists($image)){
                @unlink($image);
            }
        }       
        if($request->detail_photo){
            $name1 = $this->banner($request->detail_photo,'/uploadimage/',$request->detail_photo_alt);
            $data['detail_photo'] = $name1;
            $image = '/uploadimage/' . $itinerary->detail_photo;
            if(file_exists($image)){
                @unlink($image);
            }
        }        
        $itinerary->update($data);
        // Itinerary Day
        $itinerary->itinerarydays()->delete();
        $dayModels = [];
        foreach ($request->itinerarydays as $data) {
            $dayModels[] = new Itineraryday($data);
        }
        $itinerary->itinerarydays()->saveMany($dayModels);
       // Itinerary tour type
        $dayModels = [];
        foreach ($request->tourtypes as $data) {
            $dayModels[] = $data['id'];
        }
        $dayModels = Tourtype::find($dayModels);
        $itinerary->tourtypes()->sync($dayModels);
        return response()->json(['message'=>'Successfully Addedd']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function destroy(Itinerary $itinerary)
    {
 
        $itinerary->delete();
        return response()->json('successfully deleted');
    }

    public function validateItinerary($request)
    {
      return $this->validate($request, [
            'source' => 'required|min:2|max:100',
            'destination' => 'required|min:3|max:100',
            'noofdays' => 'required|numeric|min:1|max:15',
            'title' => 'required|min:3|max:50',
            'description' => 'required|min:3',
            'tourtype' => 'required',
            'food' => 'required',
            'photo_alt' => '',
            'detail_photo_alt'=>'',
            'hotel_type'=>'',
            'bus'=>'',
            'train'=>'',
            'flight'=>'',
            'price'=>'',          
      ]);
    }


}
