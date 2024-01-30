<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tours', function (Blueprint $table) {
            $table->tinyInteger('payment_through_status')->default(1)->comment("0=>individual, 1=>altogether")->after('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tours', function (Blueprint $table) {
            Schema::dropIfExists('payment_through_status');
        });        
    }
}
