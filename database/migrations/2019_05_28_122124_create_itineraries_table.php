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
            //$table->integer('user_id')->unsigned()->nullable();
            $table->string('source');
            $table->string('destination');
            $table->string('title');
            $table->string('photo');
            $table->string('detail_photo');            
            $table->Integer('noofdays');
            $table->text('description');
            $table->string('tourtype');
            $table->string('hotel_type')->nullable();
            $table->string('bus')->nullable();
            $table->string('train')->nullable();
            $table->string('flight')->nullable();
            $table->string('food');
            $table->Integer('price')->nullable();
            $table->enum('status', ['0', '1'])->default('1');
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
