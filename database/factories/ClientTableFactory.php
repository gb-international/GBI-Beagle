<?php

use Faker\Generator as Faker;

$factory->define(App\Client::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'phoneno' =>$faker->numberBetween($min = 1000000000,$max = 9999999999),
        'email' => $faker->email,
        'address' => $faker->address,
        'dob' => $faker->dateTimeBetween($startDate = '-30 years', $endDate = 'now', $timezone = null),
        'schoolName' => $faker->name,
        'verify' => 1,
        'status' => 1,
    ];
});
