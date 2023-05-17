import { canvasContext as ctx } from '../browser/browserElements'
import { InterfaceAxis, type InterfaceBot } from '../utils/interfaces'

class Bot {
  public position: InterfaceAxis
  public velocity: InterfaceAxis
  public prevCollision: string[]
  public radius: number
  public color: string

  constructor ({ position, velocity, color = 'yellow', radius = 15 }: InterfaceBot) {
    this.position = position
    this.velocity = velocity
    this.color = color
    this.radius = radius
    this.prevCollision = []
  }

  draw (): void {
    ctx.translate(this.position.x, this.position.y)
    ctx.translate(-this.position.x, -this.position.y)
    ctx.beginPath()
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }

  update (): void {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
}

export { Bot }
