import { PlanetMongoRepository } from "@/infra/db/mongodb/planet/planet-mongo-repository";
import { RemovePlanetByIdController } from "@/presentation/controllers/planet/remove-planet-by-id-controller";
import { Controller } from "@/presentation/protocols/controller";

export const removePlanetByIdController = (): Controller => {
    const loadPlanetsRepository = new PlanetMongoRepository()
    const controller = new RemovePlanetByIdController(loadPlanetsRepository);
    return controller
}