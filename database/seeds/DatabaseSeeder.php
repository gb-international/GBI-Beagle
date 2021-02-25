<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(HotelTableSeeder::class);
        // $this->call(TransportTableSeeder::class);
        // $this->call(SalesdpsTableSeeder::class);
        // $this->call(EscortTableSeeder::class);
        // $this->call(SalesdpsTableSeeder::class);
        $this->call(CityTableSeeder::class);
    }
}
