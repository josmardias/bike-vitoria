
const toStation = (raw) => {
  const [
    name,
    ,,,,,,,
    bikes,
    free,
    ,,
    id,
  ] = raw

  return {
    id,
    name,
    bikes,
    free,
  }
}

const build = (rawStations) => rawStations.map(toStation)

const stationsBuilder = { build }

export default stationsBuilder
