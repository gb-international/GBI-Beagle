<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItineraryrequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('itineraryrequests', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('source');
            $table->string('destination');
            $table->string('tourtype');
            $table->string('noofday');
            $table->string('phoneno');
            $table->string('email');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('itineraryrequests');
    }
}
