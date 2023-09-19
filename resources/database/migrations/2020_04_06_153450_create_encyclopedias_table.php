<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEncyclopediasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('encyclopedias', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('state_name')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('banner_image')->nullable();
            $table->text('description')->nullable();
            $table->text('map_link')->nullable();
            $table->string('slug')->nullable();
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
        Schema::dropIfExists('encyclopedias');
    }
}
