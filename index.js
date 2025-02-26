
console.log("Check me out now")

//requirements: 
//card deck w 52 cards (2-A)
//4 suits
//card values to play the game
//showing playing hands

//scorekeeper
//shuffling(random feature)
//dealing
//2 players (player 1 and player 2)


//playing cards deck (array for; cards, values, and suits)

class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
    }


//Building the playing deck objects

createDeck() {
    for (let i = 0; i < this.deck.length; i++) {
        for (let j = 0; j < this.ranks.length; j++) {
            let card = {
                name: `${this.ranks[j]} of ${this.suits[i]}` ,
                value: j + 1
            }

            this.deck.push(card)
        console.log(card)
        }
     }
    }

//using fisher yates shuffle method from the stack overflow.com website
shuffleDeck() {
   
    for (let i = this.deck.length - 1 ; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], 
        this.deck[i]];
     }
    }

}
//building a deck to play the game + shuffle and dealing the hands for both players
//adding in keeping score for the results of the games

class Game {
    constructor() {
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        }
    }

playGame() {
    const deck = new Deck
    deck.createDeck()
    deck.shuffleDeck()

    while (deck.deck.length !== 0) {
        this.player1.hand.push(deck.deck.shift())
        this.player2.hand.push(deck.deck.shift())
    }

    //playing the hands and keeping track of the scoring 
    for (let i = 0; i < this.player1.hand.length; i++){

        if (this.player1.hand[i].value > this.player2.hand[i]){
            this.player1.score++
            console.log(`
                P1 Card is: ${this.player1.hand[i].name}
                P2 Card is: ${this.player2.hand[i].name}
                PLAYER 1 WINS THE POINT
                SCORE: Player 1: ${this.player1.score}, Player 2: ${this.player2.score}
                `)
        } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
            this.player2.score++
            console.log(`
                P1 Card is: ${this.player1.hand[i].name}
                P2 Card is: ${this.player2.hand[i].name}
                PLAYER 2 WINS THE POINT
                SCORE: Player 1: ${this.player1.score}, Player 2: ${this.player2.score}
                `)

        } else {            
            console.log(`
                P1 Card is: ${this.player1.hand[i].name}
                P2 Card is: ${this.player2.hand[i].name}
                TIE
                SCORE: Player 1: ${this.player1.score}, Player 2 ${this.player2.score}
                `)
        }
     }
//final outcome of the game
     if(this.player1.score > this.player2.score) {console.log("Player 1 WINS")}
     else if (this.player2.score > this.player1.score) {console.log("PLAYER 2 WINS")}
     else {console.log ("TIE")}

    }


}
//starting the gameplay
const deck = new Deck
deck.createDeck()
deck.shuffleDeck()

console.log(deck.deck)

const game = new Game
game.playGame()


//
// const playingCards = new PlayingCards
// this.playingCards.buildPlayingCards()
// this.playingCards.shufflePlayingCards()
// buildPlayingCards(this.playingCards)

// // buildPlayingCards(this.PlayingCards)
// // PlayingCards.shufflePlayingCards(playingCards)

// console.log(this.playingCards);
