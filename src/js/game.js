import HitCordinate from './hit-cordinate'
import HitMap from './hit-map'

export const shipsSizes = [5, 4, 4]

export default class Game {
  constructor (board) {
    this.board = board
    this.hitMap = new HitMap()
  }

  makeMove (cordinate) {
    if (this.allowedHit()) {
      let hitCordinate = this.generateHitCordinate(cordinate)

      this.hitMap.addHitCordinate(hitCordinate)

      return hitCordinate
    } else {
      return false
    }
  }

  allowedHit () {
    return true
  }

  generateHitCordinate (cordinate) {
    let hitStatus = this.getHitStatus(cordinate)

    return new HitCordinate(cordinate, hitStatus)
  }

  getHitStatus (cordinate) {
    return this.board.hasShipOnCordinate(cordinate) ? 'HIT' : 'MISS'
  }
}
