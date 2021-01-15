import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter';
import { planetController } from '../factories/controllers/planet/planet-controller-factory'

export default (router: Router): void => {
    router.get('/planets', adaptRoute(planetController()));
}