<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInFactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('facts', function (Blueprint $table) {
            $table->unsignedBigInteger('country_id')->nullable()->after('status');
            $table->unsignedInteger('state_id')->nullable()->after('country_id');
            $table->unsignedInteger('city_id')->nullable()->after('state_id');
            $table->string('meta_keyword')->nullable()->after('city_id');
            $table->string('meta_title')->nullable()->after('meta_keyword');
            $table->text('meta_description')->nullable()->after('meta_title');
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade');
            $table->foreign('state_id')->references('id')->on('states')->onDelete('cascade');
            $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('facts', function (Blueprint $table) {
            Schema::dropIfExists('country_id');
            Schema::dropIfExists('state_id');
            Schema::dropIfExists('city_id');
            Schema::dropIfExists('meta_keyword');
            Schema::dropIfExists('meta_title');
            Schema::dropIfExists('meta_description');
        });
    }
}
