import { mockAddPlanetParams } from '@/data/test/mock-add-planet'
import { Collection } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { PlanetMongoRepository } from './planet-mongo-repository'

let planetCollection: Collection

describe('Planet Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    planetCollection = await MongoHelper.getCollection('planets')
  })

  const makeSut = (): PlanetMongoRepository => {
    return new PlanetMongoRepository()
  }

  describe('searchByName()', () => {
    test('should return an planet on searchByName success', async () => {
      const sut = makeSut()
      await planetCollection.insertOne(mockAddPlanetParams())
      const planet = await sut.searchByName('any_name')
      expect(planet).toBeTruthy()
      expect(planet.id).toBeTruthy()
      expect(planet.name).toBe('any_name')
    })
  })
})
