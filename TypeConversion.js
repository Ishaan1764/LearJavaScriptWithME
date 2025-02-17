//TODO: Tyoe Conversions.

// Have u ever wondered !!
console.log(10 + "5");  // "105"  (Wait, what?!)
console.log(10 - "5");  // 5  (Now it’s a number?!)

//TO ANswer this lets see What is type casting.

// Type casting refers to the process of converting a value from one type to another.
//This can be done explicitly by using functions or implicitly by the JavaScript engine. 

// 🔹 Type Coercion(Implicit) Js itself Does it vs. Type Conversion(Explicit) we do it.


/**
 * Type Coercion (Implicit Conversion)
 * JavaScript automatically converts one data type into another when needed.
 */

console.log(10 + "5");   // "105" (Number converted to a String)
console.log(10 - "5");   // 5  (String converted to a Number)
console.log(true + 1);   // 2  (true → 1) true is also written 1.
console.log(false + "hello"); // "falsehello" -> does string concatination

//You will se when we are using "+" operator with a string it cocatinates and makes it a String value  
//Whereas when we use it with number and any other value except String like boolean it performs the operation.


/**
 * Type Conversion (Explicit Conversion)
 * Here, we manually convert data types using methods like:
 * Number(), String(), Boolean(), parseInt(), parseFloat()
 */

console.log(Number("42"));   // 42
console.log(String(42));     // "42"
console.log(Boolean(0));     // false (0 is falsy)
console.log(parseInt("50px")); // 50 (Extracts number)

//Falsy(values taht are always false) and truthy(always true) : We will go deep in next POst.
// Quick Tip: Always Use === Instead of ==
// Since == allows coercion, always prefer strict equality (===):

