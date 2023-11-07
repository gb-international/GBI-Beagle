<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedBanquetcategorysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banquetcategorys', function (Blueprint $table) {
            $table->increments('id');
            $table->text('title')->nullable();
            $table->text('description')->nullable();
            $table->string('dimension_type')->nullable();
            $table->double('length')->default(0);
            $table->double('width')->default(0);
            $table->double('height')->default(0);
            $table->double('area')->default(0);
            $table->string('seating_type')->nullable();
            $table->Integer('no_of_people')->default(0);            
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
        Schema::dropIfExists('banquetcategorys');   
    }
}
