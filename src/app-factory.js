import SiteFetcher from './site-fetcher'
import StationDao from './station-dao'
import OutputService from './output-service'
import App from './app'

export const create = () => {
  const bikeVitoriaUrl = 'http://www.bikevitoria.com/mapaestacao.aspx'
  const siteFetcher = new SiteFetcher(bikeVitoriaUrl)
  const stationDao = new StationDao(siteFetcher)
  const outputService = new OutputService
  const app = new App(stationDao, outputService)
  return app
}

export default {
  create,
}
