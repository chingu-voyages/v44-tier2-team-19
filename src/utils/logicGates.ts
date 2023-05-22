import type { Bot } from '../classes/bot'
import type { InterfaceBotWinner } from '../utils/interfaces'

function Winner (a: Bot, b: Bot, gate: string): InterfaceBotWinner {
  const bots = [a, b]
  const goesFirst = bots[Math.floor(Math.random() * bots.length)]
  console.log(goesFirst)
  let result: InterfaceBotWinner
  console.log(a)
  console.log(b)

  if (gate === 'and') {
    if ((a.value === 0 && b.value === 0) ||
       (a.value === 0 && b.value === 1) ||
       (a.value === 1 && b.value === 0)) {
      result = { number:3, text:'tie' }
    } else if ((a.value === 1 && b.value === 1)) {
      result = { number:1, text: `${goesFirst.name} wins!` }
    }
  }

  if (gate === 'or') {
    if ((a.value === 0 && b.value === 0)) {
      result = { number:3, text:'tie' }
    } else if ((a.value === 1 && b.value === 1) ||
    (a.value === 0 && b.value === 1) ||
    (a.value === 1 && b.value === 0)) {
      result = { number:1, text: `${goesFirst.name} wins!` }
    }
  }

  if (gate === 'xor') {
    if (
      (a.value === 0 && b.value === 0)) {
      result = { number:3, text:'tie' }
    } else if (
      (a.value === 0 && b.value === 1) ||
      (a.value === 1 && b.value === 0) ||
      (a.value === 1 && b.value === 1)) {
      result = { number:1, text: `${goesFirst.name} wins!` }
    }
  }

  if (gate === 'nor') {
    if (
      (a.value === 1 && b.value === 1) ||
    (a.value === 0 && b.value === 1) ||
    (a.value === 1 && b.value === 0)) {
      result = { number:3, text:'tie' }
    } else if (
      (a.value === 0 && b.value === 0)) {
      result = { number:1, text: `${goesFirst.name} wins!` }
    }
  }
  return result;
}

export { Winner }

// Thoughts on what to do if there are more than 2 bots colliding at once
// perhaps there could be an array of bots and the first 2 fight it out and then the
// loser is removed from the array, and the function is called again
// until there is only 1 bot left in the array
