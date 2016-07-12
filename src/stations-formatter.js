import chalk from 'chalk'
import columnify from 'columnify'

const number = n => parseInt(n, 10)

const color = (bikes, free, text, _chalk) => {
  if (number(bikes) <= 0) {
    return _chalk.red(text)
  } else if (number(free) <= 0) {
    return _chalk.gray(text)
  }

  return _chalk.green(text)
}

const inverse = (text, _chalk) => {
  return _chalk.inverse(text)
}

const printStations = (stations, _chalk) => {
  const colorDataTransform = (data, col, index) => {
    const bikes = stations[index].bikes
    const free = stations[index].free

    if (number(bikes) <= 0) {
      return _chalk.red(data)
    } else if (number(free) <= 0) {
      return _chalk.gray(data)
    }

    return data
  }

  const options = {
    columns: ['id', 'name', 'bikes'],
    columnSplitter: '\t',
    config: {
      id: {
        headingTransform: () => inverse('Station', _chalk),
        dataTransform: colorDataTransform,
      },
      name: {
        headingTransform: () => _chalk.inverse('Name'),
        dataTransform: colorDataTransform,
      },
      bikes: {
        headingTransform: () => inverse('Bikes available', _chalk),
        dataTransform: (bikes, col, index) => {
          const free = stations[index].free
          const slots = parseInt(bikes, 10) + parseInt(free, 10)
          return color(bikes, free, `${bikes} of ${slots}`, _chalk)
        },
      },
    },
  }
  return columnify(stations, options)
}

class StationsFormatter {
  constructor(colorsEnabled = true) {
    this.chalk = new chalk.constructor({ enabled: colorsEnabled })
  }

  /**
   * Formatted output about stations status
   * @param {string} stationIds - Optional station id's to filter
   */
  print(stations = []) {
    const _chalk = this.chalk
    return printStations(stations, _chalk)
  }
}

export default StationsFormatter
