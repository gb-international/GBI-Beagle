<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payments', function (Blueprint $table) {
            $table->unsignedInteger('incharge_edu_institute_id')->nullable()->after("family_id");
            $table->unsignedInteger('incharge_company_user_id')->nullable()->after("incharge_edu_institute_id");
            $table->unsignedInteger('incharge_family_user_id')->nullable()->after("incharge_company_user_id");
            $table->tinyInteger('order_payment_status')->default(1)->comment("0=>onlyOrder, 1=>paymentDone")->after('incharge_family_user_id');
            $table->foreign('incharge_edu_institute_id')->references('id')->on('edu_institutes')->onDelete('cascade');
            $table->foreign('incharge_company_user_id')->references('id')->on('company_users')->onDelete('cascade');
            $table->foreign('incharge_family_user_id')->references('id')->on('family_users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('payments', function (Blueprint $table) {
            Schema::dropIfExists('incharge_edu_institute_id');
            Schema::dropIfExists('incharge_company_user_id');
            Schema::dropIfExists('incharge_family_user_id');
            Schema::dropIfExists('order_payment_status');
        });
    }
}
