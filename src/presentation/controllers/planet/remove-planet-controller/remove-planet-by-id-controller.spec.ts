import { RemovePlanetById } from "@/domain/usecases/planet/remove-planet-by-id"
import { serverError } from "@/presentation/helpers/http/http-helper"
import { HttpRequest } from "@/presentation/protocols/http"
import { RemovePlanetByIdController } from "./remove-planet-by-id-controller"

type SutTypes = {
  sut: RemovePlanetByIdController
  removePlanetStub: RemovePlanetById
}

const mockRemovePlanet = (): RemovePlanetById => {
  class RemovePlanetByIdStub implements RemovePlanetById {
    async remove (planetId: string): Promise<void> {
      return await Promise.resolve(null)
    }
  }
  return new RemovePlanetByIdStub()
}

const mockRequest = (): HttpRequest => ({
  params: {
    planetId: 'any_id'
  }
})

const makeSut = (): SutTypes => {
  const removePlanetStub = mockRemovePlanet()
  const sut = new RemovePlanetByIdController(removePlanetStub)
  return {
    sut,
    removePlanetStub
  }
}

describe('RemovePlanet Usecase', () => {
  test('shoud remove a planet if an valid id is provided', async () => {
    const { sut, removePlanetStub } = makeSut()
    const removeSpy = jest.spyOn(removePlanetStub, 'remove')
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(removeSpy).toHaveBeenCalledWith(httpRequest.params.planetId)
  })

  test('shoud return 500 if RemovePlanetById throws', async () => {
    const { sut, removePlanetStub } = makeSut()
    jest.spyOn(removePlanetStub, 'remove').mockImplementationOnce(Promise.reject)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
