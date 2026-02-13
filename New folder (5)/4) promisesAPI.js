/*


!  Promises API 


Example 0:

Asynchronous tasks
promise 1
promise 2
promise 3

Synchronous JS task
if( promise 1 && promise 2 && promise 3 ){
  "all promises resolved"
}

- As above in example 0 we can not perform the operations on the basis of 
multiple promises results therefore we need Promises API's



1.   Promise.all(iterable):  
   ? Syntax:   `Promise.all(iterable)`
   -   Description:   This method takes an iterable of promises and returns a single Promise. 
        It resolves when all promises in the iterable have RESOLVED, or it rejects if any of the promises in the iterable rejects.
   -   Eg.   :   Consider a scenario where you need to fetch data from multiple endpoints asynchronously and process them only
        when all requests are complete. `Promise.all` can be used to wait for all requests to complete before proceeding.
   -   This follows the first fail principle. i.e. If any of the promise fails the promise.all will fail immediately and will 
        not wait for the result of others. Just like our operators short circuit evaluation. In case of && operator.


2.   Promise.allSettled(iterable):  
   ? Syntax:   `Promise.allSettled(iterable)`
   -   Description:   It takes an iterable of Promises and returns a Promise that resolves after all promises in the iterable     
        have SETTLED, i.e., either resolved or rejected. It returns an array of objects that each describe the outcome of each promise.
   -   Eg.   :   Imagine you're submitting multiple API requests and want to know the status of each request regardless of
         whether they succeed or fail. `Promise.allSettled` can be used to wait for all requests to complete and provide information about their status.      

   Note :- Settled meaning - Doesnt matter whether the promise is resolved or rejected just it should not be in the pending state. 


3.   Promise.race(iterable):  
   ? Syntax:   `Promise.race(iterable)`
   -   Description:   This method returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects. It takes an iterable of promises and returns the value or reason from the first promise that resolves or rejects.
   -   Eg.   :   Suppose you have multiple sources for fetching data, and you want to display content from the fastest source available. `Promise.race` can be used to fetch data from all sources simultaneously and display the content from the first resolved promise.

4.   Promise.any(iterable):  
   ? Syntax:   `Promise.any(iterable)`
   -   Description:   It takes an iterable of Promise objects and returns a single promise. It resolves as soon as one of the promises in the iterable fulfills. If none fulfill (all are rejected), it returns a rejected promise.
   -   Eg.   :   In a scenario where you have multiple fallback options for fetching data, and you want to use the data from the fastest source available, `Promise.any` can be used. It resolves with the value from the first fulfilled promise.

5.   Promise.resolve(value):  
   ? Syntax:   `Promise.resolve(value)`
   -   Description:   This method returns a Promise object that is resolved with the given value. 
       If the value is a promise, the returned promise will adopt its eventual state. If the value is a thenable, the returned promise will follow that thenable.
   -   Eg.   :   When you have a synchronous value that you want to handle asynchronously, `Promise.resolve` can be used to wrap it in a promise. This is useful when you need to ensure consistent handling of both synchronous and asynchronous values.

6.   Promise.reject(reason):  
   ? Syntax:   `Promise.reject(reason)`
   -   Description:   It returns a Promise object that is rejected with the given reason.
   -   Eg.   :   When you want to explicitly reject a promise with a specific reason, 
       `Promise.reject` can be used. For example, in error handling scenarios where certain conditions lead to rejection of a promise with a predefined error message.

*/

// Example JavaScript 

//? ----------------------------------------------------------------------------

//? Example 1: Promise.all()
// Syntax: Promise.all(iterable)
// Use case: When you need to execute multiple promises in parallel and wait for all of them to complete.

const promise1 = Promise.resolve(3);
const promise2 = 42;                // This plain data will be considered as the result of the resolved promise.
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all( [ promise1, promise2, promise3 ] ).then((values) => {
  console.log(values);  // Output: [3, 42, "foo"]
});

// Note:- Irrespective of the sequence of resolved promisses the result of Promise.all will provide the result
// as the resolved promise where the resultant array will have all the data of resolved promises as they are 
// written in the itterable provided to Promise.all api's.

//? ------------------------------------------------------------------------------


//? Example 2: Promise.allSettled()

// Syntax: Promise.allSettled(iterable)
// Use case: When you need to know the result of each promise, regardless of whether it's fulfilled or rejected.

const promiseA = Promise.resolve("resolved");
const promiseB = Promise.reject('Failed');

Promise.allSettled([promiseA, promiseB]).then((results) => {
  results.forEach((result) => console.log(result));
});

/* 
result of the Promise.allSettled = 
    [
      { status: 'fulfilled', value: 100 }
      { status: 'rejected', reason: 'Failed' }
    ]
*/

// Just a value of any promise can be extracted if its settled. But still you will have to wait for all the promises to be resolved.  See below example

{

const promiseA = Promise.resolve("resolved");
const promiseB = Promise.reject('Failed');

Promise.allSettled([promiseA, promiseB]).then((results) => {
   console.log(results[0].value)
});

}

//? ----------------------------------------------------------------------------

//? Example 3: Promise.race()
// Syntax: Promise.race(iterable)
// Use case: When you need to wait for the first promise to  be settled ( either resolve or reject ).
// Anant ambani and khan's examples (khas will be mediators or promisses in this case)
// Try untill first yes or no.

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promiseOne, promiseTwo]).then((value) => {
  console.log(value); // Output: "two" because it completes first
});


