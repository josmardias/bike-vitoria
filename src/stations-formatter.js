import chalk from 'chalk'

const number = n => parseInt(n, 10)

const color = (bikes, free, text) => {
  if (number(bikes) <= 0) {
    return chalk.red(text)
  } else if (number(free) <= 0) {
    return chalk.gray(text)
  }

  return text
}

const printStations = (stations) => {
  const header = 'Stations:\n'

  const addStation = (previous, station) => {
    const line = color(
      station.bikes,
      station.free,
      `\t\t(${station.bikes} bikes, ${station.free} free slots)\n`
    )

    return `${previous}\t${station.id}: ${station.name}\n${line}`
  }

  return stations.reduce(addStation, header)
}

class StationsFormatter {
  constructor(stations) {
    this.stations = stations || []
  }

  /**
   * Formatted output about stations status
   * @param {string} stationIds - Optional station id's to filter
   */
  print() {
    const stations = this.stations
    return printStations(stations)
  }
}

export default StationsFormatter
