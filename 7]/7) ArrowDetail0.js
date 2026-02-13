// Source is short nots of MDN Docs, JS info, Youtube and other udemy lects -

/*
? What is an Arrow function?
todo - Definition = An arrow function expression is a compact alternative to a traditional function expression. 
todo - Arrow function does not have its own this therefore it accesses the value of this from its parent function. Also its most imp use is to Lexically Bind the Context(this).

Lexical scoping is a programming language feature that determines a variable's scope based on the program's textual structure. It's also known as static scoping. 
Here are some key points about lexical scoping: 

Variable scope
Variables are only accessible within the scope they are declared in. 

Function scope
Innermost, inner, and outermost functions can access variables from their parent scopes.
 
Program structure
A compiler can determine which variable definition each variable refers to by examining the program's source code. 

Difference from dynamic scoping
In dynamic scoping, the variable scope is defined by the calling sequence of functions in the program. 

Lexical scoping is used in many modern programming languages, including: R, JavaScript, Dart,Haskell, and ML

In other words, //* lexical scope refers to the ability of a function scope to access variables from the parent scope. When there is lexical scope, the innermost, inner and outermost functions may access all variables from their parent scopes all the way up to the global scope.



?For Interview
*- The main use of arrow function is it lexically binds the this keyword to its context.
*- This means it does not have its own this so it uses the value of this from the parent function or the value available at the time of defining the arrow function.

? There are some limitations of the arrow fucntion?
- 1] Arrow functions don't have their own bindings to "this", arguments or super, and should'nt be used as methods
*- 2] In arrow functions, new target is inherited from the surrounding scope.
?- 3] Arrow functions cant be used for call, apply and bind methods.
?- 4] Arrow functions cannot be used as constructors.
?- 5] Arrow functions cannot use yield, within its body.
- 6] Arrow functions lexically binds the context.

 Point 6] Elaborated - 
    Lexically bind the context: Arrow function binds the context lexically or statically. In the arrow function, there is not any binding of 'this'. In regular functions, 'this' keyword is used to represent the objects that called the function, which could either be a window, a button, or a document or anything.
    But with arrow functions, this keyword always represents the object that defines the parent function of the arrow function.

    
!       Basic Syntax of Arrow function is as follows-
? 1] AF with name, two params, multiple lines.
let funcName = (param1, param2) => { 
    val = param1 + param2;
    return val * 10;
}


? 2} AF without name.
(param1) => { param1 + 100 };

? 3] AF without params and without curly braces and Params.
() => 10 + 100; // When no parameters

? 4] AF without paranthesis.
a => a + 10;  // When only one param

*/

//Todo- Example-

let arr = ["Abhishek", "Nayan", "Bhushan", "Romesh"];
let lengths = arr.map((arrElement) => arrElement.length);

console.log(lengths);

/*
!                       Advanced syntax

? 1] To return an object literal expression requires parentheses around expression:

(params) => ({ foo: "a" }) // returning the object { foo: "a" }

? 2] Rest parameters are supported, and always require parentheses:

(a, b, ...r) => expression

? 3] Default parameters are supported, and always require parentheses:

(a = 400, b = 20, c) => expression

? 4] Destructuring within params is supported, and always requires parentheses:

([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30

*/

//! Example 2

console.log(" Arrow practice ");

let obj1 = {
  a: 123,
  b: 20,
  c: 277,
  sumMethod: function () {
    console.log(
      "\n The normal sumMethod is executed..... : ",
      +this.a,
      +this.b
    );
    return this.a + this.b;
  },
  
  sumFunc() {
    console.log("\n The normal sumFunc is executed..... : ", +this.a, +this.b);
    return this.a + this.b;
  },// lose of this here

  nestedFunc() {
    function nesFunc() {
      console.log(
        "\n The Nested function method is Executed.... : ",
        +this.a,
        +this.b
      );
      return this.a + this.b; // this is not accessible here because it is lost in nested call.
    }
    return nesFunc();
  },

  getSum: function () {
    let af = () => {
      console.log("\n The Sum AF is executed..... : ", +this.a, +this.b);
      return this.a + this.b;
    };
    return af(); // no lose of this inside of nested arrow function in method
  },

  getSumAgain: function () {
    return (() => {
      console.log(
        "\n The SumAgain() AF is executed..... : ",
        +this.a,
        +this.b,
        +this.c
      );
      return this.a + this.b + this.c;
    })(); // no lose of this inside of nested arrow function in method
  },
};

  let sum = obj1.getSum();
  console.log(" Value of getSum AF used as Method : " + sum);

  sum = obj1.getSumAgain();
  console.log(" Value of getSumAgain AF used as Method : " + sum);

  sum = obj1.sumFunc();
  console.log(" Value of sumFunc : " + sum);

  sum = obj1.sumMethod();
  console.log(" Value sumMethod : " + sum);

  sum = obj1.nestedFunc();
  console.log(" Value nestedFunc : " + sum);// this value lose here

