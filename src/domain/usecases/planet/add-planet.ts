import { PlanetModel } from '@/data/models/planet'

export type AddPlanetParams = PlanetModel

export interface AddPlanet {
  add: (planet: AddPlanetParams) => Promise<PlanetModel>
}
