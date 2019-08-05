<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItinerariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('itineraries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('hotel_id')->unsigned()->nullable();
            $table->integer('transport_id')->unsigned()->nullable();
            $table->integer('sales_id')->unsigned()->nullable();
            $table->integer('user_id')->unsigned()->nullable();
            $table->string('source');
            $table->string('destination');
            $table->string('title');
            $table->string('photo');
            $table->Integer('noofdays');
            $table->string('description');
            $table->string('tourtype');
            $table->string('sightseeing')->nullable();
            $table->Integer('price')->nullable();
            $table->enum('status', ['0', '1']);
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
        Schema::dropIfExists('itineraries');
    }
}
