import program from 'commander'
import process from 'process'

import appFactory from './app-factory'

const packageJson = require('../package.json')

program
  .version(packageJson.version)
  .option('-s, --station [id]', 'Filter by station number')
  .parse(process.argv)

const app = appFactory.create()

app.printStations(program.station)
