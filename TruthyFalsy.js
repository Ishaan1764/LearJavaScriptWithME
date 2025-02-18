//TODO: TRYTHY  V/S  FALSY


//? FALSY: 
/**
 * always falsy:
 * false
 * 0 (zero)
 * -0 (minus zero)
 * 0n (BigInt zero)
 * "" (empty string)
 * null
 * undefined
 * NaN
 */

/**
 * if (false) console.log("False is truthy?");  // ❌ Doesn't run

if (0) console.log("0 is truthy?");  // ❌ Doesn't run
if (-0) console.log("-0 is truthy?");  // ❌ Doesn't run

if ("") console.log('Empty string "" is truthy?');  // ❌ Doesn't run

if (null) console.log("null is truthy?");  // ❌ Doesn't run
if (undefined) console.log("undefined is truthy?");  // ❌ Doesn't run

if (NaN) console.log("NaN is truthy?");  // ❌ Doesn't run

 */







//? Truthy values are values that are evaluated to be true when used in a Boolean context. Simply put, any value that is not explicitly falsy is considered truthy.

if (" ") console.log("Truthy!");  // ✅ Runs (Non-empty string)
if ([]) console.log("Truthy!");   // ✅ Runs (Empty array is truthy)
if ({}) console.log("Truthy!");   // ✅ Runs (Empty object is truthy)

// Common JavaScript Gotchas
/**
 *  0 == false // ✅ true (Because 0 is falsy)   
    "" == false // ✅ true (Empty string is falsy)
    [] == false // ✅ true (Wait, what?! 😵‍💫)
    🚀 Key Takeaways
    ✅ [] == false is true because JavaScript:
    1️⃣ Converts false to 0.
    2️⃣ Converts [] to "" (empty string).
    3️⃣ Converts "" to 0.
    4️⃣ Compares 0 == 0, which is true.


    TO AVOID THIS ALWAYS USE:

    Use strict equality (===), which does NOT perform type coercion:
    console.log([] === false); // ❌ false (Different types: Array vs Boolean)

    { } == false // ❌ false (Objects are always truthy)
 */
