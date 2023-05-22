import { canvasContext as ctx } from '../browser/browserElements'
import { type InterfaceAxis, type InterfaceGridSquare } from '../utils/interfaces'

class GridSquare {
  public position: InterfaceAxis
  public height: number
  public width: number
  public color: string
  public squareName: InterfaceAxis
  static width: number = 40
  static height: number = 40

  constructor ({
    position,
    width = 40,
    height = 40,
    color = 'rgba(0, 201, 10, 0.5)',
    squareName
  }: InterfaceGridSquare) {
    this.position = position
    this.height = width
    this.width = height
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
   
  }

  drawID (): void {
    ctx.fillStyle = this.color === 'purple' ? 'plum' : 'purple'
    ctx.font = '10px Arial'
    const center = {
      x: this.position.x + (this.width / 3),
      y: this.position.y + (this.height / 2)
    }
    const renderText = `${this.squareName.x}, ${this.squareName.y}`
    ctx.fillText(renderText, center.x, center.y)
  }
}

export { GridSquare }
