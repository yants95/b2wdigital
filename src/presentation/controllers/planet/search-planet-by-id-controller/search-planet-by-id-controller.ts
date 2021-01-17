
import { SearchPlanetById } from '@/domain/usecases/planet/search-planet-by-id'
import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { Controller } from '@/presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@/presentation/protocols/http'

export class SearchPlanetByIdController implements Controller {
  constructor (
    private readonly searchPlanetById: SearchPlanetById,
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const planetId = httpRequest.params.planetId
      const planet = await this.searchPlanetById.searchById(planetId)

      return planet ? ok(planet) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
