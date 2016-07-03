import program from 'commander'
import process from 'process'

import factory from './bike-vitoria-service-factory'
import StationsFormatter from './stations-formatter'

const packageJson = require('../package.json')

program
  .version(packageJson.version)
  .option('-s, --station [id]', 'Filter by station number')
  .parse(process.argv)

const bikeVitoriaService = factory.create()

bikeVitoriaService.fetch().then((stations) => {
  const selectedStation = program.station
  const stationsFormatter = new StationsFormatter(stations)
  const output = stationsFormatter.print(selectedStation)
  console.log(output)
})
