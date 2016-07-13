const { describe, it } = global
import { expect } from 'chai'
import { Writable as WritableStream } from 'stream'

import LoadingSpinner from './loading-spinner'

describe('LoadingSpinner', () => {
  describe('#show / #hide', () => {
    it('should print a loading spinner', () => {
      const noop = () => {}
      let streamToString = ''
      const stream = new WritableStream({
        write(chunk, encoding, callback) {
          streamToString += chunk.toString()
          callback()
        },
      })
      stream.isTTY = true
      stream.clearLine = noop
      stream.cursorTo = noop

      const spinner = new LoadingSpinner({
        stream,
        color: false,
      })

      spinner.show()
      spinner.hide()

      return expect(streamToString).to.be.equal('⠋ Loading...')
    })
  })

  describe('#show', () => {
    it('should return the spinner instance for chaining call', () => {
      const spinner = new LoadingSpinner()
      const showReturn = spinner.show()

      return expect(showReturn).to.be.equal(spinner)
    })
  })

  describe('#hide', () => {
    it('should return the spinner instance for chaining call', () => {
      const spinner = new LoadingSpinner()
      const hideReturn = spinner.hide()

      return expect(hideReturn).to.be.equal(spinner)
    })
  })
})
