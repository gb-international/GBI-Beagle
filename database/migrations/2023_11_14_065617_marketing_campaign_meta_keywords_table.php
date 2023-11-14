<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MarketingCampaignMetaKeywordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('marketing_campaign_meta_keyword', function (Blueprint $table) {
            $table->unsignedBigInteger('marketing_campaign_id')->nullable();
            $table->unsignedInteger('meta_keyword_id')->nullable();
            $table->foreign('marketing_campaign_id')->references('id')->on('marketing_campaigns')->onDelete('cascade');
            $table->foreign('meta_keyword_id')->references('id')->on('meta_keywords')->onDelete('cascade');
        }); 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('marketing_campaign_meta_keyword');
    }
}
