import { expect } from 'chai'
import { PassThrough as PassThroughStream } from 'stream'
import getStream from 'get-stream'

import LoadingSpinner from './loading-spinner'

const { describe, it } = global

const getPassThroughStream = () => {
  const noop = () => {}
  const stream = new PassThroughStream()
  stream.isTTY = true
  stream.clearLine = noop
  stream.cursorTo = noop

  return stream
}

describe('LoadingSpinner', () => {
  describe('#show / #hide', () => {
    it('should print a loading spinner', () => {
      const stream = getPassThroughStream()
      const spinner = new LoadingSpinner({
        stream,
        color: false,
      })

      spinner.show()
      spinner.hide()
      stream.end()

      return getStream(stream).then(output =>
        expect(output).to.be.equal('⠋ Loading...')
      )
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
