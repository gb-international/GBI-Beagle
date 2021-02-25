<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Post\Post;
use App\Model\Post\Category;
use App\User;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'user_id'=> User::all()->random()->id,
        'category_id'=> Category::all()->random()->id,
        'title'=>$faker->text,
        'image'=>'imagepath',
        'summery'=>$faker->paragraph,
        'description'=>$faker->paragraph(4),
        'meta_title'=>$faker->sentance,
        'meta_keyword'=>$faker->sentance,
        'status'=> $faker->randomElement($array = array ('0','1')),
    ];
});
