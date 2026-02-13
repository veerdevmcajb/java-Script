
/*
!----------------- Closure Funcitons --------------------

Definition = Closures are a programming pattern in JavaScript that allows variables from an outer lexical scope to be used inside of a nested block of code.

? Simply - The inner function has the access to the scope of the outer function. That means all the functions in the JS are the closure functions.
 
---- JavaScript supports closures transparently, and they are often used without knowing what they are.

Simple steps:-
---- A closure is a function that remembers its outer variables and can access them.
---- That is: they automatically remember where they were created using a hidden property called [[Environment]], and then their code can access outer variables.
---- In JavaScript, all functions are naturally closures (there is only one exception, to be covered in The "new Function" syntax).

*/
//!-------------- Closures --------------------

/*
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables.
Closures are created every time a function is created, at function creation time.
*/

// Basic Example of Closure
function outerFunction(outerVariable) {
  // This is the outer scope

  return function innerFunction(innerVariable) {
    // This is the inner scope, forming a closure with the outer scope
    console.log('Outer Variable: ' + outerVariable);
    console.log('Inner Variable: ' + innerVariable);
  };
}

const newFunction = outerFunction('outside');
newFunction('inside');
// Output: Outer Variable: outside
//         Inner Variable: inside

// How Closures Work
/*
1. An inner function is defined inside the body of an outer function.
2. The inner function has access to the variables of the outer function.
3. Variables in the outer function have been closed by (enclosed within) the inner function.
*/

// Eg. Data Encapsulation
function createCounter() {
  let count = 0; // `count` is a private variable created by the closure

  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1

let counttttt = createCounter();
counttttt.decrement();




//? Advantages of Closures
/*
- Data Encapsulation: Closures provide a way to create private variables and methods, enhancing object data privacy and security.
- Maintaining State: Closures help in maintaining state in asynchronous operations without polluting the global scope.
*- Currying: Closures are used in currying, where a function with multiple arguments is transformed into a sequence of functions.
*/

// Example: Closures in Event Handlers
document.getElementById('myButton').addEventListener('click', (function() {
  let count = 0; // `count` is enclosed in the closure created by this IIFE

  return function() {
    count++;
    console.log('Button clicked ' + count + ' times');
  };
})());

/*
- Closures enable functions to capture and maintain their lexical scope, even when they are executed outside of their defining scope. 
- This makes closures incredibly useful for tasks like data encapsulation, state management, and functional programming patterns.
*/


// !----------------- Practice --------------------


//* See this example in the visualizer.
//? https://www.jsv9000.app/
//? https://ui.dev/javascript-visualizer/

{
function makeCounter() {
  let count = 0;  // new memory location on each fresh execution
  // console.log("Hey I will execute again and create new context and memory locations for myself")
  return function increment() {
    count = count +1;
    return count;
  };
}

let counter = makeCounter(); // count location abc1 = 0

console.log(counter()); // 1 -> location abc1 means 0++ //?makeCounter() increment()
console.log(counter()); // 2

counter = makeCounter();// count location abc2 = 0
console.log(counter()); // 1 -> location abc2 means 0++
console.log(counter()); // 2

makeCounter(); // count location abc3 = 0
makeCounter(); // count location abc4 = 0
makeCounter(); // count location abc5 = 0
makeCounter(); // count location abc6 = 0

console.log(counter()); // 3 -> location abc2 means 2++

}

//  Here the count gets incremented. Reason for this is the internal hidden property in hidden object known as Lexical Environment -Outer_Environment_Context which stores the context of the environment in which the function is written.

// Here in first step the counter() call will execute the function and the count variable is not found in its own lexical environment then it refers to the [[Environment]] property and there it finds the reference to the parent function in which it was called then it finds value for Count in the context of the calling function that is makeCounter in there , then it increments the actual variable. Then at this point of time the values for the variable in the context that was made for the makeCounter gets updated.

// Here the makeCounter's context is alive because as per the Garbage Collector the context/object is not cleared till there is some reference using which it is reachable. Here that reference is the hidden [[Environment]] property of the closure function.

// In next step the innermost function stores the outer contex in its own environmnet variable. This happens only once to fill the environment variable.

// In the next step For further calls it will find the variable in its own lexical environment context or outer environment context and founds in the outer environment context but in the Environment variable and with the old value that was incremented thus it returns the old value with one incrementation. thus it only updates the orignal variable using the reference from own environment.

// In next call the count will be taken from the context of anonymous function which has its old value stored in its environment.

function f() {
  let x = Math.random();

  return function () {
    console.log(x);
  };
}

// 3 functions in array, every one of them links to Lexical Environment
// from the corresponding f() run
let arr = [f(), f(), f()];
console.log(arr[0](), arr[1](), arr[2]());
console.log(arr[0](), arr[1](), arr[2]());
console.log(arr[0](), arr[1](), arr[2]());

// In above example the array stores the closure functions from multiple calls to the func f().
// Just because the closure functions are stored in the array and the x is reachable from that anonymous closure function, the x for each function call will be reachable and the memory for that variable will not be cleared. So we can access the respective x with the help of respective closure function call.
// This can be considered equal to something like each closure function accesses the outer variable as its own variable. Although its technically alot different.


function mult(a) {

  return function (b) {
    return a*b;
  }
  
}
console.log((mult(2),(5)));

let res=mult(2);
console.log(res(5));



function mult(a){
 
  function cal(b=10){
    return a*b;
  }
  return cal()
}
console.log(mult(2));


function outer(){
  console.log("outer fun");

  return function(){
    console.log("inner fun");
    
  }
}
let r = outer();
r();
console.log(r());

function mult(a){
  function(b){
    a*b;
  }
}

