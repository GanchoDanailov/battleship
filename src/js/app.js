import Game from './game'
import BoardGenerator from './board-generator'
import hitParser from './hit-parser'
import renderGame from './game-renderer'

let board = new BoardGenerator(10, [5, 4, 4]).generateBoard()
let game = new Game(board)

renderGame(game)

document.getElementById('fire').onclick = function () {
  var inputCoordinate = hitParser(document.getElementById('coordinate').value)

  if (inputCoordinate === 'hint') {
    game.askHint(true)
    renderGame(game)
  } else if (inputCoordinate && game.makeMove(inputCoordinate)) {
    game.askHint(false)
    renderGame(game)
    game.isGameOver(game.board, game.hitMap)
  } else {
    // Move is disallowed (already hit there)
  }
}
