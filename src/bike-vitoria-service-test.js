const { describe, it } = global
import { expect } from 'chai'

import BikeVitoriaService from './bike-vitoria-service'
import SiteFetcherFake from './site-fetcher-fake'

describe('BikeVitoriaService', () => {
  describe('#fetch', () => {
    it('should return stations', () => {
      const siteFetcherFake = new SiteFetcherFake()
      siteFetcherFake.shouldReply(`
        <html>
          <header>
            <script>
            //<![CDATA[
            var beaches = [
              ['Praça do Papa', -20.316604, -40.298205,
                'Rua Belmiro Rodrigues da Silva, no acesso ao estacionamento da \
                Praça do Papa / Próximo a Marinha do Brasil e ao Horto Mercado',
                '', 'A', 'EO', '3', '3', '9', 'Est_Normal 1', 'img/estacaook.png', 11
              ],
              ['SICOOB - Praia de Camburi', -20.282991, -40.289351,
                'Avenida Dante Michelini, oposto ao edifício do SICOOB / Esquina \
                Rua Comissário Otávio de Queirós',
                '', 'A', 'EO', '12', '12', '0', 'Est_Cheia 0', 'img/estacaovazia.png', 17
              ]
            ];//]]>
            </script>
          </header>
          <body>
          </body>
        </html>
      `)
      const service = new BikeVitoriaService(siteFetcherFake)

      const stations = service.fetch()

      return expect(stations).to.eventually.deep.equal([
        {
          id: 11,
          name: 'Praça do Papa',
          bikes: '3',
          free: '9',
        },
        {
          id: 17,
          name: 'SICOOB - Praia de Camburi',
          bikes: '12',
          free: '0',
        },
      ])
    })
  })
})
