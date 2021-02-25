<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePnrsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pnrs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('transport_id')->nullable();            
            $table->string('transport_type')->nullable();
            $table->string('tour_code')->nullable();
            $table->string('pnr_number')->nullable();

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
        Schema::dropIfExists('pnrs');
    }
}
