import { LoadPlanetsRepository } from "@/data/db/planet/load-planets-repository"
import { Planet } from "@/domain/entities/planet"
import { AddPlanet, AddPlanetParams } from "@/domain/usecases/planet/add-planet"
import { ListPlanets } from "@/domain/usecases/planet/list-planets"
import { RemovePlanetById } from "@/domain/usecases/planet/remove-planet-by-id"
import { SearchPlanetById } from "@/domain/usecases/planet/search-planet-by-id"
import { SearchPlanetByName } from "@/domain/usecases/planet/search-planet-by-name"
import env from '@/main/config/env'
import axios from 'axios'
import { ObjectId } from "mongodb"
import { MongoHelper } from "../helpers/mongo-helper"

export class PlanetMongoRepository implements LoadPlanetsRepository, SearchPlanetByName, SearchPlanetById, AddPlanet, ListPlanets, RemovePlanetById {
    async load (): Promise<any> {
        const response = await axios.get(`${env.swapiAPI}/planets`)
        const planetCollection = await MongoHelper.getCollection('planets')
        await planetCollection.insertMany(response.data.results)
        // if (!planetCollection.find()) {
        //     return await planetCollection.insertMany(response.data.results)
        // }
    }

    async searchByName (planetName: string): Promise<Planet> {
        const planetCollection = await MongoHelper.getCollection('planets')
        const planet = await planetCollection.findOne({ name: planetName })
        return planet && MongoHelper.map(planet)
    }

    async searchById (planetId: string): Promise<Planet> {
        const planetCollection = await MongoHelper.getCollection('planets')
        const planet = await planetCollection.findOne({ _id: new ObjectId(planetId) })
        return planet && MongoHelper.map(planet)
    }

    async add (planetParams: AddPlanetParams): Promise<Planet> {
        const planetCollection = await MongoHelper.getCollection('planets')
        const planet = await planetCollection.insertOne(planetParams)
        return planet && MongoHelper.map(planet)
    }

    async list (): Promise<Planet[]> {
        const planetCollection = await MongoHelper.getCollection('planets')
        const planets = await planetCollection.find().toArray()
        return planets && MongoHelper.map(planets)
    }

    async remove (planetId: string): Promise<void> {
        const planetCollection = await MongoHelper.getCollection('planets')
        const planet = await planetCollection.deleteOne({ _id: new ObjectId(planetId) })
        return planet && MongoHelper.map(planet)
    }
}