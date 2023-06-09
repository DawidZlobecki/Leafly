<?php

namespace App\Http\Controllers\Api\v1;

use App\Filters\v1\PlantFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\v1\StorePlantRequest;
use App\Http\Requests\v1\UpdatePlantRequest;
use App\Http\Resources\v1\PlantCollection;
use App\Http\Resources\v1\PlantResource;
use App\Models\Plant;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PlantController extends Controller
{
    public function index(Request $request): PlantCollection
    {
        $filter = new PlantFilter();
        $filterItems = $filter->transform($request);  //[['column', 'operator', 'value']]

        $includeNotes = $request->query('includeNotes');

        $plants = Plant::where($filterItems);

        if ($includeNotes)
        {
            $plants = $plants->with('notes');
        }

        return new PlantCollection($plants->paginate()->appends($request->query()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StorePlantRequest $request
     * @return PlantResource|Response
     */
    public function store(StorePlantRequest $request): PlantResource|Response
    {
        return new PlantResource(Plant::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param Plant $plant
     * @return PlantResource|Response
     */
    public function show(Plant $plant): PlantResource|Response
    {
        $includeNotes = request()->query('includeNotes');

        if ($includeNotes) {
            return new PlantResource($plant->loadMissing('notes'));
        }

        return new PlantResource($plant);
    }

    /**
     * @param UpdatePlantRequest $request
     * @param Plant $plant
     */

    public function update(UpdatePlantRequest $request, Plant $plant)
    {
        $plant->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Plant $plant
     * @return JsonResponse
     * @throws \Throwable
     */

    public function destroy(Plant $plant): JsonResponse
    {
        $plant->deleteOrFail();

        return response()->json(['message' => 'Roślina została pomyślnie usunięta.']);
    }
}
