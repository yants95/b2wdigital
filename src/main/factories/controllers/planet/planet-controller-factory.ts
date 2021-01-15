import { PlanetMongoRepository } from "@/infra/db/mongodb/planet/planet-mongo-repository";
import { PlanetController } from "@/presentation/controllers/planet/planet-controller";
import { Controller } from "@/presentation/protocols/controller";

export const planetController = (): Controller => {
    const loadPlanetsRepository = new PlanetMongoRepository()
    const controller = new PlanetController(loadPlanetsRepository);
    return controller
}