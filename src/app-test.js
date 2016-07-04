const { beforeEach, describe, it } = global
import { expect } from 'chai'
import chalk from 'chalk'

import OutputServiceFake from './output-service-fake'
import SiteFecherFake from './site-fetcher-fake'
import BikeVitoriaService from './bike-vitoria-service'
import App from './app'

describe('App', () => {
  let siteFetcherFake
  let outputServiceFake
  let bikeVitoriaService

  beforeEach(() => {
    outputServiceFake = new OutputServiceFake
    siteFetcherFake = new SiteFecherFake
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
            ['Praça dos Desejos', -20.303819, -40.291623,
              'Avenida Saturnino de Brito, na Praça dos Desejos, próximo a baia ' +
                'de estacionamento / Esquina Avenida Desembargador Alfredo Cabral',
              '', 'A', 'EO', '0', '0', '12', 'Est_Vazia -1', 'img/estacaocheia.png', 12,
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
    bikeVitoriaService = new BikeVitoriaService(siteFetcherFake)
  })

  describe('#getStationsInfo', () => {
    it('should print stations info to the output', () => {
      const app = new App(bikeVitoriaService, outputServiceFake)

      return app.printStations().then(() =>
        expect(outputServiceFake.lastOutput).to.be.deep.equal(
          'Stations:\n' + // eslint-disable-line prefer-template
          '\t11: Praça do Papa\n' +
          '\t\t(3 bikes, 9 free slots)\n' +
          '\t12: Praça dos Desejos\n' +
          chalk.red('\t\t(0 bikes, 12 free slots)\n') +
          '\t17: SICOOB - Praia de Camburi\n' +
          chalk.grey('\t\t(12 bikes, 0 free slots)\n')
        ))
    })

    it('should print a single station info to the output', () => {
      const app = new App(bikeVitoriaService, outputServiceFake)

      return app.printStations(17).then(() =>
        expect(outputServiceFake.lastOutput).to.be.deep.equal(
          'Stations:\n' + // eslint-disable-line prefer-template
          '\t17: SICOOB - Praia de Camburi\n' +
          chalk.grey('\t\t(12 bikes, 0 free slots)\n')
        ))
    })
  })
})
