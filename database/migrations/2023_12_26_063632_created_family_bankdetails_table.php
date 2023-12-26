<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedFamilyBankdetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('family_bankdetails', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('family_user_id')->nullable();
            $table->unsignedInteger('user_id')->nullable();
            $table->string('name')->nullable();
            $table->string('tour_code')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('account_number')->nullable();
            $table->string('account_type')->nullable();
            $table->string('ifsc_code')->nullable();
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
            $table->foreign('family_user_id')->references('id')->on('family_users')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('family_bankdetails');
    }
}
