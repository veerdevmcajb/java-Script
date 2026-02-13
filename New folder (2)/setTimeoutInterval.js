// setTimeout and setInterval are two fundamental functions in JavaScript used for scheduling tasks.

// =========================
// setTimeout(function, delay, ...args)
// =========================

// setTimeout allows you to run a function once after the interval of time specified in milliseconds (ms).
// It returns a unique identifier which can be used to cancel the timeout with clearTimeout() function.
// Note: When using setInterval or setTimeout, especially with shorter intervals or longer delays, be mindful of the performance implications and ensure that it doesn't negatively affect your application's responsiveness.

// Basic example: Logging a message after 2 seconds
setTimeout(() => {
  console.log('This message appears after 2 seconds');
}, 2000);

// Using arguments with setTimeout
// You can pass additional arguments to the function after the delay parameter
setTimeout((name) => {
  console.log(`Hello, ${name}!`);
}, 1500, 'Alice'); // "Alice" is passed as an argument to the function

// Canceling a Timeout
// If you need to cancel a timeout, you can use clearTimeout(timeoutId)
let timeoutId = setTimeout(() => {
  console.log('This message will not show');
}, 3000);

// Cancel the timeout
clearTimeout(timeoutId);

// =========================
// setInterval(function, delay, ...args)
// =========================

// setInterval allows you to run a function repeatedly, at every given interval of time specified in milliseconds.
// Like setTimeout, it returns a unique identifier which can be used to cancel the interval with clearInterval() function.

// Basic example: Incrementing a counter every second
let counter = 0;
let intervalId = setInterval(() => {
  counter++;
  console.log(`Counter is now ${counter}`);
  // Stop the interval after 5 iterations
  if (counter >= 5) {
    clearInterval(intervalId);
  }
}, 1000);

// Using arguments with setInterval
// Additional arguments can be passed after the delay, similar to setTimeout
setInterval((text) => {
  console.log(text);
}, 2000, 'Repeated message every 2 seconds');

// Intermediate example: Creating a simple timer
// This example demonstrates using both setTimeout and setInterval to create a timer that counts down from a specified number of seconds.
function startTimer(duration) {
  let timer = duration, minutes, seconds;
  
  let intervalId = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    console.log(`${minutes}:${seconds}`);

    if (--timer < 0) {
      timer = duration; // Optionally, reset the timer here
      clearInterval(intervalId); // Stop the timer
      console.log('Timer completed!');
    }
  }, 1000);
}

// Start a 30-second timer
startTimer(30);


