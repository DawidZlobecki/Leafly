<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Note extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function plant(): BelongsTo
    {
        return $this->belongsTo(Plant::class);
    }

    public function notification(): HasOne
    {
        return $this->hasOne(Notification::class);
    }
}
