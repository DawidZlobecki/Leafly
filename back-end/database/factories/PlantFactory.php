<?php

namespace Database\Factories;

use App\Models\Plant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Plant>
 */
class PlantFactory extends Factory
{
    protected $model = Plant::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        return [
            'name' => $this->faker->words(3, true),
            'species' => $this->faker->words(2, true),
            'image' => $this->faker->imageUrl(),
            'soil_type' => $this->faker->randomElement(['ziemia ogrodowa', 'ziemia kompostowa', 'torf wysoki', 'ziemia dla kaktusów i sukulentów', 'podłoże do uprawy hydroponicznej']),
            'target_height' => $this->faker->numberBetween(20, 150),
            'watering_frequency' => $this->faker->numberBetween(1, 7),
            'last_watered' => $this->faker->dateTime,
            'insolation' => $this->faker->randomElement(['pełne nasłonecznienie', 'jasne światło lub półcieniste', 'cień lub słabe światło']),
            'cultivation_difficulty' => $this->faker->randomElement(['dla amatorów', 'dla zaawansowanych']),
        ];
    }
}
