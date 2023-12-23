<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnEncyclopediacommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('encyclopediacomments', function (Blueprint $table) {
            $table->unsignedInteger('company_user_id')->nullable()->after('status');
            $table->unsignedInteger('family_user_id')->nullable()->after('company_user_id');
            $table->foreign('company_user_id')->references('id')->on('company_users')->onDelete('cascade');
            $table->foreign('family_user_id')->references('id')->on('family_users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('encyclopediacomments', function (Blueprint $table) {
            Schema::dropColumn('company_user_id'); 
            Schema::dropColumn('family_user_id'); 
        });
    }
}
