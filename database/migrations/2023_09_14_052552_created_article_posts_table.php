<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedArticlePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('article_posts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->text('description');
            $table->text('summery')->nullable();
            $table->string('meta_title');
            $table->string('meta_keyword');
            $table->tinyInteger('status')->default(0)->comment("0=>Draft , 1=>Publish");
            $table->string('client_type')->default('general');
            $table->unsignedBigInteger('category_id');            
            $table->string('slug');
            $table->string('image');
            $table->string('alt')->nullable();
            $table->bigInteger('created_by')->default(0);
            $table->bigInteger('last_editor')->default(0);
            $table->bigInteger('published_by')->default(0);
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
            $table->foreign('category_id')->references('id')->on('article_categories')->onDelete('cascade');
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('article_posts');
    }
}
