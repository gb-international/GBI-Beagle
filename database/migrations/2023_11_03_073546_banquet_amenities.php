<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BanquetAmenities extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('amenities_banquet', function (Blueprint $table) {
            $table->unsignedInteger('banquet_id')->nullable();
            $table->unsignedInteger('amenities_id')->nullable();
            $table->foreign('banquet_id')->references('id')->on('banquets')->onDelete('cascade');
            $table->foreign('amenities_id')->references('id')->on('amenities')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('amenities_banquet');
    }
}
