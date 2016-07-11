import Ora from 'ora'

class LoadingSpinner {
  constructor(options = {}) {
    const {
      stream,
      color = 'cyan',
    } = options

    this.ora = new Ora({
      text: 'Loading...',
      stream,
      color,
    })
  }

  show() {
    const ora = this.ora
    ora.start()
    return this
  }

  hide() {
    const ora = this.ora
    ora.stop()
    return this
  }
}

export default LoadingSpinner
