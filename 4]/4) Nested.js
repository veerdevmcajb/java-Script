// Nested Functions and Closures in JavaScript

// A nested function is a function defined within another function.
// It allows you to organize and structure your code more effectively.
// Nested functions can access variables of their parent function.

function outerFunction(outerVariable) {
    // This is the outer function
    // It has an outerVariable

    // Defining a nested function
    function innerFunction(innerVariable) {
        // This is the inner function, nested within outerFunction
        // It can access both innerVariable and outerVariable

        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }

    // Call the nested function
    // Notice that innerFunction is accessible only within outerFunction
    innerFunction('inner');
}

// Call the outer function
outerFunction('outer');

// Closures in JavaScript
// A closure is a function that has access to its outer function's scope,
// even after the outer function has returned.
// This means a closure can remember and access variables and arguments of its outer function
// even after that function has finished executing.

function outerFunctionWithClosure() {
    let outerVariable = 'I am outside!';

    // This inner function forms a closure
    function innerFunctionWithClosure() {
        // It can access outerVariable, which is defined in the outer scope
        console.log(outerVariable);
    }

    // Return the inner function from the outer function
    return innerFunctionWithClosure;
}

// outerFunctionWithClosure() has now been invoked, but the inner function it returned
// is assigned to myInnerFunction. The closure will remember the environment in which
// it was created, i.e., it 'closes over' the outerVariable.
let myInnerFunction = outerFunctionWithClosure();

// When calling the function now, it still has access to outerVariable, even though
// outerFunctionWithClosure() has already completed execution.
myInnerFunction(); // Output: 'I am outside!'

// Real-Life Example of Closure
// Closures are often used to create private variables and functions.

function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    };
}

// counter now holds an object with two methods: increment and decrement
// count is a private variable in the closure of these methods
let counter = createCounter();//count = 0 //? {}
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1








let a  = 10;
let b = 4;

function addNum(n,n1){
    let total = n + n1;
    return total;
}

let result = add(a,b) ;


function add(){
    let counter = 0;
    return function add1(){
        counter++;
        console.log(counter)
    }
};


let abhi = add();

abhi();
abhi();


let s = add();
s();
