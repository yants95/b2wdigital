import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter';
import { listPlanetsController } from '../factories/controllers/planet/list-planet-controller-factory'
import { searchPlanetByIdController } from '../factories/controllers/planet/search-planet-by-id-factory';
import { searchPlanetByNameController } from '../factories/controllers/planet/search-planet-by-name-factory';

export default (router: Router): void => {
    router.get('/planets', adaptRoute(listPlanetsController()));
    router.get('/planetById/:planetId', adaptRoute(searchPlanetByIdController()));
    router.get('/planetByName/:planetName', adaptRoute(searchPlanetByNameController()));
}