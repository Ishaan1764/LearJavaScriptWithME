//TODO: If-else

//TODO 1: Simple If Statement : used when we just have to check only single condition
let temperature = 30;

if (temperature > 25) {
    console.log("It’s a hot day! 🌞");
}


//TODO 2: if...else Statement: When you have two possible outcomes.
let score = 70;

if (score >= 50) {
    console.log("You passed! 🎉");
} else {
    console.log("Better luck next time. 📚");
}
//^ thic code will print You Passed as if " if " condition is correct it will not check "else" part.

//TODO 3: if...else if...else Chain
let grade = 70;

if (grade >= 90) {
    console.log("A Grade 🏆"); // will not be printed as 70 doesnot satisfies the situation
} else if (grade >= 75) {
    console.log("B Grade 🌟");// will not be printed as 70 doesnot satisfies the situation
} else if (grade >= 50) {
    console.log("C Grade 📘"); // will be Printed as 70 is greater than 50 but less than 75 
} else {
    console.log("F Grade ❌");
}


//^ if the first "if" is false it will go to the "else if" if it is true it will print that part and will not go further but if false then same thing continues.(If nothing works then "ELSE" works.)

//TODO 4: Nested if Statements: When one condition depends on another.
let age = 20;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
    console.log("You can drive! 🚗");
    } else {
    console.log("Get a license first! 📝");
    }
} else {
    console.log("You’re too young to drive. ⛔");
}

//^ Here. firtly the outer if will be Checked if true then it will go to inner if but if false then the outer else will work.





