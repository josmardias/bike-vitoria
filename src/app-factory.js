import SiteFetcher from './site-fetcher'
import BikeVitoriaService from './bike-vitoria-service'
import OutputService from './output-service'
import App from './app'

export const create = () => {
  const bikeVitoriaUrl = 'http://www.bikevitoria.com/mapaestacao.aspx'
  const siteFetcher = new SiteFetcher(bikeVitoriaUrl)
  const bikeVitoriaService = new BikeVitoriaService(siteFetcher)
  const outputService = new OutputService
  const app = new App(bikeVitoriaService, outputService)
  return app
}

export default {
  create,
}
