import PrinterStdout from './printer-stdout'

class PrinterInMemory extends PrinterStdout {
  constructor() {
    super()
    this.lastOutput = ''
  }

  print(text) {
    this.lastOutput = text
  }

}

export default PrinterInMemory
