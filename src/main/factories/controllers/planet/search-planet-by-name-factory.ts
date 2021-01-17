import { PlanetMongoRepository } from "@/infra/db/mongodb/planet/planet-mongo-repository";
import { SearchPlanetByNameController } from "@/presentation/controllers/planet/search-planet-by-name-controller/search-planet-by-name-controller";
import { Controller } from "@/presentation/protocols/controller";

export const searchPlanetByNameController = (): Controller => {
    const loadPlanetsRepository = new PlanetMongoRepository()
    const controller = new SearchPlanetByNameController(loadPlanetsRepository);
    return controller
}