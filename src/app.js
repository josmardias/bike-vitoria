import StationsFormatter from './stations-formatter'

class App {
  constructor(bikeVitoriaService, outputService) {
    this.bikeVitoriaService = bikeVitoriaService
    this.outputService = outputService
  }

  printStations(stationIds) {
    const formatStations = (stations) => {
      const stationsFormatter = new StationsFormatter(stations)
      return stationsFormatter.print(stationIds)
    }

    const printToOutput = this.outputService.print.bind(this.outputService)

    return this.bikeVitoriaService.fetch()
      .then(formatStations)
      .then(printToOutput)
  }
}

export default App
