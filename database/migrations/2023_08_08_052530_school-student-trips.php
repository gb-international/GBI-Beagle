<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SchoolStudentTrips extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('school_student_trips', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('school_name')->unsigned()->nullable();
            $table->bigInteger('no_of_student')->default(0);
            $table->text('banner_link')->nullable();
            $table->text('slug')->nullable();
            $table->text('source')->nullable();
            $table->text('ph_number')->nullable();
            $table->text('destination')->nullable();
            $table->double('amount_paid')->default(0);
            $table->dateTime('start_date')->nullable();
            $table->dateTime('end_date')->nullable();
            $table->dateTime('payment_date')->nullable();
            $table->tinyInteger('booking_status')->comment('0=>No, 1=>Yes')->default(0);
            $table->tinyInteger('payment_status')->comment('0=>Unpaid, 1=>Paid')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('school_student_trips');
    }
}
