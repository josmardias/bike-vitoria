class App {
  constructor(stationDao, printer, loadingSpinner, stationsFormatter) {
    this.stationDao = stationDao
    this.printer = printer
    this.loadingSpinner = loadingSpinner
    this.stationsFormatter = stationsFormatter
  }

  printStations(stationIds) {
    const findStations = () =>
      this.stationDao.find(stationIds)

    const formatStations = this.stationsFormatter.print.bind(this.stationsFormatter)

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
