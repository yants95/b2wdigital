import { mockAddPlanetRepository } from "@/data/test/mock-add-planet"
import { AddPlanet } from "@/domain/usecases/planet/add-planet"
import { serverError } from "@/presentation/helpers/http/http-helper"
import { HttpRequest } from "@/presentation/protocols/http"
import { AddPlanetController } from "./add-planet-controller"

type SutTypes = {
  sut: AddPlanetController
  addPlanetRepositoryStub: AddPlanet
}

const makeSut = (): SutTypes => {
  const addPlanetRepositoryStub = mockAddPlanetRepository()
  const sut = new AddPlanetController(addPlanetRepositoryStub)
  return {
    sut,
    addPlanetRepositoryStub,
  }
}

const mockRequest = (): HttpRequest => ({
  body: {
    name: "any_name",
      climate: "any_climate",
      terrain: "any_terrain",
      rotation_period: "string",
      orbital_period: "string",
      diameter: "string",
      gravity: "string",
      surface_water: "string",
      population: "string",
      films: ["any_film", "other_film"],
      residents: ["any_resident", "other_resident"],
      created: new Date('2021-01-13'),
      edited: new Date('2021-01-13'),
      url: "any_url"
  }
})

describe('AddPlanet Usecase', () => {
  test('shoud add an planet with correct values', async () => {
    const { sut, addPlanetRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addPlanetRepositoryStub, 'add')
    await sut.handle(mockRequest())
    expect(addSpy).toBeTruthy()
    expect(addSpy).toHaveBeenCalledWith({
      name: "any_name",
      climate: "any_climate",
      terrain: "any_terrain",
      rotation_period: "string",
      orbital_period: "string",
      diameter: "string",
      gravity: "string",
      surface_water: "string",
      population: "string",
      films: ["any_film", "other_film"],
      residents: ["any_resident", "other_resident"],
      created: new Date('2021-01-13'),
      edited: new Date('2021-01-13'),
      url: "any_url"
    })
  })

  test('shoud return 500 if AddPlanet throws', async () => {
    const { sut, addPlanetRepositoryStub } = makeSut()
    jest.spyOn(addPlanetRepositoryStub, 'add').mockImplementationOnce(Promise.reject)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
