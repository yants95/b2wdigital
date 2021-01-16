import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter';
import { listPlanetsController } from '../factories/controllers/planet/list-planet-controller-factory'
import { searchPlanetByIdController } from '../factories/controllers/planet/search-planet-by-id-factory';

export default (router: Router): void => {
    router.get('/planets', adaptRoute(listPlanetsController()));
    router.get('/planets/:planetId', adaptRoute(searchPlanetByIdController()));
}