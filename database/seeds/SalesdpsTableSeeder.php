<?php

use Illuminate\Database\Seeder;

class SalesdpsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Salesdp::class, 50)->create();
    }
}
