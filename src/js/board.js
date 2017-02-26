
export default class Board {
  constructor (size = 10, ships = []) {
    this.size = 10
    this.ships = ships
  }

  addShip (ship) {
    this.ships.push(ship)
  }

  hasShipOnCordinate (cordinate) {
    return this.ships.some(ship => ship.containCordinate(cordinate))
  }

}
