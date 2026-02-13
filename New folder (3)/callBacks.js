//! ------------------------------ Callbacks --------------------------

/* 
? What is a CallBack.?
Ans 
- When a function "X" is used as the argument of Other function "Y" and called in that "Y" function with the processed values it is called the callback function. 
- It is also written as the parameter of the "Y" function to receive the arguments. 
- The callback function is used to do the tasks that are to be done after the "Y" function is done with its execution after the call.

? Where is it generally used.?
Ans
1) - It is also used when we pass a function to another function and that another function does not have access to the scope of the function to be called or the name is not known earlier. Eg. Array.map(xyz); Here we can pass any function as xyz which takes in and returns the desired values.
2) - When an asynchronous task / call is involved and the values or data from that call is to be used in the main JS then we use the callBack function. 
- The call back function ensures that the activity that it is going to perform is only performed after the asynchronmous task is first completed. 
- Reason being- if we try to access some variables or info that is in the asynchronous function/ task then it should not be undefined thus we make the callback function so that it will wait and gets automatically fired after the Asynchronous task. 

? Why we need the Promise, async, await if we have the callback function.?
Ans
- Because the callback function can be good for few tasks and not many tasks (Such as when nested callback is involved and many tasks take input from previous tasks). (It may cause the callback hell) thus to avoid the callback hell and for simple and clean code we need the promise and async/await to impelement asynchronous programming. 
- But this also involves the callBack functions as its backbone. 
- Rather we can say that the PAAw is the sofisticated and easy way of implementing the async programming using the callBack functions. 

Example.
*/

function plsWait(callBack) {
  console.log(" \n Hi I am inside the asynchronous function plsWait() ");
  
  setTimeout(() => {
    console.log(" I will not be printed before any plain JS for eg. Line 1");
    callBack("Abhishek");
  }, 3000);

  console.log(
    "I will get printed before the SetTimeout function and callback function."
  ); // Line 1

  // Above cl is orinted first because the JS does not wait for any asynchronous function and keep traversing the progamme therefore even though the lines are after callback function they get printed first.
  // We can not use the returns from callback function X in our Script unless the other callback Y is provided in X to take the inputs from the X's call. Thus Everything that must follow the callback must be in other call back function only and not in the Plain synchronous script.
}

function callBack(name) {
  console.log(" Inside callBack function -");
  console.log(" Hello Mr. " + name);
}

// setTimeout(() => { plsWait(callBack); }, 2000);

console.log(" Inside the Script thus Printed First. ");
console.log(
  " The value of Name is undefined before async call gets completed \n See below :- "
);

console.log(callBack());

plsWait(callBack);

{
  function plsWait(callBack) {
    console.log(" \n Hi I am inside the asynchronous function plsWait() ");
    setTimeout(callBack, 3000, "Abhishek");
  }

  function callBack(name) {
    console.log(" Inside callBack function -");
    console.log(" Hello Mr. " + name);
  }

  setTimeout(plsWait, 2000, callBack);

  console.log(" Inside the Script thus Printed First. ");
  console.log(
    " The value of Name is undefned before async call gets completed \n See below :- "
  );
  console.log(callBack());
}

/*
!                       Nested callBacks

How can we load two scripts sequentially: the first one, and then the second one after it?

The natural solution would be to put the second loadScript call inside the callback, like this:

Todo- Eg.1--> Only logic and not Executable

loadScript('/my/script.js', function(script) {

  alert(`Cool, the ${script.src} is loaded, let's load one more`);

  loadScript('/my/script2.js', function(script) {
    alert(`Cool, the second script is loaded`);
  });
});

After the outer loadScript is complete, the callback initiates the inner one.
*/

/*
!             CallBack Hell Or Pyramid of doom

? Initially, it looks like a viable approach to asynchronous coding. And indeed it is. For one or maybe two nested calls it looks fine.

But for multiple asynchronous actions that follow one after another, we’ll have code like this:

Eg-

loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continue after all scripts are loaded (*)
          }
        });

      }
    });
  }
});

In the code above:

We load 1.js, then if there’s no error…
We load 2.js, then if there’s no error…
We load 3.js, then if there’s no error – do something else (*).
As calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if we have real code instead of ... that may include more loops, conditional statements and so on.

! That’s sometimes called “callback hell” or “pyramid of doom.”
*/

// Code practice

const getCode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
      address,
    };
    callback(data);
  }, 2000);
};

// function callback(data) {
//   console.log("Data :::", data);
// }
// const data = getCode('Pune', callback);

// Using arrow function

const data = getCode("Pune", (data) => {
  console.log("Data :::", data);
});
