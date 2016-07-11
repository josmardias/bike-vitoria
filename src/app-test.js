const { beforeEach, describe, it } = global
import { expect } from 'chai'
import chalk from 'chalk'
import { Writable as WritableStream } from 'stream'

import PrinterInMemory from './printer-in-memory'
import StationDaoFake from './station-dao-fake'
import LoadingSpinner from './loading-spinner'
import App from './app'

describe('App', () => {
  const spinnerFake = { show() {}, hide() {} }
  let printerInMemory
  let stationDaoFake

  beforeEach(() => {
    printerInMemory = new PrinterInMemory
    stationDaoFake = new StationDaoFake()
    stationDaoFake.loadFakeData([
      {
        id: 11,
        name: 'Praça do Papa',
        bikes: '3',
        free: '9',
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
        bikes: '12',
        free: '0',
      },
    ])
  })

  describe('#getStationsInfo', () => {
    it('should print a loading spinner', () => {
      const noop = () => {}
      let streamToString = ''
      const stream = new WritableStream({
        write(chunk, encoding, callback) {
          streamToString += chunk.toString()
          callback()
        },
      })
      stream.isTTY = true
      stream.clearLine = noop
      stream.cursorTo = noop

      const spinner = new LoadingSpinner({
        stream,
        color: false,
      })

      const app = new App(stationDaoFake, printerInMemory, spinner)

      return app.printStations(17).then(() => {
        expect(streamToString).to.not.be.empty

        expect(printerInMemory.lastOutput).to.be.deep.equal(
          'Stations:\n' + // eslint-disable-line prefer-template
          '\t17: SICOOB - Praia de Camburi\n' +
          chalk.grey('\t\t(12 bikes, 0 free slots)\n')
        )
      })
    })

    it('should print stations info to the output', () => {
      const app = new App(stationDaoFake, printerInMemory, spinnerFake)

      return app.printStations().then(() =>
        expect(printerInMemory.lastOutput).to.be.deep.equal(
          'Stations:\n' + // eslint-disable-line prefer-template
          '\t11: Praça do Papa\n' +
          '\t\t(3 bikes, 9 free slots)\n' +
          '\t12: Praça dos Desejos\n' +
          chalk.red('\t\t(0 bikes, 12 free slots)\n') +
          '\t17: SICOOB - Praia de Camburi\n' +
          chalk.grey('\t\t(12 bikes, 0 free slots)\n')
        ))
    })

    it('should print all stations to the output when passing an empty array of ids', () => {
      const app = new App(stationDaoFake, printerInMemory, spinnerFake)

      return app.printStations([]).then(() =>
        expect(printerInMemory.lastOutput).to.be.deep.equal(
          'Stations:\n' + // eslint-disable-line prefer-template
          '\t11: Praça do Papa\n' +
          '\t\t(3 bikes, 9 free slots)\n' +
          '\t12: Praça dos Desejos\n' +
          chalk.red('\t\t(0 bikes, 12 free slots)\n') +
          '\t17: SICOOB - Praia de Camburi\n' +
          chalk.grey('\t\t(12 bikes, 0 free slots)\n')
        ))
    })

    it('should print a single station info to the output', () => {
      const app = new App(stationDaoFake, printerInMemory, spinnerFake)

      return app.printStations(17).then(() =>
        expect(printerInMemory.lastOutput).to.be.deep.equal(
          'Stations:\n' + // eslint-disable-line prefer-template
          '\t17: SICOOB - Praia de Camburi\n' +
          chalk.grey('\t\t(12 bikes, 0 free slots)\n')
        ))
    })

    it('should print multiple stations info to the output', () => {
      const app = new App(stationDaoFake, printerInMemory, spinnerFake)

      return app.printStations([12, 17]).then(() =>
        expect(printerInMemory.lastOutput).to.be.deep.equal(
          'Stations:\n' + // eslint-disable-line prefer-template
          '\t12: Praça dos Desejos\n' +
          chalk.red('\t\t(0 bikes, 12 free slots)\n') +
          '\t17: SICOOB - Praia de Camburi\n' +
          chalk.grey('\t\t(12 bikes, 0 free slots)\n')
        ))
    })
  })
})
