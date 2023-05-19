import { Boundary } from '../classes/boundary'
import { GridSquare } from '../classes/gridSquare'
import { type InterfaceAxis } from '../utils/interfaces'

// holds the boundaries
const boundaries: Boundary[] = []
// holds the gridSquares (the grid inside the boundaries)
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

/* ============== return a random spot ============== */

// this obtain a random spot in the map, this is used by the generateBots function
function randomSpotOnMap (): InterfaceAxis {
  // the - 2 is because we must subtract the upper block and the lower block (the edges)
  const lenght = grid.length - 2 // horizontal
  const deep = grid[0].length - 2 // vertical

  const y = Math.ceil((Math.random() * lenght))
  const x = Math.ceil((Math.random() * deep))

  return { x, y }
}

/* ============== Draw Map ============== */

// draw the map, we have different scenarios according to map symbol
grid.forEach((row, rowIndex) => {
  row.forEach((symbol, columnIndex) => {
    // the '-' equals a boundary
    switch (symbol) {
      case '-':
        boundaries.push(new Boundary({
          position: {
            x: Boundary.width * columnIndex,
            y: Boundary.height * rowIndex
          }
        }))
        break
      // the space (' ') equals a grid inside the map
      case ' ':
        gridSquares.push(new GridSquare({
          position: {
            x: GridSquare.width * columnIndex,
            y: GridSquare.height * rowIndex
          },
          squareName: {
            x: columnIndex,
            y: rowIndex
          },
          color: ((columnIndex + rowIndex) % 2 === 0) ? 'white' : 'black' // this is to alternate the colors between black and white, like chess.
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
