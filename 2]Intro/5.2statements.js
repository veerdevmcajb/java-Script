
//Conditional Operators
//  < >

console.log(5 < 2);
console.log(5 > 2);

console.log(5 <= 2);
console.log(5 >= 2);
console.log(3 >= 3);
console.log(3 <= 3);

console.log(5 == 5);// lose eqality check
console.log(5 === 5); //strict eqality check

console.log("5" == 5);  // lose eqality check
console.log("5" === 5); //strict eqality check

//--> ||(OR Operator), &&(AND Operator), ??()

// ||(OR operator compairs the value and if any one condition is true it will return true  )
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// ANd Operator check if the both condition is true then only it return true.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//--> ?? operator is used in assignment the value

//assignment operator
//ex 1--> if the first value is not define it will check next true value and return it.
let a;
let b = false
let c = "veer"

let result = a || b || c;
console.log(result);

// ex2--> if we got the first value true it will return first value , it doesnot check the next values.

let a = "shiv"
let b = false
let c = "veer"

let result = a || b || c;
console.log(result);

// ex3 --> when all values is false then it will return last value

let z=false || null || undefined
console.log(z);

// using && Operator
//ex1 && operator return the first false value
let a=undefined;
let b = false
let c = "veer"

let result = a && b && c;
console.log(result);

// ex2  check for the false value and return it
let a="shiv";
let b = false
let c = "veer"

let result = a && b && c;
console.log(result);  //false

//ex3 when all value are true it will return last value
let z=true && "shiv" && 55
console.log(z);


// 3) (??) Nullish Coalescing --> operator it will check the first value and return it but it will not compair null and undefine

//ex1
let user;
let x=user ?? "Ananymous"
console.log(x)  // Ananymous

//ex2
let user="veer";
let x=user ?? "Ananymous"
console.log(x) //veer

let user=0;
let x=user ?? "Ananymous"
console.log(x) // 0

let user=false;
let x=user ?? "Ananymous"
console.log(x) //false





//Conditional statements (if ,if-else)

  let num1=10;
  let num2=25;
  let num3=35;

  // if(num1 > num2){
  //   console.log("Num1 is gretter ")
  // }
  // if(num2 >num1){
  //   console.log("Num2 is gretter")
  // }

  if(num1 > num2){
    console.log("num1 is gretter")
  } else if(num2>num3){
    console.log("num2 is gretter")
  }else{
    console.log("num3 is gretter")
  }


// ex2 
//let any;  // Have some false value
//let any=null;// Have some false value
let any=" " 
if(any){
  console.log("Have some truthy value")
}else{
  console.log("Have some false value")
}






//!                               Javascript Statements

//? Example 1: Basic if statement

let temperature = 10;

if (temperature > 30 && temperature < 45) {

  console.log("It's a hot day!");

} else if (temperature >= 25 && temperature < 30) {

  console.log("It's a normal day!");

} else {

  if (temperature >= 45) console.log("Its the exterem hot temperature");

  if (temperature < 25) console.log("Its the exterem cold temperature");
}

//? Example 2: if-else statement

let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

//? 2. Nested if Statements
//? Example 3: Nested if statements

let userAge = 18;
let hasID = true;

if (userAge >= 18) {
  console.log("You are eligible to enter.");

  if (hasID) {
    console.log("You have a valid ID. Welcome!");
  } else {
    console.log("You need to have a valid ID to enter.");
  }
} else {
  console.log("You are too young to enter.");
}

//? 3. else-if Statement
//? Example 4: else-if statement

let timeOfDay = "evening";

if (timeOfDay === "morning") {
  console.log("Good morning!");
} else if (timeOfDay === "afternoon") {
  console.log("Good afternoon!");
} else if (timeOfDay === "evening") {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}

//? 4. Ternary Operator
//? Syntax:-
// condition ? "Its true" : "Its false";

//todo- Example 5A: Without Ternary operator

let isRain = true;
if (isRain) {
  console.log("Raining");
} else {
  console.log("Not Raining");
}

//Todo- Example 5B: With Ternary operator

let isRaining = true;
let weatherMessage = isRaining ? "Bring an umbrella" : "Enjoy the weather";
console.log(weatherMessage);

// 5. Logical Operators with if Statements

// Example 6: Logical AND (&&) with if statement
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("You are logged in as an admin.");
} else {
  console.log("Access denied.");
}//*  && operator returns first falsy value

// Example 7: Logical OR (||) with if statement
let isGuest = false;
let isVIP = true;

if (isGuest || isVIP) {
  console.log("Welcome to the event!");
} else {
  console.log("Access denied.");
}//* || operator returns first truthy values

// Summary:
// - `if` statements are used for conditional execution of code blocks.
// - `else` statements provide an alternative block of code to be executed when the condition in the `if` statement is false.
// - Nested `if` statements allow for more complex conditions and logic.
// - `else-if` statements provide multiple alternative conditions.
// - Ternary operator is a concise way to write simple `if-else` statements.
// - Logical operators (`&&`, `||`) are used to combine conditions in `if` statements.



//! 4. Ternary Operator within if Statement

// Example 8: Ternary operator within an if statement
let isUserLoggedIn = true;
let message = isUserLoggedIn ? "Welcome, User!" : "Please log in to continue";
console.log(message);

// Summary:
// - The ternary operator is a concise way to write simple if-else statements.
// - It consists of a condition followed by a question mark, the expression to execute if the condition is true, a colon, and the expression to execute if the condition is false.




