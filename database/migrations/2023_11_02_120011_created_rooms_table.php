<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('room_category_id')->nullable();
            $table->text('description')->nullable();
            $table->Integer('maximum_occupancy')->default(0);            
            $table->double('inches')->default(0);            
            $table->double('length')->default(0);            
            $table->double('width')->default(0);            
            $table->double('height')->default(0);            
            $table->string('currency_type')->default(0);            
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
            $table->foreign('room_category_id')->references('id')->on('room_categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rooms'); 
    }
}
