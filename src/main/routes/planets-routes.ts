import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter';
import { addPlanetController } from '../factories/controllers/planet/add-planet-controller-factory';
import { listPlanetsController } from '../factories/controllers/planet/list-planet-controller-factory'
import { removePlanetByIdController } from '../factories/controllers/planet/remove-planet-by-id-factory';
import { searchPlanetByIdController } from '../factories/controllers/planet/search-planet-by-id-factory';
import { searchPlanetByNameController } from '../factories/controllers/planet/search-planet-by-name-factory';

export default (router: Router): void => {
    router.get('/planets', adaptRoute(listPlanetsController()));
    router.get('/planets/id/:planetId', adaptRoute(searchPlanetByIdController()));
    router.get('/planets/name/:planetName', adaptRoute(searchPlanetByNameController()));
    router.delete('/planets/:planetId', adaptRoute(removePlanetByIdController()));
    router.post('/planets', adaptRoute(addPlanetController()));
}