//!-------------------------- Hoisting in Javascript

/*
Power of hoisting
Function = name, declaration and initializaion.
Var = only declaration and name
let const = only name
*/

/* Basiccs Of Hoistings =>

- Hoisting is a BEHAVIOUR where variable and function declarations are moved to the top of their containing scope during compilation.

- Only the declarations are hoisted, not the initializations for Var.

- Hoisting works differently for var, let, const, function declarations, and function expressions.

- 'var' is function-scoped and hoisted throughout the function, while 'let' and 'const' are block-scoped.

- 'let' and 'const' exhibit a TDZ (Temporal Dead Zone) where accessing them before declaration results in an error.

- It's good practice to declare variables at the top of their scope to avoid unexpected behavior due to hoisting.

- Functions are hoisted before variables.

*/

// Example 1: Variable Hoisting with var
console.log(nameVar); // Output: undefined
var nameVar = "John";
console.log(nameVar); // Output: John

console.log(insideVar); // Reference error.

function varHoist(){
  // Only hoisted till here.
  console.log(insideVar);
  var insideVar = 'abc';
}

/*
Explanation:
- Variables declared with 'var' are hoisted to the top of their scope with an initial value of 'undefined.'
- The first console.log outputs 'undefined' as the variable is hoisted but not yet assigned.
- The second console.log outputs the actual value after assignment.
*/

// Example 2: Variable Hoisting with let
// console.log(ageLet); // Error: Cannot access 'ageLet' before initialization
let ageLet = 30;
console.log(ageLet); // output : 30

/*
Explanation:
- Variables declared with 'let' are hoisted to the top of their scope but are not initialized (TDZ - Temporal Dead Zone).
- Accessing the variable before the declaration results in an error.
*/

// Example 3: Variable Hoisting with const
// console.log(cityConst); // Error: Cannot access 'cityConst' before initialization
const cityConst = "Paris";

/*
Explanation:
- Variables declared with 'const' behave similarly to 'let' in terms of hoisting and the TDZ.
- Accessing the variable before the declaration results in an error.
*/

// Example 4: Variable Hoisting in Block Scopes

console.log(firstName);
{
  console.log(firstName); // Output: undefined
  var firstName = "Alice";
  console.log(firstName); // Output: Alice
}

/*
Explanation:
- Variables declared with 'var' in block scopes are hoisted to the top of the function or global scope.
- The first console.log outputs 'undefined' as the variable is hoisted but not yet assigned.
- The second console.log outputs the actual value after assignment.
*/

// Example 5: Variable Hoisting in Block Scopes with let and const
{
  // console.log(lastName); // Error: Cannot access 'lastName' before initialization
  let lastName = "Smith";

  // console.log(country); // Error: Cannot access 'country' before initialization
  const country = "Canada";
}

/*
Explanation:
- Variables declared with 'let' and 'const' in block scopes are hoisted but remain uninitialized in the TDZ.
- Accessing the variables before the declaration results in an error.
*/

// Example 1: Variable Hoisting

console.log(age); // Output: undefined
var age = 25; // Variable declaration and assignment
console.log(age); // Output: 25

/*
Explanation:
- When the code is executed, the variable declaration (var age) is hoisted to the top of the scope.
- The initial value is not hoisted, so the first console.log outputs 'undefined.'
- After the assignment, the second console.log outputs the actual value (25).
*/



//!------------------------ Advanced hoisting with functions.



// Example 2: Function Declaration Hoisting
sayHello(); // Output: "Hello, John!"
// sayBye();

function sayHello() {

  sayBye();
  
  console.log("Hello, John!");

  function sayBye(){
    console.log("Bye John")
  };
}

/*
Explanation:
- Function declarations are hoisted entirely, including both the declaration and the function body.
- The function can be called before its actual placement in the code.
*/

// Example 3: Function Expression Hoisting

sayBye();       // Bye Bye

//  sayHi();     // Error: sayHi is not a function ---  
// if sayHi = ""; it will not throw error -  undefined


constSayBye();  // ReferenceError: Cannot access 'constSayBye' before initialization

noSuchFunction(); // ReferenceError: noSuchFunction is not defined

// Normal function declaration
function sayBye(){
  console.log("Bye Bye");
}

var sayHi = function () {
  console.log("Hi!");
};

// Function as a variable.
const constSayBye = function (){
  console.log("Bye Bye");
}



/*
Explanation:
- Function expressions are partially hoisted.
- Only the variable declaration (var sayHi) is hoisted, not the function assignment.
- Attempting to call the function before the assignment results in an error.
*/

// Example 4: Hoisting in Block Scopes (let and const)
// console.log(job); // Error: Cannot access 'job' before initialization
let job = "Developer";

/*
Explanation:
- Variables declared with let and const are also hoisted, but they are not initialized (TDZ - Temporal Dead Zone).
- Accessing the variable before the declaration results in an error.
*/

// Example 5: Hoisting with Var in Functions
function exampleFunction() {
  console.log(name); // Output: undefined
  var name = "Alice";
  console.log(name); // Output: Alice
}

exampleFunction();

/*
Explanation:
- Hoisting occurs within the function scope as well.
- The first console.log outputs 'undefined' as the variable is hoisted but not yet assigned.
- The second console.log outputs the actual value after assignment.
*/

// Example 6: Hoisting in Nested Scopes
function outerFunction() {
  console.log(innerVariable); // Output: undefined
  var outerVariable = "I'm in the outer function!";

  function innerFunction() {
    console.log(outerVariable); // Output: "I'm in the outer function!"
    var innerVariable = "I'm in the inner function!";
  }

  innerFunction();
}

outerFunction();

/*
Explanation:
- Variables are hoisted to their respective scopes, including nested scopes.
- The first console.log in the outer function outputs 'undefined' for the innerVariable.
- The second console.log in the inner function outputs the value of the outerVariable.
*/

// Example 7: Hoisting with ES6 let and const
// console.log(city); // Error: Cannot access 'city' before initialization
let city = "New York";

/*
Explanation:
- Variables declared with let and const also exhibit hoisting behavior but remain uninitialized in the TDZ.
- Accessing the variable before the declaration results in an error.
*/

// Example 8: Function Hoisting with ES6 Arrow Functions
// greet(); // Error: greet is not a function

let greet = () => {
  console.log("Hello!");
};

/*
Explanation:
- Arrow functions used in variable assignments are not hoisted, resulting in an error if called before the assignment.
*/

//! ********************** Temporal Dead Zone


//! For let

let letValue; // Declared

// Temporal dead zone starts here
console.log(letValue);
console.log(letValue);
console.log(letValue);

letValue = "I am the let variable";
// TDZ ends here.

console.log(letValue);

//! For var 

// Temporal dead zone starts here

console.log(varValue);
console.log(varValue);
console.log(varValue);

var varValue; // Declared

console.log(varValue);
console.log(varValue);

varValue = "I am the var variable";
// TDZ ends here.

console.log(varValue);
