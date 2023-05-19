import { canvasContext as ctx } from '../browser/browserElements'
import { type InterfaceAxis, type InterfaceBoundary } from '../utils/interfaces'

/*
  public means, if you have an INSTANCE of Boundary (i.e: a boundary) you can access
  the property outside the class like any object in js

  static means, the CLASS has a property that can be accessed even if you don't have an instance of that class

  i.e: Boundary.width can be access (With capital B)
      Boundary.color doesn't exist
*/

class Boundary {
  public position: InterfaceAxis
  public width: number
  public height: number
  public color: string

  static width: number = 40 // default value of the width
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
