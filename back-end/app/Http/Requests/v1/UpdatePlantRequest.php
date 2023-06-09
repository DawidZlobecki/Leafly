<?php

namespace App\Http\Requests\v1;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePlantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        $user = $this->user();

        return $user !== null && $user->tokenCan('update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */

    public function rules(): array
    {
        $method = $this->method();

        if ($method == 'PUT') {
            return [
                'name' => ['required'],
                'species' => ['required'],
                'image' => ['required'],
                'soilType' => ['required'],
                'targetHeight' => ['required'],
                'wateringFrequency' => ['required'],
                'lastWatered' => ['required'],
                'insolation' => ['required'],
                'cultivationDifficulty' => ['required'],
            ];
        } else {
            return [
                'name' => ['sometimes', 'required'],
                'species' => ['sometimes', 'required'],
                'image' => ['sometimes', 'required'],
                'soilType' => ['sometimes', 'required'],
                'targetHeight' => ['sometimes', 'required'],
                'wateringFrequency' => ['sometimes', 'required'],
                'lastWatered' => ['sometimes', 'required'],
                'insolation' => ['sometimes', 'required'],
                'cultivationDifficulty' => ['sometimes', 'required'],
            ];
        }
    }

    protected function prepareForValidation()
    {
        if ($this->soilType) {
            $this->merge([
                'soil_type' => $this->soilType
            ]);
        }
        if ($this->targetHeight) {
            $this->merge([
                'target_height' => $this->targetHeight
            ]);
        }
        if ($this->wateringFrequency) {
            $this->merge([
                'watering_frequency' => $this->wateringFrequency
            ]);
        }
        if ($this->lastWatered) {
            $this->merge([
                'last_watered' => $this->lastWatered,
            ]);
        }
        if ($this->cultivationDifficulty) {
            $this->merge([
                'cultivation_difficulty' => $this->cultivationDifficulty
            ]);
        }
    }
}
