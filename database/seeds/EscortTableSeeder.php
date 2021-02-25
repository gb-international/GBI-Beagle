<?php

use Illuminate\Database\Seeder;

class EscortTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Escort::class,50)->create();
    }
}
