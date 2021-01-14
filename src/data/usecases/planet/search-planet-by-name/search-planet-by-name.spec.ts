import { SearchPlanetByNameRepository } from "@/data/db/planet/search-planet-by-name-repository"
import { mockSearchPlanetByNameRepository } from "@/data/test/mock-planet"
import { DbSearchPlanetByName } from "./search-planet-by-name"

type SutTypes = {
  sut: DbSearchPlanetByName
  searchPlanetByNameRepository: SearchPlanetByNameRepository
}

const makeSut = (): SutTypes => {
  const searchPlanetByNameRepository = mockSearchPlanetByNameRepository()
  const sut = new DbSearchPlanetByName(searchPlanetByNameRepository)
  return {
    sut,
    searchPlanetByNameRepository,
  }
}

describe('DbSearchPlanetByName Usecase', () => {
  test('shoud search a planet by its name', async () => {
    const { sut, searchPlanetByNameRepository } = makeSut()
    const searchSpy = jest.spyOn(searchPlanetByNameRepository, 'search')
    await sut.search('any_name')
    expect(searchSpy).toHaveBeenCalledWith('any_name')
  })
})
