import StationDao from './station-dao'

class StationDaoFake extends StationDao {
  constructor() {
    super()
    this.fakeData = []
  }

  fetch() {
    return new Promise(resolve => resolve(this.fakeData))
  }

  loadFakeData(stations) {
    this.fakeData = stations
  }
}

export default StationDaoFake
