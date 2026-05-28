// run `node index.js` in the terminal

// var is global, even if it's inside a block.
// let and const are local.

var x = 5;
console.log(x);
const y = "a";
console.log(`${x} ${y}`);
y = "b";
console.log(`${x} ${y}`);