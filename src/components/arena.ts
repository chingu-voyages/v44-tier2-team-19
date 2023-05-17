import { Boundary } from '../classes/boundary'
import { GridSquare } from '../classes/gridSquare'
import { type InterfaceAxis } from '../utils/interfaces'

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

/* ============== Place Bot on random spot ============== */

function randomSpotOnMap (): InterfaceAxis {
  // the - 2 is because we must subtract the upper block and the lower block (the edges)
  const lenght = grid.length - 2 // horizontal
  const deep = grid[0].length - 2 // vertical

  const y = Math.ceil((Math.random() * lenght))
  const x = Math.ceil((Math.random() * deep))

  return { x, y }
}

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

export {
  boundaries,
  gridSquares,
  randomSpotOnMap
}
