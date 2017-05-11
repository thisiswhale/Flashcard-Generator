// Create a new file named BasicCard.js:

//     This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;

//     The constructor should accept two arguments: front and back.

//     The constructed object should have a front property that contains the text on the front of the card.

//     The constructed object should have a back property that contains the text on the back of the card.

// module.exports = function(front, back){
// 	this.frontSide = front;
// 	this.backSide = back;
// }

var basicCard = function(front, back) {
	
    if (!(this instanceof basicCard)) {
        return new basicCard(front, back);
    }
    this.frontSide = front;
    this.backSide = back;
}

module.exports = basicCard;
