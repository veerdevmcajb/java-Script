/*
! ------------------- Function Currying ------------------------

/*
* Currying is a technique in which a function that takes multiple arguments and converted into multiple function calls back to back that each take a single argument.
*/

// Basic Example: Converting a simple add function into its curried form
  function add(a, b) {
  return a + b;
}

// To curry this function, we transform it into a sequence of functions, each taking one argument:

function curriedAdd(a) {
  return function(b) {
    return function(c){
      return a + b +c;
    };
  };
};


console.log(curriedAdd(5)(4)(3));

let addten = curriedAdd(10);
let add25 = addten(15);

// console.log(addten(2)(3))

// mOST POPLAR WAY.
console.log(curriedAdd(5)(3)(2)); // 10

// oTHER WAY.
const addFive = curriedAdd(5); // Partially applies '5' to 'a', returning a new function that takes 'b'
console.log(addFive(3)); // 8, 'b' is provided, the original function body is executed


/*
? Advantages of Currying
1. Reusability: Curried functions allow for creating simpler, more specific functions from general ones.
2. Readability: Currying enhances code readability by breaking down complex functions.
3. Function Composition: Curried functions are easier to compose, making a functional programming style.
*/
  
  
  //? Event Handling with Currying

  function handleWithLogging(eventName) {
    return function(event) {
      console.log(`${eventName} event occurred`);
      // Event handling logic here
    };
  }

  document.getElementById('myButton').addEventListener('click', handleWithLogging('click'));
  



  //? Configuration Function with Currying

  function createRequest(method) {
    return function(url) { //https://www.youtube.com/watch?v=g_6uGGtk3Pw
      return function(data) { 
        console.log(`Making a ${method} request to ${url} with data:`, data);
        // HTTP request logic here
      };
    };
  };


  createRequest()()();

  const postRequest = createRequest('POST');
// postRequest

  const postToUsers = postRequest('/users');

  console.log(postToUsers({ name: 'Abhishek',
  img : [1,2,3,4], }));

  postToUsers({ name: 'Rohit' });
  postToUsers({ name: 'Tushar' });
  postToUsers({ name: 'Vinay' });
  

  
  const postRequest2 = createRequest('GET');
  const postToUsers2 = postRequest('/admins');
  postToUsers2({ name: 'Abhishek' });
  postToUsers2({ name: 'Amit' });
  postToUsers2({ name: 'Datta' });
  postToUsers2({ name: 'Neha' });

  //? Generic Curry Function: Automating Currying for Any Function
 
  function curry(fn) {
    return function curried(...args) {
      // If the number of provided arguments is sufficient, call the original function
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        // Otherwise, return a function that expects the rest of the arguments
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        };
      }
    };
  };



  
  
  //? Using the generic curry function to curry the 'add' function
  const curriedAddGeneric = curry(add);
  console.log(curriedAddGeneric(5)(3)); // Outputs: 8
  

// How Currying Works
// Single-Argument Functions: In currying, a multi-argument function is broken down into a series of functions where each function takes exactly one argument.

// Partial Application: Each function in the series returns a new function that takes the next argument. 
// This process continues until all arguments have been provided, at which point the original function's body is executed with all supplied arguments.

// Lazy Evaluation: The original function is not evaluated until all arguments have been provided. Each step returns an intermediary function that captures its argument (closure) and waits for the next one.



function hello(){
  function say(){function hi(){
    console.log(this)
  };
  hi()};
  say()
}


hello()