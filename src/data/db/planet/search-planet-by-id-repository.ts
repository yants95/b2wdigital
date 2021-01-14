import { Planet } from "@/domain/entities/planet";

export interface DbSearchPlanetByIdRepository {
  searchById: (planetId: string) => Promise<Planet>
}
