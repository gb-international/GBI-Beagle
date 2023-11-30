<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedRazorpayPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('razorpay_payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('payment_by_edu_institute_id')->nullable();
            $table->unsignedInteger('payment_by_user_id')->nullable();
            $table->unsignedBigInteger('discount_coupon_id')->nullable();
            $table->unsignedInteger('tour_id')->nullable();
            $table->unsignedBigInteger('school_id')->nullable();
            $table->string('order_id')->nullable();
            $table->string('razorpay_payment_id')->nullable();
            $table->double('amount')->default(0);
            $table->double('discount')->default(0);
            $table->double('tax_amount')->default(0);
            $table->double('fee_amount')->default(0);
            $table->double('total_amount')->default(0);
            $table->string('currency')->nullable();
            $table->string('payment_method')->nullable();
            $table->string('status')->nullable();
            $table->string('razorpay_signature')->nullable();
            $table->string('customer_type')->nullable();
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->dateTime('payment_date')->nullable();
            $table->softDeletes();
            $table->foreign('payment_by_edu_institute_id')->references('id')->on('edu_institutes')->onDelete('cascade');
            $table->foreign('payment_by_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('discount_coupon_id')->references('id')->on('discount_coupons')->onDelete('cascade');
            $table->foreign('tour_id')->references('id')->on('tours')->onDelete('cascade');
            $table->foreign('school_id')->references('id')->on('schools')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void 
     */
    public function down()
    {
        Schema::dropIfExists('razorpay_payments');
    }
}
