import Cordinate from './cordinate'
import {
  textContainer,
  Message
} from './message'
import {alphabet} from './config/config'

function visualStatus (hitStatus) {
  switch (hitStatus) {
    case 'HIT':
      return 'X'
    case 'MISS':
      return '-'
    case 'SUNK':
      return 'X'
    default:
      return '.'
  }
  textContainer.textContent = new Message('').render()
}

function makeTableHTML (game) {
  let boardSize = game.board.size

  var result = "<table width= '500'>"
  for (var i = 0; i <= boardSize; i++) {
    result += '<tr>'
    for (var j = 0; j <= boardSize; j++) {
      if (i === 0) {
        result += '<th align="center">' + j + '</th>'
      } else if (j === 0) {
        result += '<td align="center">' + alphabet[i - 1] + '</td>'
      } else {
        if (game.isHintNeeded()) {
          let hasShip = game.board.hasShipOnCordinate(new Cordinate(j, i))
          let cordinateStatus = game.getCordinateStatus(new Cordinate(j, i))
          if (hasShip && visualStatus(cordinateStatus) !== 'X') {
            result += '<td align="center">' + '#' + '</td>'
          } else {
            result += '<td align="center"></td>'
          }
        } else {
          let cordinateStatus = game.getCordinateStatus(new Cordinate(j, i))

          result += '<td align="center">' + visualStatus(cordinateStatus) + '</td>'
        }
      }
    }
    result += '</tr>'
  }
  result += '</table>'

  return result
}

let renderGame = function (game) {
  var boardElement = document.getElementById('board')

  boardElement.innerHTML = makeTableHTML(game)
}

export default renderGame
