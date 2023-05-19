/*
  what are interfaces?

  Interfaces are the way we tell TS that we want an object to have a particular shape.

  They work as if they were a mold for objects, for example:

  interface interfacePC {
    keyboard
    mouse
    screen
  }

  if you type an object with that interface, for example:

  myComputer: interfacePC = {}

  now my computer needs to have those attributes, I can't create an object myComputer that has something like:

  myComputer = {
    keyboard
    mouse
    screen
    hat
  }

  the hat is not inside the interface 'interfacePC' and TS will show us an error saying:

  - hey, the property hat is not a property is not valid.

  The same applies if we are missing properties, in that case TS will say something like

  - hey, you are missing 'x' properties
*/

interface InterfaceAxis {
  x: number
  y: number
}

interface InterfaceBot {
  position: InterfaceAxis
  velocity: InterfaceAxis
  radius?: number
  color?: string
}

interface InterfaceBoundary {
  position: InterfaceAxis
  color?: string
  width?: number
  height?: number
}

interface InterfaceCircle extends InterfaceBot {
  velocity: InterfaceAxis
  radius: number
}

interface InterfaceRectangle {
  height: number
  width: number
  position: InterfaceAxis
}

interface InterfaceGridSquare extends InterfaceBoundary {
  squareName: InterfaceAxis
}

interface InterfaceColitionElements {
  circle: InterfaceCircle
  rectangle: InterfaceRectangle
}

export type {
  InterfaceAxis,
  InterfaceBot,
  InterfaceBoundary,
  InterfaceCircle,
  InterfaceRectangle,
  InterfaceColitionElements,
  InterfaceGridSquare
}
