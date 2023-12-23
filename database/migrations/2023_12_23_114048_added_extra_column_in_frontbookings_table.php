<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInFrontbookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('frontbookings', function (Blueprint $table) {
            $table->string('tour_type')->nullable()->comment("school, family, company")->after('id');
            $table->unsignedInteger('company_user_id')->nullable()->after('tour_type');
            $table->unsignedInteger('family_user_id')->nullable()->after('company_user_id');
            $table->foreign('company_user_id')->references('id')->on('company_users')->onDelete('cascade');
            $table->foreign('family_user_id')->references('id')->on('family_users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('frontbookings', function (Blueprint $table) {
            Schema::dropColumn('tour_type'); 
            Schema::dropColumn('company_user_id'); 
            Schema::dropColumn('family_user_id'); 
        });
    }
}
