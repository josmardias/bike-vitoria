
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

export const build = rawStations => rawStations.map(toStation)

export default {
  build,
}
