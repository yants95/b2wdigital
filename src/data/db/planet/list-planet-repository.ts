import { Planet } from "@/domain/models/planet";

export interface ListPlanetsRepository {
  list: () => Promise<Planet[]>
}
