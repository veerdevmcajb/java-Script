//! Vimp notes on Asynchronous operation in JS.

/*
? Example of the visualizer - https://www.jsv9000.app/

setTimeout(function timer() {
    console.log('You clicked the button!');    
}, 2000);

let a = 5+5;

if(a>9){
  console.log("A is greater than 9");
}

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");

for(let i =0; i <5 ;i++){
  console.log(i);
}

Promise.resolve().then(function b() {
  console.log("This is the Promise")
});

// setTimeout(function a() {}, 0);

*/


/*
? JS is basically the synchroinous language but by using some programming methods we can make it asynchronous.

~ Synchronous = This means that the tasks are run one aftere the another. Next task is run only after the previous task is finished. 

~ Asynchronous = This means that the task will run simultaneously. This means that the tasks dont wait for other tasks to complete.

? When to use Synchronous?
Ans:- When the output of first task is necessary for the other task.
When we need to follow certain sequence of task completion.

? When to use the Asynchronous ?
Ans- This is when we need to perform many tasks that are independent of each other. Eg. tasks where multiple users are involved or multiple requests are involved. Also the tasks which are lengthy in terms of the execution time. Such as setTimeout or fetch request.

*/

/*
! VVIMP --> Notes.

Javascript is the the single threaded synchronous language. So it has only one call stack and thus it can do only one thing at a time.

This call stack is present in the JavaScript engine and all the code of js is executed in this call stack.

When any js code is run the Global Execution Context is created and whole programme is run line by line  under this Global Execution Context. When any line of code is executed it will enter the stack as the GEC item. This happens frequently untill all the lines are executed and the JS code is traversed completely. After executing each line, the line is popped out of the Call Stack and new line enters as the GEC.

In case of the function execution the new  execution context is created and pushed in the call `stack and then executed line by line.

Once there is nothing to do in the function or after the return statement, the call stack pops out the execution context of the function. Here 'a' gets in call stack and pops out after execution.

Eg. 
function a() {
console.log('a');
}
a()
}

If we need to do something after some time then we need asynchronous programming.

In real =  Browser holds the JS engine and this JS engine has Call stack. Within this CS there is a Exe Context.

All browsers have some memory and allocation. This is used for variables and other data. All the timers and the input and output are done using the browser. 

Browser is multithreaded and thus multitasking. Browser provides many functionalities through the browser API and this are available to JS through asynchronous mechanism which contains- Event loop, Micro Tasks Queue, Call Back Queue, Web API's Environment and Call Stack. Among this only the CS and EL are the part of JS engine.

When the JS engine needs the access to the capabilities of the browsers the JS needs to be contected to the browsers. Therefore, Event loop acts as the buckle that joins the synchronous JS with the Asynchronous browser and its Web API's.


? What are the web API's .?
Eg:- setTimeout, Fetch, LocalStorage, console.log, location, DOM Api's, document.xyz , etc. These are not the parts of the JS Engine but of the Browsers. The browsers gives access to this functions of Browser to the js engine. 
Eg- Fetch = this gives the access to connect the external servers. 

Here the GLobal object allows the access to all this browsers functions. This is done using the Window keyword. This means window.setTimeout, window.console.log etc are valid. All this functions are wrapped in the Window Object.

Eg.
console.log('Start');
setTimeout(function cb(){
    console.log("Callback");
    }
      , 5000);
console.log('End');

Result= Start 
Next Line= End 
after 5 secs= Callback.

~ Explanation of the Above example.

! Understanding The Event Loop, CallBack queue, Call Stack.

? What happens Behind this SetTimeOut function- 
Ans- The waiting is not done in the call stack rather the waiting is done in the browsers execution stack i.e known as the Web API's Environment. As soon as the time is up the browser puts the function ( EC of Function ) back into the callback queue then the event loop places it in the call stack of the JS engine. Then the JS engine will run it immediately.

? How does the setTimeout function goes back to the CallStack ?
Ans- This is done using the CallBack Queue. The CBQ is within the Browser Environment. This call back que is maintained for the asynchronous tasks. Where the Asynchronous or lengthy & time consuming functions are stacked. Then put back into the orignal call stack of the JS Engine. Things waiting in CallBack Queue are called as tasks. This tasks are performed one at the time and only if the JS Call Stack and Micro Task Queue is empty. Tasks will be performed one at a time means the Event loop will complete the next task only after one cycle of the loop is completed.
Here comes into the picture Event Loop which is the main hero of all this execution.

? How does things come into the callBack Queue.?
Ans- For example when the setTimeout is run then the timer API's registers the callBack. Means it creates the CallBack in the API's Environment. This CallBack is put into the CallBack Queue only when it is triggered. i.e after the time is out. Then it goes to the Call Stack with the help of the Event Loop.

? What is Event loop.?
Ans- The event loop does the job of Gate Keeper where it checks the MTQ, CBQ in a sequence and if there is something in it and JS CS is empty then it pushes it in the call stack of the JS engine.

~ So the steps are in the sequence as follows-
call stack --> regestering the call back in the Api Env --> call back queue --> event loop --> call stack --> Final execution and display. (EL --> CS will only follow if MTQ is empty and also the call stack is empty ).


TODO - Example no 2:-

console.log('Start');
document.getElementById('Btn').addEventListner("click", function cb(){.........
    console.log("callback");
});

console.log("End");


? More about The Event Loop.?
Ans -  The only job of the EL is to continously monitor the CBQ and the CS. It takes the CBQ function and pushes it into the CS untill the complete CBQ is empty. 

? Why do we need the call back queue and why cant we just take the registered call backs and directly put into the CS.?
Ans- This is necessary because for example if the user clicks the button in eg 2 for 10 times then the registered callback will be fired 10 times and the CBQ will get 10 tasks to stack and give it to CS for execution in the sequence of the Click Events. If we directly used the registered call back of the api env then the click event would have been generated only once and not for all the clicks.


Eg no 3.
console.log("start");

setTimeout(funciton cbT(){
    console.log("CB SetTimeout");
}, 5000);

fetch("https://api.netflix.com").then(funciton cbF(){
    console.log(" CB Netflix ");
});
console.log("End");

Explanation of the Example:-

? Everything happens similar to the previous function EXCEPT- The fetch is different.
? WHat is fetch.?
Ans- Fetch is the Web Api which is used to make the network calls. The cbf is registered in the Fetch Web Api Environment. If the Netflix serveres return the data in 30 ms. But it will not immediately go into the the CBQ. (not as expected). 

? Then why this happens.? 
Ans- Because there is the micro task queue which is like the CBQ but it has the higher priority than the CBQ. The cbf function goes into the microtask Queue. Here the event loop also looks into the Micro Task Queue.

? What is Micro Task Queue.?
Ans- This is the special queue that takes in the micro tasks callbacks. This MTQ has the high priority. The CBQ will only get the chance once the MTQ is completely empty. 
If there are many lines of code in the main thread of the programme.
Generally all the promises are waiting in the MTQ and thus promises are also known as micro tasks. 


? What is Rendering .?
Ans- The tasks that are necessary for rendering are put into the rendering queue. The rendering queue is visited when there is a change in the DOM. It holds the CSS, pixalization, animation etc. It has the priority in between the MTQ and CBQ. The priority is not strict with respect to CBQ. 
The rendering is done as frequently as the changes occur but less frequently than the speed of the display that is for Eg. 60 times a second. But the execution (means the event loop) is much faster than 60 times a sec thus the event loop will go through the MTQ CBQ etc multiple times or as required, this is done between the gap of these 60 times a sec. 
Also the time between the rendering steps executed is not uniform for the above reason. Also rendering steps are not guranteed. Means if the step is not imp to display immediately it may be ignored multiple times.
Rendering means what we see on the webpage.
If there is to much for the EL to execute in the JS CS and the Micro Task Queue the Rendering is freezed and this is called the blocking function which blocks all the activities of the browser.




! VIMP Interview Question :- 
? What can come inside the Micro Task Queue.?
Ans- 
1] The call back functions that comes from Promises.
2] The callback functions that comes from Mutation Observer.
But All others dont come to it.

? What is Mutation Observer.?
Ans-  If there is any changes in the DOM tree it is been detected by the MO and put into the Rendering.

? What is starvation.?
Ans- If the MTQ is large then the CBQ tasks will not get the chance to run for very long time.




! JavaScript Event Loop in detail.

JavaScript is the combination of synchronous and asynchronous events.
JS is primarily the single threaded language. Means there is always only one thread that runs all the time for JS execution. Exception =  Worker threads, Native etc.

Since JS is single threaded it may need to execute multiple request that come back to back before the first request is completed. Thus to complete all the requests Event loop acts as helper who can provide these requests to the single thread as soon as the existing request is served by the JS Single thread engine. 



! JS Event Loop 

V8 is the JavaScript Runtime.
It has the heap and stack. Heap does the memory allocation and Stack is used for the Call Stack aka. Execution Stack.
SetTimeout and the other async stuff are not the part of the V8 engine.
Other than the runtime we have the WebApi's which are not the part of V8.
Call Stack = One Thread == One Call Stack == One thing at a Time.

*/
