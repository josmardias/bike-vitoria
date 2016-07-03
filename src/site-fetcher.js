import request from 'request-promise'

class SiteFetcher {
  constructor(url) {
    this.url = url
  }

  fetch() {
    return request(this.url)
  }
}

export default SiteFetcher
