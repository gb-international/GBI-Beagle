<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddExtraColumnInEncyclopediasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('encyclopedias', function (Blueprint $table) {
            $table->text('location')->nullable()->after('map_link');
            $table->string('food_title')->nullable()->after('location');
            $table->text('food_description')->nullable()->after('food_title');
            $table->string('culture_title')->nullable()->after('food_description');
            $table->text('culture_description')->nullable()->after('culture_title');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('encyclopedias', function (Blueprint $table) {
            Schema::dropColumn('location');  
            Schema::dropColumn('food_title');  
            Schema::dropColumn('food_description');    
            Schema::dropColumn('culture_title');  
            Schema::dropColumn('culture_description');  
        });
    }
}
