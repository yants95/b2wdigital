import { SearchPlanetByNameRepository } from "@/data/db/planet/search-planet-by-name-repository"
import { mockSearchPlanetByNameRepository } from "@/data/test/mock-planet"
import { DbSearchPlanetByName } from "./search-planet-by-name"

type SutTypes = {
  sut: DbSearchPlanetByName
  searchPlanetByNameRepositoryStub: SearchPlanetByNameRepository
}

const makeSut = (): SutTypes => {
  const searchPlanetByNameRepositoryStub = mockSearchPlanetByNameRepository()
  const sut = new DbSearchPlanetByName(searchPlanetByNameRepositoryStub)
  return {
    sut,
    searchPlanetByNameRepositoryStub,
  }
}

describe('DbSearchPlanetByName Usecase', () => {
  test('shoud search a planet by its name', async () => {
    const { sut, searchPlanetByNameRepositoryStub } = makeSut()
    const searchSpy = jest.spyOn(searchPlanetByNameRepositoryStub, 'searchByName')
    await sut.searchByName('any_name')
    expect(searchSpy).toHaveBeenCalledWith('any_name')
  })

  test('should throw if DbSearchPlanetByName throws', async () => {
    const { sut, searchPlanetByNameRepositoryStub } = makeSut()
    jest.spyOn(searchPlanetByNameRepositoryStub, 'searchByName').mockImplementationOnce(Promise.reject)
    const promise = sut.searchByName('any_name')
    await expect(promise).rejects.toThrow()
  })
})
