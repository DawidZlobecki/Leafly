<?php

namespace Database\Seeders;

use App\Models\Plant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        Plant::factory()
            ->count(25)
            ->hasNotes(5)
            ->create();

        Plant::factory()
            ->count(25)
            ->hasNotes(5)
            ->create();

    }
}
