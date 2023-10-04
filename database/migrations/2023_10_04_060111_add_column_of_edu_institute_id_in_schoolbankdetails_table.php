<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnOfEduInstituteIdInSchoolbankdetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('schoolbankdetails', function (Blueprint $table) {
            $table->unsignedInteger('edu_institute_id')->nullable()->after('id');
            $table->softDeletes();
            $table->foreign('edu_institute_id')->references('id')->on('edu_institutes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('schoolbankdetails', function (Blueprint $table) {
            Schema::dropColumn('edu_institute_id');
        });
    }
}
