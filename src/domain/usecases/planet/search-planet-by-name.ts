import { Planet } from '@/domain/entities/planet'

export interface SearchPlanetByName {
  search: (planetName: string) => Promise<Planet>
}
