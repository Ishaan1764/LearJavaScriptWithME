//TODO: Switch Case:

//How does it work?
/**
    1. switch keyword: It evaluates an expression (like a variable) and compares its valu
    2. against multiple case options.
    3. case keyword: Each case represents a possible value.
    4. break statement: Stops the code from running into the next case.
    5. default case: Runs if no other case matches — similar to an "else" in if...else
 */

let size = 'medium';

switch (size) {
    case 'small':
        console.log('You ordered a Small Coffee ☕');
        break;
    case 'medium':
        console.log('You ordered a Medium Coffee ☕');
        break;
    case 'large':
        console.log('You ordered a Large Coffee ☕');
        break;
    default:
        console.log('Invalid size! Please choose small, medium, or large.');
}

// Output: You ordered a Medium Coffee ☕


/**
Explanation:
    1.The switch compares the value of size with each case.
    2.When a match is found, the code inside that case executes.
    3.break: prevents the code from falling through to the next cases. Without it, all cases after the match would run too!
    4:default acts like an "else" — it runs if none of the cases match.
 */