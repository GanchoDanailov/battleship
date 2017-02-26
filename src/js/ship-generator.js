import Ship from './ship'
import Cordinate from './cordinate'

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomShipStart (boardSize) {
  let x = getRandomIntInclusive(1, boardSize)
  let y = getRandomIntInclusive(1, boardSize)

  return new Cordinate(x, y)
}

const Orientations = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

function allowedShipOrientations (boardSize, shipStart, shipSize) {
  let allowedOrientations = []
  if (shipStart.x + shipSize <= boardSize) {
    allowedOrientations.push(Orientations.RIGHT)
  }

  if (shipStart.x - shipSize >= 1) {
    allowedOrientations.push(Orientations.LEFT)
  }

  if (shipStart.y + shipSize <= boardSize) {
    allowedOrientations.push(Orientations.DOWN)
  }

  if (shipStart.y - shipSize >= 1) {
    allowedOrientations.push(Orientations.UP)
  }

  return allowedOrientations
}

function randomAllowedShipOrientation (boardSize, shipStart, shipSize) {
  let allAllowedOrientations = allowedShipOrientations(boardSize,
                                                       shipStart,
                                                       shipSize)

  let randomOrientationIndex =
    Math.floor(Math.random() * allAllowedOrientations.length)

  return allAllowedOrientations[randomOrientationIndex]
}

function shipCordinates
 (shipStart, shipOrientation, shipSize) {
  let shipCordinates = []
  let currentX = shipStart.x
  let currentY = shipStart.y
  // set start coordinates
  shipCordinates.push(new Cordinate(currentX, currentY))

  switch (shipOrientation) {
    case 'LEFT': {
      for (let i = 0; i < shipSize - 1; i++) {
        currentX = currentX - 1
        shipCordinates.push(new Cordinate(currentX, currentY))
      }
      break
    }
    case 'RIGHT': {
      for (let i = 0; i < shipSize - 1; i++) {
        currentX = currentX + 1
        shipCordinates.push(new Cordinate(currentX, currentY))
      }
      break
    }
    case 'UP': {
      for (let i = 0; i < shipSize - 1; i++) {
        currentY = currentY - 1
        shipCordinates.push(new Cordinate(currentX, currentY))
      }
      break
    }
    case 'DOWN': {
      for (let i = 0; i < shipSize - 1; i++) {
        currentY = currentY + 1
        shipCordinates.push(new Cordinate(currentX, currentY))
      }
      break
    }
    default: {
      break
    }
  }

  return shipCordinates
}

export default function generateShip (boardSize, shipSize) {
  let shipStart = randomShipStart(boardSize)
  let shipOrientation = randomAllowedShipOrientation(boardSize,
                                                     shipStart,
                                                     shipSize)

  let tmpShip = new Ship(shipCordinates(shipStart, shipOrientation, shipSize))
  return tmpShip
}
