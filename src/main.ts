import { canvas, canvasContext as ctx } from './browser/browserElements'
import { Bot } from './classes/bot'
import { Boundary } from './classes/boundary'
import {
  boundaries,
  gridSquares,
  randomSpotOnMap
} from './components/arena'
import {
  botMovement,
  circleCollideWithReactangle,
  getRandomSpeed
} from './utils/collitions'

/* ============= constants ============= */

const bots: Bot[] = []
const colors = ['blue', 'yellow', 'red', 'violet', 'green', 'lightBlue', 'gray']
let animationID: number

/* ============== Draw Bots ============== */

function generateBots (botsNum = 4): void {
  for (let i = 0; i < botsNum; i++) {
    const spot = randomSpotOnMap()

    const bot = new Bot({
      position: {
        x: Boundary.width * spot.x + (Boundary.width / 2),
        y: Boundary.height * spot.y + (Boundary.height / 2)
      },
      velocity: {
        x: getRandomSpeed().x,
        y: getRandomSpeed().y
      },
      color: colors[i]
    })

    bots.push(bot)
  }
}

/* ============== function Animate =============== */

function animate (): void {
  animationID = window.requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  gridSquares.forEach(square => { square.draw() })

  // place here the function to detect collision beteween bots


  bots.forEach((bot) => {
    // bot bounces off the boundaries

    // if bot collide with boundary, bot stop
    boundaries.forEach((boundary) => {
      // console.log(boundary.position)
      boundary.draw()

      if (
        circleCollideWithReactangle({
          circle: bot,
          rectangle: boundary
        })) {
        bot.velocity.y = 0
        bot.velocity.x = 0
      }
    })

    botMovement(bot, boundaries)
    bot.update()
  })
}

function cancelAnimation (): void {
  cancelAnimationFrame(animationID)
}

function animationLoop (): void {
  animate()
  cancelAnimation()
}

window.setInterval(() => { animationLoop() }, 300)

generateBots(3)
