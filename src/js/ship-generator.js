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
  console.log('shipStart x: ' + shipStart.x)
  console.log('shipSize ' + shipSize)
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

// (5, 3)
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
  let movementOrientation = shipOrientation === 'UP' || 'RIGHT' ? 'x' : 'y'
  let movementSpeed = shipOrientation === 'DOWN' || 'LEFT' ? 1 : -1

  let shipCordinates = []
  let currentX = shipStart.x
  let currentY = shipStart.y
  //set start coordinates
  shipCordinates.push(new Cordinate(currentX, currentY))

  // reduce -1 (already pused the start coordinates)
  for (let i = 0; i < shipSize - 1; i++) {
    if (movementOrientation === 'x') {
      currentX = currentX + movementSpeed
    } else {
      currentY = currentY + movementSpeed
    }
    console.log('current X Y: '+ currentX +' ' + currentY)
    shipCordinates.push(new Cordinate(currentX, currentY))
  }
  return shipCordinates
}

export default function generateShip (boardSize, shipSize) {
  let shipStart = randomShipStart(boardSize)
  let shipOrientation = randomAllowedShipOrientation(boardSize,
                                                     shipStart,
                                                     shipSize)

  console.log('shipOrientation: ' + shipOrientation)
  let tmpShip = new Ship(shipCordinates(shipStart, shipOrientation, shipSize))
  return tmpShip
}
