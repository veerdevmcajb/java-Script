
//! ----------------------------- Nested functions

/* 
? Definition = Nested functions refer to the concept of defining a function inside another function.
- The inner function has access to the variables and parameters of the outer function. It means the inner function has the access to the scope of the outerfunciton. 
- This is possible due to the lexical scoping in JavaScript, which means that the inner function "closes over" the outer function's scope.

Syntax =>>

function outerFunction(outerParam) {
  Outer function code

  function innerFunction(innerParam) {
    Inner function code
  }

  More outer function code
}

? Explanation:
outerFunction: The outer function can have parameters, local variables, and its own code.
innerFunction: The inner function is defined inside the outer function and has access to its parameters and variables.

*/

function outerFunction(outerParam) {
  console.log('Outer Param:', outerParam);

  function innerFunction(innerParam) {
    console.log('Inner Param:', innerParam);
  }

  innerFunction('Nested Param');
}

outerFunction('Outer Argument');

// In this example, calling outerFunction with an argument triggers both the outer and inner functions, demonstrating their interaction.


//! Returning from the nested function


function outerFunction2(outerParam) {

  // console.log('Outer Param:', outerParam); // Abhishek

  function innerFunction2(innerParam) {
    let fullName = outerParam + " " + innerParam; // Abhishek Dhone 
    return fullName;    
  }

  return innerFunction2('Dhone');
}

let customerName = outerFunction2('Abhishek'); 
console.log(customerName)


//! ----------------------------- Callback functions



/*

? Definition = Callback functions are functions passed as arguments to other functions. 
They are used to execute code asynchronously "OR" to handle actions upon completion of certain events.


Syntax:

function doSomethingAsync(callback) {
  // Async operation, then execute the callback
  // ...
  callback(result);
}


? Explanation:


doSomethingAsync: This function performs an asynchronous operation.
callback: The callback function is passed as an argument and will be executed when the asynchronous operation is complete.

*/

//* Practice example

function marotiGarland(flower){
  return "Garland  by Maroti made of "+ flower;
}

function tusharGarland(flower){
  // console.error(error);
  // Execution stops here.
  
  return "Garland by Tushar made of "+ flower;
}

//? Main function here
function vinayFlowers(callback, flower){
  // Fetch flowers
  // I have got Roses
 return callback(flower);
}


let garland = vinayFlowers(marotiGarland, "Roses")

// let garlandByTushar = vinayFlowers(tusharGarland, "Marigold")

console.log(garland);
console.log(garlandByTushar);



//? Example 1: Basic Callback Function

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function farewell() {
  console.log("Goodbye!");
}

console.log("Example 1: Basic Callback Function");
greet("John", farewell);
console.log("------------------------");



//? Example 2: Callback with Parameters

//? father

function calculate(x, y, operation, callback) {
  const result = operation(x, y);  //8
  callback(result);
}

function addition(a, b){
  return a+b;
}

function displayResult(abc) {
  console.log(`Result: ${abc}`);
}

calculate(5, 3, addition, displayResult);

// console.log("Example 2: Callback with Parameters");




// console.log("------------------------");



//? Example 3: Function with Multiple Callbacks

function performOperation(a, b, operationCallback) {
  const result = operationCallback(a, b);
  console.log('Result: ' + result);
}

console.log('Example 4: Function with Multiple Callbacks');

function addCallback(x, y) {
  return x + y;
}

function multiplyCallback(x, y) {
  return x * y;
}

performOperation(3, 4, addCallback); // Add numbers: 3 + 4
performOperation(5, 6, multiplyCallback); // Multiply numbers: 5 * 6
console.log('------------------------');

  

  //! -------------- Advanced topics to be seen after asynchronous JS

  // Example 3: Asynchronous Callback
  function fetchData(callback) {
    setTimeout(() => {
      const data = "Async Data";
      callback(data);
    }, 2000);
  }
  
  console.log("Example 3: Asynchronous Callback");
  fetchData((result) => {
    console.log(`Fetched Data: ${result}`);
  });
  console.log("------------------------");
  
  // Example 4: Callback Hell (Avoided using Promises)
  function step1(callback) {
    setTimeout(() => {
      console.log("Step 1 Complete");
      callback();
    }, 1000);
  }
  
  function step2(callback) {
    setTimeout(() => {
      console.log("Step 2 Complete");
      callback();
    }, 1500);
  }
  
  function step3(callback) {
    setTimeout(() => {
      console.log("Step 3 Complete");
      callback();
    }, 800);
  }
  
  console.log("Example 4: Callback Hell (Avoided using Promises)");
  step1(() => {
    step2(() => {
      step3(() => {
        console.log("All Steps Completed");
      });
    });
  });
  console.log("------------------------");
  
  // Example 5: Higher-Order Function with Callback
  function multiplier(factor) {
    return function (number, callback) {
      const result = number * factor;
      callback(result);
    };
  }
  
  const double = multiplier(2);
  
  console.log("Example 5: Higher-Order Function with Callback");
  double(7, displayResult);
  console.log("------------------------");
  
  
//! ------------------------ Nested Functions and Returns

function multFn() {
  var mult = 9;
  return function (val) {
    mult = mult * val;
    undeclared = mult;
    return mult;
  };
}

multFn();
var mul = multFn(); // Here this Mul actually holds the function returned by multFn.
console.log(mul(4));
// console.log(mult); // This will give an error because mult is a var and var is func scoped.
// output = 36

// Local variables of the function.
// A variable declared inside a function is only visible inside that function. Be it any (var, let, const), except the undeclared variable because it will have the global scope and thus created on global object and accessible everywhere throughout the code through the scope chain. (In detail in Scope notes).

//? Functionn declaration and initialization using variables

function showMessage() {
  let message = "Hello, I am Abhishek Dhone"; // Local Variable.
  console.log(message);
}

showMessage();

// console.log(message); This will show reference error as message not defined.



Say("Abhi")

function Say(Name){
  console.log(Name);
}


//!Error
// let Say = function(Name){
//   console.log(Name)
// }
