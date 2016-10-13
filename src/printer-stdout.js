class PrinterStdout {

  constructor(logger) {
    this.logger = logger
  }

  print(text) {
    this.logger.log(text)
  }
}

export default PrinterStdout
