const input = require('sync-input');

console.log("Hello! My name is Aid.");
console.log("I was created in 2020.");
console.log("Please, remind me your name.");

let name = input();

console.log("What a great name you have, " + name + "!");
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.");

// reading all remainders

let rem3 = parseInt(input());
let rem5 = parseInt(input());
let rem7 = parseInt(input());

let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

console.log(`Your age is ${age}; that's a good time to start programming!`);
