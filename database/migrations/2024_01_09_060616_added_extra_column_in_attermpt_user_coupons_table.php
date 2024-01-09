<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInAttermptUserCouponsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('attermpt_user_coupons', function (Blueprint $table) {
            $table->string('client_type')->nullable()->comment("school, company, family")->after("edu_institute_id");
            $table->unsignedInteger('family_user_id')->nullable()->after("client_type");
            $table->unsignedInteger('company_user_id')->nullable()->after("family_user_id");
            $table->foreign('family_user_id')->references('id')->on('family_users')->onDelete('cascade');
            $table->foreign('company_user_id')->references('id')->on('company_users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('attermpt_user_coupons', function (Blueprint $table) {
            Schema::dropIfExists('client_type');
            Schema::dropIfExists('family_user_id');
            Schema::dropIfExists('company_user_id');
        });
    }
}
