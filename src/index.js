import program from 'commander'
import process from 'process'

import { create as createApp } from './app-factory'

const packageJson = require('../package.json')

const list = val => val.split(',')

program
  .version(packageJson.version)
  .option('-s, --station [id]', 'List station(s) (comma separated) ', list)
  .option('-A, --all', 'List all stations')
  .parse(process.argv)

const stationIds = (program.all && []) || program.station

const app = createApp()

app.printStations(stationIds)
