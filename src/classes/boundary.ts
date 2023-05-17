import { canvasContext as ctx } from '../browser/browserElements'
import { InterfaceAxis, type InterfaceBoundary } from '../utils/interfaces'

class Boundary {
  public position: InterfaceAxis
  public width: number
  public height: number
  public color: string
  static width: number = 40
  static height: number = 40

  constructor ({ 
    position,
    width = 40,
    height = 40,
    color = 'green' 
  }: InterfaceBoundary) {
    this.position = position
    this.width = width
    this.height = height
    this.color = color
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
}

export { Boundary }
