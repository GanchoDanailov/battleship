import Hit from './hit'
import hitParser from './hit-parser'
import Cordinate from './cordinate'

let hits = []

let allowedHit = (candidateHit) => {
  hits.push(candidateHit)
  return !hits.some((hit) => {hit.compare(candidateHit) })
}

let extractHitValue = () => {
  document.getElementById('fire').onclick = function () {
    var inputCoordinate = hitParser(document.getElementById('coordinate').value)
    if (allowedHit(new Cordinate(inputCoordinate.x, inputCoordinate.y))) {
      hits.push(inputCoordinate)
    }
  }
}

export default extractHitValue
