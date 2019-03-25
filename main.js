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
				suitValue = 4;
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
	let randomPick1 = Math.floor(Math.random() * deck.length);
	//console.log(randomPick1);
	player1Card = deck[randomPick1];
	deck.splice(randomPick1, 1);
	let randomPick2 = Math.floor(Math.random() * deck.length);
	//console.log(randomPick2);
	player2Card = deck[randomPick2];
	deck.splice(randomPick2, 1);
}

//dealCardsToPlayer();
//console.log(deck.length);

const announceCards = () => {
	document.getElementById('player1card').innerHTML = player1Card.value + " of " + player1Card.suit;
	document.getElementById('player2card').innerHTML = player2Card.value + " of " + player2Card.suit;
	//console.log("Player 1 is showing the " + player1Card.value + " of " + player1Card.suit);
	//console.log("Player 2 is showing the " + player2Card.value + " of " + player2Card.suit);
}

//announceCards();

let player1wins = 0;
let player2wins = 0;
//combined cardToRank function and announceWinner function
const cardToRank = () => {
	let player1CardValue = player1Card.faceValue;
	let player2CardValue = player2Card.faceValue;
	let player1CardSuitValue = player1Card.suitValue;
	let player2CardSuitValue = player2Card.suitValue;
	
	// winner is given a golden
	if (player1CardValue > player2CardValue) {
		document.getElementById('player1title').style.color = 'rgb(255, 215, 0)';
		document.getElementById('player2title').style.color = 'black';
		player1wins++;
		document.getElementById('player1wins').innerHTML = player1wins;
	} else if (player1CardValue < player2CardValue) {
		document.getElementById('player1title').style.color = 'black';
		document.getElementById('player2title').style.color = 'rgb(255, 215, 0)';
		player2wins++;
		document.getElementById('player2wins').innerHTML = player2wins;
	} else if (player1CardValue == player2CardValue) {
		if (player1CardSuitValue > player2CardSuitValue) {
			document.getElementById('player1title').style.color = 'rgb(255, 215, 0)';
			document.getElementById('player2title').style.color = 'black';
			player1wins++;
			document.getElementById('player1wins').innerHTML = player1wins;
		} else {
			document.getElementById('player1title').style.color = 'black';
			document.getElementById('player2title').style.color = 'rgb(255, 215, 0)';
			player2wins++;
			document.getElementById('player2wins').innerHTML = player2wins;
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

function changeToPlayScreen() {
	document.getElementById('divwrapper').style.display = 'none';
 	document.getElementById('gamewrapper').style.display = 'block';
}

function playGame() {
  dealCardsToPlayers();
  announceCards();
  cardToRank();
  returnCardsToDeck();
}


buildDeck();
// playGame();

document.getElementById('startbutton').addEventListener('click', changeToPlayScreen);

let changeColorTime = 0;
const changeTitleColor = () => {
	if(changeColorTime % 2 === 0) {
		document.getElementById('gametitle').style.color = 'rgb(255, 215, 0)';
	} else {
		document.getElementById('gametitle').style.color = 'black';
	}
	changeColorTime++;
}

setInterval(changeTitleColor, 500);

document.getElementById('dealbutton').addEventListener('click', playGame);








