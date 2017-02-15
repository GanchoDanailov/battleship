import BoardGenerator from './board-generator'

// let container = document.querySelector('.main')
// container.textContent = new Message('mate').render()

let generatedBoard = new BoardGenerator()
console.log(generatedBoard.generateBoard(10, [5, 4, 4]))
