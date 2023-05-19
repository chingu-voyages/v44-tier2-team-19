const canvas = document.getElementById('scene') as HTMLCanvasElement
const canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D
const btnSquare = document.getElementById('addSquare') as HTMLButtonElement

canvas.width = 500
canvas.height = 600

export {
  canvas,
  canvasContext,
  btnSquare
}
