import { Planet } from '@/domain/entities/planet'

export interface RemovePlanetById {
  remove: (planetId: string) => Promise<void>
}
