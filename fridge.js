// fridge.js


//Case 1: Exporting as an Object of functions
//var exports = {};

exports.bread = function bread() {
  return 'bread: 2';
};

exports.egg = 'egg: 1';

// exports = {
//              bread: function bread() { ... },
//              egg: 'egg: 1'
//           };


//Case 2: Exporting with module.exports

// bread.js

// module.exports = function() {
//   return 'bread: 2';
// };
