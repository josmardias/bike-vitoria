import _ from 'lodash'

import { build as buildStations } from './stations-builder'
import { parse as parseRawStations } from './raw-stations-parser'

const filterById = (stations, id) =>
  _.filter(stations, { id: parseInt(id, 10) })

const filterByIds = (stations, ids) => {
  const idsAsNumbers = _.map(ids, n => parseInt(n, 10))
  return _.filter(stations, st => _.includes(idsAsNumbers, st.id))
}

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

  return filterByIds(stations, stationIds)
}

class StationDao {
  constructor(siteFetcher) {
    this.siteFetcher = siteFetcher
  }

  fetch() {
    return this.siteFetcher.fetch()
      .then(parseRawStations)
      .then(buildStations)
  }

  find(stationIds) {
    const filter = stations => filterStations(stations, stationIds)

    return this.fetch()
      .then(filter)
  }
}

export default StationDao
