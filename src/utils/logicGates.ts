import {Bot} from '../classes/bot'
//on 2 bots collision

function outcomeBot(botOutcomes:Bot[],botArray:Bot[],outcome:boolean){
    botOutcomes.forEach((bot)=>{
        if(!outcome){
            botArray.splice(bot,1)
        }
        else{return}
    }
    )

}

function logicGates(botCollisions:Bot[],gate){
botOutcomes:Bot[]=[];

    botCollisions.forEach((bot)=>{
        if()


    })


}

function XOR(a,b){
    if(a^b){
    return true
    }
}

function XNOR(a,b){
    if(a==b){
        return true;
    }


}