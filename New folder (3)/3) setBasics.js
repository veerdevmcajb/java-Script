/*
!       Scheduling: setTimeout and setInterval

We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:
1] setTimeout allows us to run a function once after the interval of time.
2] setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

These methods are not a part of JavaScript specification. But most environments have the internal scheduler and that provide these methods. Particularly, they are supported in all browsers and Node.js.

The functions writen in the set time out does not require the seperate calls the STO function will run it automaticaly after the timeout.

While the function is waiting for the execution all the remaining script will run and at last the settimeout function will run.

We can understand it form the 0 milisecond settime out function.

TODO- Imp Note- The time counted for back to back set time out is not cumuletive but rather it is counted with respect to the time when the execution has beem started. This means if there are 10 sto with 3 sec timeout the last funciton will not be printed after 30 secs rather all functions will be run after the 3 sec time is over and print in sequence just after 3 seconds. Means no gap between 2 functions.

Syntax:-  let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

*/

/*
===========================================================
? Syntax
*       setTimeout(callback function, delay, ...args)

? Behind the scene

setTimeout(callback, time, params){
    // after some TIME
    callback(params);
}

setTimeout(myCallback, 120000, "Abhishek");

function myCallback(name){
    console.log("2 mins completed ", name);
    return undefined;
}
*/
function firstSetTimeout() {
    console.log(' Hello Everyone..! I am a Lazy function so I will run after some time...');
}

function secondSetTimeout() {
    console.log(' I am also Lazy function but less lazy than the first one...');
}

function thirdSetTimeout() {
    console.log(' I am not Lazy function but setTimeout prints me at last of the script But before the lazy funcitons...');
}

setTimeout(firstSetTimeout, 3000);

// Remember that no paranthesis here () in setTimeout. Other wise it will run on time and only the Result will get displayed after timeout. In real world use we always have to delay the execution and not he display of result.

console.log(Date.now());

console.log(' I will log and not wait for the Lazy function to run. I am in hurry always.')

setTimeout(secondSetTimeout, 2000);
console.log(' Even I wont stop for any of the lazy functions.')

setTimeout(thirdSetTimeout);
console.log(' I will not wait even for 0 miliseconds.')

//* The execution of lines will be as follows :- 43, 45, 48, 51, 36, 32, 27.


//! setTimeout function with the function definition.
//? Definition as the string passed to the STO func. Here STO func automatically converts the string into the func.

setTimeout("console.log('Function as string in the setTimeout')", 1000);//TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received type string ("console.log('Function as ...")


setTimeout(()=>{console.log('Function as string in the setTimeout')}, 1000)
//? Definition of the function can also be written as a arrow function or a normal function in the set timeout.

setTimeout(() => console.log(" Arrow function in the settimeout"), 3000);// Arrow function in the settimeout

setTimeout(function sayHi() { console.log(" Normal function in the set time out") }, 3000);// Normal function in the set time out

setTimeout(function () { console.log(" Anonymous function in STO") }, 2000);// Anonymous function in STO


//!                     ClearTimeout 
// We can cancle the Timeout during the execution using the funciton clearTimeout(timerId). 
// Every STO returns the timer id to identify the timer so it is also used to stop the STO.

let timerId = setTimeout(() => console.log(' My Timer is cleard so I never print'), 11111);
clearTimeout(timerId);



//!                    setInterval
/* 
- This is very similar to the STO but the only difference is that in setTimeout it runs the function not only once, but regularly after the given interval of time and stops only when the clearInterval is used to cancle the intervals.

- Same syntax and working like the STO.

- To make the set Interval stop we need to use the setTimeout and clearInterval in combination. As follows.
cLearInterval is exactly similar to the clearTimeout.
ss*/

let i = 0;
let intervalId = setInterval(()=>console.log(" setInterval Runs :- " + ++i + " times"), 3000);

setTimeout(() => {
    console.log(" clearInterval is here to Rescue the execution and clear the setInterval.");
    clearInterval(intervalId)
}
    , 11000);



//!                 Nested SetTimeout

/* Nested STO is much more reliable than the setInterval for the following reasons.

1] The set interval method does not ensure the uniform delay if the eecution of the function is lenghty. Because the execution time is not added in the waiting time.

2] If the function takes 2 sec to run and waiting time is 4 seconds then the gap between first two functions result will be only 2 seconds. because the time of execution is not counted seperately.

3] The nested setTimeout is a more flexible method than setInterval. This way the next call may be scheduled differently, depending on the results of the current one.

TODO- Pseudocode Example of point 3] is as follows.

? For instance, we need to write a service that sends a request to the server every 5 seconds asking for data, but in case the server is overloaded, it should increase the interval to 10, 20, 40 seconds…

let delay = 5000;

let timerId = setTimeout(function request() {
  ...send request...

  if (request failed due to server overload) {
    // increase the interval to the next run
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay);

And if the functions that we’re scheduling are CPU-hungry, then we can measure the time taken by the execution and plan the next call sooner or later. Nested setTimeout allows to set the delay between the executions more precisely than setInterval.
*/


/*
! Very IMP Note =
We can not directly pass the parameters to the functions called in the setTimeout. Because as soon as it detects () it runs the function and only waits for the timer to display the result.
Also we cant pass the other function as a parameter to the STO function because then it will first process the function as an argument and then the call to STO function is made. 

To make this work there are two methods.

1] Include it in the body of anonymous function or the arrow function as follows in Eg No 1.
2] Pass it as the arguments in the STO. (Only for modern browsers) Eg no 2.
See the below code:-
*/
{
//Example no 1
function plsWait(callBack) {
    console.log(" \n Hi I am inside the asynchronous function plsWait() ");
    setTimeout(function () { callBack('Abhishek'); }, 3000);
}


function callBack(name) {
    console.log(' Inside callBack function -');
    console.log(' Hello Mr. ' + name);
}

setTimeout(function () { plsWait(callBack); }, 2000);
// setTimeout(()=> plsWait(callBack) , 2000);
}

//Example no 2
function plsWait(callBack) {
    console.log(" \n Hi I am inside the asynchronous function plsWait() 2 sec ");
    setTimeout(callBack, 3000, 'Abhishek');
}

function callBack(name) {
    console.log(' Inside callBack function of async function : ' + `${name ? "wait 2 + 3 sec" : ''}`);
    console.log(' Hello Mr. ' + name);
}

setTimeout(plsWait, 2000, callBack);

console.log(" Inside the Script thus Printed First. ");
console.log(" The value of Name is undefined before async call gets completed \n See below :- ");
console.log(callBack());


//all run at a time
setTimeout(() => {
    console.log("1st")
}, 1000);
setTimeout(() => {
    console.log("2nd")
}, 1000);
setTimeout(() => {
    console.log("3rd")
}, 1000);


// all run one after one 1 sec gap

setTimeout(() => {
    console.log("1st")
}, 1000);
setTimeout(() => {
    console.log("2nd")
}, 2000);
setTimeout(() => {
    console.log("3rd")
}, 3000);