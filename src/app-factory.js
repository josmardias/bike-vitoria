import SiteFetcher from './site-fetcher'
import StationDao from './station-dao'
import PrinterStdout from './printer-stdout'
import App from './app'

export const create = () => {
  const bikeVitoriaUrl = 'http://www.bikevitoria.com/mapaestacao.aspx'
  const siteFetcher = new SiteFetcher(bikeVitoriaUrl)
  const stationDao = new StationDao(siteFetcher)
  const printer = new PrinterStdout
  const app = new App(stationDao, printer)
  return app
}

export default {
  create,
}
