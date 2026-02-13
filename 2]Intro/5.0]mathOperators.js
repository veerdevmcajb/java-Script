

//!                          Mathematical Operators in JavaScript

// Addition (+):
let sum = 5 + 3; // 8
console.log("Addition Result:", sum); 

// Subtraction (-):
let difference = 10 - 4; // 6
console.log("Subtraction Result:", difference);

// Multiplication (*):
let product = 7 * 2; // 14
console.log("Multiplication Result:", product);

// Division (/):
let quotient = 20 / 5; // 4
console.log("Division Result:", quotient);

// Modulus (Remainder) (%):
let remainder = 17 % 3; // 2
console.log("Modulus Result:", remainder);

// Increment (++) and Decrement (--):
let counter = 5;
counter++;
console.log("Increment Result:", counter); // 6

counter--;
console.log("Decrement Result:", counter); // 5

// Exponentiation (**) - ES6/ES2016:
let powerResult = 2 ** 3; // 2^3 = 8
console.log("Exponentiation Result:", powerResult);

//?-------------- Right-to-Left Evaluation Example:

let resultRightToLeft = 2 ** 3 ** 2; // Equivalent to 2 ** (3 ** 2)
console.log("Right-to-Left Result:", resultRightToLeft); // 512

//?------------- Left-to-Right Evaluation Example:

let resultLeftToRight = 2 * 3 / 2; // Equivalent to (2 * 3) / 2
console.log("Left-to-Right Result:", resultLeftToRight); // 3

//!                      Operator Precedence:

// Mathematical operators follow a specific precedence order.

// Example 1:
let precedenceExample1 = 2 + 3 * 4; // Multiplication has higher precedence than addition.
console.log("Precedence Example 1:", precedenceExample1); // 14

// Example 2:
let precedenceExample2 = (2 + 3) * 4; // Parentheses have the highest precedence.
console.log("Precedence Example 2:", precedenceExample2); // 20

// Example 3:
let precedenceExample3 = 2 * (3 % 2); // Modulus has higher precedence than multiplication.
console.log("Precedence Example 3:", precedenceExample3); // 0
