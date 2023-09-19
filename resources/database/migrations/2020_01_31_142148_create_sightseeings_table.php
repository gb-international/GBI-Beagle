<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSightseeingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sightseeings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('city_id')->nullable();
            $table->string('state_id')->nullable();
            $table->string('name');
            $table->string('address')->nullable();
            $table->string('image')->nullable();
            $table->text('description')->nullable();
            $table->string('adult_price')->nullable();
            $table->string('child_price')->nullable();
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
        Schema::dropIfExists('sightseeing');
    }
}
