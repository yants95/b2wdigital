
import { AddPlanet } from '@/domain/usecases/planet/add-planet'
import { ok } from '@/presentation/helpers/http/http-helper'
import { Controller } from '@/presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@/presentation/protocols/http'

export class AddPlanetController implements Controller {
  constructor (
    private readonly addPlanet: AddPlanet,
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const planet = await this.addPlanet.add(httpRequest.body)

      return ok(planet)
    } catch (error) {
      return error
    }
  }
}
