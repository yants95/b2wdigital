import { PlanetMongoRepository } from "@/infra/db/mongodb/planet/planet-mongo-repository";
import { AddPlanetController } from "@/presentation/controllers/planet/add-planet-controller/add-planet-controller";
import { Controller } from "@/presentation/protocols/controller";

export const addPlanetController = (): Controller => {
    const listPlanetsRepository = new PlanetMongoRepository()
    const controller = new AddPlanetController(listPlanetsRepository);
    return controller
}