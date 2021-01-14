import { ListPlanetsRepository } from '@/data/db/planet/list-planet-repository'
import { Planet } from '@/domain/entities/planet'
import { ListPlanets } from '@/domain/usecases/planet/list-planets'

export class DbListPlanets implements ListPlanets {
  constructor (
    private readonly listPlanetsRepository: ListPlanetsRepository,
  ) {}

  async list (): Promise<Planet[]> {
    const planets = await this.listPlanetsRepository.list()
    return planets
  }
}
