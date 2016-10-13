import { expect } from 'chai'
import fs from 'fs'

import rawStationsParser from './raw-stations-parser'

const { describe, it } = global

const sampleSiteHtml = fs.readFileSync('./src/__test__/sample_mapaestacao.aspx.txt', 'utf8')

describe('rawStationsParser', () => {
  describe('#parse', () => {
    it('should return the raw stations array from html', () => {
      const rawStations = rawStationsParser.parse(sampleSiteHtml)

      expect(rawStations).to.be.deep.equal([
        ['Escola da Vida - São Pedro', -20.283892, -40.332824,
          'Rodovia Serafim Derenzi, 4555, próximo a Escola da Vida / Esquina ' +
            'Rua Quatro de Janeiro',
          '', 'A', 'EO', '10', '10', '2', 'Est_Normal 1', 'img/estacaook.png', 1,
        ],
        ['Grande Vitória', -20.293644, -40.343526,
          'Rodovia Serafim Derenzi, 2400 (Igreja de Jesus Cristo) / Esquina ' +
            'Rua Sargento José Homero Dias (Rua Capitão Fabiano)',
          '', 'A', 'EO', '4', '4', '8', 'Est_Normal 1', 'img/estacaook.png', 2,
        ],
        ['Inhanguetá', -20.298717, -40.346238,
          'Rua Aires Vieira do Nascimento, em frente ao Campo de futebol de ' +
            'areia / Esquina com a Rodovia Serafim Derenzi,1641',
          '', 'A', 'EO', '3', '3', '9', 'Est_Normal 1', 'img/estacaook.png', 3,
        ],
        ['Santo Antônio - Prainha', -20.311602, -40.356076,
          'Avenida Santo Antônio, na Praça da Bandeira / Entre a Rua Alvimar ' +
            'Silva e a Rua Dom João Neri',
          '', 'A', 'EO', '7', '7', '7', 'Est_Normal 1', 'img/estacaook.png', 4,
        ],
        ['Tancredão', -20.320093, -40.353174,
          'Avenida Dário Lourenço de Souza, em frente ao Centro Esportivo ' +
            'Tancredo de Almeida Neves / Esquina Rua Rosilda Falcão dos Anjos (acesso a 2ª Ponte)',
          '', 'A', 'EO', '2', '2', '10', 'Est_Normal 1', 'img/estacaook.png', 5,
        ],
        ['Parque Moscoso', -20.319918, -40.342789,
          'Rua Vinte e Três de Maio, lateral do Parque Moscoso / Esquina ' +
            'Avenida Cleto Nunes',
          '', 'A', 'EO', '1', '1', '11', 'Est_Normal 1', 'img/estacaook.png', 6,
        ],
        ['Cais do Porto', -20.321893, -40.335989,
          'Avenida Marechal Mascarenhas de Moraes, em frente ao Antigo Cais das ' +
            'Barcas, oposto a Praça Francisco Teixeira da Cruz / Esquina Avenida Princesa Isabel',
          '', 'A', 'EO', '2', '2', '10', 'Est_Normal 1', 'img/estacaook.png', 7,
        ],
        ['Praca Getúlio Vargas', -20.320852, -40.330489,
          'R. Dr. Aristídes Campos, 56 -', 'Av. Mal. Mascarenhas de Moraes', 'A',
          'EO', '1', '1', '11', 'Est_Normal 1', 'img/estacaook.png', 8,
        ],
        ['SOE Beira Mar', -20.318521, -40.321594,
          'Avenida Mascarenhas de Moraes, oposto a Faculdade Católica ' +
            'Salesiana, próximo ao módulo SOE Beira Mar / Esquina Rua Desembargador José Vicente',
          '', 'A', 'EO', '1', '1', '11', 'Est_Normal 1', 'img/estacaook.png', 9,
        ],
        ['Prefeitura Municipal de Vitória', -20.317976, -40.309655,
          'Avenida Jouberto de Barros, lateral da Prefeitura Municipal de ' +
            'Vitória / Esquina Avenida Marechal Mascarenhas de Moraes',
          '', 'A', 'EO', '8', '8', '4', 'Est_Normal 1', 'img/estacaook.png', 10,
        ],
        ['Praça do Papa', -20.316604, -40.298205,
          'Rua Belmiro Rodrigues da Silva, no acesso ao estacionamento da ' +
            'Praça do Papa / Próximo a Marinha do Brasil e ao Horto Mercado',
          '', 'A', 'EO', '3', '3', '9', 'Est_Normal 1', 'img/estacaook.png', 11,
        ],
        ['Praça dos Desejos', -20.303819, -40.291623,
          'Avenida Saturnino de Brito, na Praça dos Desejos, próximo a baia ' +
            'de estacionamento / Esquina Avenida Desembargador Alfredo Cabral',
          '', 'A', 'EO', '0', '0', '12', 'Est_Vazia -1', 'img/estacaocheia.png', 12,
        ],
        ['Praça dos Namorados', -20.301136, -40.291422,
          'Avenida Saturnino de Brito, na Praça dos Namorados, próximo a baia ' +
            'de estacionamento / Esquina Rua Moacir Avidos',
          '', 'A', 'EO', '2', '2', '10', 'Est_Normal 1', 'img/estacaook.png', 13,
        ],
        ['UNIMED - Ponte de Camburi', -20.292566, -40.289228,
          'Avenida Dante Michelini, junto ao acesso a Estátua de Iemanjá ' +
            '(acesso a ponte), próximo ao Edifício UNIMED / Esquina Avenida ' +
            'Saturnino Rangel de Mauro',
          '', 'A', 'EO', '3', '3', '9', 'Est_Normal 1', 'img/estacaook.png', 14,
        ],
        ['Campus UFES', -20.27948, -40.301016,
          'Rua Darcy Grijó, em frente ao Auto Posto Presidente (BR) / Esquina ' +
            'Avenida Anísio Fernandes Coelho',
          '', 'A', 'EO', '1', '1', '11', 'Est_Normal 1', 'img/estacaook.png', 15,
        ],
        ['SOE Camburi', -20.2873, -40.29077,
          'Avenida Dante Michelini, próximo ao módulo SOE Camburi / Esquina ' +
            'Rua Eugenílio Ramos',
          '', 'A', 'EO', '6', '6', '6', 'Est_Normal 1', 'img/estacaook.png', 16,
        ],
        ['SICOOB - Praia de Camburi', -20.282991, -40.289351,
          'Avenida Dante Michelini, oposto ao edifício do SICOOB / Esquina ' +
            'Rua Comissário Otávio de Queirós',
          '', 'A', 'EO', '12', '12', '0', 'Est_Cheia 0', 'img/estacaovazia.png', 17,
        ],
        ['Baia de Skate - Praia de Camburi', -20.272822, -40.278998,
          'Avenida Dante Michelini, próximo a baia de skate / Esquina Avenida ' +
            'Adalberto Simão Nader',
          '', 'A', 'EO', '3', '3', '9', 'Est_Normal 1', 'img/estacaook.png', 18,
        ],
        ['SOE Jardim Camburi', -20.266777, -40.269178,
          'Avenida Dante Michelini, 4355 (Bristol Diamond Suites), próximo ' +
            'ao módulo SOE Jardim Camburi / Esquina Rua Carlos Martins',
          '', 'A', 'EO', '6', '6', '6', 'Est_Normal 1', 'img/estacaook.png', 19,
        ],
        ['Parque Zé da Bola', -20.264926, -40.263272,
          'Avenida Dante Michelini, no acesso ao viaduto / Esquina Rua José Celso Cláudio',
          '', 'A', 'EO', '9', '9', '3', 'Est_Normal 1', 'img/estacaook.png', 20,
        ],
      ])
    })
  })
})
