<?php

namespace App\Http\Controllers\Admin\Advertising_And_Discount;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Advertising_And_Discount\MarketingCampaign;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\Advertising_And_Discount\MarketingCampaignRequest;

class MarketingCampaignController extends BaseController
{
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
            print_r($marketing_campaign->id);
            $marketing_campaign->meta_keywords;
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull created');
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
    public function edit($id)
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
