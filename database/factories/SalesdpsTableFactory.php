<?php

use Faker\Generator as Faker;

$factory->define(App\Salesdp::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'phoneno' =>$faker->numberBetween($min = 1000000000,$max = 9999999999),
        'email' => $faker->email,
        'salary' => $faker->numberBetween($min = 50000,$max = 100000),
        'address' => $faker->address,
        'position' => $faker->randomElement($array = array ('sales manager','sales man')),
        'location' => $faker->name,
        'status' => '1'
    ];
});
