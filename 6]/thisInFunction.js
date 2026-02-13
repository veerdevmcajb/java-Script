//todo----   Understanding the 'this' keyword in the context of JavaScript Functions

/*
  In JavaScript, the value of 'this' within a function depends on how the function is called.
*/


// 1. Global Context
function showGlobalContext() {
  // In a regular function call in the global scope, 'this' refers to the global object. (Node environment) 
  // In a browser, the global object is 'window'. (Browser environment)
  // console.log(this === window); // true in a browser environment
  console.log(this === global); // true in a Node environment
}
showGlobalContext();


// 2. Function Context Inside an Object (Method)
const myObject = {
  myMethod: function () {
    // Inside a function that is a property of an object, 'this' refers to the object itself.
    console.log(this === myObject); // true
  },
};
myObject.myMethod();


// 3. Constructor Functions
function MyConstructor() {
  // In a constructor function, 'this' refers to the newly created object instance when called with 'new'.
  this.myProperty = "value";
  console.log(this === MyConstructor);//false
}
// new MyConstructor();

const myInstance = new MyConstructor();
console.log(myInstance.myProperty); // 'value'

// 4. Indirect Invocation: call() and apply()
function childFunc(arg1, arg2) {

  console.log(this.daddy, arg1, arg2);

};

// Calling the function without a object.
childFunc("Hey ", "Hello!");


const parentObj = { 
  daddy: "This is a xyz" 
};

// Using call() to specify 'this' explicitly
//todo ----------    The call() method of Function instances calls this function with a given this value and arguments provided individually.
childFunc.call(parentObj, "Hello", "Guys"); // 'This is a daddy arg1 arg2'

// Using apply() similarly, but arguments are passed in an array
//todo ------  The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).

childFunc.apply(parentObj, ["Hello", "Guys"]); // 'This is a daddy arg1 arg2'


// 5. The bind() Method
// The bind() method creates a new function with 'this' set to the provided value.
//todo -------- The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.

const boundchildFunc = childFunc.bind(parentObj, "arg1");
boundchildFunc("arg2"); // 'This is a daddy arg1 arg2'

// 6. Arrow Functions
const arrowFunction = () => {
  // Arrow functions do not have their own 'this'. They inherit 'this' from the parent scope at the time they are defined.
  console.log(this === window); // true in a browser environment
};
arrowFunction();


// 7. Event Handlers
// In DOM event handlers, 'this' refers to the element that received the event.
// document.getElementById('myButton').addEventListener('click', function() {
//   console.log(this === document.getElementById('myButton')); // true
// });

// 8. Strict Mode

function showStrictModeContext() {
  "use strict";
  // In strict mode, 'this' remains undefined if not set by the call
  console.log(this); // undefined
}
showStrictModeContext();

/*
Please remember this --->
  The value of 'this' within functions is dynamic and determined by the invocation context. Regular function calls, method calls, constructor functions, indirect invocations, and arrow functions each have rules for determining 'this'. Understanding these rules is crucial for effective JavaScript development.
*/



