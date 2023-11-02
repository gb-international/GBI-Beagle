<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedHotelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->text('description')->nullable();
            $table->Integer('no_of_rooms')->default(0);            
            $table->double('star_category')->default(0);            
            $table->string('hotel_type')->nullable();
            $table->string('email')->nullable();
            $table->string('phone_number')->nullable();
            $table->Integer('no_of_banquet')->default(2);            
            $table->text('hotel_policies_description')->nullable();
            $table->text('safety_hygiene_description')->nullable();
            $table->text('address')->nullable();
            $table->unsignedInteger('city_id')->nullable();
            $table->unsignedInteger('state_id')->nullable();
            $table->unsignedInteger('country_id')->nullable();
            $table->string('pincode')->nullable();
            $table->text('location')->nullable();
            $table->enum('status', ['0', '1'])->default('1');
            $table->string('banner_image')->nullable();
            $table->string('banner_alt')->nullable();
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
            $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade');
            $table->foreign('state_id')->references('id')->on('states')->onDelete('cascade');
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hotels');
    }
}
