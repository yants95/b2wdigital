import { AddPlanetParams } from "@/domain/usecases/planet/add-planet"
import { AddPlanetRepository } from "../db/planet/add-planet-repository"
import { PlanetModel } from "../models/planet"

export const mockAddPlanetParams = (): AddPlanetParams => ({
    "name": "any_name",
    "climate": "any_climate",
    "terrain": "any_terrain",
    "rotation_period": "string",
    "orbital_period": "string",
    "diameter": "string",
    "gravity": "string",
    "surface_water": "string",
    "population": "string",
    "films": ["any_film", "other_film"],
    "created": new Date('2021-01-13'),
    "edited": new Date('2021-01-13'),
    "url": "any_url"
})

export const mockAddPlanetRepository = (): AddPlanetRepository => {
    class AddPlanetRepositoryStub implements AddPlanetRepository {
      async add (planet: AddPlanetParams): Promise<PlanetModel> {
        return await Promise.resolve(mockAddPlanetParams())
      }
    }
  
    return new AddPlanetRepositoryStub()
  }