import Cordinate from './cordinate'

function visualStatus (hitStatus) {
  return hitStatus ? 'x' : 'o'
}

function makeTableHTML (game) {
  let boardSize = game.board.size
  var result = "<table width= '500'>"
  for (var i = 1; i <= boardSize; i++) {
    result += '<tr>'
    for (var j = 1; j <= boardSize; j++) {
      let hitStatus = game.hitMap.containCordinate(new Cordinate(i, j))

      result += '<td>' + visualStatus(hitStatus) + '</td>'
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
