import SiteFetcher from './site-fetcher'
import BikeVitoriaService from './bike-vitoria-service'

export const create = () => {
  const bikeVitoriaUrl = 'http://www.bikevitoria.com/mapaestacao.aspx'
  const siteFetcher = new SiteFetcher(bikeVitoriaUrl)
  const bikeVitoriaService = new BikeVitoriaService(siteFetcher)
  return bikeVitoriaService
}

export default {
  create,
}
