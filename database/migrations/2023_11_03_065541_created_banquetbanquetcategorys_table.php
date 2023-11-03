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
        Schema::create('banquetbanquetcategorys', function (Blueprint $table) {
            $table->unsignedInteger('banquet_id')->nullable();
            $table->unsignedInteger('banquetcategory_id')->nullable();
            $table->foreign('banquet_id')->references('id')->on('banquets')->onDelete('cascade');
            $table->foreign('banquetcategory_id')->references('id')->on('banquetcategorys')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('banquetbanquetcategorys');
    }
}
