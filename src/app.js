import StationsFormatter from './stations-formatter'

class App {
  constructor(stationDao, outputService) {
    this.stationDao = stationDao
    this.outputService = outputService
  }

  printStations(stationIds) {
    const formatStations = (stations) => {
      const stationsFormatter = new StationsFormatter(stations)
      return stationsFormatter.print()
    }

    const printToOutput = this.outputService.print.bind(this.outputService)

    return this.stationDao.find(stationIds)
      .then(formatStations)
      .then(printToOutput)
  }
}

export default App
