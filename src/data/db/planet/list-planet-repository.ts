import { Planet } from "@/domain/entities/planet";

export interface ListPlanetsRepository {
  list: () => Promise<Planet[]>
}
