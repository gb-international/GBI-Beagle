<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserpaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('userpayments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('user_id');
            $table->string('school_id');
            $table->string('tour_code');
            $table->string('schoolbankdetail_id')->nullable();
            $table->string('payment_mode')->nullable();
            $table->string('payment_type')->nullable();
            $table->string('ifsc_code')->nullable();
            $table->string('cheque_number')->nullable();
            $table->string('amount')->nullable();
            $table->string('total_tour_price')->nullable();
            $table->string('collect_amount')->nullable();
            $table->string('cheque_bank_name')->nullable();
            $table->string('date_of_issue')->nullable();
            $table->string('status')->nullable();
            $table->text('payment_data')->nullable();
            $table->string('added_by')->default('student');
            $table->timestamps();

            $table->foreign('tour_code')->references('tour_id')->on('tours')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('userpayments');
    }
}
