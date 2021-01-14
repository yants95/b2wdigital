export interface DbRemovePlanetByIdRepository {
  remove: (planetId: string) => Promise<void>
}
