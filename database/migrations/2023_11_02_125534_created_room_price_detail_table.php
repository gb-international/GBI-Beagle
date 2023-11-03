<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedRoomPriceDetailTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_price_details', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('room_id')->nullable();
            $table->string('occupancy_type')->nullable();
            $table->double('net_rate')->default(0);            
            $table->double('rack_rate')->default(0);            
            $table->double('discount')->default(0);                        
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
            $table->foreign('room_id')->references('id')->on('rooms')->onDelete('cascade');
        });   
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('room_price_details'); 
    }
}
