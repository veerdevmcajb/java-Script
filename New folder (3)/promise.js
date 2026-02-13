
/*
? Simple notes on Promise.

? What is a promise .?
MDN - The Promise object represents the final completion (or failure) of an asynchronous operation and its resulting value.

In own words = Promise object gives us the final information about the asynchronous task if its completed or not. 

If it is completed then we get the data and fullfilled status and if its not then we get rejected status. and error information.

? Why we use promise.?
- When we are performing the asynchronous tasks we need to ensure that first task must be completed before executing the next task that uses the value from first asymchromous task.
- and to ensure this we use the callback function in the asynchronous task , and this callback function is called inside the asynchronous task performing function.
- But when many such tasks are chained and many callbacks are used the code becomes complecated to understand and much bugs prone. This is called as the callback hell or the pyramid of doom.
- Thus to avoid such situation we use the Promises.
- Also, In frontend programming, promises are often used for network requests.

? Structure of promise..?
- Promise is the object which represents the status and has the data that is the result of the asynchronous tasks being preformed.
- It has following properties with key and values as follows/
- 1] State: Pending / Fullfilled / Rejected  (Any one of these values). Mnemonic PenFully Rejected.
- 2] Result : Undefined / Value / Error.  (Any one of these values). Mnemonic= Undefined value error.

let Promise = {
    State:  Pending   || Fullfilled || Rejected
    Result: Undefined || Value      || Error
}

? How does these promises work exactly.?
= The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result.

- Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

- When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

1) resolve(value) — if the job is finished successfully, with result value.
2) reject(error) — if an error has occurred, error is the error object.

- So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.

- The executor eventually moves promise to one of these states:



Todo-- The promise object returned by the new Promise constructor has these internal properties:

* 1) STATE = initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.   PF-Rejected

* 2) RESULT = initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.       UV-Error

? Syntax of Promise

let myPromise = new Promise(
    function(resolve, reject){
        Go to Heroine "Kiara" and tell her that the Hero "Siddharth" loves you a lot.
        Plese let me know what does she say.
        this is my story for her .... bla bla bla...

        I went to her she said yes... with data = you are kind hearted and really a very nice person with awesome looks.

        if(response == yes){
            resolve("you are kind hearted and really a very nice person with awesome looks.")
        }else{
            reject("I never thought the same about you, I already like someone else.")
        }
        ..... any lines below final result will  not be executed.
    }
)

myPromise().then(
    function resolve(data){
        console.log(data); 
        dada is = "you are kind hearted and really a very nice person with awesome looks."

        I feel the same about you
        please send her a some flowers.. she loves roases..
        and Give her a ring of diamonds.
    }
    ,
    
    function reject(error){
        console.log(error);
        error is = "I never thought the same about you, I already like someone else."
        tell her sorry and explain her it was my fault i took it in other direction.
        We will be still as good friends as earlier.
    }
).catch(funciton err(error){
        console.log(error);
        error is = "I never thought the same about you, I already like someone else."
        tell her sorry and explain her it was my fault i took it in other direction.
        We will be still as good friends as earlier.
}).finally(){
    thanks for your genuine relpy, i really appreciate your response and I respect your fellings.
}




? What happens in the Promise(function(resolve,reject){executor function code});

1. The executor is called automatically and immediately (by new Promise).

2. The executor receives two arguments: resolve and reject. These functions are pre-defined by the JavaScript engine, so we don’t need to create them. We should only call one of them when ready.


? The state and result properties of promise object are internal.?
- We can’t directly access them. We can use the methods .then/.catch/.finally for that.


? There can be only a single result or an error
- The executor should call only one resolve or one reject. Any state change is final.
- All further calls of resolve and reject are ignored:
- The idea is that a job done by the executor may have only one result or an error.
- Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.

let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});


? Reject with Error objects.?
- In case something goes wrong, the executor should call reject. That can be done with any type of argument (just like resolve). But it is recommended to use Error objects

? Immediately calling resolve/reject
- An executor usually does something asynchronously and calls resolve/reject after some time, but it doesn’t have to.
We also can call resolve or reject immediately.
- For example if something is already cached then we will directly call the resolved with the cached value to avoide the redundancy.

! CONSUMERS- THEN and CATCH

todo------------ THEN ---------------------

- Here then acts as the consumer which will wait for the specific output by the producer. And then will process the output received from the producer.
- .THEN will have 2 arguments as callback functions.
- .THEN is called with Promise Object { state: PFR , result: UVE } when the promise is settled (means either Resolved or Rejected).

* There are 2 cases for .then

1) - The '.then' will execute the first function (resolve handler) , when it receives the FULLFILLED / RESOLVED promise object. When it calls the FIRST function it will automatically pass the result (value) to the resolve handler as the argument.

2) - The '.then' will execute the second function (reject handler) , when it receives the ERROR / FAILED / REJECTED promise object. When it calls the SECOND function it will automatically pass the result (ERROR) to the REJECT handler as the argument.

- If we expect the promise to only resolve then we only write the first function as parameter.
- If we expect the promise to only reject then we only write the first function as null and second function as parameter.
eg.     .then(null, function(error){ reject handler code });


todo------------ CATCH ---------------------

- Here catch is exactly same to .then(null,errorhandlingFunction).we can use .catch(errorHandlingFunction), which is exactly the same
- we can use .catch(errorHandlingFunction), which is exactly the same.



todo------------  FINALLY  ---------------------

- The finally acts like a ckeanup function.
- Just like there’s a finally clause in a regular try {...} catch {...}, there’s finally in promises.
- Please note that finally(f) is not exactly an alias of then(f,f) though.
- The call .finally(f) is similar to .then(f, f) in the sense that f runs always, when the promise is settled: be it resolve or reject.
- The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.
E.g. stopping loading indicators, closing no longer needed connections, etc.

- Think of it as a party finisher. No matter was a party good or bad, how many friends were in it, we still need (or at least should) do a cleanup after it.

new Promise((resolve, reject) => {
   do something that takes time, and then call resolve or maybe reject
    }
/ runs when the promise is settled, doesn't matter successfully or not
    .finally(() => stop loading indicator)

/ so the loading indicator is always stopped before we go on
    .then(result => show result, err => show error);


* Vimp Points about finally

1) A finally handler doesn’t get the outcome of the previous handler (it has no arguments).
   This outcome is passed through instead, to the next suitable handler.
2) If a finally handler returns something, it’s ignored.
3) When finally throws an error, then the execution goes to the nearest error handler.
4) Finally will only run once. There cant be more than one finally. (may be, not sure of this line)

? The sequence will be.. as follows...
=> Promise executor => Rejected or Resolved => Finally (if its written before then and catch) => Then or Catch => Finally (if written at last.)

---> These features are helpful and make things work just the right way if we use finally how it’s supposed to be used: for generic cleanup procedures.

* We can attach handlers to settled promises

- If a promise is pending, .then/catch/finally handlers wait for its outcome.
- Sometimes, it might be that a promise is already settled when we add a handler to it.
- In such case, these handlers just run immediately.

*/

