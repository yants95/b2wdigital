import { Planet } from "@/domain/entities/planet"
import { ListPlanetsRepository } from "../db/planet/list-planet-repository"
import { DbRemovePlanetByIdRepository } from "../db/planet/remove-planet-by-id-repository"
import { DbSearchPlanetByIdRepository } from "../db/planet/search-planet-by-id-repository"
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

export const mockSearchPlanetByIdRepository = (): DbSearchPlanetByIdRepository => {
  class DbSearchPlanetByIdRepositoryStub implements DbSearchPlanetByIdRepository {
    async searchById (planetId: string): Promise<Planet> {
      return await Promise.resolve(null)
    }
  }

  return new DbSearchPlanetByIdRepositoryStub()
}

export const mockRemovePlanetByIdRepository = (): DbRemovePlanetByIdRepository => {
  class DbRemovePlanetByIdRepositoryStub implements DbRemovePlanetByIdRepository {
    async remove (planetId: string): Promise<void> {
      return await Promise.resolve(null)
    }
  }

  return new DbRemovePlanetByIdRepositoryStub()
}