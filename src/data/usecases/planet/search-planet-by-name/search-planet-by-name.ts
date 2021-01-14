import { SearchPlanetByNameRepository } from '@/data/db/planet/search-planet-by-name-repository'
import { Planet } from '@/domain/entities/planet'
import { SearchPlanetByName } from '@/domain/usecases/planet/search-planet-by-name'

export class DbSearchPlanetByName implements SearchPlanetByName {
  constructor (
    private readonly searchPlanetByNameRepository: SearchPlanetByNameRepository,
  ) {}

  async search (planetName: string): Promise<Planet> {
    const planet = await this.searchPlanetByNameRepository.search(planetName)
    return planet
  }
}
