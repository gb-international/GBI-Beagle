<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModificationBankDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // $table->dropColumn('UserDomainName');
        Schema::table('bank_details', function (Blueprint $table) {
            $table->string('user_types')->nullable()->comment("user, family, company, school")->after('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bank_details', function (Blueprint $table) {
            Schema::dropColumn('user_types'); 
        });
    }
}
