import Cordinate from './cordinate'

export default function parseGuess (guess) {
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  if (guess === null || guess.length > 3) {
    console.log('Please enter valid guess')
  } else {
    let firstChar = guess.charAt(0)
    let numb = guess.match(/\d/g)
    numb = Number(numb.join(''))
    let y = alphabet.indexOf(firstChar) + 1
    let x = numb
    if (y < 1 || x < 1 || x > 10 || y > 10) {
      console.log('Please enter guess from board')
    } else {
      return new Cordinate(x, y)
    }
  }
}
