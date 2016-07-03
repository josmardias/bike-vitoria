const { describe, it } = global
import { expect } from 'chai'
import nock from 'nock'

import SiteFetcher from './site-fetcher'

describe('SiteFetcher', () => {
  describe('#fetch', () => {
    it('description', () => {
      const siteFetcher = new SiteFetcher('http://test.com')
      const reply = '<html><body><div>example</div></body></html'

      nock('http://test.com')
       .get('/')
       .reply(200, reply)

      const htmlPromise = siteFetcher.fetch()

      return expect(htmlPromise).to.eventually.equal(reply)
    })
  })
})