// Line 1 (Explained) = This will always return the value 143 because the 'THIS' used in AF will always refer to the parent function's object where its created.

// Line 2 (Explained) = If we want to return the arrow functions result directly then we need to execute it first using the anonymous self calling function. Then we need to return the value returned by the AF functions back from the called function. Because the return in AF will only return it to the line where the annonymous function is called.

//! Example 3 - Very very imp to understand what does THIS refers to when used in the arrow function.

console.log(" Arrow practice ");

let a = 100;
let b = 200;

let obj = {
  a: 10,
  b: 20,
  c: "no value",
  getSum: function () {
    console.log(" Yes you can see me");
    let m = () => {
      let c = this.a + this.b;
      console.log(" This is the value of C inside the AF:- " + c);

      // In above line we can access the value of the 'this' keyword because the AF does not has its own this thus uses the this of the parent function which is the object obj.

      return c;
      // We need to return the value if we need to access the value of c outside of the AF.
    };
    console.log(m()); // Output = 30 === This proves that AF returns value.
    return m();
  },
  getOtherSum: ()=>{
    let c = this.a + this.b;
    console.log(" This is the value of C inside the AF:- " + c);// this value lose when we use arrow function as a method
  }
};

obj.getOtherSum();




// You can ignor this if its too complex


let obj2 = {
  a: 100,
  b: 134,
  print: function () {
    return obj.getSum();
  },
};

console.log(obj2.print()); // Output = 30.

//!  Example 4

console.log(" Arrow practice ");

let x = 100,
  y = 200;

let obj5 = {
  x: 10,
  y: 20,
  getSum: () => {
    let z = this.x + this.y; // Line 1
    console.log(" This is the value of Z inside the AF:- " + z); // Line 2
    return z;
  },
};
console.log(obj5.getSum()); // NaN

// Line 1 (Explained) => z = undefined + undefined  ( Therefore z = NaN )
// Line 2 (Explained) => z = NaN bcoz In above line we can not access the value of the 'this' keyword because the AF dont has its own 'this' thus uses the this of the parent function. But here there is no parent function rather it is itself defined as the method of the obj5. Thus referes to global function which is under the Window object. Therefore in unstrict mode it does not refer to Window objects variables.

/* Using arrow funciton without parent object
a = 100;
b = 200;

function parent(){
  const getOtherSum= ()=>{
    var c = this.a + this.b;
    console.log(" This is the value of C inside the AF:- " + c);
  }
  getOtherSum();
}
parent();
*/


//!     V.V.IMP notes abt the arrow function

/*
1] Arrow function does not have its own this. When we refer to the this keyword in the arrow function it refers to the this of the outer function or the object in which it is called.

So when we use the 'this' in the arrow function, it corresponds/refers to the window object when the function is created in the global scope. But if we create the arrow function in the other function which is the method of the object it will always refer to that particular object.

2] If we use this in the arrow function which is inside the class it will automatically refer to the class or the class name. unlike the normal use of this. This is because the object created by the class is created under the constructor function and in this CF the value of this means the object itself. 
    ---This behaviour is also know as auto binding behaviour of "this" in the arrow function.

3] AF is mostly useful when we need our 'this' independent of the object, function in which it is called. 
But bound to the object where it was created.


? Advantages of the arrow function

The greatest benefit of using Arrow functions is with methods like setTimeout() and EventTarget.prototype.addEventListener() that usually require some kind of closure, call, apply or bind to ensure that the function is executed in the proper scope.
*/

