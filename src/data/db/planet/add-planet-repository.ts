import { PlanetModel } from "@/data/models/planet";
import { AddPlanetParams } from "@/domain/usecases/planet/add-planet";

export interface AddPlanetRepository {
  add: (planet: AddPlanetParams) => Promise<PlanetModel>
}
