import { mockAddPlanetParams } from '@/data/test/mock-add-planet'
import { ObjectId } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { PlanetMongoRepository } from './planet-mongo-repository'

describe('Planet Mongo Repository', () => {
  const makeSut = (): PlanetMongoRepository => {
    return new PlanetMongoRepository()
  }

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  describe('load()', () => {
    test('should load planets from api', async () => {
      const sut = makeSut()
      const loadSpy = jest.spyOn(sut, 'load')
      await sut.load()
      expect(loadSpy).toHaveBeenCalled()
    })

    test('should return planet by name', async () => {
      const sut = makeSut()
      const searchByNameSpy = jest.spyOn(sut, 'searchByName')
      await sut.searchByName('any_name')
      expect(searchByNameSpy).toHaveBeenCalledWith('any_name')
    })

    test('should search planet by id', async () => {
      const sut = makeSut()
      const searchByIdSpy = jest.spyOn(sut, 'searchById')
      await sut.searchById('any_id_11111')
      expect(searchByIdSpy).toHaveBeenCalledWith('any_id_11111')
    })

    test('should remove planet by id', async () => {
      const sut = makeSut()
      const removeSpy = jest.spyOn(sut, 'remove')
      await sut.remove('any_id_22222')
      expect(removeSpy).toHaveBeenCalledWith('any_id_22222')
    })

    test('should return planet on add success', async () => {
      const sut = makeSut()
      const addSpy = jest.spyOn(sut, 'add')
      await sut.add(mockAddPlanetParams())
      expect(addSpy).toBeTruthy()
    })

    test('should list planets from mongodb', async () => {
      const sut = makeSut()
      const listSpy = jest.spyOn(sut, 'list')
      await sut.list()
      expect(listSpy).toHaveBeenCalled()
    })
  })
})
