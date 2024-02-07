<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnsInItinerariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('itineraries', function (Blueprint $table) {
            $table->double('base_price')->default(0)->after("policy");
            $table->double('tcs_fee')->default(0)->after("base_price");
            $table->double('gst_fee')->default(0)->after("tcs_fee");
            $table->double('pg_convenience_and_internet_fee')->default(0)->after("gst_fee");
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('base_price');
        Schema::dropIfExists('tcs_fee');
        Schema::dropIfExists('gst_fee');
        Schema::dropIfExists('pg_convenience_and_internet_fee');
    }
}
