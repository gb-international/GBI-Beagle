<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedDiscountCouponsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('discount_coupons', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->text('description')->nullable();
            $table->string('coupon_code')->nullable();
            $table->double('price')->default(0);
            $table->double('discount')->default(0)->comment("%");     
            $table->text ('image')->nullable();
            $table->string('alt')->nullable();
            $table->Integer('use_time_per_user')->default(0);
            $table->dateTime('start_date')->nullable();
            $table->dateTime('end_date')->nullable();
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('discount_coupons'); 
    }
}
