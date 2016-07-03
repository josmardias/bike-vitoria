import SiteFetcher from './site-fetcher'

class SiteFetcherFake extends SiteFetcher {

  shouldReply(reply, milisseconds = 1) {
    this.reply = reply
    this.milisseconds = milisseconds
  }

  fetch() {
    return new Promise((resolve/* , reject */) => {
      setTimeout(() => {
        resolve(this.reply)
      }, this.milisseconds)
    })
  }
}

export default SiteFetcherFake
