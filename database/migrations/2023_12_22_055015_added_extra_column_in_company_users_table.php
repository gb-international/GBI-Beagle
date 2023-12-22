<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInCompanyUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('company_users', function (Blueprint $table) {
            $table->string('company_name')->nullable()->after('gstin');
            $table->string('company_address')->nullable()->after('company_name');
            $table->string('company_code')->nullable()->after('company_address');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('company_users', function (Blueprint $table) {
            Schema::dropColumn('company_name'); 
            Schema::dropColumn('company_address'); 
            Schema::dropColumn('company_code'); 
        });
    }
}
