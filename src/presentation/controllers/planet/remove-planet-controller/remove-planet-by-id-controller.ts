
import { RemovePlanetById } from '@/domain/usecases/planet/remove-planet-by-id'
import { noContent, serverError } from '@/presentation/helpers/http/http-helper'
import { Controller } from '@/presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@/presentation/protocols/http'

export class RemovePlanetByIdController implements Controller {
  constructor (
    private readonly removePlanetById: RemovePlanetById,
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const planetId = httpRequest.params.planetId
      await this.removePlanetById.remove(planetId)

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
