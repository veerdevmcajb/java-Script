
for(let i=0; i < 10;i++){
  console.log(i);
}


// even num
for(let i=0; i<10; i++){
  if(i%2==0){
    console.log(i)
  }
}

//odd num 
for(let i=0; i<10; i++){
  if(i%2 !==0){
    console.log(i)
  }
}





//! 1. Basic for Loop

// Example 1: Basic for loop to iterate from 1 to 5
// Syntax;
/*

for (initialization; condition; iteration) {
  code to be executed in each iteration;
  Eg console.log(i);
}


*/


for (let i = 1; i <= 5; i++) {
    console.log("Iteration", i);
  }

  // Output:
  // Iteration 1
  // Iteration 2
  // Iteration 3
  // Iteration 4
  // Iteration 5
  
  // 2. Looping over an Array
  
  // Example 2: Looping over an array of colors
  const colors = ["red", "green", "blue"];
  
  for (let i = 0; i < colors.length; i++) {
    console.log("Color at index", i, "is", colors[i]);
  }
  // Output:
  // Color at index 0 is red
  // Color at index 1 is green
  // Color at index 2 is blue
  
  // 3. Nested for Loop
  
  // Example 3: Nested for loop to create a multiplication table
  for (let i = 1; i <= 10; i++) {
  
    // if(i == 2){
    //   continue;
    // }

    for (let j = 1; j <= 10; j++) {
      console.log(i + " * " + j + " = " + i * j);
    }
  
  }
  // Output:
  // 1 * 1 = 1
  // 1 * 2 = 2
  // ...
  // 5 * 4 = 20
  // 5 * 5 = 25
  
  // 4. Skipping Iterations with continue
  
  // Example 4: Using continue to skip even numbers
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue; // Skip even numbers
    }

    console.log("Odd number:", i);
  }
  // Output:
  // Odd number: 1
  // Odd number: 3
  // Odd number: 5
  // Odd number: 7
  // Odd number: 9
  
  // 5. Exiting a Loop with break
  
  // Example 5: Using break to exit the loop when a condition is met
  let targetNumber = 4;

  for (let i = 1; i <= 5; i++) {
    console.log("Checking number:", i);
    
    if (i === targetNumber) {
      console.log("Target number found!");
      break;
    }
  }
  // Output:
  // Checking number: 1
  // Checking number: 2
  // Checking number: 3
  // Checking number: 4
  // Target number found!
  
  // Summary:
  // - The for loop is used for iterating over a sequence of values or elements.
  // - It consists of an initialization statement, a condition, an iteration statement, and a loop body.
  // - It can be used to iterate over arrays, perform repetitive tasks, or create nested loops.
  // - The continue statement skips the rest of the loop body and moves to the next iteration.
  // - The break statement exits the loop prematurely when a certain condition is met.
  
//? Odd way to write the for loop

  let a = 1;

  for(; a<5 ;){
    console.log(a);
    a++;
  }

//! 1. while Loop

/* 
? Syntax

while (condition) {
  code to be executed while the condition is true
}

*/

// Example 1: Basic while loop to iterate from 1 to 5

let i = 1;

while (i <= 5) {
  console.log("Iteration", i);
  i++;
}
// Output:
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4
// Iteration 5

//! 2. do-while Loop
/*

? Syntax

do {
  code to be executed at least once, then repeated as long as the condition is true
} while (condition);

*/

// Example 2: Basic do-while loop to iterate from 1 to 5
let j = 1;
do {
  console.log("Iteration", j);
  j++;
} while (j <= 5);
// Output:
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4
// Iteration 5

// 3. Looping over an Array with while Loop

// Example 3: Looping over an array of fruits using a while loop

const fruits = ["apple", "banana", "orange"];
let index = 0;

while (index < fruits.length) {
  console.log("Fruit at index", index, "is", fruits[index]);
  index++;
}
// Output:
// Fruit at index 0 is apple
// Fruit at index 1 is banana
// Fruit at index 2 is orange

// 4. Looping over an Array with do-while Loop

// Example 4: Looping over an array of vegetables using a do-while loop
const vegetables = ["carrot", "broccoli", "spinach"];
let vegIndex = 0;

do {
  console.log("Vegetable at index", vegIndex, "is", vegetables[vegIndex]);
  vegIndex++;
} while (vegIndex < vegetables.length);
// Output:
// Vegetable at index 0 is carrot
// Vegetable at index 1 is broccoli
// Vegetable at index 2 is spinach

// 5. Differentiating between while and do-while

// Example 5: while loop with a false condition
let x = 1;
while (x > 1) {
  console.log("This won't be executed");
}
console.log("While loop finished.");

// Example 6: do-while loop with a false condition
let y = 1;
do {
  console.log("This will be executed at least once" + 1 + 1);
} while (y > 1);
console.log("Do-while loop finished.");

// Summary:
//? - The while loop repeatedly executes a block of code as long as the specified condition is true.
// - The do-while loop is similar to the while loop, but it guarantees that the block of code is executed at least once before checking the condition.
// - The key difference is the position of the condition: while loop checks the condition before the block, and do-while loop checks it after the block.
// - Use a while loop when the loop body should execute only if the condition is initially true.
// - Use a do-while loop when you want to ensure that the loop body is executed at least once, regardless of the initial condition.



//!   statements
/*
? Syntax

switch (expression) {
  case value1:
    code to be executed if expression matches value1
    break;
  case value2:
    code to be executed if expression matches value2
    break;
  ... (additional cases)
  default:
    code to be executed if expression does not match any case
}

*/

//? 1. Basic switch Statement

// Example 1: Basic switch statement for day of the week

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
  case 7:
    dayName = "Weekend";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Day:", dayName);
// Output: Day: Wednesday

// Keywords used in the switch statement:
// - switch: Starts the switch statement.
// - case: Specifies the value to be compared with the expression.
// - break: Terminates the switch statement and exits the block.
// - default: Specifies the code to run if no case is true.

// 2. Fall-Through Behavior

// Example 2: Fall-through behavior in switch statement
let grade = "B";
let feedback;

switch (grade) {
  case "A":
  case "B":
    feedback = "Good job!";
    break;
  case "C":
  case "D":
    feedback = "You can do better.";
    break;
  case "F":
    feedback = "Failed. Please try again.";
    break;
  default:
    feedback = "Invalid grade";
}

console.log("Feedback:", feedback);
// Output: Feedback: Good job!

// 3. No Break Statement

// Example 3: Switch statement without break statements
let month = 2;
let monthName;

switch (month) {
  case 1:
    monthName = "January";
  case 2:
    monthName = "February"; // No break, falls through to the next case
  case 3:
    monthName = "March";
  // ... (skipping other cases for brevity)
  default:
    monthName = "Invalid month";
}

console.log("Month:", monthName);
// Output: Month: March

// Summary:
// - The switch statement evaluates an expression against multiple possible case values.
// - The case values are checked using strict equality (===).
// - The break statement is used to terminate the switch statement and prevent fall-through behavior.
// - The default case is executed if none of the cases match the expression.
// - Multiple cases can share the same code block (fall-through behavior) by omitting the break statement.
// - It's important to include break statements to avoid unintentional fall-through.






