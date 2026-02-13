/*
!-------- IIFE- Immediately invoked funciton expressions --------
In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called “immediately-invoked function expressions” (abbreviated as IIFE).


If we use below code it gives - syntax error because of parentheses below.

function go() {
    console.log('Hi);
}();  // <-- can't call Function Declaration immediately

*/

(function () {
    var msg = "Hey Gyus Wassup..!";
    console.log(msg);
})();

// Here the function is encapsulated in the annonymous function and called immediately. So the code executes right away and has its own private variables.

// There exist other ways besides parentheses to tell JavaScript that we mean a Function Expression:

// Ways to create IIFE

(function () {
    console.log("Parentheses around the function");
})();

(function () {
    console.log("Parentheses around the whole thing");
}());

!function () {
    console.log("Bitwise NOT operator starts the expression");
}();

+function () {
    console.log("Unary plus starts the expression");
}();

// In all the above cases we declare a Function Expression and run it immediately. Let’s note again: nowadays there’s no reason to write such code.

