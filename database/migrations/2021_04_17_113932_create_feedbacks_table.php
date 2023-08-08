<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFeedbacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feedbacks', function (Blueprint $table) {

            $table->bigIncrements('id');

            $table->Integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('no action');

            $table->Integer('tour_id')->unsigned();
            $table->foreign('tour_id')->references('id')->on('tours')->onDelete('no action');

            /*$table->string('user_name');
            $table->string('user_email');
            $table->Integer('user_ph_no');*/
            
            $table->Integer('trip_itenerary');
            $table->Integer('place_of_stay');
            $table->Integer('food_quality');
            $table->Integer('transport_arrangements');
            $table->Integer('recommend_to_others');
            $table->Integer('travel_again');
            
            $table->text('comments')->nullable();

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
        Schema::dropIfExists('feedbacks');
    }
}
