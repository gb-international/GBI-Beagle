<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedItinerarySightseeingRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('iti_sightseeing_requests', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('edu_institute_id')->nullable();
            $table->unsignedInteger('itinerary_id')->nullable();
            $table->unsignedInteger('itineraryday_id')->nullable();
            $table->text('sightseeing_id')->nullable();
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
            $table->foreign('edu_institute_id')->references('id')->on('edu_institutes')->onDelete('cascade');
            $table->foreign('itinerary_id')->references('id')->on('itineraries')->onDelete('cascade');
            $table->foreign('itineraryday_id')->references('id')->on('itinerarydays')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //Drops tables
        Schema::dropIfExists('iti_sightseeing_requests'); 
    }
}
