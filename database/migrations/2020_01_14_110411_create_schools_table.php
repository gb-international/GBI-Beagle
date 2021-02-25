<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schools', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('school_name')->nullable();
            $table->string('street')->nullable();
            $table->string("city_name")->nullable();
            $table->string('state_name')->nullable();
            $table->string('country_name')->nullable();
            $table->string('pincode')->nullable();
            $table->string('finance_email_id')->nullable();
            $table->string('principal_email_id')->nullable();
            $table->string('mobile')->nullable();
            $table->string('address')->nullable();
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
        Schema::dropIfExists('schools');
    }
}
