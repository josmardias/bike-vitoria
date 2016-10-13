import { expect } from 'chai'

import stationsBuilder from './stations-builder'

const { describe, it } = global

describe('stationsBuilder', () => {
  const rawStations = [
    [
      'Praça do Papa', -20.316604, -40.298205,
      'Rua Belmiro Rodrigues da Silva, no acesso ao estacionamento da \
        Praça do Papa / Próximo a Marinha do Brasil e ao Horto Mercado',
      '', 'A', 'EO', '3', '3', '9', 'Est_Normal 1', 'img/estacaook.png', 11,
    ],
    [
      'Praça dos Desejos', -20.303819, -40.291623,
      'Avenida Saturnino de Brito, na Praça dos Desejos, próximo a baia \
        de estacionamento / Esquina Avenida Desembargador Alfredo Cabral',
      '', 'A', 'EO', '0', '0', '12', 'Est_Vazia -1', 'img/estacaocheia.png', 12,
    ],
    [
      'SICOOB - Praia de Camburi', -20.282991, -40.289351,
      'Avenida Dante Michelini, oposto ao edifício do SICOOB / Esquina Rua \
        Comissário Otávio de Queirós',
      '', 'A',
      'EO', '12', '12', '0', 'Est_Cheia 0', 'img/estacaovazia.png', 17,
    ],
  ]

  describe('#build', () => {
    it('should build stations object', () => {
      const stations = stationsBuilder.build(rawStations)
      return expect(stations).to.be.deep.equal([
        {
          id: 11,
          name: 'Praça do Papa',
          bikes: '3',
          free: '9',
        },
        {
          id: 12,
          name: 'Praça dos Desejos',
          bikes: '0',
          free: '12',
        },
        {
          id: 17,
          name: 'SICOOB - Praia de Camburi',
          bikes: '12',
          free: '0',
        },
      ])
    })

    it('should build empty stations object for empty raw list', () => {
      const stations = stationsBuilder.build([])

      return expect(stations).to.be.deep.equal([])
    })
  })
})
