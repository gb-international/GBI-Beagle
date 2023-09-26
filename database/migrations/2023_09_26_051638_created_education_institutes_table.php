<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedEducationInstitutesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('edu_institutes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->unsignedBigInteger('school_id')->nullable();
            $table->tinyInteger('role_type')->default(2)->comment("0=>student, 1=>teacher, 2=>principal");
            $table->string('email',100)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->string('reset_link')->nullable();
            $table->string('link_time')->nullable();
            $table->tinyInteger('status')->default(0)->comment("0=>deactivate, 1=>active");
            $table->tinyInteger('change_password')->default(0)->comment("0=>No, 1=>Yes");
            $table->string('gbi_link')->nullable();
            $table->string('client_input')->nullable();
            $table->string('phone_no')->nullable()->unique();
            $table->string('otp')->nullable();
            $table->string('father_name')->nullable();
            $table->string('mother_name')->nullable();
            $table->string('dob')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('user_class')->nullable();
            $table->string('admission_year')->nullable();
            $table->tinyInteger('varified')->default(1)->comment("0=>No, 1=>Yes");
            $table->string('photo')->nullable();
            $table->string('gender')->nullable()->comment("male, female");
            $table->string('doc_front')->nullable();
            $table->string('doc_back')->nullable();
            $table->string('doc_type')->nullable();
            $table->string('profession_name')->nullable();
            $table->string('profession_address')->nullable();
            $table->string('institution_code')->nullable();
            $table->tinyInteger('register_by')->default(0)->comment("0=>Normal, 1=>Admin");
            $table->tinyInteger('is_incharge')->default(0)->comment("0=>No, 1=>Yes");
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->rememberToken();
            $table->softDeletes();
            $table->foreign('school_id')->references('id')->on('schools')->onDelete('cascade');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //Drops tables
        Schema::dropIfExists('edu_institutes');
    }
}
