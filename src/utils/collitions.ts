import { type Bot } from '../classes/bot'
import { Boundary } from '../classes/boundary'
import { type InterfaceAxis, type InterfaceColitionElements } from './interfaces'

/*
  Note A-1

  Direction
    x --> value can be random, positive or negative
    y --> value can be random, positive or negative

    up
      x --> random
      y --> positive (if the bot is on top, it need to move down in the y-axis)
    down
      x --> random
      y --> negative (if the bot is on top, it need to move up in the y-axis)
    right
      x --> negative
      y --> random
    left
      x --> positive
      y --> random
*/

/* ============== Calculate collition with walls ============== */

function circleCollideWithReactangle ({
  circle,
  rectangle
}: InterfaceColitionElements): boolean {
  const padding = Boundary.width / 2 - circle.radius - 1

  const playerBorders = {
    top: circle.position.y - circle.radius + circle.velocity.y, // 1
    right: circle.position.x + circle.radius + circle.velocity.x, // 2
    bottom: circle.position.y + circle.radius + circle.velocity.y, // 3
    left: circle.position.x - circle.radius + circle.velocity.x // 4
  }

  const boundaryBorders = {
    bottom: rectangle.position.y + rectangle.height + padding, // 1
    left: rectangle.position.x - padding, // 2
    top: rectangle.position.y - padding, // 3
    right: rectangle.position.x + rectangle.width + padding // 4
  }

  return playerBorders.top <= boundaryBorders.bottom &&
  playerBorders.right >= boundaryBorders.left &&
  playerBorders.bottom >= boundaryBorders.top &&
  playerBorders.left <= boundaryBorders.right
}

/* ============== Generate Random speeds ============== */

function getRandomSpeed (collitionWall = ''): InterfaceAxis {
  const speedX = 40 // Boundary.width // Math.round(Math.random() * 5)
  const speedY = 40 // Boundary.height // Math.round(Math.random() * 5)
  let x: number = 0
  let y: number = 0

  function randomMultiply (num: number): number {
    const randomNum = Math.round(Math.random())
    if (randomNum === 1) {
      return num * 1
    } else {
      return num * -1
    }
  }

  // Note A-1

  if (collitionWall === 'up') {
    x = randomMultiply(speedX)
    y = speedY
  } else if (collitionWall === 'down') {
    x = randomMultiply(speedX)
    y = -speedY
  } else if (collitionWall === 'right') {
    x = -speedX
    y = randomMultiply(speedY)
  } else if (collitionWall === 'left') {
    x = speedX
    y = randomMultiply(speedY)
  } else {
    const newSpeedX = 0 // randomMultiply(speedX)
    const newSpeedY = Boundary.height // randomMultiply(speedY) // TODO: PUT SIZE OF THE BOUNDARY OR SQUARE_GRID
    // this prevent the condition where bot initial speed = 0,0
    // if (newSpeedX === 0 && newSpeedY === 0) {
    //   return {
    //     x: 1,
    //     y: 1
    //   }
    // }
    return {
      x: newSpeedX,
      y: newSpeedY
    }
  }

  return { x, y }
}

/* ============== Movement of the Bot ============== */

function botMovement (bot: Bot, boundaries: Boundary[]): void {
  // bot touch boundary
  boundaries.forEach(boundary => {
    if (circleCollideWithReactangle({
      circle: {
        ...bot,
        velocity: { x: 5, y: 0 }
      },
      rectangle: boundary
    })
    ) {
      const speeds = getRandomSpeed('right')
      bot.velocity.y = speeds.y
      bot.velocity.x = speeds.x
    }

    if (circleCollideWithReactangle({
      circle: {
        ...bot,
        velocity: { x: -5, y: 0 }
      },
      rectangle: boundary
    })
    ) {
      const speeds = getRandomSpeed('left')
      bot.velocity.y = speeds.y
      bot.velocity.x = speeds.x
    }

    if (circleCollideWithReactangle({
      circle: {
        ...bot,
        velocity: { x: 0, y: -5 }
      },
      rectangle: boundary
    })
    ) {
      const speeds = getRandomSpeed('up')
      bot.velocity.y = speeds.y
      bot.velocity.x = speeds.x
    }

    if (circleCollideWithReactangle({
      circle: {
        ...bot,
        velocity: { x: 0, y: 5 }
      },
      rectangle: boundary
    })
    ) {
      const speeds = getRandomSpeed('down')
      bot.velocity.y = speeds.y
      bot.velocity.x = speeds.x
    }
  })
}

export {
  circleCollideWithReactangle,
  getRandomSpeed,
  botMovement
}

/*
  En la 4ta iteacion vuelve al centro
  inicia: 0

  en 4 iteraciones
*/
