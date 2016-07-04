import _ from 'lodash'
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

const print = (stations, stationId) => {
  if (stationId) {
    const station = _.filter(stations, { id: stationId })
    return printStations(station)
  }
  return printStations(stations)
}

class StationsFormatter {
  constructor(stations) {
    this.stations = stations || []
  }

  /**
   * Formatted output about stations status
   * @param {string} stationId - Optional station id to filter
   */
  print(stationId) {
    return print(this.stations, parseInt(stationId, 10))
  }
}

export default StationsFormatter
