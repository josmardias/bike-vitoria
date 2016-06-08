const { describe, it } = global
import { expect } from 'chai'

import { sumAsync } from './sum'

describe('sum', () => {
  it('should add two numbers correctly', () => {
    const result = sumAsync(10, 20)
    return expect(result).to.eventually.be.equal(30)
  })
})
