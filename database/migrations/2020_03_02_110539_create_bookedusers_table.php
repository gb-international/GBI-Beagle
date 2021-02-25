<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookedusersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookedusers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('tour_id')->unsigned();
            $table->string('tour_code');
            $table->string('travel_code');
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('schoolbankdetail_id')->nullable();
            $table->string('payment_mode')->nullable();
            $table->string('payment_type')->nullable();
            $table->string('ifsc_code')->nullable();
            $table->string('cheque_number')->nullable();
            $table->string('cheque_bank_name')->nullable();
            $table->string('date_of_issue')->nullable();
            $table->string('added_by')->nullable();
            $table->string('total_tour_price')->nullable();
            $table->string('collect_amount')->nullable();
            $table->text('payment_data')->nullable();
            $table->string('status')->nullable();
            $table->integer('visible_to_user')->default(0);
            $table->timestamps();

            $table->foreign('tour_id')->references('id')->on('tours')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookedusers');
    }
}
