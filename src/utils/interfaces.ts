interface InterfaceAxis {
  x: number
  y: number
}

interface InterfaceBot {
  position: InterfaceAxis
  velocity: InterfaceAxis
  radius?: number
  color?: string
  gate: string
}

interface InterfaceBoundary {
  position: InterfaceAxis
  color?: string
  width?: number
  height?: number
  squareName: InterfaceAxis

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
