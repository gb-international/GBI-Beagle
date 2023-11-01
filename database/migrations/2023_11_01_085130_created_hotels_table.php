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
            $table->string('state')->nullable();
            $table->string('city')->nullable();
            $table->text('address')->nullable();
            $table->string('phoneno')->nullable();
            $table->string('country')->nullable();
            $table->string('pincode')->nullable();
            $table->string('email')->nullable();
            $table->Integer('room')->default(2);            
            $table->tinyInteger('star_category')->default(2);            
            $table->Integer('banquets')->default(2);            
            $table->enum('status', ['0', '1'])->default('1');
            $table->string('meta_title')->nullable();
            $table->text('description')->nullable();
            $table->text('meta_description')->nullable();
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
        Schema::dropIfExists('hotels');
    }
}
