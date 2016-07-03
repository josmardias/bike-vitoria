import _ from 'lodash'

const printStations = (stations) => {
  const header = 'Stations:\n'
  const addStation = (previous, station) => (
    `${previous}` +
    `\t${station.id}: ${station.name}\n` +
    `\t\t(${station.bikes} bikes, ${station.free} free slots)\n`
  )

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
