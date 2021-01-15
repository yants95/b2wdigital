import { Planet } from "@/domain/entities/planet"
import { LoadPlanets } from "@/domain/usecases/planet/load-planets"
import { LoadPlanetsRepository } from "../db/planet/load-planets-repository"

export class LoadPlanetsService implements LoadPlanets {
  constructor (private readonly loadPlanetsRepository: LoadPlanetsRepository) {}

  async load (): Promise<Planet[]> {
    const planets =  this.loadPlanetsRepository.load()
    return planets
  }
}
