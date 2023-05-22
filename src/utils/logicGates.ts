import { Bot } from "../classes/bot";

function Winner(a:Bot,b:Bot,gate) {
  const bots = [a, b]
  const goesFirst = bots[Math.floor(Math.random() * bots.length)]
  let result

  if (gate === 'and') {
    if ((a.value === 0 && b.value === 0) ||
       (a.value === 0 && b.value === 1) ||
       (a.value === 1 && b.value === 0)) {
      result = { number:3, text:'tie' }
    } else if ((a.value === 1 && b.value === 0)) {
      result = { number:1, text:`${goesFirst.value} wins` }
    }
  }
  return result
}


  // if (a.value && b.value ) {
  //   switch(gate){
  //     case 'and':
  //     result = { ending:3, text:'tie' }
      
  //     break;
  //     case 'or':{
  //       result = { ending:3, text:'tie' }
  //     }
  //     break;
  //   }
  //   case 'xor': {
  //     result = { ending:3, text:'tie' }
  //   }
  //   break;
  //   case 'nor': {
  //     result = { ending:3, text:'tie' }
  //   }
  //   break;

  // }

  // if (a.value || b.value ) {
  //   switch(gate){
  //     case 'and':
  //     result = { ending:3, text:'tie' }
      
  //     break;
  //     case 'or':{
  //       result = { ending:3, text:'tie' }
  //     }
  //     break;
  //   }
  //   case 'xor': {
  //     result = { ending:3, text:'tie' }
  //   }
  //   break;
  //   case 'nor': {
  //     result = { ending:3, text:'tie' }
  //   }
  //   break;

  // }