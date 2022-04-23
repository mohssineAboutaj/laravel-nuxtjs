<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    $name = $this->faker->sentence(3);

    return [
      'name'        => $name,
      'slug'        => Str::slug($name),
      'description' => $this->faker->paragraph(3),
      'price'       => $this->faker->numberBetween(1, 1000),
      'promo'       => $this->faker->numberBetween(0, 50),
      'qte'         => $this->faker->numberBetween(0, 1000),
      'category_id' => $this->faker->numberBetween(1, 10),
    ];
  }
}
