import { Planet } from "@/domain/entities/planet"
import { ListPlanetsRepository } from "../db/planet/list-planet-repository"
import { SearchPlanetByNameRepository } from "../db/planet/search-planet-by-name-repository"

export const mockPlanetRepository = (): ListPlanetsRepository => {
    class ListPlanetsRepositoryStub implements ListPlanetsRepository {
      async list (): Promise<Planet[]> {
        return await Promise.resolve(null)
      }
    }
  
    return new ListPlanetsRepositoryStub()
  }

export const mockSearchPlanetByNameRepository = (): SearchPlanetByNameRepository => {
  class SearchPlanetByNameRepositoryStub implements SearchPlanetByNameRepository {
    async search (planetName: string): Promise<Planet> {
      return await Promise.resolve(null)
    }
  }

  return new SearchPlanetByNameRepositoryStub()
}