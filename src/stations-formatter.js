import _ from 'lodash'

function printStations(stations) {
  const header = 'Stations:\n'
  const addStation = (previous, station) => (
    `${previous}` +
    `\t${station.id}: ${station.name}\n` +
    `\t\t(${station.bikes} bikes, ${station.free} free slots)\n`
  )

  return stations.reduce(addStation, header)
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
    if (stationId) {
      const station = _.filter(this.stations, { id: stationId })
      return printStations(station)
    }
    return printStations(this.stations)
  }
}

export default StationsFormatter
