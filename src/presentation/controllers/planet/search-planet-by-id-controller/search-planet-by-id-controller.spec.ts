import { Planet } from "@/domain/entities/planet"
import { SearchPlanetById } from "@/domain/usecases/planet/search-planet-by-id"
import { serverError } from "@/presentation/helpers/http/http-helper"
import { HttpRequest } from "@/presentation/protocols/http"
import { SearchPlanetByIdController } from "./search-planet-by-id-controller"

type SutTypes = {
  sut: SearchPlanetByIdController
  searchPlanetByIdStub: SearchPlanetById
}

const mockSearchPlanetById = (): SearchPlanetById => {
  class SearchPlanetByIdStub implements SearchPlanetById {
    async searchById (planetId: string): Promise<Planet | null> {
      return await Promise.resolve(null)
    }
  }
  return new SearchPlanetByIdStub()
}

const mockRequest = (): HttpRequest => ({
  params: {
    planetId: 'any_id'
  }
})

const makeSut = (): SutTypes => {
  const searchPlanetByIdStub = mockSearchPlanetById()
  const sut = new SearchPlanetByIdController(searchPlanetByIdStub)
  return {
    sut,
    searchPlanetByIdStub
  }
}

describe('SearchPlaneyById Usecase', () => {
  test('should return a planet if an valid id is provided', async () => {
    const { sut, searchPlanetByIdStub } = makeSut()
    jest.spyOn(searchPlanetByIdStub, 'searchById')
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse.statusCode).toBe(200)
  })

  test('should return 500 if SearchPlanetById throws', async () => {
    const { sut, searchPlanetByIdStub } = makeSut()
    jest.spyOn(searchPlanetByIdStub, 'searchById').mockImplementationOnce(Promise.reject)
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
