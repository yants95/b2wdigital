import { Planet } from "@/domain/entities/planet"
import { SearchPlanetById } from "@/domain/usecases/planet/search-planet-by-id"
import { HttpRequest } from "@/presentation/protocols/http"
import { RemovePlanetByIdController } from "../remove-planet-controller/remove-planet-by-id-controller"
import { SearchPlanetByIdController } from "./search-planet-by-id-controller"

type SutTypes = {
  sut: SearchPlanetByIdController
  searchPlanetById: SearchPlanetById
}

const mockSearchPlanetById = (): SearchPlanetById => {
  class SearchPlanetByIdStub implements SearchPlanetById {
    async searchById (planetId: string): Promise<Planet> {
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
  const searchPlanetById = mockSearchPlanetById()
  const sut = new SearchPlanetByIdController(searchPlanetById)
  return {
    sut,
    searchPlanetById
  }
}

describe('SearchPlaneyById Usecase', () => {
  test('should find and return a planet if an valid id is provided', async () => {
    const { sut, searchPlanetById } = makeSut()
    const removeSpy = jest.spyOn(searchPlanetById, 'searchById')
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(removeSpy).toHaveBeenCalledWith(httpRequest.params.planetId)
  })
})
