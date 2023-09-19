<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTourUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tour_user', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('travel_code')->nullable();
            $table->integer('user_id')->unsigned()->nullable();
            $table->string('tour_code');
            $table->string('user_type')->default("student")->nullable();
            $table->string('is_paid')->defult("1")->nullable();

            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('tour_user');
    }
}
