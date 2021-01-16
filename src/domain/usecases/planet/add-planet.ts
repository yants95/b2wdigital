import { PlanetModel } from '@/data/models/planet'
import { Planet } from '@/domain/entities/planet'

export type AddPlanetParams = Omit<Planet, 'id'>

export interface AddPlanet {
  add: (planet: AddPlanetParams) => Promise<PlanetModel>
}
