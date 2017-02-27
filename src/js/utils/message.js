export class Message {
  constructor (message) {
    this.message = message
  }

  render () {
    return `${this.message}`
  }
}

export let textContainer = document.querySelector('.main')
export let form = document.querySelector('.form')
export let displayStatus = (status, movesCount) => {
  if (status === 'HIT') {
    textContainer.textContent = new Message('*** HIT ***').render()
  } else if (status === 'MISS') {
    textContainer.textContent = new Message('*** MISS ***').render()
  } else if (status === 'DUPLICATED') {
    textContainer.textContent = new Message('*** Already hit ***').render()
  } else if (status === 'ENDGAME') {
    form.textContent = new Message('*** Well done! You completed the game in ' +
    movesCount +
    ' shots ***').render()
  } else {
    textContainer.textContent = new Message('*** SUNK ***').render()
  }
}
