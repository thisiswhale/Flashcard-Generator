// make_sandwich.js


//Case 1: Exporting as an Object of functions
var fridge = require ('./fridge');

function makeSandwich() {
  return {sandwich: fridge.bread() + ' ' + fridge.egg};
}
console.log(fridge);
console.log(makeSandwich());
// => { sandwich: 'bread: 2 egg: 1' }


// var fridge = {
//                bread: function() { ... },
//                egg: 'egg: 1'
//              };


 //Case 2: Exporting with module.exports

 // make_sandwich.js

// var bread = require ('./bread');

// function makeSandwich() {
//   return {sandwich: bread() + ' with some eggs'};
// }

// console.log(makeSandwich());
// => { sandwich: 'bread: 2 with some eggs' }
