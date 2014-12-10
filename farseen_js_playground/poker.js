/**
 * 
 */
var nextcard = 1;

function fname() {
	path = ".\\";
	return path + this.num + this.suit + ".gif";
}
// Contractor: return file name
function Card(num, suit) {
	this.num = num;
	this.suit = suit;
	this.fname = fname();
}

function InitGame() {
	// build card board
	board = new Array(26);
	for (i = i; i < 26; i++) {
		board[i] = new Card(0, "X");
		obj = document.getElementById("card" + i);
		obj.src = ".\\gif\\blank.gif";
		obj.onclick = PlaceCard;

	}

	// shuffle the all cards
	deck = new Array(53);
	for (i = 1; i < 14; i++) {
		deck[i] = new Card(i, "c");
		deck[i + 13] = new Card(i, "d");
		deck[i + 26] = new Card(i, "s");
		deck[i + 39] = new Card(i, "h");

	}

	n = Math.floor(100 * Math.random() + 200);
	for (i = 0; i < n; i++) {
		c1 = 52 * Math.random() + 1;
		c2 = 52 * Math.random() + 1;
		temp = deck[c2];
		deck[c2] = deck[c1];
		deck[c1] = temp;
	}
	//init game
	obj=document.getElementById("newgame");
	obj.onclick = InitGame;
}

function PlaceCard(e) {
	if (!e)
		var e = window.event;
	// check for explorer, whether event use target or srcElement
	thiscard = (e.target) ? e.target : e.srcElement;
	pos = thiscard.id.subString(4);
	// check if this is empty place
	if (board[pos].suit != "X") {
		return;
	}
	// Show card and next Score
	drawcard = document.getElementById("dcard");
	thiscard.src = deck[nextcard].fname();
	drawcard.src = "blank.gif";
	board[pos] = deck[nextcard];
	nextCard++;
	Score();
	//	
	if (nextCard > 25) {
		EndGame();
	} else {
		drawcard.src = deck[nextcard].fname();

	}
}

function Score() {
	score = document.getElementById("totalScore");
	total = 0;

}

function Sum(c1, c2, c3, c4, c5, scorebox) {
	obj = document.getElementById(scorebox);
	nums = new Array[5];
	sum = c1.num + c2.num + c3.num + c4.num + c5.num;
	return sum;
}

function EndGame() {
	stat = document.getElementById("status");
	stat.innerHTML = "<b>Game Over</b>";
}