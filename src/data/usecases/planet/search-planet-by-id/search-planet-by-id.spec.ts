import { DbSearchPlanetByIdRepository } from "@/data/db/planet/search-planet-by-id-repository"
import { mockSearchPlanetByIdRepository } from "@/data/test/mock-planet"
import { DbSearchPlanetById } from "./search-planet-by-id"

type SutTypes = {
  sut: DbSearchPlanetById
  searchPlanetByIdRepository: DbSearchPlanetByIdRepository
}

const makeSut = (): SutTypes => {
  const searchPlanetByIdRepository = mockSearchPlanetByIdRepository()
  const sut = new DbSearchPlanetById(searchPlanetByIdRepository)
  return {
    sut,
    searchPlanetByIdRepository,
  }
}

describe('DbSearchPlanetById Usecase', () => {
  test('shoud search a planet by its name', async () => {
    const { sut, searchPlanetByIdRepository } = makeSut()
    const searchSpy = jest.spyOn(searchPlanetByIdRepository, 'searchById')
    await sut.searchById('any_id')
    expect(searchSpy).toHaveBeenCalledWith('any_id')
  })
})
