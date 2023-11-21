<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedAttermptUserCouponsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attermpt_user_coupons', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('edu_institute_id')->nullable();
            $table->unsignedBigInteger('discount_coupon_id')->nullable();
            $table->Integer('use_per_user')->default(0);
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
            $table->foreign('edu_institute_id')->references('id')->on('edu_institutes')->onDelete('cascade');
            $table->foreign('discount_coupon_id')->references('id')->on('discount_coupons')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attermpt_user_coupons');
    }
}
