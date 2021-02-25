<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEscortTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('escorts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('salaryPerday');
            $table->string('phoneno');
            $table->string('email');
            $table->text('address');
            $table->string('id_card_number')->nullable();
            $table->string('id_photo')->nullable();
            $table->string('status')->default('1');;
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
        Schema::dropIfExists('escort');
    }
}