let p1 = new Promise(res => setTimeout(res, 300, "First"));
let p2 = new Promise(res => setTimeout(res, 200, "Second"));

Promise.race([p1, p2])
  .then(val => console.log(val));

//? ----------------------------------------------------------------------------

// Example 4: Promise.any()
// Syntax: Promise.any(iterable)
// Use case: When you need the first successful promise to resolve amongst multiple promises.
// Try untill first yes. Therefore try all promisses.


const promiseFirst = Promise.reject(0);
const promiseSecond = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promiseThird = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

Promise.any([promiseFirst, promiseSecond, promiseThird]).then((value) => {
  console.log(value); // Output: "quick"
});

//? ----------------------------------------------------------------------------

// ? Example 5: Promise.resolve()
// Syntax: Promise.resolve(value)
// Use case: When you need to create a promise that is resolved with a given value.

// By traditional way
const resolveMyPromise = new Promise((resolve)=>{
    // Perform some operation....
    // If operation success...
    resolve("The promise has been resolved witht the data");
});
resolveMyPromise.then((response)=> console.log(response))

// By using promises api
const resolvedPromise = Promise.resolve('Resolved');
resolvedPromise.then((res) => console.log(res)); // Output: "Resolved"

// Note - Although the promise is immediately resolved it will still remain the asynchronous task.

//? ----------------------------------------------------------------------------

// Example 6: Promise.reject()
// Syntax: Promise.reject(reason)
// Use case: When you need to create a promise that is rejected with a given reason.

// By traditional way
const rejectMyPromise = new Promise((resolve, reject)=>{
  // Perform some operation....
  // If operation not successfull...
  reject("The promise has been rejected with the error");
});

rejectMyPromise.then(
    ()=>{"success"}, 
    (error)=> console.log(error)
  )

// rejectMyPromise.catch(
//     (error)=> console.log(error)
//   )

// By using promises api

const rejectedPromise = Promise.reject(new Error('Rejected'));
rejectedPromise.catch((err) => console.error(err)); // Output: Error: Rejected




// !---------------------------------------------------------------------------------


// Eg.  Promise.all with setTimeout
function PromiseAll() {
    const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'Result 1'));
    const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Result 2'));
  
    Promise.all([promise1, promise2]).then((results) => {
      console.log(' Promise.all results:', results); // ['Result 1', 'Result 2']
    });
  }
  
  // Eg.  Promise.all with fetch
  function bPromiseAll() {
    const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const url2 = 'https://jsonplaceholder.typicode.com/posts/2';
  
    Promise.all([fetch(url1), fetch(url2)])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => {
        console.log('b Promise.all results:', data); // Data from both URLs
      });
  }
   
  // Eg.  Promise.allSettled with setTimeout
  function PromiseAllSettled() {
    const promise1 = Promise.resolve('Success');
    const promise2 = Promise.reject('Error');
  
    Promise.allSettled([promise1, promise2]).then((results) => {
      console.log(' Promise.allSettled results:', results);
    });
  }
  
  // Eg.  Promise.allSettled with fetch
  function bPromiseAllSettled() {
    const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const url2 = 'https://this-url-does-not-exist.typicode.com';
  
    Promise.allSettled([fetch(url1), fetch(url2)])
      .then((results) => results.map((result) => (result.status === 'fulfilled' ? result.value.json() : result.reason)))
      .then((data) => {
        console.log('b Promise.allSettled handling:', data); // Handling both success and failure
      });
  }
  
  // Eg.  Promise.any with setTimeout
  function PromiseAny() {
    const promise1 = new Promise((_, reject) => setTimeout(reject, 100, 'Reject 1'));
    const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Resolve 2'));
  
    Promise.any([promise1, promise2]).then((result) => {
      console.log(' Promise.any result:', result); // 'Resolve 2'
    });
  }
  
  // Eg.  Promise.any with fetch
  function bPromiseAny() {
    const url1 = 'https://this-url-does-not-exist.typicode.com';
    const url2 = 'https://jsonplaceholder.typicode.com/posts/1';
  
    Promise.any([fetch(url1), fetch(url2)])
      .then((response) => response.json())
      .then((data) => {
        console.log('b Promise.any result:', data); // Data from the first successful fetch
      });
  }
  
  // Eg.  Promise.race with setTimeout
  function PromiseRace() {
    const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'Slow'));
    const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Fast'));
  
    Promise.race([promise1, promise2]).then((result) => {
      console.log(' Promise.race result:', result); // 'Fast'
    });
  }
  
  // Eg.  Promise.race with fetch
  function bPromiseRace() {
    const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const slowUrl = 'https://jsonplaceholder.typicode.com/posts/2?delay=5000';
  
    Promise.race([fetch(url1), fetch(slowUrl)])
      .then((response) => response.json())
      .then((data) => {
        console.log('b Promise.race result:', data); // Data from the fastest URL
      });
  }
  
  // Example of Promise.resolve
  function examplePromiseResolve() {
    Promise.resolve('Immediate resolve').then((result) => {
      console.log('Promise.resolve result:', result); // 'Immediate resolve'
    });
  }
  
  // Example of Promise.reject
  function examplePromiseReject() {
    Promise.reject(new Error('Immediate reject')).catch((error) => {
      console.error('Promise.reject error:', error.message); // 'Immediate reject'
    });
  }
  

  PromiseAll();
  bPromiseAll();
  PromiseAllSettled();
  bPromiseAllSettled();
  PromiseAny();
  bPromiseAny();
  PromiseRace();
  bPromiseRace();
  examplePromiseResolve();
  examplePromiseReject();
  