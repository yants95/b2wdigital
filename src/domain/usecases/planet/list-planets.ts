import { Planet } from '@/domain/entities/planet'

export interface ListPlanets {
  list: () => Promise<Planet[]>
}
