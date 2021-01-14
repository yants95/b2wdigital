import { Planet } from "@/domain/entities/planet";

export interface SearchPlanetByNameRepository {
  searchByName: (planetName: string) => Promise<Planet>
}
