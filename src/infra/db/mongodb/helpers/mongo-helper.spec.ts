import { MongoHelper as sut } from './mongo-helper'

describe('Mongo Helper', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('should reconnect if mongodb is down', async () => {
    let planetCollection = await sut.getCollection('planets')
    expect(planetCollection).toBeTruthy()
    await sut.disconnect()
    planetCollection = await sut.getCollection('planets')
    expect(planetCollection).toBeTruthy()
  })
})
