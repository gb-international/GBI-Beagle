<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInTravellerPolicysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('traveller_policys', function (Blueprint $table) {
            $table->string('customer_type')->nullable()->comment("family, company, school")->after('id');
            $table->unsignedBigInteger('country_id')->nullable()->after('customer_types');
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('traveller_policys', function (Blueprint $table) {
            Schema::dropIfExists('customer_type');
            Schema::dropIfExists('country_id');
        });
    }
}


