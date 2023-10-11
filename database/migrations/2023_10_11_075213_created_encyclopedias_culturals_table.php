<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedEncyclopediasCulturalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('encyclopedias_cultural', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('encyclopedias_id')->nullable();
            $table->text('cultural_image')->nullable();
            $table->text('cultural_image_alt')->nullable();
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
            $table->foreign('encyclopedias_id')->references('id')->on('encyclopedias')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //Drops tables
        Schema::dropIfExists('encyclopedias_cultural');  
    }
}
