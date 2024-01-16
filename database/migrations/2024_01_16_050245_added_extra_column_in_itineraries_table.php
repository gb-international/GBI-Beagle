<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInItinerariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('itineraries', function (Blueprint $table) {
            $table->unsignedBigInteger('traveller_policy_id')->nullable()->after('client_type');
            $table->softDeletes();
            $table->foreign('traveller_policy_id')->references('id')->on('traveller_policys')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('itineraries', function (Blueprint $table) {
            Schema::dropIfExists('traveller_policy_id');
            Schema::dropIfExists('deleted_at');
        });
    }
}
