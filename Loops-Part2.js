//TODO: Loops with Array.

//TODO 1: 1. for...in Loop — Access Indexes:
/** 
    for (let key in objectOrArray) {
        // Code to execute
}
*/
const students = ["Alice", "Bob", "Charlie"];
for (let index in students) {
    console.log(students[index]);
}

//TODO2: 2. for...of Loop — Access Values Directly:
/**
    for (let value of iterable) {
        // Code to execute
}
 */
const colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(`Selected color: ${color}`);
}

//TODO 3: forEach() Method — Clean and Concise:

/**
 * array.forEach((value, index, array) => {
        // Code to execute
});
 */

const prices = [100, 200, 300];
prices.forEach((price, index) => {
    console.log(`Item ${index + 1} costs $${price}`); //Donot be afraid (This is stroing intepolation We will cover it in next posts.)
});

//TODO 4: For loop with arrays
let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//TODO 5: While loop with Arrays:
let numbers = [10, 20, 30];
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

//TODO 6: Do-While with Arrays:
let rng = ["Red", "Green", "Blue"];
let j = 0;
do {
    console.log(rng[j]);  // 🟥 🟩 🟦
    j++;
} while (j < rng.length);


