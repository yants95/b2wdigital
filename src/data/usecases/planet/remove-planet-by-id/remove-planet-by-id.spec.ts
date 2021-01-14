import { DbRemovePlanetByIdRepository } from "@/data/db/planet/remove-planet-by-id-repository"
import { mockRemovePlanetByIdRepository } from "@/data/test/mock-planet"
import { DbRemovePlanetById } from "./remove-planet-by-id"

type SutTypes = {
  sut: DbRemovePlanetById
  removePlanetByIdRepository: DbRemovePlanetByIdRepository
}

const makeSut = (): SutTypes => {
  const removePlanetByIdRepository = mockRemovePlanetByIdRepository()
  const sut = new DbRemovePlanetById(removePlanetByIdRepository)
  return {
    sut,
    removePlanetByIdRepository,
  }
}

describe('DbRemovePlanetById Usecase', () => {
  test('shoud remove a planet by correct id', async () => {
    const { sut } = makeSut()
    const removeSpy = await sut.remove('any_id')
    expect(removeSpy).toBeNull()
  })
})
