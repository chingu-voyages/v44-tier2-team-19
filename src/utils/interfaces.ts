interface InterfaceAxis {
  x: number
  y: number
}

interface InterfaceBot {
  name: string
  position: InterfaceAxis
  velocity: InterfaceAxis
  radius?: number
  color?: string
  gate: string
  size: InterfaceAxis
  value: number
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

interface InterfaceBotWinner {
  number: number
  text: string
}

export type {
  InterfaceAxis,
  InterfaceBot,
  InterfaceBoundary,
  InterfaceCircle,
  InterfaceRectangle,
  InterfaceColitionElements,
  InterfaceGridSquare,
  InterfaceBotWinner
}
