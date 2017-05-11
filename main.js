var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");

var inquirer = require("inquirer");

var question1 = BasicCard("A seventeen-year-old aristocrat falls in love \nwith a kind but poor artist aboard the \nluxurious, ill-fated cruiseship\n", "titanic");
var question2 = ClozeCard("The Wizard of Oz", "Wizard");
var question3 = BasicCard("In a city of anthropomorphic animals, a\n rookie bunny cop and a cynical con \nartist fox must work together to uncover a conspiracy.\n", "zootopia");
var question4 = ClozeCard("The Grand Budapest Hotel", "Budapest");
var question5 = BasicCard("The aging patriarch of an organized crime\n dynasty transfers control of his \nempire to his reluctant son.\n", "the godfather");
var question6 = ClozeCard("Manchester by the Sea", "Manchester");
var question7 = BasicCard("A chronicle of the childhood, adolescence and\n burgeoning adulthood of a young, \nAfrican-American, gay man growing up in a rough neighborhood of Miami.\n", "moonlight");
var question8 = ClozeCard("Mad Max: The Fury Road", "Fury");

var score = 0;
start();

function start() {
	score = 0;
    inquirer.prompt([{
            message: question1.frontSide,
            name: "answer1",
            validate: function(value) {
                if (value.toLowerCase().replace(/\s/g, "") === question1.backSide.toLowerCase().replace(/\s/g, "")) {
                    console.log("\n\n=====================");
                    console.log("You are correct!");
                    console.log("=====================\n\n\n\n");
                    score++;

                } else {
                    console.log("=====================");
                    console.log("You are wrong!\n");
                    console.log("Answer: " + question1.backSide);
                    console.log("=====================\n\n\n\n");
                }
                return true;
            }
        }, {
            message: question2.partial(),
            name: "answer2",
            validate: function(value) {
                console.log("Answer: ");
                if (value.toLowerCase().replace(/\s/g, "") === question2.cloze.toLowerCase().replace(/\s/g, "")) {
                    console.log("=====================");
                    console.log("\nYou are correct!\n");
                    console.log("Answer: " + question2.fulltext);
                    console.log("=====================");
                    score++;

                } else {
                    console.log("=====================");
                    console.log("\nYou are wrong!\n");
                    console.log("Answer: " + question2.fulltext);
                    console.log("=====================");

                }
                return true;
            }
        }, {
            message: question3.frontSide,
            name: "answer3",
            validate: function(value) {
                if (value.toLowerCase().replace(/\s/g, "") === question3.backSide.toLowerCase().replace(/\s/g, "")) {
                    console.log("\n\n=====================");
                    console.log("You are correct!");
                    console.log("=====================\n\n\n\n");
                    score++;

                } else {
                    console.log("=====================");
                    console.log("You are wrong!\n");
                    console.log("Answer: " + question3.backSide);
                    console.log("=====================\n\n\n\n");
                }
                return true;
            }
        }, {
            message: question4.partial(),
            name: "answer4",
            validate: function(value) {
                console.log("Answer: ");
                if (value.toLowerCase().replace(/\s/g, "") === question4.cloze.toLowerCase().replace(/\s/g, "")) {
                    console.log("=====================");
                    console.log("\nYou are correct!\n");
                    console.log("Answer: " + question4.fulltext);
                    console.log("=====================");
                    score++;

                } else {
                    console.log("=====================");
                    console.log("\nYou are wrong!\n");
                    console.log("Answer: " + question4.fulltext);
                    console.log("=====================");

                }
                return true;
            }
        }, {
            message: question5.frontSide,
            name: "answer5",
            validate: function(value) {
                if (value.toLowerCase().replace(/\s/g, "") === question5.backSide.toLowerCase().replace(/\s/g, "")) {
                    console.log("\n\n=====================");
                    console.log("You are correct!");
                    console.log("=====================\n\n\n\n");
                    score++;

                } else {
                    console.log("=====================");
                    console.log("You are wrong!\n");
                    console.log("Answer: " + question5.backSide);
                    console.log("=====================\n\n\n\n");
                }
                return true;
            }
        }, {
            message: question6.partial(),
            name: "answer6",
            validate: function(value) {
                console.log("Answer: ");
                if (value.toLowerCase().replace(/\s/g, "") === question6.cloze.toLowerCase().replace(/\s/g, "")) {
                    console.log("=====================");
                    console.log("\nYou are correct!\n");
                    console.log("Answer: " + question6.fulltext);
                    console.log("=====================");
                    score++;

                } else {
                    console.log("=====================");
                    console.log("\nYou are wrong!\n");
                    console.log("Answer: " + question6.fulltext);
                    console.log("=====================");

                }
                return true;
            }
        }, {
            message: question7.frontSide,
            name: "answer7",
            validate: function(value) {
                if (value.toLowerCase().replace(/\s/g, "") === question7.backSide.toLowerCase().replace(/\s/g, "")) {
                    console.log("\n\n=====================");
                    console.log("You are correct!");
                    console.log("=====================\n\n\n\n");
                    score++;

                } else {
                    console.log("=====================");
                    console.log("You are wrong!\n");
                    console.log("Answer: " + question7.backSide);
                    console.log("=====================\n\n\n\n");
                }
                return true;
            }
        }, {
            message: question8.partial(),
            name: "answer8",
            validate: function(value) {
                console.log("Answer: ");
                if (value.toLowerCase().replace(/\s/g, "") === question8.cloze.toLowerCase().replace(/\s/g, "")) {
                    console.log("=====================");
                    console.log("\nYou are correct!\n");
                    console.log("Answer: " + question8.fulltext + "score is " + score);
                    console.log("=====================");
                    score++;
                } else {
                    console.log("=====================");
                    console.log("\nYou are wrong!\n");
                    console.log("Answer: " + question8.fulltext + "score is " + score);
                    console.log("=====================");

                }
                return true;
            }
        }, {
            type: "confirm",
            message: "You got " +score + " correct. Do you want to play again",
            name: "confirm",
            default: true
        }

    ]).then(function(user) {
    	console.log("Score here: " +score);
        if (user.confirm) {
            score = 0;
            start();
        } else {
            console.log("Bye!");
        }

    });
}
