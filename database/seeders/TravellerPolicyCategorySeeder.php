<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Model\TravellerPolicy\TravellerPolicyCategory;

class TravellerPolicyCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     * 
     * @return void
     */
    public function run()
    {
        TravellerPolicyCategory::updateOrCreate(['name'=>'Itinerary'],['name'=>'Itinerary']);
        TravellerPolicyCategory::updateOrCreate(['name'=>'Train'],['name'=>'Train']);
        TravellerPolicyCategory::updateOrCreate(['name'=>'Bus'],['name'=>'Bus']);
        TravellerPolicyCategory::updateOrCreate(['name'=>'Flight'],['name'=>'Flight']);
        TravellerPolicyCategory::updateOrCreate(['name'=>'Hotel'],['name'=>'Hotel']);
        TravellerPolicyCategory::updateOrCreate(['name'=>'GBI Cancellation Policy'],['name'=>'GBI Cancellation Policy']);
        TravellerPolicyCategory::updateOrCreate(['name'=>'Visa Policy'],['name'=>'Visa Policy']);
    }
}

