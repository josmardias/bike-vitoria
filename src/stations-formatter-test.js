const { beforeEach, describe, it } = global
import { expect } from 'chai'

import StationsFormatter from './stations-formatter'

describe('StationsFormatter', () => {
  const stations = [
    {
      id: 11,
      name: 'Praça do Papa',
      bikes: '3',
      free: '9',
    },
    {
      id: 12,
      name: 'Praça dos Desejos',
      bikes: '10',
      free: '2',
    },
    {
      id: 17,
      name: 'SICOOB - Praia de Camburi',
      bikes: '8',
      free: '4',
    },
  ]

  let formatter

  beforeEach(() => {
    formatter = new StationsFormatter(stations)
  })

  describe('#print', () => {
    it('should print all stations', () => {
      const output = formatter.print()

      return expect(output).to.be.equal(
        'Stations:\n' +
        '\t11: Praça do Papa\n' +
        '\t\t(3 bikes, 9 free slots)\n' +
        '\t12: Praça dos Desejos\n' +
        '\t\t(10 bikes, 2 free slots)\n' +
        '\t17: SICOOB - Praia de Camburi\n' +
        '\t\t(8 bikes, 4 free slots)\n'
      )
    })

    it('should print only selected station', () => {
      const output = formatter.print(17)

      return expect(output).to.be.equal(
        'Stations:\n' +
        '\t17: SICOOB - Praia de Camburi\n' +
        '\t\t(8 bikes, 4 free slots)\n'
      )
    })
  })
})
