import { Planet } from '@/domain/entities/planet';

export interface LoadPlanetsRepository {
  load: () => Promise<Planet[]>
}
