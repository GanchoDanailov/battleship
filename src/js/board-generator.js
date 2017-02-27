import Board from './board'
import generateShip from './ship-generator'
import config from './config/config'

export default class BoardGenerator {
  constructor (size, shipSizes) {
    this.size = size
    this.shipSizes = shipSizes
    this.board = this.generateEmptyBoard()
  }

  generateBoard () {
    this.shipSizes.forEach((shipSize) => {
      let generatedShip = generateShip(this.size, shipSize)

      while (!this.allowedShip(generatedShip)) {
        generatedShip = generateShip(this.size, shipSize)
      }

      this.board.addShip(generatedShip)
    })

    return this.board
  }

  allowedShip (candidateShip) {
    let ships = this.board.ships
    return !candidateShip.cordinates.some((cordinate) => {
      return ships.some((ship) => ship.containCordinate(cordinate))
    })
  }

  generateEmptyBoard (size) {
    return new Board(config.boardSize, [])
  }
}
