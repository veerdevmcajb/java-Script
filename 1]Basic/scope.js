// scopes.js

// Variable scope type

// Example 1: Using var in the global scope

var globalVar = "I am a global variable";


function exampleVar() {
  // Variables declared with var are function-scoped
  var localVar = "I am a local variable";

  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

exampleVar();

console.log(localVar); 
// Uncommenting this line would result in an error since localVar is not accessible outside the function scope.

// Example 2: Using let in block scope
function exampleLet() {
  // Variables declared with let are block-scoped
  let ravi = "I am watchmen";

  // Re-initialization of let is allowed inside the same scope  
  ravi = "Please call me ravi watchmen";

  console.log(ravi); // Accessible outside the block

  if (true) {
    let ravi = "I am brother";
    console.log(ravi); // Accessible inside the block
  }  
}

exampleLet();



// Example 3: Using const for constants
const pi = 3.14;

// pi = 3.14159; // Uncommenting this line would result in an error since const variables cannot be reassigned.

// Example 4: Hoisting with var
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

// Example 5: Hoisting with let and const
// console.log(hoistedLet); // Uncommenting this line would result in a ReferenceError since let and const are not hoisted.
// let hoistedLet = "I am not hoisted";

// Summary:
// - var is function-scoped and is hoisted to the top of its function.
// - let is block-scoped and is hoisted to the top of its block.
// - const is block-scoped and cannot be reassigned after initialization.

