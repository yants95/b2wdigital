import { PlanetMongoRepository } from "@/infra/db/mongodb/planet/planet-mongo-repository";
import { SearchPlanetByIdController } from "@/presentation/controllers/planet/search-planet-by-id-controller/search-planet-by-id-controller";
import { Controller } from "@/presentation/protocols/controller";

export const searchPlanetByIdController = (): Controller => {
    const loadPlanetsRepository = new PlanetMongoRepository()
    const controller = new SearchPlanetByIdController(loadPlanetsRepository);
    return controller
}