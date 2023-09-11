<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsUpcomingToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('upcoming_tours', function (Blueprint $table) {
            $table->id();
            $table->foreignId('itineraries_id')->default(0);
            $table->foreignId('season_id')->default(0);
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->double('ranking')->default(0);
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
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
        Schema::dropIfExists('upcoming_tours');
    }
}
