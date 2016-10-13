import chalk from 'chalk'
import columnify from 'columnify'
import _ from 'lodash'

const number = n => parseInt(n, 10)

const color = (bikes, free, text, chalkObj) => {
  if (number(bikes) <= 0) {
    return chalkObj.red(text)
  } else if (number(free) <= 0) {
    return chalkObj.magenta(text)
  }

  return chalkObj.green(text)
}

const inverse = (text, chalkObj) =>
  chalkObj.inverse(text)

const printStations = (stations, chalkObj) => {
  const colorDataTransform = (data, col, index) => {
    const bikes = stations[index].bikes
    const free = stations[index].free

    if (number(bikes) <= 0) {
      return chalkObj.red(data)
    } else if (number(free) <= 0) {
      return chalkObj.magenta(data)
    }

    return data
  }

  const options = {
    columns: ['id', 'name', 'bikes'],
    columnSplitter: '\t',
    config: {
      id: {
        headingTransform: () => inverse('Station', chalkObj),
        dataTransform: colorDataTransform,
      },
      name: {
        headingTransform: () => chalkObj.inverse('Name'),
        dataTransform: colorDataTransform,
      },
      bikes: {
        headingTransform: () => inverse('Bikes available', chalkObj),
        dataTransform: (bikes, col, index) => {
          const free = stations[index].free
          const slots = parseInt(bikes, 10) + parseInt(free, 10)
          const pad = text => _.padStart(text, 2, '0')
          const text = `${pad(bikes)} of ${pad(slots)}`
          return color(bikes, free, text, chalkObj)
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
    const chalkObj = this.chalk
    return printStations(stations, chalkObj)
  }
}

export default StationsFormatter
