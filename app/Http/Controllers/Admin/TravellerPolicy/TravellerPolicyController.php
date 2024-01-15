<?php
namespace App\Http\Controllers\Admin\TravellerPolicy;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController;
use App\Model\TravellerPolicy\TravellerPolicy;
use App\Http\Requests\Admin\Policy\TravellerPolicyRequest;
class TravellerPolicyController extends BaseController
{
    //Fetch all data
    public function all($size=null){
        try{
            $size = empty($size)?10:$size;
            $data = TravellerPolicy::paginate($size);
            return response()->json($data);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    //Fetch policy per category
    public function policy_per_category($traveller_category_id, $size=null){
        try{
            $size = empty($size)?10:$size;
            $data = TravellerPolicy::where('traveller_policy_category_id',$traveller_category_id)->paginate($size);
            return response()->json($data);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(TravellerPolicyRequest $request)
    {
        try{
            $traveller_policy = new TravellerPolicy;
            $traveller_policy->name = $request->name??NULL;
            $traveller_policy->traveller_policy_category_id = $request->traveller_policy_category_id??NULL;
            $traveller_policy->policy_type = $request->policy_type??NULL;
            $traveller_policy->description = $request->description??NULL;
            $traveller_policy->status = $request->status??0;
            $traveller_policy->save();
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successful created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $traveller_policy = TravellerPolicy::where('id', $id)->first();
            if(!empty($traveller_policy)){
                return response()->json($traveller_policy);
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }   
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try{
            $traveller_policy = TravellerPolicy::where('id', $id)->first();
            if(!empty($traveller_policy)){
                return response()->json($traveller_policy);
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TravellerPolicyRequest $request, $id)
    {
        try{
            $traveller_policy = TravellerPolicy::where('id', $id)->first();
            if(!empty($traveller_policy)){
                $traveller_policy->name = $request->name??$traveller_policy->name;
                $traveller_policy->traveller_policy_category_id = $request->traveller_policy_category_id??$traveller_policy->traveller_policy_category_id;
                $traveller_policy->policy_type = $request->policy_type??$traveller_policy->policy_type;
                $traveller_policy->description = $request->description??$traveller_policy->description;
                $traveller_policy->status = $request->status??$traveller_policy->status;
                $traveller_policy->save();
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $traveller_policy = TravellerPolicy::where('id', $id)->first();
            if(!empty($traveller_policy)){
                $traveller_policy->delete();
                return response()->json('successfully deleted');
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function publish(Request $request){
        
    }
}
