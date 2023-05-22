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
