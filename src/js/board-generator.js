import Board from './board'
import generateShip from './ship-generator'

export default class BoardGenerator {
  constructor (size, shipSizes) {
    this.size = size
    this.shipSizes = shipSizes
    this.board = this.generateEmptyBoard()
  }
  // BoardGenerator.generateBoard(10, [5, 4, 4])
  generateBoard (size, shipSizes) {
    console.log('shipSizes: ' + shipSizes)
    for (let shipSize of shipSizes) {
      let generatedShip = generateShip(size, shipSize)
      while (!this.allowedShip(generatedShip)) {
        generatedShip = generateShip(size, shipSize)
      }
      this.board.addShip(generatedShip)
    }

    return this.board
  }

  allowedShip (candidateShip) {
    let ships = this.board.ships
    return !candidateShip.cordinates.some((cordinate) => {
      return ships.some((ship) => ship.containCordinate(cordinate))
    })
  }

  generateEmptyBoard (size) {
    return new Board(size, [])
  }
}
