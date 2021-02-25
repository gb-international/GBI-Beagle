<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItinerarydaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('itinerarydays', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('itinerary_id')->unsigned()->nullable();
            //$table->integer('user_id')->unsigned()->nullable();
            $table->string('day')->nullable();
            $table->string('day_source');
            $table->string('day_destination');
            $table->text('day_description');
            $table->enum('status', ['0', '1'])->default('1');
            $table->timestamps();
        $table->foreign('itinerary_id')->references('id')->on('itineraries')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('itinerarydays');
    }
}
