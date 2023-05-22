function and(a,b) {
  if (a && b) {
    return true
  }
}



function winOrLose(bot1,bot2,gate): string{
    if(and(bot1,bot2)){
        return 'Tie';
    }
    }
    