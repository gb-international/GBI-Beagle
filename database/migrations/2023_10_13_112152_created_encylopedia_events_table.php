<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedEncylopediaEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('encylopedia_events', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('type')->nullable();
            $table->text('description ')->nullable();
            $table->text('image')->nullable();
            $table->text('image_alt')->nullable();
            $table->text('banner_image')->nullable();
            $table->text('banner_image_alt')->nullable();
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('encylopedia_events');
    }
}
