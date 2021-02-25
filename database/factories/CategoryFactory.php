<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Post\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'title'=>$faker->text,
        'image'=>'imagepath',
        'description'=>$faker->paragraph(4),
        'meta_title'=>$faker->sentance,
        'meta_keyword'=>$faker->sentance,
    ];
});
