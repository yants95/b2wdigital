import { ListPlanetsRepository } from "@/data/db/planet/list-planet-repository"
import { mockPlanetRepository } from "@/data/test/mock-planet"
import { DbListPlanets } from "./db-list-planets"

type SutTypes = {
  sut: DbListPlanets
  listPlanetsRepositoryStub: ListPlanetsRepository
}

const makeSut = (): SutTypes => {
  const listPlanetsRepositoryStub = mockPlanetRepository()
  const sut = new DbListPlanets(listPlanetsRepositoryStub)
  return {
    sut,
    listPlanetsRepositoryStub,
  }
}

describe('DbListPlanets Usecase', () => {
  test('shoud list all planets on success', async () => {
    const { sut, listPlanetsRepositoryStub } = makeSut()
    const listSpy = jest.spyOn(listPlanetsRepositoryStub, 'list')
    await sut.list()
    expect(listSpy).toHaveBeenCalled()
  })
})
