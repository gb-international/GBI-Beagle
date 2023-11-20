<?php

namespace App\Http\Controllers\Admin\Advertising_And_Discount;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Advertising_And_Discount\MarketingCampaign;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\Advertising_And_Discount\MarketingCampaignRequest;
use App\Traits\ImageTrait;
use Image;

class MarketingCampaignController extends BaseController
{
    /**
     * Display a listing of the data per page limit default is 10.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size=null)
    {
        if (empty($size)) {
            $size = 10; 
        }
        $data = MarketingCampaign::latest()->paginate($size);
        foreach ($data as $marketing_campaign){
            $marketing_campaign->meta_keywords;
        }
        return response()->json($data);
    }

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
    public function store(MarketingCampaignRequest $request)
    {
        try{
            $marketing_campaign = new MarketingCampaign();
            $marketing_campaign->title = $request->title??'';
            $marketing_campaign->description = $request->description??'';
            $marketing_campaign->start_date = $request->start_date??'';
            $marketing_campaign->end_date = $request->end_date??'';
            
            if($request->image){
                $imagename = explode('.',$request->image[0]['name'])[0];
                $marketing_campaign->image = $this->AwsFileUpload($request->image[0]['file'],config('gbi.marketing_campaign_image'),$imagename);
                $marketing_campaign->alt = $imagename;
            }
            $marketing_campaign->save();

            //Connected marketing_campaign to meta_keywords table
            $marketing_campaign->meta_keywords()->sync(array_unique($request->meta_keywords??''));
              
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull created');
    }

    /**
     * Display the specified resource.
     *
     * @p   
     * 
     * aram  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {        
        try{
            $data = MarketingCampaign::where('id',$id)->first();
            if(!empty($data)){
                $data->meta_keywords;
                return response()->json($data);
            }
            else{
                return $this->sendError("Id does not exist", 404);
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
            $data = MarketingCampaign::where('id',$id)->first();
            if(!empty($data)){
                $data->meta_keywords;
                return response()->json($data);
            }
            else{
                return $this->sendError("Id does not exist", 404);
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
    public function update(Request $request, $id)
    {
        try{
            $data = MarketingCampaign::where('id',$id)->first();
            if(!empty($data)){
                $data->title = $request->title??$data->title;
                $data->description = $request->description??$data->description;
                $data->start_date = $request->start_date??$data->start_date;
                $data->end_date = $request->end_date??$data->end_date;
                
                if($request->image){
                    if($data->image){
                        $this->AwsDeleteImage($data->image);
                    }
                    $imagename = explode('.',$request->image[0]['name'])[0];
                    $data->image = $this->AwsFileUpload($request->image[0]['file'],config('gbi.marketing_campaign_image'),$imagename);
                    $data->alt = $imagename;
                }
                $data->save();
    
                //Connected marketing_campaign to meta_keywords table
                $data->meta_keywords()->sync(array_unique($request->meta_keywords??''));
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successful updated');
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
            //fetch data from table 
            $data = MarketingCampaign::where('id',$id)->first();
            if(!empty($data)){
                $data->delete();
                return response()->json("Deleted successful!");
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
 