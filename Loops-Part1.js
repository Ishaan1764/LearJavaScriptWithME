//TODO: LOOPS - PART 1

//& Why Loops ?
/**
Imagine manually printing the numbers 1 to 100 in the console. Without loops, you’d write 100 separate console.log statements! Loops solve this by allowing you to execute the same block of code as many times as needed, reducing effort and errors. 
*/

//TODO 1: For Loop : Best for Iterating a Fixed Number of Times
// Syntax: 
/**
    for (initialization; condition; increment/decrement) {
        //Code to execute in each iteration
}
 */

//!Print even numbers from 1 to 10:
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//! Loop through an Array [We will cover Array in deep Later..]
const names = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
}





//TODO 2: While Loop
//Syntax:
/**
 * while (condition) {
        // Code to execute while condition is true
}
 */

//! Keep prompting the user until they enter "yes": [For this you need to Run the index.html file on live server]
let answer = "";
while (answer !== "yes") {
    answer = prompt("Do you want to continue? (yes/no)");
}
console.log("Thank you!");

//!Countdown from 5 to 1:
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}
console.log("Liftoff! 🚀");



//TODO 3: Do While Loop
//Syntax: 
/**
    do {
        // Code to execute
    } while (condition);
 */

//! Show a message at least once, then validate input:
let number;
do {
    number = parseInt(prompt("Enter a number greater than 0:"));
} while (number <= 0);
console.log("Thank you for entering:", number);


//! Simulate a dice roll until you get a 6:
let diceRoll;
do {
    diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${diceRoll}`);
} while (diceRoll !== 6);
console.log("You got a 6! 🎉");
