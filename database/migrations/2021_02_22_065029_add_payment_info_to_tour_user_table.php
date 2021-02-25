<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPaymentInfoToTourUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tour_user', function (Blueprint $table) {
            $table->string('schoolbankdetail_id')->nullable();
            $table->string('payment_mode')->nullable();
            $table->string('payment_type')->nullable();
            $table->string('ifsc_code')->nullable();
            $table->string('cheque_number')->nullable();
            $table->string('amount')->nullable();
            $table->string('cheque_bank_name')->nullable();
            $table->string('date_of_issue')->nullable();
            $table->text('payment_data')->nullable();
            $table->string('status')->nullable();
            $table->string('added_by')->default('student');
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
            //
        });
    }
}
