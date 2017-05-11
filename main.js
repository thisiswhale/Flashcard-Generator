var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");

var inquirer = require("inquirer");

var setOfCards = [];
setOfCards.push(BasicCard("A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated cruiseship\n", "titanic"));
setOfCards.push(ClozeCard("The Wizard of Oz", "Wizard"));
setOfCards.push(BasicCard("In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.\n", "zootopia"));
setOfCards.push(ClozeCard("The Grand Budapest Hotel", "Budapest"));
setOfCards.push(BasicCard("The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.\n", "the godfather"));
setOfCards.push(ClozeCard("Manchester by the Sea", "Manchester"));
setOfCards.push(BasicCard("A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami.\n", "moonlight"));
setOfCards.push(ClozeCard("Mad Max: The Fury Road", "Fury"));


//console.log(setOfCards[1].frontSide);
// The ... of Oz

var countIndex = 0;
var score = 0;
start();

function start() {
	//checks if countIndex is over array length
    if (countIndex >= setOfCards.length) {
        console.log("You got " + score + " correct!");
        playAgain();
    } else {

        inquirer.prompt([{
            message: setOfCards[countIndex].frontSide,
            name: "answer"
        }]).then(function(user) {

            if (user.answer.toLowerCase().replace(/\s/g, "") === setOfCards[countIndex].backSide.toLowerCase().replace(/\s/g, "")) {
                console.log("=====================");
                console.log("You are correct!");
                console.log("=====================");
                score++;
            } else {
                console.log("=====================");
                console.log("You are wrong!");
                console.log("Answer: " + setOfCards[countIndex].backSide);
                console.log("=====================");
            }
            countIndex++;
            console.log("count is " + countIndex);
            start();

        });
    }
}

function playAgain() {
    inquirer.prompt([{
        type: "confirm",
        message: "PLay again?",
        name: "boolean",
        default: true
    }]).then(function(user) {
        if (user.boolean) {
            score = 0;
            countIndex = 0;
            start();
        } else {
            console.log("Bye! ;O");
        }
    });
}

// var score = 0;
// start();
// function start() {}
// function start() {
//     inquirer.prompt([{
//             message: question1.frontSide,
//             name: "answer1",
//             validate: function(value) {
//                 if (value.toLowerCase().replace(/\s/g, "") === question1.backSide.toLowerCase().replace(/\s/g, "")) {
//                     console.log("\n\n=====================");
//                     console.log("You are correct!");
//                     console.log("=====================\n\n\n\n");
//                     score++;

//                 } else {
//                     console.log("=====================");
//                     console.log("You are wrong!\n");
//                     console.log("Answer: " + question1.backSide);
//                     console.log("=====================\n\n\n\n");
//                 }
//                 return true;
//             }
//         }, {
//             message: question2.partial(),
//             name: "answer2",
//             validate: function(value) {
//                 console.log("Answer: ");
//                 if (value.toLowerCase().replace(/\s/g, "") === question2.cloze.toLowerCase().replace(/\s/g, "")) {
//                     console.log("=====================");
//                     console.log("\nYou are correct!\n");
//                     console.log("Answer: " + question2.fulltext);
//                     console.log("=====================");
//                     score++;

//                 } else {
//                     console.log("=====================");
//                     console.log("\nYou are wrong!\n");
//                     console.log("Answer: " + question2.fulltext);
//                     console.log("=====================");

//                 }
//                 return true;
//             }
//         }, {
//             message: question3.frontSide,
//             name: "answer3",
//             validate: function(value) {
//                 if (value.toLowerCase().replace(/\s/g, "") === question3.backSide.toLowerCase().replace(/\s/g, "")) {
//                     console.log("\n\n=====================");
//                     console.log("You are correct!");
//                     console.log("=====================\n\n\n\n");
//                     score++;

//                 } else {
//                     console.log("=====================");
//                     console.log("You are wrong!\n");
//                     console.log("Answer: " + question3.backSide);
//                     console.log("=====================\n\n\n\n");
//                 }
//                 return true;
//             }
//         }, {
//             message: question4.partial(),
//             name: "answer4",
//             validate: function(value) {
//                 console.log("Answer: ");
//                 if (value.toLowerCase().replace(/\s/g, "") === question4.cloze.toLowerCase().replace(/\s/g, "")) {
//                     console.log("=====================");
//                     console.log("\nYou are correct!\n");
//                     console.log("Answer: " + question4.fulltext);
//                     console.log("=====================");
//                     score++;

//                 } else {
//                     console.log("=====================");
//                     console.log("\nYou are wrong!\n");
//                     console.log("Answer: " + question4.fulltext);
//                     console.log("=====================");

//                 }
//                 return true;
//             }
//         }, {
//             message: question5.frontSide,
//             name: "answer5",
//             validate: function(value) {
//                 if (value.toLowerCase().replace(/\s/g, "") === question5.backSide.toLowerCase().replace(/\s/g, "")) {
//                     console.log("\n\n=====================");
//                     console.log("You are correct!");
//                     console.log("=====================\n\n\n\n");
//                     score++;

//                 } else {
//                     console.log("=====================");
//                     console.log("You are wrong!\n");
//                     console.log("Answer: " + question5.backSide);
//                     console.log("=====================\n\n\n\n");
//                 }
//                 return true;
//             }
//         }, {
//             message: question6.partial(),
//             name: "answer6",
//             validate: function(value) {
//                 console.log("Answer: ");
//                 if (value.toLowerCase().replace(/\s/g, "") === question6.cloze.toLowerCase().replace(/\s/g, "")) {
//                     console.log("=====================");
//                     console.log("\nYou are correct!\n");
//                     console.log("Answer: " + question6.fulltext);
//                     console.log("=====================");
//                     score++;

//                 } else {
//                     console.log("=====================");
//                     console.log("\nYou are wrong!\n");
//                     console.log("Answer: " + question6.fulltext);
//                     console.log("=====================");

//                 }
//                 return true;
//             }
//         }, {
//             message: question7.frontSide,
//             name: "answer7",
//             validate: function(value) {
//                 if (value.toLowerCase().replace(/\s/g, "") === question7.backSide.toLowerCase().replace(/\s/g, "")) {
//                     console.log("\n\n=====================");
//                     console.log("You are correct!");
//                     console.log("=====================\n\n\n\n");
//                     score++;

//                 } else {
//                     console.log("=====================");
//                     console.log("You are wrong!\n");
//                     console.log("Answer: " + question7.backSide);
//                     console.log("=====================\n\n\n\n");
//                 }
//                 return true;
//             }
//         }, {
//             message: question8.partial(),
//             name: "answer8",
//             validate: function(value) {
//                 console.log("Answer: ");
//                 if (value.toLowerCase().replace(/\s/g, "") === question8.cloze.toLowerCase().replace(/\s/g, "")) {
//                     console.log("=====================");
//                     console.log("\nYou are correct!\n");
//                     console.log("Answer: " + question8.fulltext + "score is " + score);
//                     console.log("=====================");
//                     score++;
//                 } else {
//                     console.log("=====================");
//                     console.log("\nYou are wrong!\n");
//                     console.log("Answer: " + question8.fulltext + "score is " + score);
//                     console.log("=====================");

//                 }
//                 return true;
//             }
//         }, {
//             type: "confirm",
//             message: "You got " +score + " correct. Do you want to play again",
//             name: "confirm",
//             default: true
//         }

//     ]).then(function(user) {
//     	console.log("Score here: " +score);
//         if (user.confirm) {
//             score = 0;
//             start();
//         } else {
//             console.log("Bye!");
//         }

//     });
// }
