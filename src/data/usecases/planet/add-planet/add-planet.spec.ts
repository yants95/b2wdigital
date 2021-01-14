import { DbAddPlanet } from "./add-planet"
import { AddPlanetRepository } from "@/data/db/planet/add-planet-repository"
import { mockAddPlanetParams, mockAddPlanetRepository } from "@/data/test/mock-add-planet"

type SutTypes = {
  sut: DbAddPlanet
  addPlanetRepositoryStub: AddPlanetRepository
}

const makeSut = (): SutTypes => {
  const addPlanetRepositoryStub = mockAddPlanetRepository()
  const sut = new DbAddPlanet(addPlanetRepositoryStub)
  return {
    sut,
    addPlanetRepositoryStub,
  }
}

describe('AddPlanet Usecase', () => {
  test('shoud add an planet with correct values', async () => {
    const { sut, addPlanetRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addPlanetRepositoryStub, 'add')
    await sut.add(mockAddPlanetParams())
    expect(addSpy).toHaveBeenCalledWith({
      name: "any_name",
      climate: "any_climate",
      terrain: "any_terrain"
    })
  })
})
