
export default class Ship {
  constructor (cordinates) {
    this.cordinates = cordinates
  }

  containCordinate (cordinate) {
    return this.cordinates.some(shipCordinate => shipCordinate.compare(cordinate))
  }
  
}
