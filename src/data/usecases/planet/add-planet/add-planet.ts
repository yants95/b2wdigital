import { AddPlanetRepository } from '@/data/db/planet/add-planet-repository'
import { PlanetModel } from '@/data/models/planet'
import { AddPlanet, AddPlanetParams } from '@/domain/usecases/planet/add-planet'

export class DbAddPlanet implements AddPlanet {
  constructor (
    private readonly addPlanetRepository: AddPlanetRepository,
  ) {}

  async add (planetData: AddPlanetParams): Promise<PlanetModel> {
    const planet = await this.addPlanetRepository.add(planetData)
    return planet
  }
}
