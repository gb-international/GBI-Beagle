<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInTourUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tour_user', function (Blueprint $table) {
            $table->unsignedInteger('company_user_id')->nullable()->after('edu_institute_id');
            $table->unsignedInteger('family_user_id')->nullable()->after('company_user_id');
            $table->string('tour_type')->default("user")->comment("family,school,company")->after('family_user_id');
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
        Schema::table('tour_user', function (Blueprint $table) {
            Schema::dropColumn('company_user_id'); 
            Schema::dropColumn('family_user_id'); 
            Schema::dropColumn('tour_type');   
        });
    }
}
