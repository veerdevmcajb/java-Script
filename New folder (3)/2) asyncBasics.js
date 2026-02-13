// ! Understanding the event loop and asynchronous behavior in JavaScript.
// ? Visual tool-  Loupe (http://latentflip.com)

/*
? JavaScript: Single-Threaded Nature

JavaScript is single-threaded, meaning it can do only one task at a time in a single sequence of operations. Imagine you're at a single cashier in a grocery store; the cashier can serve only one customer at a time. This single-threaded nature could lead to inefficiencies, particularly for tasks that take a long time to complete, like downloading an image or fetching data from a server. If JavaScript were purely synchronous and single-threaded, a long task could block (hold up) the execution of subsequent tasks, leading to a poor user experience.

? Synchronous vs. Asynchronous

To understand the event loop, it's crucial to distinguish between synchronous (blocking) and asynchronous (non-blocking) operations:

- Synchronous (Blocking): Operations are completed one after another. Each operation must wait for the previous one to complete before starting. In our grocery store analogy, this would be like each customer waiting in line for the cashier; no one can skip the line or start checking out before the person in front of them is done.
  
- Asynchronous (Non-Blocking): JavaScript handles potentially blocking operations like network requests or timers by starting the operation and then moving on to the next task without waiting for the operation to complete. Once the operation finishes, its result is handled. This is like having a system where a customer can place an order, continue shopping, and then pick up the order when it's ready.

? The Event Loop

The event loop is a fundamental concept that allows JavaScript to perform non-blocking operations, despite being single-threaded. It works by cycling through a sequence of steps, constantly checking if there's work to be done.

1. Call Stack: This is where JavaScript tracks the function calls that need to be executed. Think of it like a stack of plates; you can only take the top plate off (the most recent function call), and you can only add a new plate to the top.

2. Task Queue: When asynchronous operations are initiated (like `setTimeout` or a data fetch), they are sent to the task queue once they're completed. The event loop checks this queue to see if there are any tasks that need to be moved to the call stack for execution.

3. Microtask Queue: This is similar to the task queue but is specifically for promises and other microtasks. Tasks in the microtask queue are processed at the end of the current task, before the event loop continues to the next task.

The event loop follows this basic cycle:

- Check if the call stack is empty.
- If the call stack is empty, move tasks from the task queue to the call stack.
- Execute tasks on the call stack.
- Process all microtasks in the microtask queue.
- Repeat.

? Asynchronous Operations in JavaScript

Let's look at some common asynchronous operations:

 `setTimeout` and `setInterval`

`setTimeout` is a function that executes a block of code after a specified delay. `setInterval` is similar but repeats the execution at regular intervals. They are both non-blocking and are used for tasks like delaying execution or creating repeated animations.

Example of `setTimeout`:
*/

setTimeout(() => {
  console.log("This message appears after 3 seconds");
}, 3000); // 3000 milliseconds = 3 seconds


/*
! Promises

A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It's a way to handle asynchronous operations more gracefully, providing methods like `.then()` for success and `.catch()` for failures.

Example of a Promise:
*/

let myPromise = new Promise((resolve, reject) => {
  let condition = true; // Simplified condition for demonstration
  if (condition) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected.");
  }
});

myPromise.then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
});

/*
! `async/await`

`async/await` syntax provides a more synchronous-looking way to handle Promises, making your asynchronous code easier to write and read. An `async` function returns a Promise, and `await` is used to wait for the Promise to settle.

Example of `async/await`:
*/

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
