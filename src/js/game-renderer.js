import Cordinate from './cordinate'
import {
  textContainer,
  Message
} from './message'

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

function visualStatus (isHit, hitStatus) {
  if (isHit) {
    switch (hitStatus) {
      case 'HIT':
        textContainer.textContent = new Message('*** Hit ***').render()
        return 'X'
      case 'MISS':
        textContainer.textContent = new Message('*** Miss ***').render()
        return '-'
      default:
        return
    }
  } else {
    return ' . '
  }
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
          if (hasShip) {
            result += '<td align="center">' + '#' + '</td>'
          } else {
            result += '<td align="center"></td>'
          }
        } else {
          let isHit = game.hitMap.containCordinate(new Cordinate(j, i))
          let hitStatus = game.getHitStatus(new Cordinate(j, i))
          result += '<td align="center">' + visualStatus(isHit, hitStatus) + '</td>'
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
