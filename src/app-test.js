import { expect } from 'chai'
import { PassThrough as PassThroughStream } from 'stream'
import getStream from 'get-stream'

import PrinterInMemory from './printer-in-memory'
import StationDaoFake from './station-dao-fake'
import LoadingSpinner from './loading-spinner'
import StationsFormatter from './stations-formatter'
import App from './app'

const { beforeEach, describe, it } = global

describe('App', () => {
  const spinnerFake = { show() {}, hide() {} }
  let printerInMemory
  let stationDaoFake
  let stationsFormatter

  beforeEach(() => {
    const colorsEnabled = false
    stationsFormatter = new StationsFormatter(colorsEnabled)
    printerInMemory = new PrinterInMemory
    stationDaoFake = new StationDaoFake()
    stationDaoFake.loadFakeData([
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
    ])
  })

  describe('#getStationsInfo', () => {
    it('should print a loading spinner', () => {
      const stream = new PassThroughStream()
      const noop = () => {}
      stream.isTTY = true
      stream.clearLine = noop
      stream.cursorTo = noop

      const spinner = new LoadingSpinner({
        stream,
        color: false,
      })

      const app = new App(stationDaoFake, printerInMemory, spinner, stationsFormatter)
      const printPromise = app.printStations()

      return printPromise.then(() => {
        stream.end()
        return getStream(stream)
      }).then(output =>
        expect(output).to.not.be.empty // eslint-disable-line no-unused-expressions
      )
    })

    it('should print stations info to the output', () => {
      const app = new App(stationDaoFake, printerInMemory, spinnerFake, stationsFormatter)

      return app.printStations().then(() =>
        expect(printerInMemory.lastOutput).to.be.deep.equal(
          '' + // eslint-disable-line prefer-template
          'Station\tName                     \tBikes available' +
          '\n11     \tPraça do Papa            \t12 of 12       ' +
          '\n12     \tPraça dos Desejos        \t00 of 12       ' +
          '\n17     \tSICOOB - Praia de Camburi\t08 of 12       '
        ))
    })

    it('should print all stations to the output when passing an empty array of ids', () => {
      const app = new App(stationDaoFake, printerInMemory, spinnerFake, stationsFormatter)

      return app.printStations([]).then(() =>
        expect(printerInMemory.lastOutput).to.be.deep.equal(
          '' + // eslint-disable-line prefer-template
          'Station\tName                     \tBikes available' +
          '\n11     \tPraça do Papa            \t12 of 12       ' +
          '\n12     \tPraça dos Desejos        \t00 of 12       ' +
          '\n17     \tSICOOB - Praia de Camburi\t08 of 12       '
        ))
    })

    it('should print a single station info to the output', () => {
      const app = new App(stationDaoFake, printerInMemory, spinnerFake, stationsFormatter)

      return app.printStations(17).then(() =>
        expect(printerInMemory.lastOutput).to.be.deep.equal(
          'Station\tName                     \tBikes available' +
          '\n17     \tSICOOB - Praia de Camburi\t08 of 12       '
        ))
    })

    it('should print multiple stations info to the output', () => {
      const app = new App(stationDaoFake, printerInMemory, spinnerFake, stationsFormatter)

      return app.printStations([12, 17]).then(() =>
        expect(printerInMemory.lastOutput).to.be.deep.equal(
          '' + // eslint-disable-line prefer-template
          'Station\tName                     \tBikes available' +
          '\n12     \tPraça dos Desejos        \t00 of 12       ' +
          '\n17     \tSICOOB - Praia de Camburi\t08 of 12       '
        ))
    })
  })
})
