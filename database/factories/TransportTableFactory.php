<?php

use Faker\Generator as Faker;


$factory->define(App\Transport::class, function (Faker $faker) {
    return [
        'transType' => $faker->randomElement($array = array ('flight','train','bus')),
        'transName' => $faker->name,
        'transLocation' => $faker->name,
        'transPrice' => $faker->numberBetween($min = 1000, $max = 9000),
        'transContact' =>$faker->numberBetween($min = 1000000000,$max = 9999999999),
        'transEmail' => $faker->email,
    ];
});
