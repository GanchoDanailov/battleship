import Game from './game'
import BoardGenerator from './generator/board-generator'
import hitParser from './utils/hit-parser'
import renderGame from './generator/game-renderer'
import config from './config/config'

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
    game.isGameOver()
  } else {
    // Move is disallowed (already hit there)
  }
  if (document.getElementById('fire')) {
    document.getElementById('coordinate').value = ''
  }
}
