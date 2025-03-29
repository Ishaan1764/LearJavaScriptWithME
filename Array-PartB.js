//TODO: ARRAY PART - B : Advance Array Methods..

//TODO 1 -> Map()[Transform Each Element] : When you want to apply a function to every element and create a "new array".

/**
 * SYNTAX:
 * const newArray = oldArray.map((element, index, array) => { return newValue; });
 */

/**
 * Example: Convert prices from USD to INR
 */

const usdPrice=[10,30,46];
const exgRate=83;
const priceINR= usdPrice.map((ele)=>{return ele*exgRate});
console.log(priceINR);

//Output: [ 830, 2490, 3818 ]

//TODO 2 -> .filter() [Extract Specific Elements] : When you want to keep only certain elements based on a condition.

/**
 * Syntax:
 * const filteredArray = array.filter((element, index, array) => condition);
 */

//Example: Find numbers greater than 50.
const numbers=[1,50,45,56,86,97,60,51];
const grtNumbers= numbers.filter(numbers=>numbers>50);
console.log(grtNumbers);


//TODO 3-> .reduce() [Accumulate Values Into One] :When you want to sum, multiply, or combine elements into a single result.

// Syntax:const result = array.reduce((accumulator, currentValue) => newAccumulatorValue, initialValue);

//Example:  Calculate the total bill amount .
const cart = [100, 200, 50];
const total = cart.reduce((sum, price) => sum + price, 0);//sum has initial val -> 0 and then it gets the accumulated vales .
console.log(total); // 350

//TODO 4 -> .find() – Get the First Matching Element.
//Syntax: const foundElement = array.find(element => condition);

//Example: Find the first even number .
const numb = [3, 7, 8, 10];
const firstEven = numb.find(num => num % 2 === 0);
console.log(firstEven); // 8

//TODO: 5 -> .some() & .every() – Check Conditions

/**
 * SYNTAX:
 * array.some(element => condition); // Returns true if at least one matches
 * array.every(element => condition); // Returns true only if all match
 */

/**
 * Example:Check if an array has negative numbers
 */

const numbArr = [4, -2, 6, 8];
console.log(numbArr.some(num => num < 0)); // true
console.log(numbArr.every(num => num > 0)); // false


//TODO: 6 -> .sort() – Arrange Elements in Ascending or Descending Order.

/**
 * Syntax:
 * array.sort((a, b) => a - b); // Ascending for numbers
 * array.sort((a, b) => b - a); // Descending for numbers
 * array.sort(); // if array is string then it will us the ASCII character codes.
 */

/**
 * Example 1: Sort Fruit Array
 * Example 2: Sort an array of numbers
 */

const fruits = ["anana", "range", "Apple", "Mango"];
console.log(fruits.sort());
//Output:[ 'Apple', 'Mango', 'anana', 'range' ]

// 2.
const scores = [40, 100, 1, 5, 25];
scores.sort((a, b) => a - b); //Asc.
console.log(scores); // [1, 5, 25, 40, 100]





