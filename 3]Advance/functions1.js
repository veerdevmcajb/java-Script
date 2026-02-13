//! Declaraction, Initialization and Call

// A basic example of function declaratrion and function call.

//? Function declaration and initializaiton usin function keyword.

let outerSum;

function addition(){
    var a = 2;
    var b = 3;
    var c = a + b;
    globaSum = a + b + c; // not a good practice.
    outerSum = a + b;
    // console.log(c);
    return c;
}

// Function call using ()
addition();

// Getting the value from the function as a returned value.
var result = addition();
console.log("The result of addition is = ", result)     // 5
console.log("The result of addition is = ", addition());// 5

// console.log(c); // ReferenceError: c is not defined ((( Because it is inside the function scope and not in global scope))

// Creating the global variable inside the function and accessing it outside. (In global scope)
console.log("Inside global sum", globaSum);

// Changing global variable inside the function.
console.log("Outer Sum", outerSum);

function multFn() {
    var mult = 9;
    return function (val) {
        mult = mult * val;
        undeclared = mult;
        return mult;
    }
}

multFn();
var mul = multFn();  // Here this Mul actually holds the function returned by multFn.
console.log(mul(4));
// console.log(mult); // This will give an error because mult is a var and var is func scoped.
// output = 36

// Local variables of the function.
// A variable declared inside a function is only visible inside that function. 
// Be it any (var, let, const), except the undeclared variable because it will have the global
//  scope and thus created on global object and accessible everywhere throughout the code through 
// the scope chain. (In detail in Scope notes).

//? Functionn declaration and initialization using variables

var multFunc = function () {
    var mult = 9;
    return function (val) {
        mult = mult * val;
        undeclared = mult;
        return mult;
    }
}



function showMessage() {
    let message = "Hello, I am Abhishek Dhone"; // Local Variable.
    console.log(message);
}

showMessage();
// console.log(message); This will show reference error as message not defined.



//! ---------------Outer variables-------------------

// A function can access an outer variable as well, for example:
let myName = "Abhishek";
let attribute1 = "AttriORIGNAL";

console.log("Hi my name outside function is -- " + myName);
console.log("Before call outside the function I am Orignal Variable -- " + attribute1);

function showMessage2(attri1, attri2) {
    let message2 = 'Hello, ' + myName;
    globalMessage = 'Hi I am Global, ' + myName + "---Displayed within the function but accessed outside the function";
    myName = "Arjun";
    console.log(message2);

    console.log("I am attribute1 inside function NOT MODIFIED-- " + attri1);

    attri1 = "Attri1 inside function";
    console.log("I am attribute1 inside function MODIFIED-- " + attri1);
    return attri1;
}

let modifiedAttri = showMessage2(attribute1);
// console.log(message2); This can not be accessed.
// console.log(attri1); //This can not be accessed because it is local to a function. 

console.log("After call outside the function: Orignal Variable -- " + attribute1);

// This variable remains as it is because when something is passed as the parameter to the function only the copy is passed and not the actual variable.

// Therefore actions are perfoemed only on the copies and not the orignal variables passed as the parameteres. i.e. Inside the local copy of the function.

console.log(" attri1 returned from function is -- " + modifiedAttri);
// This is the modifiedAttri that stores the return value from the function call.

console.log(globalMessage);
// This will show message because when witin the function the variable scope is not defined it is considered as the global variable.    

console.log("Function changed my name to --" + myName);
// This is changed because the global scope variable outside the function writen in the main code is fully accessible within any function.

