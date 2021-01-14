import { AddPlanetParams } from "@/domain/usecases/planet/add-planet"
import { AddPlanetRepository } from "../db/planet/add-planet-repository"
import { PlanetModel } from "../models/planet"

export const mockAddPlanetParams = (): AddPlanetParams => ({
    "name": "any_name",
    "climate": "any_climate",
    "terrain": "any_terrain"
})

export const mockAddPlanetRepository = (): AddPlanetRepository => {
    class AddPlanetRepositoryStub implements AddPlanetRepository {
      async add (planet: AddPlanetParams): Promise<PlanetModel> {
        return await Promise.resolve(mockAddPlanetParams())
      }
    }
  
    return new AddPlanetRepositoryStub()
  }