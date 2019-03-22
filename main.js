function Card(suit, value, faceValue, suitValue) {
  this.suit = suit;
  this.value = value;
  this.faceValue = faceValue;
  this.suitValue = suitValue;
}

let deck = [];
const buildDeck = () => {
	let newCard;
	for (let i = 2; i <= 14; i++) {
		let value;
		if (i === 11) {
			value = "JACK";
		} else if (i === 12) {
			value = "QUEEN";
		} else if (i === 13) {
			value = "KING"
		} else if (i === 14) {
			value = "ACE";
		} else {
			value = i;
		}
		for (j = 0; j < 4; j++) {
			let suit = "";
			// added values for suit so in the event of a tie, the suit will determine the winner
			let suitValue;
			switch (j) {
				case 0:
				suit = "SPADES";
				suitValue = 4
				break;
				case 1:
				suit = "HEARTS";
				suitValue = 3;
				break;
				case 2:
				suit = "CLUBS";
				suitValue = 2;
				break;
				case 3:
				suit = "DIAMONDS";
				suitValue = 1;
				break;
				default:
				break;
			}
			newCard = new Card(suit, value, i, suitValue);
			deck.push(newCard);
		}
	}
}

//buildDeck();
//console.log(deck);

let player1Card, player2Card;
const dealCardsToPlayers = () => {
	player1Card = deck[Math.floor(Math.random() * deck.length)];
	deck.splice(player1Card, 1);
	player2Card = deck[Math.floor(Math.random() * deck.length)];
	deck.splice(player2Card, 1);
}

//dealCardsToPlayer();
//console.log(deck.length);

const announceCards = () => {
	console.log("Player 1 is showing the " + player1Card.value + " of " + player1Card.suit);
	console.log("Player 2 is showing the " + player2Card.value + " of " + player2Card.suit
		);
}

//announceCards();

//combined cardToRank function and announceWinner function
const cardToRank = () => {
	let player1CardValue = player1Card.faceValue;
	let player2CardValue = player2Card.faceValue;
	let player1CardSuitValue = player1Card.suitValue;
	let player2CardSuitValue = player2Card.suitValue;
	
	
	if (player1CardValue > player2CardValue) {
		console.log("Player 1 wins");
	} else if (player1CardValue < player2CardValue) {
		console.log("Player 2 wins!");
	} else if (player1CardValue == player2CardValue) {
		if (player1CardSuitValue > player2CardSuitValue) {
			console.log("Player 1 wins!");
		} else {
			console.log("Player 2 wins!");
		}
	}
}

//cardToRank();

const returnCardsToDeck = () => {
	deck.push(player1Card);
	deck.push(player2Card);
}

//returnCardsToDeck();
//console.log(deck.length);

function playGame() {
  dealCardsToPlayers();
  announceCards();
  cardToRank();
  returnCardsToDeck();
}


buildDeck();
playGame();