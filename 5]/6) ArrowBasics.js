// Arrow functions provide a concise syntax for writing function expressions.

// They are syntactically similar to the related feature in C#, Java 8, and CoffeeScript.

// ================================
// Basic Syntax
// ================================

/*

const functionName = () => {
    return anyValue;
}

 A simple arrow function with no parameters requires parentheses before the arrow (=>) token,
 followed by the function body.
*/

//? Step 1 : function expression

const func1 = function(){
    console.log("Hi this is normal function definition using function expresiion"); 
}
func1();


//? Step 2 : arrow function expression

const func2 = () => {
    console.log("Hi this is normal function definition using arrow function"); 
}
func2();


//? Type 1 : Arrow function without parameters

const noParams = () => {
    console.log('This is an arrow function with no parameters.');
};
noParams();


//? Type2 : Arrow function using single parameter.

const singleParam = (name) => {
    console.log(`Hello, ${name}!`);
};
singleParam('Alice');


//? Type 3 : Arrow function using multiple parameters.
// For multiple parameters, parentheses are required:
const multipleParams = (a, b) => {
    console.log(`The sum of ${a} and ${b} is ${a + b}.`);
};
multipleParams(5, 7);


//? Type 4 : Arrow function with only 1 param but without brackets.

const withoutBracket = first => {
    console.log("Arrow function without brackets: ", first);
}
withoutBracket('Abhishek');


//? Type 5 : Arrow function without curly braces.
// When our arrow function is of only one line then we can avoid using the curly braces.
// It can be combined with any of the above types.

const withoutCurly = greet => console.log("Arrow function without curly braces: ", greet);

withoutCurly("Hello JS");




// ================================
//! Single Expression Implicit Return
// ================================
// If the arrow function contains just one expression, you can omit the curly braces
// and the `return` keyword. The result of the expression will be returned automatically.

const add = (a, b) => a + b;
console.log(add(10, 5)); // 15

// This concise form is great for inline functions and callbacks.


//? How return works in arrow function 
// We need to use return keyword when our arrow function is of multiple lines.

const arrowReturns = (a,b) => {
    let c = a + b;
    return c;
};

let result = arrowReturns(5, 10);
console.log(result); // 15

// We DONT USE "return" keyword when our arrow function is of SINGLE LINE.

const arrowWithoutReturn = (a,b) => a+b;
console.log(arrowWithoutReturn(10,10));

/*
Discriptive way of writing above arroew funciton

const arrowWithReturn = (a,b) => {
    return a+b;
}
*/

// ================================
//! Returning Object Literals
// ================================
// To return an object literal from an arrow function, wrap the object literal in parentheses.
// This prevents the curly braces from being interpreted as the start of the function body.

const createPerson = (name, age) => ({ name: name, age: age });
console.log(createPerson('John', 30)); // { name: 'John', age: 30 }

//? Returning object litterals from an arrow function

// Ex 1.
var arrowReturnObj = ()=> ( {name: "Abhishek", lastname: "Dhone"} );
console.log(arrowReturnObj());

// Ex 2.
var arrowReturnObj = (first, last)=> ( {first, last} );
console.log(arrowReturnObj("Abhishek","Dhone"));




// ================================
//! Arrow Functions as Callbacks
// ================================
// Arrow functions are commonly used for callbacks due to their concise syntax.

/*
Normal way to write array method

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (number){ 
    result = number * 2;
     return result;
}

console.log(doubled); // [2, 4, 6, 8, 10]

*/

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]


// ================================
// Multiline Arrow Functions
// ================================
// If the function body contains more than one statement, you must use curly braces
// and the `return` keyword (if the function returns a value).

const largerThanFive = numbers.filter(number => {
    if (number > 5) {
        return true;
    }
    return false;
});
console.log(largerThanFive); // Numbers in the array that are larger than 5




// ================================
// ! Do not focus on this, it will be covered later
// No Binding of 'this'
// ================================
// Arrow functions do not have their own 'this' context but inherit it from the surrounding code.
// This feature is not demonstrated here as per your request.

// ================================
// When Not to Use Arrow Functions
// ================================
// - When you need to use function hoisting, as arrow functions are not hoisted.
// - When using methods that require their own `this` context, like object methods or prototype methods.

// Arrow functions are a powerful addition to JavaScript, offering a concise syntax for writing functions,
// and are especially useful in functional programming patterns and situations where the function's `this`
// context is not important or should be inherited from the surrounding scope.
