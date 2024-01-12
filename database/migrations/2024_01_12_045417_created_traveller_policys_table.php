<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedTravellerPolicysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('traveller_policys', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->unsignedBigInteger('traveller_policy_category_id')->nullable();
            $table->string('policy_type')->nullable()->comment("domestic, international");
            $table->text('description')->nullable();
            $table->tinyInteger('status')->default(0)->comment("0=>draft, 1=>published");
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
            $table->foreign('traveller_policy_category_id')->references('id')->on('traveller_policy_categorys')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('traveller_policys');
    }
}
