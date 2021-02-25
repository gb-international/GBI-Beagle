<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItinerarypdfsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('itinerarypdfs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('encyclopedia_id')->unsigned()->nullable();
            $table->foreign('encyclopedia_id')->references('id')->on('encyclopedias')->onDelete('cascade');
            $table->string('name')->nullable();
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
        Schema::dropIfExists('itinerarypdfs');
    }
}
