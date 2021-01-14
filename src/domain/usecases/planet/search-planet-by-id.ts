import { Planet } from '@/domain/entities/planet'

export interface SearchPlanetById {
  searchById: (planetId: string) => Promise<Planet>
}
