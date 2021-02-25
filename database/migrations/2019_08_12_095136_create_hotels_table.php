<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHotelsTable extends Migration
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
            $table->string('type');
            $table->string('name');
            $table->string('state');
            $table->string('city');
            $table->text('address');
            $table->string('phoneno');
            $table->string('email');
            $table->string('room');
            $table->string('image')->nullable();
            $table->string('alt')->nullable();
            $table->string('apai_single')->nullable();
            $table->string('apai_double')->nullable();
            $table->string('apai_triple')->nullable();
            $table->string('apai_quad')->nullable();
            $table->string('mapai_single')->nullable();
            $table->string('mapai_double')->nullable();
            $table->string('mapai_triple')->nullable();
            $table->string('mapai_quad')->nullable();
            $table->string('cpai_single')->nullable();
            $table->string('cpai_double')->nullable();
            $table->string('cpai_triple')->nullable();
            $table->string('cpai_quad')->nullable();
            
            $table->enum('status', ['0', '1'])->default('1');
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
