<?php
namespace Database\Factories;
/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Post\Tag;
use Faker\Generator as Faker;

$factory->define(Tag::class, function (Faker $faker) {
    return [
        'title'=>$faker->name
    ];
});
