<?php

use Faker\Generator as Faker;

$factory->define(App\Escort::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'salaryPerday' => $faker->numberBetween($min = 50000,$max = 100000),
        'phoneno' =>$faker->numberBetween($min = 1000000000,$max = 9999999999),
        'email' => $faker->email,
        'address' => $faker->address,
        'status' => '1'
    ];
});
