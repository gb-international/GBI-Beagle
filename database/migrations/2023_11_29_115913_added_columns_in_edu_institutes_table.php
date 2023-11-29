<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedColumnsInEduInstitutesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('edu_institutes', function (Blueprint $table) {
            $table->string('country_code')->nullable()->after('gstin');
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
            Schema::dropIfExists('country_code');
        });
    }
}
