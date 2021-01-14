import { Planet } from '@/domain/entities/planet'

export interface SearchPlanetByName {
  searchByName: (planetName: string) => Promise<Planet>
}
