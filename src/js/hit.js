export default class Hit {
  constructor (cordinates) {
    this.cordinates = cordinates
  }

  containCordinate (cordinate) {
    return this.cordinates.some(hitCordinate => hitCordinate.compare(cordinate))
  }
}
