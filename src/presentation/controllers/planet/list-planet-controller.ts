
import { LoadPlanets } from '@/domain/usecases/planet/load-planets'
import { Controller } from '@/presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@/presentation/protocols/http'

export class ListPlanetController implements Controller {
  constructor (
    private readonly planets: LoadPlanets,
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const planets = await this.planets.load()

      return {
        statusCode: 200,
        body: planets
      }
    } catch (error) {
      return error
    }
  }
}
