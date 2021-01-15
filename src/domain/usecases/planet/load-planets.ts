import { Planet } from '@/domain/entities/planet'

export interface LoadPlanets {
  load: () => Promise<Planet[]>
}
