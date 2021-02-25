<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEncyclopediacommentTabel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('encyclopediacomment', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('encyclopedia_id')->unsigned();
            $table->foreign('encyclopedia_id')->references('id')->on('encyclopedias')->onDelete('cascade');
            $table->string('user_id')->unllable();
            $table->text('body')->nullable();
            $table->string('parent_id')->nullable();
            $table->enum('status', ['0', '1'])->default('1');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('encyclopediacomment_tabel');
    }
}
