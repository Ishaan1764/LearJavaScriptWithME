//TODO: HOISTING
/**
 * In JavaScript, a variable can be declared after it has been used.
 * In other words; a variable can be used before it has been declared.
 */

//? VAR
console.log("Before Declaration: ",xVar); // Will give Undefined as we have declared a Var variable after  the use..
var xVar;
xVar=5;
console.log("After Assigning Value: ",xVar); // Output is 5 

//? Let Same is the case with const 
console.log("Before Declaration: ",yLet); 
let yLet; //!will through ERROR: Cannot access 'yLet' before initialization
yLet=10
// const zConst; : will through ERROR: const is declared but must be initializezd
console.log("After Declaration: ",yLet); //willnot run as the code throughs error ABOVE/,

//~ Function declarations are fully hoisted
greet(); // Output: Hello, JavaScript!
function greet() {
    console.log("Hello, JavaScript!");
}

//~ But What About Function Expressions?
greet2(); //! ReferenceError: Cannot access 'greet' before initialization

const greet2 = function() {
    console.log("Hi there!");
};



//// TO MAKE THE CODE RUN COMMENT THE GREET 2 AND THE LET CONST PART IF YIOU WANT TO PLACE CLONE 
//// AND FEEL FREE TO PLAY WITH THE CODE



