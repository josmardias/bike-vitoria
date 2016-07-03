const { describe, it } = global
import { expect } from 'chai'

import factory from './bike-vitoria-service-factory'
import BikeVitoriaService from './bike-vitoria-service'

describe('bikeVitoriaServiceFactory', () => {
  describe('#create', () => {
    it('should an instance of BikeVitoriaService', () => {
      const service = factory.create()

      return expect(service).to.be.instanceOf(BikeVitoriaService)
    })
  })
})
