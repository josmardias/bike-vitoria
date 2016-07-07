import StationsFormatter from './stations-formatter'

class App {
  constructor(stationDao, printer) {
    this.stationDao = stationDao
    this.printer = printer
  }

  printStations(stationIds) {
    const formatStations = (stations) => {
      const stationsFormatter = new StationsFormatter(stations)
      return stationsFormatter.print()
    }

    const print = this.printer.print.bind(this.printer)

    return this.stationDao.find(stationIds)
      .then(formatStations)
      .then(print)
  }
}

export default App
