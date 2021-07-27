let firstCard=6
let secondCard=2
let sum = firstCard +secondCard
let message=""
let hasBlackjack=false
let isAlive=true

function startGame(){
    if(sum <21){
message="you are still in the game 🙂"
isALive= true
    }
else if(sum===21){
message="wohooo!! you'hv won the game 🥳"
hasBlackjack=true
isAlive=true
}
else{
message="Awww! you lost the game🥺"
isAlive=false
}

console.log(message);
}