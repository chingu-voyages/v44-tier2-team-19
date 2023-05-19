import { type Bot } from '../classes/bot'
import { Boundary } from '../classes/boundary'
import { type InterfaceAxis, type InterfaceColitionElements } from './interfaces'

const DIRECTIONS = {
  UP: 'North',
  DOWN: 'South',
  RIGHT: 'East',
  LEFT:  'West'
}

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

/*
  Mechanics of collision between a circle and a square,
  for more information I leave you some youtube videos:

  https://www.youtube.com/watch?v=_MyPLZSGS3s

  https://www.youtube.com/watch?v=XYzA_kPWyJ8&t=2s
*/
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
  const speedX = Boundary.width
  const speedY = Boundary.height

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

  if (collitionWall === DIRECTIONS.UP) {
    x = randomMultiply(speedX)
    y = speedY
  } else if (collitionWall === DIRECTIONS.DOWN) {
    x = randomMultiply(speedX)
    y = -speedY
  } else if (collitionWall === DIRECTIONS.RIGHT) {
    x = -speedX
    y = randomMultiply(speedY)
  } else if (collitionWall === DIRECTIONS.LEFT) {
    x = speedX
    y = randomMultiply(speedY)
  } else {
    // TODO: change the initial bot direcion
    // TODO: PUT SIZE OF THE BOUNDARY OR SQUARE_GRID
    const newSpeedX = 0
    const newSpeedY = Boundary.height
    return {
      x: newSpeedX,
      y: newSpeedY
    }
  }

  return { x, y }
}

/* ============== Movement of the Bot ============== */

function botMovement (bot: Bot, boundaries: Boundary[]): void {
  /*
    This is the part in which we give movement to the bot.

    As we have already assigned an initial velocity to the bot, we must wait for it to hit a wall.

    Remember that, when a bot hits the wall, we tell it to stop (that its velocity in the x and y-axis is 0).

    Once the bot has stopped, we must know 'which wall it has hit'.

    let's look at the first example, the rest are similar
  */

  // First example: bot touch right boundary

  // TODO: FINISH THIS EXAMPLE
  /*
    Notas para Eze:
      El bot en este momento esta parado (su velocidad en x e y es 0)
      entonces, debemos usar el sistema de colisiones para SIMULAR el choque.

      Para entender que significa 'simlar el choque' pensemos lo siguiente situacion:

      nuetro bot esta quieto (ha chocado contra una pared pero no sabemos cual)
      debemos entonces revisar todas las opciones, en nuestro juego tenemos 4 opciones
      1) el bot choco contra la pared derecha
      2) el bot choco contra la pared izquierda
      3) el bot choco contra la pared superior
      4) el bot choco contra la pared inferior

      cada caso tiene su particularidad, por ejemplo, veamos el primer y el segundo caso:

      1) el bot choco contra la pared derecha

      Si esto es verdad, si intento mover el bot hacia la derecha, la funcion de 'circleCollideWithReactangle' me puede devolver 2 opciones:
        - debe puede devolver true, entonces esto significa que estan chocando
        - me puede devolver false, esto sigifica que NO estan chocando

        ¿Pero, si el bot esta quieto, como sabemos que esta chocando?
        Aqui esta el 'porque' estamos SIMULANDO el choque, ejecutaremos la funcion 'circleCollideWithReactangle' pero con un detalle:

        NOSOTROS VAMOS A EDITAR MANUALMENTE LA VELOCIDAD DEL BOT

        ¿para que hacemos esto?
        Pues, si nuestro bot no se mueve, en realidad no esta chocando con nada, simplemente esta quieto.
        Al editar la velocidad manualmente, le damos un pequeño empujon para ver si, al intentar moverse en
        esa direccion, va a chocar contra la pared o no.

        Dependiendo del resultado, podemos saber si la pared contra la que choco es la pared derecha.

        Si la pared contra la que choca es la derecha, sabemos que el bot no puede continuar en esa direccion (en la direcion positiva del eje X),
        por lo cual, en el eje X debe moverse hacia el lado NEGATIVO.

      Para tener otro ejemplo, veamos el segundo caso:

      2) el bot choco contra la pared izquierda

        Haremos exactamente lo mismo que hicimos para la pared derecha, pero, la direccion en la cual se mueve el bot debe ser hacia la izquierda.
        Para mover el bot a la izquierda, necesitamos que se mueva hacia el lado NEGATIVO en el eje X.

        una vez modificada la velocidad, la forma de verificar si esta chocando o no es la misma.

  */
  boundaries.forEach(boundary => {
    if (circleCollideWithReactangle({
      circle: {
        ...bot,
        velocity: { x: 5, y: 0 } // segun el valor que modifiquemos, podemos estimar contra que pared va a chocar nuestro bot
      },
      rectangle: boundary
    })
    ) {
      const speeds = getRandomSpeed(DIRECTIONS.RIGHT)
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
      const speeds = getRandomSpeed(DIRECTIONS.LEFT)
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
      const speeds = getRandomSpeed(DIRECTIONS.UP)
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
      const speeds = getRandomSpeed(DIRECTIONS.DOWN)
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
