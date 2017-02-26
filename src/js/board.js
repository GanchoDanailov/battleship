
export default class Board {
  constructor (size, ships = []) {
    this.size = size
    this.ships = ships
  }

  addShip (ship) {
    this.ships.push(ship)
  }

  hasShipOnCordinate (cordinate) {
    return this.ships.some(ship => ship.containCordinate(cordinate))
  }

}
