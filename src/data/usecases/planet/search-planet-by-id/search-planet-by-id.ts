import { DbSearchPlanetByIdRepository } from '@/data/db/planet/search-planet-by-id-repository'
import { Planet } from '@/domain/entities/planet'
import { SearchPlanetById } from '@/domain/usecases/planet/search-planet-by-id'

export class DbSearchPlanetById implements SearchPlanetById {
  constructor (
    private readonly searchPlanetByIdRepository: DbSearchPlanetByIdRepository,
  ) {}

  async searchById (planetId: string): Promise<Planet> {
    const planet = await this.searchPlanetByIdRepository.searchById(planetId)
    return planet
  }
}
