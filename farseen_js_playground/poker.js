/**
 * 
 */
function fname() {
	return this.num + this.suit + ".gif"
}

function Card(num, suit) {
	this.num = num;
	this.suit = suit;
	this.fname = fname();
}

deck = new [ 53 ];
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