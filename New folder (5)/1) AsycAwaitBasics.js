/* 
!---------------------------- Async Await -------------------------------

!   Async/Await in JavaScript: Theory

* `async` and `await` are extensions of promises in JavaScript that simplify asynchronous programming by making asynchronous code look and behave a bit more like synchronous code.
This is done by making asynchronous functions pause at each `await` expression.

!  Key Points

? 1.   The `async` Function Declaration  : 
   - An `async` function returns a `Promise`. 
   - If the function returns a value, the `Promise` will be resolved with that value.

?   - Syntax:
       
     async function functionName() {
       await console.log("I am second line in console")
       // paused code
     }
   
     console.log("I am first line in console")

     
? 2.   The `await` Operator  :
   - The `await` operator is used inside an `async` function to pause the execution until the `Promise` is resolved.
   - When `await` pauses the function, it's non-blocking to the rest of the code execution.
   - Syntax:
  */

//? Example

async function someAsycTask() {
  console.log("Hi I am asynchronous"); // tricky

  let result = await "result";
  // In above line Whatever the promise returns as a fullfiled data it is sotred in this above variable

  // The below line will execute only if the promise is resolved.
  console.log("Hi I am next asynchronous");
  console.log("This is the :", result);
}

someAsycTask();

console.log("Hi I am synchronous");

//? Traditional way

promise
  .then((result) => console.log("This is the :", result))
  .catch((error) => console.log(error));

/*

? 3.   Error Handling  :
   - Errors in `async` functions can be caught using `try...catch` blocks.
   - Syntax:
       
   */
// ? Syntax :

async function functionName() {
  try {
    let result = await promise;
  } catch (error) {
    // handle error
  }
}

// ? Example :

async function someAsycTask() {
  try {
    let result = await promise;
    // this line will execute only if the promise is resolved.
    console.log("This is the :", result);
  } catch (error) {
    // This will handle your rejected promise.
    console.log(error);
  }
}

// ? Traditional way

promise
  .then((result) => console.log("This is the :", result))
  .catch((error) => console.log(error));

/*

? 4.   Parallel Execution  :
   - To run `await` expressions in parallel, use `Promise.all()`.
   - This is useful for optimizing performance when multiple independent promises can be resolved concurrently.


? 5.   Sequential Execution  :
   - `await` expressions are executed in sequence by default. This is useful for dependent promises where one task must complete before the next begins.
*/

//? Traditional way

promise
  .then((userName) => {
    console.log("This is the username:", userName);
    // Find post using username and return a promise or post.
    return postPromise;
  })
  .then((post) => {
    console.log("This is the post by user:", post);
  })
  .catch((error) => console.log(error));

// To avoid above complex then chaining we use async and await

//? Example

async function someAsycTask() {
  let userName = await promise;
  // this line will execute only if the promise is resolved.
  console.log("This is the username:", userName);

  // Below await will wait for the above await to get resolved with data.
  let post = await postPromise; // Find post using username and return a promise or post.
  console.log("This is the post by user:", post);
}

/*

? 6.   Use in Top-level Code   (ES2020+):
   - `await` can be used at the top level in modules, without wrapping in an `async` function. This feature is available in modern JavaScript environments.

? 7.   Non-Promise Await  :
   - If `await` is used on a non-Promise value, it converts the value to a resolved Promise, and the function execution resumes immediately.
*/

async function someAsycTask() {
  let result = await "I am the resolved promise data";
  // this line will execute only if the promise is resolved.
  console.log("Hi :", result);
}

someAsycTask();

/*
? 8.   `async` Function Expressions  :
   - `async` functions can also be defined as expressions.
   - Syntax:
*/

const functionName = async () => {
  // code
};

/*       

!  Benefits

-   Simplicity  : Makes asynchronous code easier to write and read.
-   Debugging  : Since the code looks synchronous, it's easier to debug.
-   Error Handling  : Simplifies error handling with `try...catch`.

*/

//?   Example 1: Basic Async Function
// a simple `async` function that returns a value. The returned value is automatically wrapped in a resolved promise.

async function greet() {
  return "Hello, World!";
}

greet().then(console.log); // Output: "Hello, World!"

//?   Example 2: Await a Promise
// `await` is used to pause the function execution until the promise resolves, making the asynchronous code look synchronous.

async function fetchGreeting() {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve("Hello from the async world!"), 1000);
  });

  const greeting = await promise; // Waits for the promise to resolve
  console.log(greeting);
}

fetchGreeting(); // Output: "Hello from the async world!" (after 1 second)

//?   Example 3: Async Function with Try-Catch
// To handle errors in async functions using try-catch blocks, providing a synchronous-like way of handling errors in asynchronous code.

async function fetchData() {
  try {
    const response = await fetch("invalid-url");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData(); // Output: Error fetching data: TypeError: Failed to fetch

//?   Example 4: Sequential Execution
// Sequential execution of `await` calls, useful when each operation depends on the result of the previous one.

async function sequentialStart() {
  const first = await Promise.resolve("First");
  console.log(first);
  const second = await Promise.resolve("Second");
  console.log(second);
}

sequentialStart();
// Output: "First"
//         "Second"

//?   Example 5: Parallel Execution with Promise.all()
// Using `Promise.all()` to run multiple `await` operations in parallel, improving performance.

async function parallelStart() {
  const [first, second] = await Promise.all([
    Promise.resolve("First"),
    Promise.resolve("Second"),
  ]);

  console.log(first, second);
}

parallelStart();
// Output: "First Second"

//?   Example 6: Mixing Async/Await with Promises
// `async/await` can be mixed with traditional promise chains for more complex flows.

async function fetchDataAndProcess() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  response
    .json()
    .then((data) => {
      console.log("Title:", data.title);
    })
    .catch((error) => {
      console.error("Error processing data:", error);
    });
}

fetchDataAndProcess(); // Output: Title: (title of the post)
