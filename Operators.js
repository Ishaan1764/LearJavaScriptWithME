//TODO: Operators.

// Arithmetic Operators ➝ Perform mathematical calculations.

let sum = 10 + 5;  // 15
let diff = 10 - 5; // 5
let product = 10 * 5; // 50
let quotient = 10 / 5; // 2
let modulus = 10 % 3; // 1 - > returns Remainder

// 🔹 Increment (++) & Decrement (--) Operators ➝ Increase or decrease a value by 1.

let count = 5;
count++;  // Post-increment: count becomes 6
++count;  // Pre-increment: count becomes 7

let num = 10;
num--;  // Post-decrement: num becomes 9
--num;  // Pre-decrement: num becomes 8

/**
 * Post (x++ / x--) → Returns the value first, then updates.
 * Pre (++x / --x) → Updates the value first, then returns.
 */

// 🔹 Comparison Operators ➝ Compare two values and return true or false.
console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(5 >= 5);  // true
console.log(6 <= 5);  // false
console.log(6 != "6"); // false Type coercion(Js changes types automatically (Implicit type casting)) happens here!
console.log(6!=="6"); // true
console.log(10 == "10"); // true (Type coercion(Js changes types automatically (Implicit type casting)) happens here!)
console.log(10 === "10"); // false (Strict comparison, no coercion)

// 🔹 Logical Operators ➝ Combine multiple conditions.
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

//  Assignment Operators ➝ Assign values to variables.
let a = 10;
a += 5; // a = a + 5 (Now a is 15)
a -=4; // a= a- 4 (Now a is 11)
console.log(a);

