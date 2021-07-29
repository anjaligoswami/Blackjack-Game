let cards= []
let sum=0
let message=""
let hasBlackjack=false
let isAlive=false
let player= {
    name: "Anjali",
    coins: 200
}

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name+": $"+player.coins

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() *13) +1

    if(randomNumber>10){
        return 10
    }

    else if(randomNumber===1){
        return 11
    }
    else
     return randomNumber
}

function startGame() {
    isAlive =true
    let firstCard= getRandomNumber()
    let secondCard=getRandomNumber()
    cards= [firstCard,secondCard]
    sum=cards[0] + cards[1]

    renderGame()
}
function renderGame(){
console.log(cards);
 let j=0
 cardsEl.textContent = "cards: "
for(let i=0; i<cards.length; i++)
{
    cardsEl.textContent+= cards[i]+" "
    j++
}
 console.log("j", j)

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

messageEl.textContent = message
sumEl.textContent="Sum: "+sum


}

function newCard() {
    if(isAlive==true && hasBlackjack==false){
            let card=getRandomNumber()
        console.log("card", card)

            sum+=card
        //console.log(sum);

            cards.push(card)
        //  console.log(cards.length);

            renderGame()
    }       
}