import OutputService from './output-service'

class OutputServiceFake extends OutputService {
  constructor() {
    super()
    this.lastOutput = ''
  }

  print(text) {
    this.lastOutput = text
  }

}

export default OutputServiceFake
