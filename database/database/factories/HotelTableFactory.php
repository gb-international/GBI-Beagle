<?php

use Faker\Generator as Faker;

$factory->define(App\Hotel::class, function (Faker $faker) {
    return [
        'type' => $faker->randomElement($array = array ('3','4','5')),
        'name' => $faker->name,
        'location' => $faker->name,
        'price' => $faker->numberBetween($min = 1000, $max = 9000),
        'phoneno' =>$faker->numberBetween($min = 1000000000,$max = 9999999999),
        'email' => $faker->email,
        'mealType' => $faker->word,
        'status' => '1'
    ];
});
