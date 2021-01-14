import { Planet } from "@/domain/entities/planet";

export interface SearchPlanetByNameRepository {
  search: (planetName: string) => Promise<Planet>
}
