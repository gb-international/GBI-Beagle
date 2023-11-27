<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedCustomerIdColumnInEduInstitutesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('edu_institutes', function (Blueprint $table) {
            $table->string('customer_id')->nullable()->after('is_incharge');
            $table->string('gstin')->nullable()->after('customer_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('edu_institutes', function (Blueprint $table) {
            Schema::dropColumn('customer_id');
            Schema::dropColumn('gstin');
        });
    }
}
