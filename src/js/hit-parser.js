import Cordinate from './cordinate'
import {
  textContainer,
  Message
} from './message'

export default function parseGuess (guess) {
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  guess = guess.toUpperCase()

  if (guess === 'SHOW') {
    textContainer.textContent = new Message('*** HINT ***').render()
    return 'hint'
  } else if (guess === null || guess.length > 3 || guess.length === 0) {
    textContainer.textContent = new Message('Please enter valid guess').render()
    return false
  } else {
    let firstChar = guess.charAt(0)
    let numb = guess.match(/\d/g)
    numb = Number(numb.join(''))
    let y = alphabet.indexOf(firstChar) + 1
    let x = numb
    if (y < 1 || x < 1 || x > 10 || y > 10) {
      textContainer.textContent = new Message('Please enter guess from board').render()
      return false
    } else {
      return new Cordinate(x, y)
    }
  }
}
