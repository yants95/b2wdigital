import { DbRemovePlanetByIdRepository } from '@/data/db/planet/remove-planet-by-id-repository'
import { RemovePlanetById } from '@/domain/usecases/planet/remove-planet-by-id'

export class DbRemovePlanetById implements RemovePlanetById {
  constructor (
    private readonly removePlanetByIdRepository: DbRemovePlanetByIdRepository,
  ) {}

  async remove (planetId: string): Promise<void> {
    return await this.removePlanetByIdRepository.remove(planetId)
  }
}
