//! Declaraction, Initialization and Call

//? Definition - In JavaScript, a function is a reusable block of code that performs a specific task or set of tasks.

// Function Declaration and Definition:
// A function is typically declared and defined using the function keyword.
// The basic syntax is as follows:

// function functionName(parameters) {
  // code to be executed
// }

//? Example:

function greet(name) {
  console.log("Hello, " + name + "!");
}

//Todo- Three Ways to Initialize a Function:

//? 1) Function Declaration:

function add(a, b) {
  return a + b;
}

var resultAdd = add(3, 5); // resultAdd is 8
console.log("Result of addition:", resultAdd);




//? 2) Function Expression:

var subtract = function (a, b) {
  return a - b;
};

//console.log(subtract(5,2));
var resultSubtract = (subtract(8, 3)); // resultSubtract is 5
console.log("Result of subtraction:", resultSubtract);



//? 3) Arrow Function:

const multiply = (a, b) => a * b;
var resultMultiply = multiply(4, 6); // resultMultiply is 24
console.log("Result of multiplication:", resultMultiply);



//? Function Parameters and Return Values:

let x = 3;
let y = 5;

// Functions can accept parameters (inputs) and return values (outputs).
function add(a, b) {
  a = a * a;
  b = b * b;
  return a + b;
}

// Passing direct values

var result = add(3, 5); // result is 8
console.log(result);

// Passing arguments as primitive variables. ( pass by value ) 
result = add(x, y); // result is 8
console.log(result);

// Checking if outer variables changed.
console.log(x , y);


//? Function Invocation or calling a function :

// Functions are invoked (called) using parentheses ().
greet("John"); // Outputs: Hello, John!



//? Function Scope:

// Variables declared inside a function are typically local to that function,
// and they are not accessible outside of it.
function example() {
  var localVar = 10;
  console.log(localVar); // 10
}



//? Function as First-Class Citizens:

// In JavaScript, functions are first-class citizens, meaning they can be
// assigned to variables, passed as arguments to other functions,
// and returned from functions.


/* 
functions are considered first-class citizens when they can be treated like any other data type, such as numbers, strings, or objects. This means that functions can be:
Assigned to variables: Functions can be stored in variables, making them easily accessible and re-usable.
Passed as arguments: Functions can be passed as arguments to other functions.
Returned from functions: Functions can be the result of another function
*/


//? Anonymous Functions:

// Functions without a name are called anonymous functions.
// They are often used as arguments in other functions
// or as immediately invoked function expressions (IIFE).

var square = function (x) {
  return x * x;
};

var resultSquare = square(3); // resultSquare is 9
console.log("Result of squaring:", resultSquare);

// A basic example of function declaratrion and function call.



//! Function declaration and initializaiton usin function keyword.

let outerSum;

function addition() {
  var a = 2;
  var b = 3;
  var c = a + b;
  globaSum = a + b + c; // not a good practice.
  outerSum = a + b;
  console.log(c);
  return c;
}

// Function call using ()
addition();

// Getting the value from the function as a returned value.
var result = addition();
console.log("The result of addition is = ", result); // 5
console.log("The result of addition is = ", addition()); // 5

// console.log(c); // ReferenceError: c is not defined ((( Because it is inside the function scope and not in global scope))

// Creating the global variable inside the function and accessing it outside. (In global scope)
console.log("Inside global sum", globaSum);

// Changing global variable inside the function.
console.log("Outer Sum", outerSum);



//! ---------------Outer variables-------------------

// A function can access an outer variable as well, for example:
let myName = "Abhishek";
let attribute1 = "AttriORIGNAL";

console.log("Hi my name outside function is -- " + myName);
console.log(
  "Before call outside the function I am Orignal Variable -- " + attribute1
);

function showMessage2(attri1, attri2) {
  let message2 = "Hello, " + myName;
  globalMessage =
    "Hi I am Global, " +
    myName +
    "---Displayed within the function but accessed outside the function";
  myName = "Arjun";
  console.log(message2);

  console.log("I am attribute1 inside function NOT MODIFIED-- " + attri1);

  attri1 = "Attri1 inside function";
  console.log("I am attribute1 inside function MODIFIED-- " + attri1);
  return attri1;
}

let modifiedAttri = showMessage2(attribute1);
// console.log(message2); This can not be accessed.
// console.log(attri1); //This can not be accessed because it is local to a function.

console.log(
  "After call outside the function: Orignal Variable -- " + attribute1
);

// This variable remains as it is because when something is passed as the parameter to the function only the copy is passed and not the actual variable.

// Therefore actions are perfoemed only on the copies and not the orignal variables passed as the parameteres. i.e. Inside the local copy of the function.

console.log(" attri1 returned from function is -- " + modifiedAttri);
// This is the modifiedAttri that stores the return value from the function call.

console.log(globalMessage);
// This will show message because when witin the function the variable scope is not defined it is considered as the global variable.

console.log("Function changed my name to --" + myName);
// This is changed because the global scope variable outside the function writen in the main code is fully accessible within any function.


//!------------------------- Function and Parameters

// Basics:
// - Parameters are variables listed in the function definition.
// - Arguments are values passed to the function when calling it.
// - Default parameters provide a fallback value if an argument is not provided.
// - Callback functions are functions passed as arguments to other functions.

//? Example 1: Function with Parameters

function greet(name) {
  console.log("Hello, " + name + "!");
}

console.log("Example 1: Function with Parameters");
greet("John");
greet("Alice");
console.log("------------------------");

//? Example 2: Difference between Parameters and Arguments

function addNumbers(num1, num2) {
  console.log("Sum: " + (num1 + num2));
}

console.log("Example 2: Difference between Parameters and Arguments");
addNumbers(5, 7); // 5 and 7 are arguments
addNumbers(10, 20); // 10 and 20 are arguments
console.log("------------------------");

//? Example 3: Default Parameters

function greetWithDefault(name = "Guest") {
  console.log("Hello, " + name + "!");
}

console.log("Example 3: Default Parameters");
greetWithDefault(); // Uses the default parameter
greetWithDefault("Bob"); // Overrides the default parameter
console.log("------------------------");




//? Rest oprator

function claculateCart(...num){
  return num
}
console.log(claculateCart(100,200,3000,4000))



function claculateCart(num1,num2,...num){
  return num
}
console.log(claculateCart(100,200,3000,4000))


var obj = {
  user : "Abhi",
  price : 199,
}


function handleObj(anyobj){
  console.log(`here is the user ${anyobj.user} here is the price ${anyobj.price}`)
}


handleObj(obj);




//? for aarays


var myArr = [10,20,30,40]

function handleArr(anyArry){
  return (
          console.log(anyArry[0]),
          console.log(anyArry[1]),
          console.log(anyArry[2]),
          console.log(anyArry[3]))
}

handleArr(myArr);


