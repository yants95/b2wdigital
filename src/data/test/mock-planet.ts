import { Planet } from "@/domain/models/planet"
import { ListPlanetsRepository } from "../db/planet/list-planet-repository"

export const mockPlanetRepository = (): ListPlanetsRepository => {
    class ListPlanetsRepositoryStub implements ListPlanetsRepository {
      async list (): Promise<Planet[]> {
        return await Promise.resolve(null)
      }
    }
  
    return new ListPlanetsRepositoryStub()
  }