import { canvasContext as ctx } from '../browser/browserElements'
import { type InterfaceAxis, type InterfaceBot } from '../utils/interfaces'

/*
  InterfaceAxis equals an object with the properties x and y
  InterfaceAxis = { x, y }

  every time you read 'InterfaceAxis' this mean an object { x, y }
*/

class Bot {
  public position: InterfaceAxis
  public velocity: InterfaceAxis
  public radius: number
  public color: string

  constructor ({ position, velocity, color = 'yellow', radius = 15 }: InterfaceBot) {
    this.position = position
    this.velocity = velocity
    this.color = color
    this.radius = radius
  }

  // this render the bot on the map
  // DON'T TOUCH THIS UNLESS YOU HAVE FREE TIME AND NOTHING BETTER TO DO...
  draw (): void {
    ctx.translate(this.position.x, this.position.y)
    ctx.translate(-this.position.x, -this.position.y)
    ctx.beginPath()
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }

  // update the velocity of the bot and call the draw function
  update (): void {
    this.draw()
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x
  }
}

export { Bot }
