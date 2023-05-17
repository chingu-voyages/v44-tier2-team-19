import { Boundary } from "../classes/boundary"
import { GridSquare } from '../classes/gridSquare'

const boundaries: Boundary[] = []
const gridSquares: GridSquare[] = []


const grid = [
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

/* ============== Draw Map ============== */

grid.forEach((row, rowIndex) => {
  row.forEach((symbol, columnIndex) => {
    switch (symbol) {
      case '-':
        boundaries.push(new Boundary({
          position: {
            x: Boundary.width * columnIndex,
            y: Boundary.height * rowIndex
          }
        }))
      break
      case ' ':
        gridSquares.push(new GridSquare({
          position: {
            x: GridSquare.width * columnIndex,
            y: GridSquare.height * rowIndex
          },
          squareName: {
            x: columnIndex,
            y: rowIndex
          }
        }))
      break
    }
  })
})

export { boundaries, gridSquares }