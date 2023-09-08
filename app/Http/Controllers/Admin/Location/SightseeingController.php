<?php
/*
Created by : Ajay yadav 
Purpose : GBI Sightseeing manage here

*/
namespace App\Http\Controllers\Admin\Location;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\SightSeeingCollection;
use App\Model\Reservation\Sightseeing;
use App\Traits\ImageTrait;
use App\Rules\AlphaSpace;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\Sightseeing\SightseeingRequest;

class SightseeingController extends BaseController
{
    use ImageTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(Sightseeing::with(['city'])
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        return new SightSeeingCollection(Sightseeing::with(['city','state'])->get());
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
    public function store(SightseeingRequest $request)
    {
        try{
            $data = array();
            $data['state_id'] = $request->state_id??0;
            $data['city_id'] = $request->city_id??0;
            $data['name'] = $request->name??'';
            $data['address'] = $request->address??'';
            $data['description'] = $request->description??'';
            $data['adult_price'] = $request->adult_price??'';
            $data['child_price'] = $request->child_price??'';

            // $data = $this->validateSightseeing($request);
            if($request->image){
                $data['image'] = $this->AwsFileUpload($request->image,config('gbi.sightseeing_image'),$request->alt);
            }else{
                unset($data['image']);
                unset($data['alt']);
            }
            $sightseeing = Sightseeing::create($data);

            $mapData = \GoogleMaps::load('geocoding')
            ->setParam (['address' => $sightseeing->address])
            ->get('results.geometry.location')??0;

            $sightseeing->latlng = $mapData['results'][0]['geometry']['location']??0;

            $sightseeing->save();
        return $this->sendResponse($sightseeing,'Successfully Added...');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Sightseeing $sightseeing)
    {
        return response()->json($sightseeing);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sightseeing $sightseeing)
    {
        try{
            $data = array();
            $data['state_id'] = $request->state_id??$sightseeing->state_id;
            $data['city_id'] = $request->city_id??$sightseeing->city_id;
            $data['name'] = $request->name??$sightseeing->name;
            $data['address'] = $request->address??$sightseeing->address;
            $data['description'] = $request->description??$sightseeing->description;
            $data['adult_price'] = $request->adult_price??$sightseeing->adult_price;
            $data['child_price'] = $request->child_price??$sightseeing->child_price;

            $data = $this->validateSightseeing($request);
            if($request->image!=$sightseeing->image){
                $data['image'] = $this->AwsFileUpload($request->image,config('gbi.sightseeing_image'),$request->alt);
                $this->AwsDeleteImage($sightseeing->image);
            }else{
                unset($data['image']);
                unset($data['alt']);
            }
            $sightseeing->update($data);

            $mapData = \GoogleMaps::load('geocoding')
            ->setParam (['address' => $sightseeing->address])
            ->get('results.geometry.location');

            $sightseeing->latlng = $mapData['results'][0]['geometry']['location']??0;

            $sightseeing->save();
            return $this->sendResponse($sightseeing,'Successfully update');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sightseeing $sightseeing){
        $this->AwsDeleteImage($sightseeing->image);
        $sightseeing->delete();
        return response()->json(['success','Sightseeing deleted successfully...']);
    }

    // Validate sightseeing

    public function validateSightseeing($request)
    {
      return $this->validate($request, [
          'state_id' => 'required',
          'city_id' => 'required',
          'name' => ['required',new AlphaSpace],
          'address'=>'required',
          'description'=>'required',
          'adult_price' => '',
          'child_price' => '',
          'alt'=>'',
          
      ]);
    }
}
