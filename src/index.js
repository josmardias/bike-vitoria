import program from 'commander'
import process from 'process'

import appFactory from './app-factory'

const packageJson = require('../package.json')

const list = val => val.split(',')

program
  .version(packageJson.version)
  .option('-s, --station [id]', 'List station(s) (comma separated) ', list)
  .parse(process.argv)

const stationIds = program.station

const app = appFactory.create()

app.printStations(stationIds)
