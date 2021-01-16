export interface RemovePlanetById {
  remove: (planetId: string) => Promise<void>
}
