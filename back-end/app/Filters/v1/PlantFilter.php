<?php

namespace App\Filters\v1;

use App\Filters\ApiFilter;

class PlantFilter extends ApiFilter
{
    protected array $allowedParams = [
        'name' => ['eq'],
        'species' => ['eq'],
        'soilType' => ['eq'],
        'targetHeight' => ['eq', 'lt', 'gt'],
        'wateringFrequency' => ['eq', 'lt', 'gt'],
        'lastWatered' => ['eq', 'lt', 'gt'],
        'insolation' => ['eq'],
        'cultivationDifficulty' => ['eq']
    ];

    protected array $columnMap = [
        'soilType' => 'soil_type',
        'targetHeight' => 'target_height',
        'wateringFrequency' => 'watering_frequency',
        'lastWatered' => 'last_watered',
        'cultivationDifficulty' => 'cultivation_difficulty'
    ];

    protected array $operatorMap = [
        'eq' => '=',
        'lt' => '<',
        'lte' => '<=',
        'gt' => '>',
        'gte' => '>='
    ];
}