/*
! Differences between promise and callback

* Promises
-

Beware: Sometimes you must break the chain! For example, maybe doSomething is an asynchronous job but you don't want to slow the promise chain with it. Just be careful and be sure of what you are doing when you break a promise chain.

The pyramid of doom
You might be tempted to write something like this:

function test() {
    return job().then(function() {
        return job2().then(function() {
            return job3().then(function() {
                return job4().then(function() {
                    doSomething();
                });
            });
        });
    });
}
However, this code is wrong because the result of your function is job().then result. You broke the chain again. Use the promise chaining feature:

function test() {
    return job().then(function() {
        return job2();
    })

    .then(function() {
        return job3();
    })

    .then(function() {
        return job4();
    })

    .then(function() {
        doSomething();
    });
}

The ghost promise
As a rule of thumb: When a function can return a promise, ALWAYS return a promise. Otherwise you'll have this ugly code everywhere:

function job() {
    if (test) {
        return aNewPromise();
    } else {
        return 42;
    }
}

var result = job();

if (typeof job === 'object' && typeof job.then === 'function') {
    // ...
} else {
    // ...
}

If you want to create an auto-resolved promise with a simple value, use Promise.resolve:

function job() {
    if (test) {
        return aNewPromise();
    } else {
        return Promise.resolve(42); // return an auto-resolved promise with `42` in data.
    }
}
If you want to create an auto-rejected promise, use Promise.reject.


*/

//! About catch and then's reject handler
/*

The catch method on a promise is pretty simple because it is an alias for then(null, errorCallback).

var promise = request();

promise.catch(function(error) {
    displayError(error);
});

?This is the same code as this:

promise.then(null, function(error) {
    displayError(error);
});


? You have to learn the differences between these 2 examples:
~ Example 1

let promise = request();
promise.then(function(data) {
    console.log(data);
}, function(error) {
    console.error(error);
});


~Example 2
   
let promise = request();
promise.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.error(data);
});

In the first example, we call then with a success callback and an error callback. In the second example, we call then with a success callback and after that we call catch with an error callback. The difference is in the promise returned by the then function. In the second example, you are not calling catch on the original promise, you call catch on the promise returned by then. If a then has no error callback provided, it will not stop on a rejected promise. So the promise will end in the catch.

*/

// ! Some examples from javascript.info

/*
Run in .html file with script tag.

// Loadscript using the callback function.

function loadScript(src, callback) {
    let script = document.createElement(script);
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error('Script load error'));

    document.head.append(script);
}

// Rewriting the above code using the Promises.

function loadscript(src) {
    new Promise((resolve, reject) => {
        let script = document.creteElement(script);
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error('Script load error'));

        document.head.append(script);
    });
}


// Usage

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
    script => alert(`${script.src} is loaded!`),
    error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...'));

*/

function promiseSum(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 1000);
  });
}

let result = promiseSum(5, 6);
result.then((data) => {
  console.log(data);
});



let p=new promise((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log("I am a promise and i am resolve");
        resolve(true)
        
    },3000)
})

console.log(p);




function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}
let res=createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
console.log(res);

createAudioFileAsync(audioSettings, successCallback, failureCallback);






let promise=new promise(function(resolve,reject){
    console.log("Hello")
    resolve(55)
})

console.log("Hello one");
setTimeout(function(){
    console.log("Hello two in 2 sec")
},2000)

console.log("My name is "+ "Hello Three");
console.log(promise);








