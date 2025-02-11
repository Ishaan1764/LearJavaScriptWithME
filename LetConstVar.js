// Global Scope
var globalVar = "I am a var";
let globalLet = "I am a let";
const globalConst = "I am a const";

console.log("🌍 Global Scope:");
console.log(globalVar);  //  Accessible
console.log(globalLet);  // Accessible
console.log(globalConst); // Accessible

console.log("-----------------------------")
function testScope() {
    // Function Scope
    var functionVar = "Function var";
    let functionLet = "Function let";
    const functionConst = "Function const";

    console.log("\n Inside Function:");
    console.log(functionVar);  // Accessible
    console.log(functionLet);  // Accessible
    console.log(functionConst); // Accessible
    console.log("-----------------------------------")

    if (true) {
        // Block Scope
        var blockVar = "Block var (Ignores Block Scope)";
        let blockLet = "Block let";
        const blockConst = "Block const";

        console.log("\n Inside Block:");
        console.log(blockVar);  // Accessible inside block
        console.log(blockLet);  // Accessible inside block
        console.log(blockConst); // Accessible inside block
        console.log("----------------------------------------")
    }

    console.log("\n Outside Block but Inside Function:");
    console.log(blockVar);  // Still accessible (var ignores block scope)
    // console.log(blockLet);  Error (let is block-scoped)
    // console.log(blockConst); Error (const is block-scoped)
    console.log("-------------------------------------------------")
}

testScope();
console.log("Out Side Function NO one is Accessible")
console.log("----------------------------------------------")
// console.log(functionVar); Error (var is function-scoped)
// console.log(functionLet); Error (let is function-scoped)
// console.log(functionConst);Error (const is function-scoped)

// Reassignment and Redeclaration
var globalVar = "Re-declared var"; //  Allowed
console.log("\n Redeclaring var:", globalVar);

// let globalLet = "Re-declared let";  Error (Cannot redeclare let)
globalLet = "Reassigned let";  //Allowed
console.log(" Reassigning let:", globalLet);

// const globalConst = "Re-declared const";  Error (Cannot redeclare const)
// globalConst = "Reassigned const";  Error (Cannot reassign const)
console.log(" const remains unchanged:", globalConst);
