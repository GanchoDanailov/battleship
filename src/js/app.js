import Game from './game'
import BoardGenerator from './board-generator'
import hitParser from './hit-parser'
import renderGame from './game-renderer'
import config from './config'
console.log(config.boardSize)
let board = new BoardGenerator(config.boardSize, [
  config.battleshipLength,
  config.destroyerLength,
  config.destroyerLength
]).generateBoard()

let game = new Game(board)

renderGame(game)

document.getElementById('fire').onclick = function () {
  var inputValue = document.getElementById('coordinate').value
  var inputCoordinate = hitParser(inputValue)

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
  document.getElementById('coordinate').value = ''
  document.getElementById('coordinate').focus()
}
