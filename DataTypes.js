//TODO: DataTypes in JS


// ✅ String → Represents text

let name = "Ishaan";  
console.log(typeof name); // "string"
// ✅ Number → Represents integers & decimals

let age = 25;  
console.log(typeof age); // "number"
// ✅ Boolean → Represents true/false values

let isStudent = true;  
console.log(typeof isStudent); // "boolean"
// ✅ Undefined → A variable that has been declared but not assigned a value

let score;  
console.log(typeof score); // "undefined"
// ✅ Null → Intentionally empty value

let data = null;  
console.log(typeof data); // "object" (a well-known JavaScript bug!)  
// ✅ Symbol (ES6) → Unique identifiers

let id = Symbol("unique");  
console.log(typeof id); // "symbol"
// ✅ BigInt (ES11) → For handling very large numbers


let bigNum = 12345678901234567890n;  
console.log(typeof bigNum); // "bigint"


// 🔹 Reference Data Types (Stored by Reference in Memory)
// ✅ Objects → Collections of key-value pairs

let person = { name: "Ishaan", age: 25 };  
console.log(typeof person); // "object"
// ✅ Arrays → Lists of values

let colors = ["red", "blue", "green"];  
console.log(typeof colors); // "object"
// ✅ Functions → Special objects that can be executed



function greet() {  
    console.log("Hello, JavaScript!");  
}  
console.log(typeof greet); // "function"