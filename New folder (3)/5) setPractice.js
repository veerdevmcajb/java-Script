
// =========================
// Question 1
// =========================
// Use setTimeout to log 'Hello, World!' to the console after 3 seconds.
// Answer:

setTimeout(() => {
    console.log('Hello, World!');
  }, 3000);
  // This will log 'Hello, World!' to the console after a delay of 3000 milliseconds (3 seconds).
  
  // =========================
  // Question 2
  // =========================
  // Write a function that takes a message and a delay as parameters, then logs that message to the console after the specified delay.
  // Answer:
  
  function delayedLog(message, delay) {
    setTimeout(() => {
      console.log(message);
    }, delay);
  }
  // Usage: delayedLog('This is a delayed message', 2000);
  // This will log 'This is a delayed message' to the console after 2 seconds.
  
  // =========================
  // Question 3
  // =========================
  // Use setInterval to log 'Hello' to the console every 2 seconds. Stop after 10 seconds.
  // Answer:
  
  let intervalCount = 0;
  const helloInterval = setInterval(() => {
    console.log('Hello');
    intervalCount += 2;
    if (intervalCount >= 10) {
      clearInterval(helloInterval);
    }
  }, 2000);
  // This will log 'Hello' to the console every 2 seconds and stop after 10 seconds.
  
  // =========================
  // Question 4
  // =========================
  // Write a function that counts down from n to 0, logging each number to the console every second. When it reaches 0, it should log "Done!".
  // Answer:
  
  function countdown(n) {
    let current = n;
    const countdownInterval = setInterval(() => {
      if (current > 0) {
        console.log(current);
        current--;
      } else {
        console.log('Done!');
        clearInterval(countdownInterval);
      }
    }, 1000);
  }
  // Usage: countdown(5);
  // This will log 5, 4, 3, 2, 1, 'Done!' to the console, one per second.
  
  // =========================
  // Question 5
  // =========================
  // Create a simple timer that logs "Tick" every second but stops after "Tock" has been logged 5 times.
  // Answer:
  
  let tickTockCount = 0;
  const tickTockInterval = setInterval(() => {
    if (tickTockCount < 5) {
      console.log('Tick');
      tickTockCount++;
    } else {
      console.log('Tock');
      clearInterval(tickTockInterval);
    }
  }, 1000);
  // This will log 'Tick' to the console every second, and after 5 times, it will log 'Tock' and stop.
  
  