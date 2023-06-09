<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Plant extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'species',
        'image',
        'soil_type',
        'target_height',
        'watering_frequency',
        'last_watered',
        'insolation',
        'cultivation_difficulty',
    ];

    public function notes(): HasMany
    {
        return $this->hasMany(Note::class);
    }
}
