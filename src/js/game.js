import HitCordinate from './hit-cordinate'
import HitMap from './hit-map'
export const shipsSizes = [5, 4, 4]

export default class Game {
  constructor (board) {
    this.board = board
    this.hitMap = new HitMap()
    this.hint = false
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
    // TODO  check conditions
    return true
  }

  generateHitCordinate (cordinate) {
    let hitStatus = this.getHitStatus(cordinate)
    return new HitCordinate(cordinate, hitStatus)
  }

  getHitStatus (cordinate) {
    return this.board.hasShipOnCordinate(cordinate) ? 'HIT' : 'MISS'
  }

  askHint (ask) {
    this.hint = ask
  }

  isHintNeeded () {
    return this.hint
  }

  isGameOver (board, hitMap) {
    let hittedCounter = 0

    for (var hitCordinate of hitMap.hitCordinates) {
      if (hitCordinate.status === 'HIT') {
        hittedCounter++
      }
    }
    // TODO
    // return thmHits.filter(function (elem) {
    //   return boardHshipCordinates.indexOf(elem) > -1
    // }).length === boardHshipCordinates.length)
  }
}
