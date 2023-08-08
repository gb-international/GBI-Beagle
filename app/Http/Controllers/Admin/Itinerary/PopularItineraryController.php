<?php
/* 
Created by : Manas 
Purpose : Manage Popular Itineraries
*/
namespace App\Http\Controllers\Admin\Itinerary;

use App\Model\Itinerary\Popular;
//use App\Traits\ImageTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PopularItineraryController extends Controller
{
    public function all($size)
    {
        return response()->json(Popular::with(
            'itinerary',
            'season',
            )
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        return response()->json(Popular::with(
            'itinerary',
            'season',
            )
            ->get()
        );
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $data = Popular::create($this->validatePopular($request));
        $data->save();
        return response()->json(['Message'=> 'successfull']);
    }

    public function show(Popular $popular)
    {
        //
    }

    public function edit($id)
    {
        return response()->json(Popular::where('id', $id)->first()
        );
    }

    public function update(Request $request, $id)
    {
        $popular = Popular::find($id);
        $data = $this->validatePopular($request);

        $popular->update($data);
        return response()->json(['Message'=> 'successfull']);
    }

    public function destroy($id)
    {
        $popular = Popular::find($id);
        $popular->delete();
        return response()->json('successfully deleted');
    }

    public function validatePopular($request)
    {
        return $this->validate($request,[
            'season_id'=>'required',
            'itinerary_id'=>'required'
        ]);
    }
}
