export const boardSize = 3

export default class Board {
  constructor (size = 10, ships = []) {
    this.size = 10
    this.ships = ships
  }

  addShip (ship) {
    this.ships.push(ship)
  }
}
