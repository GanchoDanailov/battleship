import Cordinate from '../cordinate'
import {
  textContainer,
  Message
} from './message'
import config, {
  alphabet
} from '../config/config'

let validateGuess = (guess) => {
  let re = /(^[a-zA-Z][1-9]0?$)|(show|SHOW)/
  return re.test(guess)
}

export default function parseGuess (guess) {
  guess = guess.toUpperCase()
  if (!validateGuess(guess)) {
    textContainer.textContent = new Message('Please enter valid guess').render()
    return false
  }
  if (guess === 'SHOW') {
    textContainer.textContent = new Message('*** HINT ***').render()
    return 'hint'
  } else {
    let firstChar = guess.charAt(0)
    let numb = guess.match(/\d/g)
    if (numb) {
      numb = Number(numb.join(''))
    }
    let y = alphabet.indexOf(firstChar) + 1
    let x = numb
    if (y < 1 || x < 1 || x > config.boardSize || y > config.boardSize) {
      textContainer.textContent = new Message('Please enter guess from board').render()
      return false
    } else {
      return new Cordinate(x, y)
    }
  }
}
