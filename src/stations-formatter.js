
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
    this.stations = stations
  }

  print() {
    return printStations(this.stations)
  }
}

export default StationsFormatter
