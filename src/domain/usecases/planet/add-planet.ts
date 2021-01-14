import { PlanetModel } from '@/data/models/planet'
import { Planet } from '@/domain/entities/planet'

export type AddPlanetParams = Planet

export interface AddPlanet {
  add: (planet: AddPlanetParams) => Promise<PlanetModel>
}
