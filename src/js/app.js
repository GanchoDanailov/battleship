import Game from './game'
import BoardGenerator from './board-generator'
import hitParser from './hit-parser'
import renderGame from './game-renderer'

let board = new BoardGenerator(10, [5, 4, 4]).generateBoard()
console.log(board)
let game = new Game(board)

renderGame(game)

document.getElementById('fire').onclick = function () {
  var inputCoordinate = hitParser(document.getElementById('coordinate').value)

  if (game.makeMove(inputCoordinate)) {
    console.log(game.hitMap)
    console.log(game.hitMap.containCordinate(inputCoordinate))

    renderGame(game)
  } else {
    // Move is disallowed (already hit there)
  }
}
