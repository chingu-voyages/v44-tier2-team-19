import { canvasContext as ctx } from '../browser/browserElements'
import { type InterfaceAxis, type InterfaceBoundary } from '../utils/interfaces'

class Boundary {
  public position: InterfaceAxis
  public width: number
  public height: number
  public color: string
  static width: number = 40
  static height: number = 40
  public squareName: InterfaceAxis

  constructor ({
    position,
    width = 40,
    height = 40,
    color = 'rgba(0, 201, 10, 0.5)',
    squareName
  }: InterfaceBoundary) {
    this.position = position
    this.width = width
    this.height = height
    this.color = color
    this.squareName = squareName
  }

  draw (): void {
    ctx.fillStyle = this.color
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.height,
      this.width
    )
    this.drawID()
  }

  drawID (): void {
    ctx.fillStyle = 'black'
    ctx.font = '10px'
    const center = {
      x: this.position.x + (this.width / 3),
      y: this.position.y + (this.height / 2)
    }
    const renderText = `${this.squareName.x}, ${this.squareName.y}`
    ctx.fillText(renderText, center.x, center.y)
  }

  update (): void {
    this.color = 'rgba(0, 201, 10, 0.3)'
  }
}

export { Boundary }
