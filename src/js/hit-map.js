const CordinateStatuses = {
  HIT: 'HIT',
  MISS: 'MISS'
}
export default class HitMap {
  constructor () {
    this.hitCordinates = []
  }

  addHitCordinate (hitCordinate) {
    this.hitCordinates.push(hitCordinate)
  }

  hitStatusOnCordinate (cordinate) {
    let hitCordinate = this.hitCordinates.find(hitCordinate => {
      return hitCordinate.cordinate.compare(cordinate)
    })

    if (hitCordinate) {
      return hitCordinate.status
    }
  }

  containCordinate (cordinate) {
    return this.hitCordinates.some((hitCordinate) => {
      return hitCordinate.cordinate.compare(cordinate)
    })
  }
}
