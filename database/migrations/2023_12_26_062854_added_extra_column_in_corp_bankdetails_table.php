<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInCorpBankdetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('corp_bankdetails', function (Blueprint $table) {
            $table->unsignedInteger('company_user_id')->nullable()->after('user_id');
            $table->softDeletes();
            $table->foreign('company_user_id')->references('id')->on('company_users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('corp_bankdetails', function (Blueprint $table) {
            Schema::dropColumn('company_user_id'); 
            Schema::dropColumn('deleted_id'); 
        });
    }
}
