import HitCordinate from './hit-cordinate'
import HitMap from './hit-map'
import {
  textContainer,
  form,
  Message
} from './message'

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
      textContainer.textContent = new Message('*** SUNK ***').render()
      return 'SUNK'
    }
    let status = this.board.hasShipOnCordinate(cordinate) ? 'HIT' : 'MISS'

    if (status === 'HIT') {
      textContainer.textContent = new Message('*** Hit ***').render()
    } else {
      textContainer.textContent = new Message('*** MISS ***').render()
    }

    return this.board.hasShipOnCordinate(cordinate) ? 'HIT' : 'MISS'
  }

  getHitCount () {
    return this.hitMap.hitCordinates.length
  }

  askHint (ask) {
    this.hint = ask
  }

  isHintNeeded () {
    return this.hint
  }

  isGameOver () {
    if (this.nonSinkedShips().length <= 0) {
      this.endGame()
      return true
    }
  }

  endGame () {
    let movesCount = this.getHitCount()
    form.textContent = new Message('*** Well done! You completed the game in ' + movesCount + ' shots ***').render()
  }
}
