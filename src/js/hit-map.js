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

  containCordinate (cordinate) {
    return this.hitCordinates.some((hitCordinate) => {
      return hitCordinate.cordinate.compare(cordinate)
    })
  }
}
