<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Contry 

*/
namespace App\Http\Controllers\Admin\Location;

use App\Model\Location\Country;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\country\CountryRequest;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(Country::select('id','name','updated_at')
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        return response()->json(Country::get());
    }

    public function getAllCountry(){
        return response()->json(Country::get(["name","id"])->toArray());
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
    public function store(CountryRequest $request)
    {
        try{
            $data = array();
            $data['name'] = $request->name??'';
            $country = Country::create($data);
            return response()->json(['Message'=> 'successfull']);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function show(Country $country)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function edit(Country $country)
    {
        return response()->json($country);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function update(CountryRequest $request, Country $country)
    {
        try{
            $data = array();
            $data['name'] = $request->name??$country->name;
            $country = Country::create($data);
            return response()->json(['Message'=> 'Updated!']);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function destroy(Country $country)
    {
        $country->delete();

        return response()->json('successfully deleted');
    }

    public function validateCountry($request)
    {
        return $this->validate($request,[
            'name' => ['required','unique:countries,name',new AlphaSpace],
        ]);
    }
}
