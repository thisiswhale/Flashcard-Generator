

// Create a new file named ClozeCard.js:

//     This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;

//     The constructor should accept two arguments: text and cloze.

//     The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

//     The constructed object should have a partial property that contains only the partial text.

//     The constructed object should have a fullText property that contains only the full text.

//     The constructor should throw or log an error when the cloze deletion does not appear in the input text.

//     Use prototypes to attach these methods, wherever possible.


// module.exports = function(text, cloze){
// 	this.text = text;
// 	this.cloze = cloze; 
// };

var clozeCard = function (text,cloze){
	if (!(this instanceof clozeCard)){
		return new clozeCard(text,cloze);
		}
	this.fulltext = text;
	this.cloze = cloze;
} 


clozeCard.prototype.partial = function(){return this.fulltext.replace(this.cloze, '...');}


module.exports = clozeCard;