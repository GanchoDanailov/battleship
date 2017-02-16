export default class Cordinate {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  compare (other) {
    return this.x === other.x && this.y === other.y
  }
}
