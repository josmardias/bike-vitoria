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

  describe('#print', () => {
    it('should print all stations using colors', () => {
      const colorsEnabled = true
      const formatter = new StationsFormatter(colorsEnabled)

      const output = formatter.print(stations)

      return expect(output).to.be.equal(
        '' + // eslint-disable-line prefer-template
        chalk.inverse('Station') +
        '\t' + chalk.inverse('Name') +
        '                     \t' +
        chalk.inverse('Bikes available') +
        '\n11     \tPraça do Papa            \t' + chalk.grey('12 of 12') + '       ' +
        '\n12     \tPraça dos Desejos        \t' + chalk.red('0 of 12') + '        ' +
        '\n17     \tSICOOB - Praia de Camburi\t8 of 12        '
      )
    })

    it('should print all stations without colors', () => {
      const colorsEnabled = false
      const formatter = new StationsFormatter(colorsEnabled)

      const output = formatter.print(stations)

      return expect(output).to.be.equal(
        '' + // eslint-disable-line prefer-template
        'Station\tName                     \tBikes available' +
        '\n11     \tPraça do Papa            \t12 of 12       ' +
        '\n12     \tPraça dos Desejos        \t0 of 12        ' +
        '\n17     \tSICOOB - Praia de Camburi\t8 of 12        '
      )
    })

    it('should print empty list when an empty stations list was passed', () => {
      const colorsEnabled = true
      const emptyFormatter = new StationsFormatter(colorsEnabled)

      const output = emptyFormatter.print([])

      return expect(output).to.be.equal(
        '' + // eslint-disable-line prefer-template
        chalk.inverse('Station') +
        '\t' + chalk.inverse('Name') +
        '\t' + chalk.inverse('Bikes available')
      )
    })
  })
})
