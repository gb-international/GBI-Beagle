<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedBanquetbanquetcategorysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banquet_banquet_category', function (Blueprint $table) {
            $table->unsignedInteger('banquet_id')->nullable();
            $table->unsignedInteger('banquet_category_id')->nullable();
            $table->foreign('banquet_id')->references('id')->on('banquets')->onDelete('cascade');
            $table->foreign('banquet_category_id')->references('id')->on('banquetcategorys')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('banquet_banquet_category');
    }
}
