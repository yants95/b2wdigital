import { Planet } from '@/domain/entities/planet'

export type PlanetModel = Omit<Planet, 'id'>