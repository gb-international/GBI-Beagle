<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedDiscountCouponEduInstituteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('discount_coupon_edu_institute', function (Blueprint $table) {
            $table->unsignedBigInteger('discount_coupon_id')->nullable();
            $table->unsignedInteger('edu_institute_id')->nullable();
            $table->foreign('discount_coupon_id')->references('id')->on('discount_coupons')->onDelete('cascade');
            $table->foreign('edu_institute_id')->references('id')->on('edu_institutes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('discount_coupon_edu_institute');
    }
}
