<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('payment_by_edu_institute_id')->nullable();
            $table->unsignedBigInteger('schoolbankdetail_id')->nullable();
            $table->unsignedInteger('payment_by_user_id')->nullable();
            $table->unsignedBigInteger('discount_coupon_id')->nullable();
            $table->unsignedInteger('tour_id')->nullable();
            $table->unsignedBigInteger('school_id')->nullable();
            $table->string('order_id')->nullable();
            $table->string('invoice_id')->nullable();
            $table->string('payment_by')->nullable()->comment("self, student, teacher");
            $table->string('payment_mode')->nullable()->comment("cash, cheque, payment gateway");
            $table->string('ifs_code')->nullable();
            $table->string('bank_holder_name')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('account_number')->nullable();
            $table->string('added_by')->nullable();
            $table->string('cheque_number')->nullable();
            $table->dateTime('date_of_issue')->nullable();
            $table->double('tour_price')->default(0);
            $table->string('razorpay_payment_id')->nullable();
            $table->double('amount')->default(0);
            $table->double('discount')->default(0);
            $table->double('tax_amount')->default(0);
            $table->double('fee_amount')->default(0);
            $table->double('total_amount')->default(0);
            $table->string('currency')->nullable();
            $table->string('payment_method')->nullable();
            $table->string('branch')->nullable();
            $table->string('status')->nullable();
            $table->string('razorpay_signature')->nullable();
            $table->string('customer_type')->nullable();
            $table->string('doc_proof')->nullable();
            $table->string('doc_proof_alt')->nullable();
            $table->boolean('international')->default(0);
            $table->double('amount_refunded')->default(0);
            $table->string('refund_status')->nullable()->comment("null, partial, full");
            $table->string('email')->nullable();
            $table->string('contact')->nullable();
            $table->string('card_id')->nullable();
            $table->string('vpa')->nullable();
            $table->string('bank')->nullable();
            $table->string('wallet')->nullable();
            $table->string('customer_id')->nullable();
            $table->text('upi')->nullable();
            $table->string('card_last_four_digit')->nullable();
            $table->text('card_details')->nullable();
            $table->text('acquirer_data')->nullable();
            $table->double('captured')->default(0);
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->dateTime('payment_date')->nullable();
            $table->softDeletes();
            $table->foreign('payment_by_edu_institute_id')->references('id')->on('edu_institutes')->onDelete('cascade');
            $table->foreign('payment_by_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('discount_coupon_id')->references('id')->on('discount_coupons')->onDelete('cascade');
            $table->foreign('tour_id')->references('id')->on('tours')->onDelete('cascade');
            $table->foreign('school_id')->references('id')->on('schools')->onDelete('cascade');
            $table->foreign('schoolbankdetail_id')->references('id')->on('schoolbankdetails')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
