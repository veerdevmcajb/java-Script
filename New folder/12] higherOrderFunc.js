
/* 
!------------------------ Higher Order Functions -----------------------

Higher-order functions are functions that satisfy any of the following conditions. 
1) Takes other functions as arguments.(eg callbacks) or
2) Returns a function as a result. (closure or currying)


* Functions as First-Class Citizens meaning:=>
In JS all functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.
*/
 
// ? Example of a higher-order function taking another function as an argument

function repeatOperation(times, operation) {
  for (let i = 0; i < times; i++) {
    operation();
  }
};

repeatOperation(3, () => console.log("Hello!"));
// Output: "Hello!" printed 3 times

// Returning Functions:
// Higher-order functions can also return functions, either directly or by creating and returning a closure.

 
// Example of a higher-order function returning another function
function createGreeting(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const greetHello = createGreeting("Hello");
greetHello("Alice"); // Output: "Hello, Alice!"




function makeMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = makeMultiplier(2);
console.log(double(5));  // 10



//?--------  Advantages of Higher-Order Functions -----------

// -  Abstraction and Reusability : Higher-order functions allow you to abstract common patterns into reusable functions.
// -  Composition : They enable function composition, where you create new functionality by combining simpler functions.
// -  Flexibility : Higher-order functions provide flexibility in how functions interact, leading to more expressive and concise code.


//!   Real-World Use

//* -  Array Methods like `map`, `filter`, `reduce` : These are native JavaScript higher-order functions that operate on arrays, taking a callback function to apply to each element.
   
  const numberss = [1, 2, 3, 4, 5];
  const doubled = numberss.map(number => number * 2); // [2, 4, 6, 8, 10]
   

//* -  Asynchronous Programming with Promises : Functions like `.then()` and `.catch()` in Promises are higher-order functions, taking callbacks to handle fulfilled or rejected states.  
   
  // fetch('https://api.example.com/data')
  //   .then(response => response.json())
  //   .then(data => console.log(data));
   

//* -  Event Handlers : Adding event listeners to DOM elements, where the listener function is a higher-order function taking the event handling function as an argument.
  
   
  document.getElementById('myButton').addEventListener('click', () => {
    console.log('Button clicked!');
  });



// 1. Functions as First-Class Citizens
// In JavaScript, functions can be assigned to variables, passed as arguments, and returned from other functions.
const logMessage = () => console.log("Hello, world!");
const executeFunction = (fn) => fn(); // Higher-order function taking a function as an argument
executeFunction(logMessage); // Output: "Hello, world!"

// 2. Taking Functions as Arguments
// Higher-order functions can abstract over actions, not just values. They can be used to implement common patterns.
function repeat(times, fn) {
  for (let i = 0; i < times; i++) {
    fn(i); // Calling the passed-in function for each iteration
  }
}

// Using `repeat` to log a message multiple times
repeat(3, (iteration) => console.log(`Iteration: ${iteration}`));
// Output: Iteration: 0
//         Iteration: 1
//         Iteration: 2

// 3. Returning Functions
// Higher-order functions can also return new functions.
function multiplier(factor) {
  return function(number) {
    return number * factor; // The returned function forms a closure over `factor`
  };
}

// Creating a doubler function
const doubler = multiplier(2);
console.log(doubler(5)); // Output: 10

// 4. Example: Array.prototype.map
// The `map` function is a standard higher-order function in JavaScript that transforms arrays.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 5. Example: Custom Higher-Order Function
// A higher-order function for filtering array elements based on a predicate
function filterArray(array, test) {
  const filtered = [];
  for (const item of array) {
    if (test(item)) {
      filtered.push(item);
    }
  }
  return filtered;
}

// Using `filterArray` to find even numbers
const evenNumbers = filterArray(numbers, (number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

