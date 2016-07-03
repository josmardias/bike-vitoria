import stationsBuilder from './stations-builder'
import rawStationsParser from './raw-stations-parser'

const parseAndBuild = (html) => {
  const rawStations = rawStationsParser.parse(html)
  return stationsBuilder.build(rawStations)
}

class BikeVitoriaService {
  constructor(siteFetcher) {
    this.siteFetcher = siteFetcher
  }

  fetch() {
    const htmlPromise = this.siteFetcher.fetch()
    return htmlPromise.then(parseAndBuild)
  }
}

export default BikeVitoriaService
