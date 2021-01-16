import { PlanetMongoRepository } from "@/infra/db/mongodb/planet/planet-mongo-repository";
import { ListPlanetController } from "@/presentation/controllers/planet/list-planet-controller";
import { Controller } from "@/presentation/protocols/controller";

export const listPlanetsController = (): Controller => {
    const listPlanetsRepository = new PlanetMongoRepository()
    const controller = new ListPlanetController(listPlanetsRepository);
    return controller
}