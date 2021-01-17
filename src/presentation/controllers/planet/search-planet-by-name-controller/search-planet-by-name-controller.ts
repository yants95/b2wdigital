
import { SearchPlanetByName } from '@/domain/usecases/planet/search-planet-by-name'
import { ok, serverError } from '@/presentation/helpers/http/http-helper'
import { Controller } from '@/presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@/presentation/protocols/http'

export class SearchPlanetByNameController implements Controller {
  constructor (
    private readonly searchPlanetByName: SearchPlanetByName,
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const planetName = httpRequest.params.planetName
      const planet = await this.searchPlanetByName.searchByName(planetName)

      return ok(planet)
    } catch (error) {
      return serverError(error)
    }
  }
}
