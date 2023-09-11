<?php

namespace App\Http\Controllers\Admin\Tour;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Food;

use App\Rules\AlphaSpace;
use App\Http\Requests\Admin\FoodRequest;
use App\Http\Controllers\Admin\BaseController;

class FoodController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $data['data'] = Food::where('tour_code',$id)->get();
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FoodRequest $request)
    {
        try{
            $data = array();
            $data['tour_id'] = $request->tour_id??0;
            $data['tour_code'] = $request->tour_code??'';
            $data['name'] = $request->name??'';
            $data['quantity'] = $request->quantity??'';
            $result = Food::create($data);
            return $this->sendResponse($result,'Successfully Created', 201);
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(FoodRequest $request, $id)
    {
        try{
            $data = array();
            $data['tour_id'] = $request->tour_id??0;
            $data['tour_code'] = $request->tour_code??'';
            $data['name'] = $request->name??'';
            $data['quantity'] = $request->quantity??'';
            $food = Food::find($id);
            $food = $food->update($data); 
            return $this->sendResponse($food,'Successfully Created');       
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
    public function destroy($id)
    {
        Food::find($id)->delete();
        return response()->json('successfully deleted');

    }

     public function validateFood($request)
    {
        return $this->validate($request, [
            'name' => ['required',new AlphaSpace],
            'quantity' => 'required',
            'tour_id'=>'',
            'tour_code'=>''
        ]);
    }
}
