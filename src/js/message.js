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
