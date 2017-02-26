import HitCordinate from './hit-cordinate'
import HitMap from './hit-map'
//export const shipsSizes = [5, 4, 4]

export default class Game {
  constructor (board) {
    this.board = board
    this.hitMap = new HitMap()
    this.hint = false
  }

  makeMove (cordinate) {
    if (!this.allowedHit(cordinate)) {
      return false
    }

    return this.generateHitCordinate(cordinate)
  }

  getCordinateStatus (cordinate) {
    return this.hitMap.hitStatusOnCordinate(cordinate)
  }

  nonSinkedShips () {
    return this.board.ships.filter(ship => {
      return !this.shipIsSinked(ship)
    })
  }

  shipIsSinked (ship) {
    return ship.cordinates.every(cordinate => {
      return this.hitMap.containCordinate(cordinate)
    })
  }

  allowedHit (cordinate) {
    return !this.hitMap.containCordinate(cordinate)
  }

  generateHitCordinate (cordinate) {
    const nonSinkedShipsCountBefore = this.nonSinkedShips().length

    let hitCordinate = new HitCordinate(cordinate)
    this.hitMap.addHitCordinate(hitCordinate)

    let hitStatus = this.getHitStatus(cordinate, nonSinkedShipsCountBefore)
    hitCordinate.status = hitStatus

    return hitCordinate
  }

  getHitStatus (cordinate, nonSinkedShipsCountBefore) {
    const nonSinkedShipsCount = this.nonSinkedShips().length

    if (nonSinkedShipsCountBefore > nonSinkedShipsCount) {
      return 'SUNK'
    }

    return this.board.hasShipOnCordinate(cordinate) ? 'HIT' : 'MISS'
  }

  getHitCount () {
    return this.hitMap.hitCordinates.count()
  }

  askHint (ask) {
    this.hint = ask
  }

  isHintNeeded () {
    return this.hint
  }

  isGameOver (board, hitMap) {
    return false
  }
}
