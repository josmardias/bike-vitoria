'use strict'

require('mocha-clean')
const chai = require('chai')

global.expect = chai.expect
// chai.use(require('chai-string'))
chai.use(require('chai-as-promised'))

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:')
  console.error(error && error.stack || error)
});
