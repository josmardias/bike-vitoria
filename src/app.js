import StationsFormatter from './stations-formatter'

class App {
  constructor(stationDao, printer, loadingSpinner) {
    this.stationDao = stationDao
    this.printer = printer
    this.loadingSpinner = loadingSpinner
  }

  printStations(stationIds) {
    const findStations = () =>
      this.stationDao.find(stationIds)

    const formatStations = (stations) => {
      const colorsEnabled = true
      const stationsFormatter = new StationsFormatter(colorsEnabled)
      return stationsFormatter.print(stations)
    }

    const print = this.printer.print.bind(this.printer)

    const spinner = this.loadingSpinner
    const hideLoading = (passthrough) => {
      spinner.hide()
      return passthrough
    }

    spinner.show()
    return findStations()
      .then(hideLoading)
      .then(formatStations)
      .then(print)
  }
}

export default App
