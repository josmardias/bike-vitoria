import { expect } from 'chai'
import chalk from 'chalk'

import StationsFormatter from './stations-formatter'

const { describe, it } = global

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

      /* eslint-disable prefer-template, max-len */
      return expect(output).to.be.equal(
        chalk.inverse('Station') + '\t' + chalk.inverse('Name') + '                     \t' + chalk.inverse('Bikes available') +
        '\n' + chalk.magenta('11') + '     \t' + chalk.magenta('Praça do Papa') + '            \t' + chalk.magenta('12 of 12') + '       ' +
        '\n' + chalk.red('12') + '     \t' + chalk.red('Praça dos Desejos') + '        \t' + chalk.red('00 of 12') + '       ' +
        '\n17     \tSICOOB - Praia de Camburi\t' + chalk.green('08 of 12') + '       '
      )
      /* eslint-enable */
    })

    it('should print all stations without colors', () => {
      const colorsEnabled = false
      const formatter = new StationsFormatter(colorsEnabled)

      const output = formatter.print(stations)

      return expect(output).to.be.equal(
        '' + // eslint-disable-line prefer-template
        'Station\tName                     \tBikes available' +
        '\n11     \tPraça do Papa            \t12 of 12       ' +
        '\n12     \tPraça dos Desejos        \t00 of 12       ' +
        '\n17     \tSICOOB - Praia de Camburi\t08 of 12       '
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
