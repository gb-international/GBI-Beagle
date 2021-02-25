<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEncyclopediaImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('encyclopedia_images', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('encyclopedia_id');
            $table->foreign('encyclopedia_id')->references('id')->on('encyclopedias')->onDelete('cascade');
            $table->string('image')->nullable();            
            $table->string('alt')->nullable();            
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
        Schema::dropIfExists('encyclopedia_images');
    }
}
