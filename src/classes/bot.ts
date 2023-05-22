import { canvasContext as ctx } from '../browser/browserElements'
import { type InterfaceAxis, type InterfaceBot } from '../utils/interfaces'

class Bot {
  public name: string
  public position: InterfaceAxis
  public velocity: InterfaceAxis
  public prevCollision: string[]
  public radius: number
  public color: string
  public value: number

  constructor ({ position, velocity, color = 'yellow', radius = 15, value, name }: InterfaceBot) {
    this.position = position
    this.velocity = velocity
    this.color = color
    this.radius = radius
    this.prevCollision = []
    this.value = value
    this.name = name
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
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x
  }
}

export { Bot }
