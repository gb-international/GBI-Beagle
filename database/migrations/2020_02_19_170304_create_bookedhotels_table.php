<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookedhotelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookedhotels', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('tour_id')->unsigned();
            $table->string('tour_code');
            $table->bigInteger('hotel_id')->unsigned();
            $table->string('check_in')->nullable();
            $table->string('check_out')->nullable();
            $table->string('price')->nullable();
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
        Schema::dropIfExists('bookedhotels');
    }
}
