<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedAmenitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('amenities', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('type')->default(2)->comment("0=>room, 1=>banquet, 2=>hotel");
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->string('alt')->nullable();
            $table->text('image')->nullable();
            $table->string('icon_alt')->nullable();
            $table->text('icon_image')->nullable();
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
        Schema::dropIfExists('amenities');   
    }
}
