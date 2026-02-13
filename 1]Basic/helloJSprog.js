// Basic hello Javascript programm.




console.log("Hello Javascript");
console.warn("Hello Javascript");
console.error("Hello Javascript");

// Basic mathematics operation.

/*
? Declaration and definition
* Both things are same in JS 
todo- Definition includes the declaration step and goes further by allocating memory and specifying the data type of the variable. 
- It is the process of preparing the variable for use. 
*/

// veriable declaration keywords
// var
// const
// let
var a;
/* 
? Initialization
- Initialization involves assigning the first value to a variable. 
- It can happen at the time of declaration or later in the code. 
- Variables can be used without initialization, but they will have an "undefined" value. */


a = 5;
console.log(a)
a =10
console.log(a)

let num = 11
console.log(num);
num= 20;
console.log(num);


const name1 = "Abhishek"
console.log(name1)
// name1 = "abc"
// console.log(name1) // TypeError: Assignment to constant variable.


//? Declare and Initialize at same time.

var full_name = 10;

var c;

c = a + b;

// Different types of console.log()
console.log(a + b);
// 15

console.log("Addition is : ", c);

console.log("Addition is : " +c);

// Without Backtiks

console.log("Addition of "+ a +"and" + b + "is" +c);

// Using Backtiks.

console.log(`Addition of ${a + b} and ${b} is ${c}`);


