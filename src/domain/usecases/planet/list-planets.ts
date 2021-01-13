import { Planet } from '@/domain/models/planet'

export interface ListPlanets {
  list: () => Promise<Planet[]>
}
