import { LoadPlanetsRepository } from "@/data/db/planet/load-planets-repository"
import { Planet } from "@/domain/entities/planet"
import { SearchPlanetById } from "@/domain/usecases/planet/search-planet-by-id"
import { SearchPlanetByName } from "@/domain/usecases/planet/search-planet-by-name"
import env from '@/main/config/env'
import axios from 'axios'
import { MongoHelper } from "../helpers/mongo-helper"

export class PlanetMongoRepository implements LoadPlanetsRepository, SearchPlanetByName, SearchPlanetById {
    async load (): Promise<Planet[]> {
        const response = await axios.get(`${env.swapiAPI}/planets`)
        return response.data
    }

    async searchByName (planetName: string) : Promise<Planet> {
        const planetCollection = await MongoHelper.getCollection('planets')
        const planet = await planetCollection.findOne({ name: planetName })
        return planet && MongoHelper.map(planet)
    }

    async searchById (planetId: string) : Promise<Planet> {
        const planetCollection = await MongoHelper.getCollection('planets')
        const planet = await planetCollection.findOne({ _id: planetId })
        return planet && MongoHelper.map(planet)
    }
}