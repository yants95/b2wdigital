import { Planet } from "@/domain/entities/planet"
import { SearchPlanetByName } from "@/domain/usecases/planet/search-planet-by-name"
import { serverError } from "@/presentation/helpers/http/http-helper"
import { HttpRequest } from "@/presentation/protocols/http"
import { SearchPlanetByNameController } from "./search-planet-by-name-controller"

type SutTypes = {
  sut: SearchPlanetByNameController
  searchPlanetByNameStub: SearchPlanetByName
}

const mockSearchPlanetByName = (): SearchPlanetByName => {
  class SearchPlanetByNameStub implements SearchPlanetByName {
    async searchByName (planetName: string): Promise<Planet | null> {
      return await Promise.resolve(null)
    }
  }
  return new SearchPlanetByNameStub()
}

const mockRequest = (): HttpRequest => ({
  params: {
    planetId: 'any_id'
  }
})

const makeSut = (): SutTypes => {
  const searchPlanetByNameStub = mockSearchPlanetByName()
  const sut = new SearchPlanetByNameController(searchPlanetByNameStub)
  return {
    sut,
    searchPlanetByNameStub
  }
}

describe('SearchPlaneyById Usecase', () => {
  test('should return a planet if an valid id is provided', async () => {
    const { sut, searchPlanetByNameStub } = makeSut()
    jest.spyOn(searchPlanetByNameStub, 'searchByName')
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse.statusCode).toBe(200)
  })

  test('should return 500 if SearchPlanetById throws', async () => {
    const { sut, searchPlanetByNameStub } = makeSut()
    jest.spyOn(searchPlanetByNameStub, 'searchByName').mockImplementationOnce(Promise.reject)
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
