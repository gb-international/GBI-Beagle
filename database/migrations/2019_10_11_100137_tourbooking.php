<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Tourbooking extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tourbook', function (Blueprint $table) {
            $table->increments('id');
            $table->string('itinerary_id');
            $table->string('client_id');
            $table->string('no_of_traveller');
            $table->string('tour_code');
            $table->string('tour_start_date');
            $table->string('tour_end_date');
            $table->enum('tour_status', ['0', '1'])->default('0');
            $table->timestamps();

            $table->foreign('tour_code')->references('tour_id')->on('tours')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
