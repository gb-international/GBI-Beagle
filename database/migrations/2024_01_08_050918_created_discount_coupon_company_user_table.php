<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedDiscountCouponCompanyUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('discount_coupon_company_user', function (Blueprint $table) {
            $table->unsignedBigInteger('discount_coupon_id')->nullable();
            $table->unsignedInteger('company_user_id')->nullable();
            $table->foreign('discount_coupon_id')->references('id')->on('discount_coupons')->onDelete('cascade');
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
        Schema::dropIfExists('discount_coupon_company_user');
    }
}
