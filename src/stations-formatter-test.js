const { beforeEach, describe, it } = global
import { expect } from 'chai'
import chalk from 'chalk'

import StationsFormatter from './stations-formatter'

describe('StationsFormatter', () => {
  const stations = [
    {
      id: 11,
      name: 'Praça do Papa',
      bikes: '12',
      free: '0',
    },
    {
      id: 12,
      name: 'Praça dos Desejos',
      bikes: '0',
      free: '12',
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
    it('should print all stations using colors', () => {
      const output = formatter.print()

      return expect(output).to.be.equal(
        'Stations:\n' +
        '\t11: Praça do Papa\n' +
        chalk.grey('\t\t(12 bikes, 0 free slots)\n') +
        '\t12: Praça dos Desejos\n' +
        chalk.red('\t\t(0 bikes, 12 free slots)\n') +
        '\t17: SICOOB - Praia de Camburi\n' +
        '\t\t(8 bikes, 4 free slots)\n'
      )
    })

    it('should print empty list when an empty stations list was passed', () => {
      const emptyFormatter = new StationsFormatter([])

      const output = emptyFormatter.print()

      return expect(output).to.be.equal(
        'Stations:\n'
      )
    })
  })
})
