import { canvas, canvasContext as ctx } from './browser/browserElements'
import { Bot } from './classes/bot'
import { Boundary } from './classes/boundary'
import { boundaries, gridSquares } from './components/arena'
import { 
  botMovement, 
  circleCollideWithReactangle, 
  getRandomSpeed 
} from './utils/collitions'

/* ============= constants ============= */

const bots: Bot[] = []
const colors = ['blue', 'yellow', 'red', 'violet', 'green', 'lightBlue', 'gray']

/* ============== Draw Bots ============== */

function generateBots(botsNum = 4): void {
  for (let i = 0; i < botsNum; i++) {
    const bot = new Bot({
      position: {
        x: Boundary.width * 3 + (Boundary.width / 2),
        y: Boundary.height * 6 + (Boundary.height / 2)
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

/* ================== function Animate =================== */

function animate (): void {
  window.requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  gridSquares.forEach(square => square.draw())

  // place here the function to detect collision beteween bots

  bots.forEach((bot) => {
    // player bounces off the boundaries
    botMovement(bot, boundaries)

    // if player collide with boundary, player stop
    boundaries.forEach((boundary) => {
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

    bot.update()
  })
}

animate()
generateBots()