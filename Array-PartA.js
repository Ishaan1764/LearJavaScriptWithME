//TODO: Array:An Array is a special variable that can hold multiple values in a single reference. Think of it like a container that helps you organize related items!

//^ Spl. thing about Js Array: In JavaScript, arrays can store any type of data — numbers, strings, objects, even other arrays!
let mixedArray = [42, "Hello", { name: "Ishaan" }, [1, 2, 3]];
console.log(mixedArray);

//TODO 1: Creating Array.
// Using square brackets (most common)
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
// Using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);


//TODO 2: Accessing Elements.

let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // "Red"
console.log(colors[2]); // "Blue"

//How to find total number of elements in an array :
// use->  .length
console.log("Length of array colors is:" + colors.length
);

//TODO 3: Modifing Array Directly.

colors[1] = "Yellow";  // Changes "Green" to "Yellow"
console.log(colors);  // ["Red", "Yellow", "Blue"]

//TODO 4: Modifing Array using built-In methods.
let arr = [1, 2, 3, 4, 5];

// Add elements at the end:
arr.push(6);  // [1, 2, 3, 4, 5, 6]

// Remove the last element:
arr.pop();  // [1, 2, 3, 4, 5]

// Add elements at the beginning:
arr.unshift(0);  // [0, 1, 2, 3, 4, 5]

// Remove the first element:
arr.shift();  // [1, 2, 3, 4, 5]

// Slice part of an array:
let sliced = arr.slice(1, 4);  // [2, 3, 4]

// Join elements into a string:
let joined = arr.join(" - ");  // "1 - 2 - 3 - 4 - 5"



