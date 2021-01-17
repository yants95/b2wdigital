import { ListPlanetsRepository } from "@/data/db/planet/list-planet-repository"
import { LoadPlanetsRepository } from "@/data/db/planet/load-planets-repository"
import { Planet } from "@/domain/entities/planet"
import { ListPlanets } from "@/domain/usecases/planet/list-planets"
import { LoadPlanets } from "@/domain/usecases/planet/load-planets"
import { serverError } from "@/presentation/helpers/http/http-helper"
import { HttpRequest } from "@/presentation/protocols/http"
import { ListPlanetController } from "./list-planet-controller"

type SutTypes = {
  sut: ListPlanetController
  listPlanetsStub: ListPlanets
  loadPlanetsStub: LoadPlanets
}

const mockLoadRequest = (): LoadPlanetsRepository => {
  class LoadPlanetsRepositoryStub implements LoadPlanetsRepository {
    async load (): Promise<Planet[]> {
      return await Promise.resolve(null)
    }
  }

  return new LoadPlanetsRepositoryStub()
}

const mockListRequest = (): ListPlanetsRepository => {
  class ListPlanetsRepositoryStub implements ListPlanetsRepository {
    async list (): Promise<Planet[]> {
      return await Promise.resolve(null)
    }
  }

  return new ListPlanetsRepositoryStub()
}

const makeSut = (): SutTypes => {
  const loadPlanetsStub = mockLoadRequest()
  const listPlanetsStub = mockListRequest()
  const sut = new ListPlanetController(loadPlanetsStub, listPlanetsStub)
  return {
    sut,
    listPlanetsStub,
    loadPlanetsStub
  }
}

const mockRequest = (): HttpRequest => ({
  
})

describe('AddPlanet Usecase', () => {
  test('shoud load planets from SWAPI api', async () => {
    const { sut, loadPlanetsStub } = makeSut()
    const loadSpy = jest.spyOn(loadPlanetsStub, 'load')
    await sut.handle(mockRequest())
    expect(loadSpy).toHaveBeenCalled()
  })

  test('shoud list all planets stored on mongodb', async () => {
    const { sut, listPlanetsStub } = makeSut()
    const loadSpy = jest.spyOn(listPlanetsStub, 'list')
    await sut.handle(mockRequest())
    expect(loadSpy).toHaveBeenCalled()
  })

  test('shoud return 500 if AddPlanet throws', async () => {
    const { sut, listPlanetsStub } = makeSut()
    jest.spyOn(listPlanetsStub, 'list').mockImplementationOnce(Promise.reject)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
