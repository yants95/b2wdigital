
import { Planet } from '@/domain/entities/planet'
import { ListPlanets } from '@/domain/usecases/planet/list-planets'
import { LoadPlanets } from '@/domain/usecases/planet/load-planets'
import { ok } from '@/presentation/helpers/http/http-helper'
import { Controller } from '@/presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@/presentation/protocols/http'

export class ListPlanetController implements Controller {
  constructor (
    private readonly loadPlanets: LoadPlanets,
    private readonly listPlanets: ListPlanets,
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.loadPlanets.load()
      const planets = await this.listPlanets.list()

      return ok(planets)
    } catch (error) {
      return error
    }
  }
}
