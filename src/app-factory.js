import SiteFetcher from './site-fetcher'
import StationDao from './station-dao'
import PrinterStdout from './printer-stdout'
import LoadingSpinner from './loading-spinner'
import App from './app'

export const create = () => {
  const bikeVitoriaUrl = 'http://www.bikevitoria.com/mapaestacao.aspx'
  const writeStream = process.stdout // eslint-disable-line no-undef

  const siteFetcher = new SiteFetcher(bikeVitoriaUrl)
  const stationDao = new StationDao(siteFetcher)
  const printer = new PrinterStdout
  const spinner = new LoadingSpinner({
    stream: writeStream,
  })
  const app = new App(stationDao, printer, spinner)

  return app
}

export default {
  create,
}
