<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookedflightsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookedflights', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('tour_id')->unsigned();
            $table->string('tour_code');
            $table->bigInteger('flight_id')->unsigned();
            $table->string('source')->nullable();
            $table->string('destination')->nullable();
            $table->string('flight_number')->nullable();
            $table->string('departure')->nullable();
            $table->string('arrival')->nullable();
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
        Schema::dropIfExists('bookedflights');
    }
}
