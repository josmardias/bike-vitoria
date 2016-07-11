import chalk from 'chalk'
import columnify from 'columnify'

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
  const options = {
    columns: ['id', 'name', 'bikes'],
    columnSplitter: '\t',
    config: {
      id: { headingTransform: () => 'Station' },
      name: { headingTransform: () => 'Name' },
      bikes: {
        headingTransform: () => 'Bikes available',
        dataTransform: (bikes, col, index) => {
          const free = stations[index].free
          const slots = parseInt(bikes, 10) + parseInt(free, 10)
          return color(bikes, free, `${bikes} of ${slots}`)
        },
      },
    },
  }
  return columnify(stations, options)
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