const obj3 = {
  count: 10,
  doSomethingLater() {
    // The traditional function binds "this" to the "obj3" context.
    setTimeout(()=> {
      // Since the arrow function doesn't have its own binding and setTimeout (as a function call) doesn't create a binding itself, the "obj" context of the traditional function will be used within.

      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj3.doSomethingLater();

//!    No array like Arguments property for Arrow Functions
//!                 No binding of arguments

// Arrow functions do not have their own arguments object. Thus, in this example, arguments is a reference to the arguments of the enclosing scope:

//Todo- Accessing the arguments without param using Arguments array of the function
// The arguments[] array in a function
// Use = To access the arguments passed during the call without using the parameters.
//? Syntax = arguments[argumentNumber]; // Here argument will always start with 0 like in array.
// Note - Arguments is a array always even if we are passing only one argument.

function accessUsingArgs(){
   let total = 0;
   for(let i = 0; i< arguments.length; i++){
    total += arguments[i];
   }
   console.log(total);
}

accessUsingArgs(0,1,2,3,4,5,6,7,8,9,10);

// Implementing arguments using Arrow functions.

const sumArrow = ()=>{
  let total = 0;
  for(let i = 0; i< arguments.length; i++){
   total += arguments[i];
  }
  console.log(total);
};
sumArrow(1,2,3,4,5,6,7,8,9,10); // Error because no arguments array

//? --------------------------------------------------

const arguments = [1, 2, 3];
const arr2 = () => arguments[0];

arr2(); // NO OUTPUT

function foo(n) {
  const f = () => arguments[0] + n;
  // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // output is = 3 + 3 = 6

// Note: You cannot declare a variable called arguments in strict mode, so the code above would be a syntax error. This makes the scoping effect of arguments much easier to reason about.

// In most cases, using rest parameters is a good alternative to using an arguments object.

// function foo(n) {
//     const f = (...args) => args[0] + n;
//     return f(10);
// }

// foo(1); // output is = 11

//!            More cool things about the Arrow function

//? Arrow functions are not just a “shorthand” for writing small stuff. They have some very specific and useful features.

// JavaScript is full of situations where we need to write a small function that’s executed somewhere else. For instance:
/*
arr.forEach(func) – func is executed by forEach for every array item.
setTimeout(func) – func is executed by the built-in scheduler.
…there are more.
It’s in the very spirit of JavaScript to create a function and pass it somewhere.
And in such functions we usually don’t want to leave the current context. That’s where arrow functions come in handy.
*/

//? Arrow functions have no “this”
// arrow functions do not have this. If this is accessed, it is taken from the outside.
// For instance, we can use it to iterate inside an object method:

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach((student) =>
      console.log(this.title + ": " + student)
    );
  },
};
group.showList();

// Here in forEach, the arrow function is used, so this.title in it is exactly the same as in the outer method showList. That is: group.title.

//Todo--- If we used a “regular” function, there would be an error:

let group2 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function (student) {
      // Error: Cannot read property 'title' of undefined
      console.log(this.title + ": " + student);
    });
  },
};

group2.showList();

//? The error occurs because forEach runs functions with this = undefined by default, so the attempt to access undefined.title is made.
//? That doesn’t affect arrow functions, because they just don’t have this.

//!           Arrow functions can’t run with new
//  Not having this naturally means another limitation: arrow functions can’t be used as constructors. They can’t be called with new.

//!           Arrow functions VS bind
/*
There’s a subtle difference between an arrow function => and a regular function called with .bind(this):

1] .bind(this) creates a “bound version” of the function.

2] The arrow => doesn’t create any binding. The function simply doesn’t have this. The search of "this" Keyword is made exactly the same way as a regular variable search : in the outer lexical environment.
*/

//!------------------Arrow func Example ------------------
("use strict");

// Example-  to understand how to preserve or set the value of this in the normal and arrow funciton.

const person1 = {
  y: 1991,
  calcAge: function () {
    console.log(2037 - this.y);
    const self = this;
    const isMillenial = function () {
      // console.log(this);
      console.log("Value of this : " + this.y + " Value of self : " + self.y); // self is used to preserve the value of this. This is used inlegacy code. Now AF is used for preserving the this. i.e lexically binding the 'this'.
    };
    isMillenial();
  },

  greet: () => {
    // console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

person1.greet();
person1.calcAge();
