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

const filterById = (stations, id) =>
  _.filter(stations, { id: parseInt(id, 10) })

const filterByArrId = (stations, ids) =>
  _.filter(stations, (o) => _.includes(ids, o.id))

const filterStations = (stations, stationIds) => {
  if (!stationIds) {
    return stations
  }

  if (!_.isArray(stationIds)) {
    const stationId = stationIds
    return filterById(stations, stationId)
  }

  if (stationIds.length === 0) {
    return stations
  }

  const stationsIdsAsNumber = _.map(stationIds, (n) => parseInt(n, 10))
  return filterByArrId(stations, stationsIdsAsNumber)
}

class StationsFormatter {
  constructor(stations) {
    this.stations = stations || []
  }

  /**
   * Formatted output about stations status
   * @param {string} stationIds - Optional station id's to filter
   */
  print(stationIds) {
    const stations = this.stations
    const selectedStations = filterStations(stations, stationIds)
    return printStations(selectedStations)
  }
}

export default StationsFormatter
