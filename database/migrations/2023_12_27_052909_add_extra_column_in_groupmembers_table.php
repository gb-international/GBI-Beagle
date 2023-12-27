<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddExtraColumnInGroupmembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('groupmembers', function (Blueprint $table) {
            $table->unsignedInteger('company_user_id')->nullable()->after('edu_institute_id');
            $table->unsignedBigInteger('company_id')->nullable()->after('company_user_id');
            $table->unsignedInteger('family_user_id')->nullable()->after('company_id');
            $table->string('tour_type')->default("user")->comment("user,family,school,company");
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
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
        Schema::table('groupmembers', function (Blueprint $table) {
            Schema::dropColumn('company_id'); 
            Schema::dropColumn('company_user_id'); 
            Schema::dropColumn('family_user_id'); 
            Schema::dropColumn('tour_type'); 
        });
    }
}
