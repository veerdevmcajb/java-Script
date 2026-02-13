
//function funcitonName(){}

function sumOperation(a,b){
    let result= a+b
    return result
}
console.log(sumOperation(10,20)) //30











//! Declaraction, Initialization and Call
// ? function is reuseble block of code 

// A basic example of function declaratrion and function call.

function multFn() {
    var mult = 9;
    return function (val) {
        mult = mult * val;
        undeclared = mult;
        return mult;
    }
}

var mul = multFn();  // Here this Mul actually holds the function returned by multFn.
console.log(mul(4));

//! console.log(mult); // This will give an error because mult is a var and var is func scoped.
// output = 36

//?*********************************_____________________________************************************

//? Local variables of the function.


//todo---:--- A variable declared inside a function is only visible inside that function. Be it any (var, let, const), except the undeclared variable because it will have the global scope and thus created on global object and accessible everywhere throughout the code through the scope chain. (In detail in Scope notes).



function showMessage() {
    let message = "Hello, I am Abhishek Dhone"; // Local Variable.
    console.log(message);
}

showMessage();
//! console.log(message); This will show reference error as message not defined.



//! ---------------Outer variables-------------------

// A function can access an outer variable as well, for example:
let myName = "Abhishek";
let attribute1 = "AttriORIGNAL";

// console.log("Hi my name outside function is -- " + myName);
// console.log("Before call outside the function I am Orignal Variable -- " + attribute1);

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






//! ---------------------------- V VIMP ----------------------
/* 

? How to define JavaScript functions that return multiple values.

*JavaScript functions can return a single value. To return multiple values from a function, you can pack the return values as elements of an array or as properties of an object.

Returning multiple values from a function using an array
Suppose the following getNames() function retrieves the first name and last name from a database in the backend or from the result of a third-party API call and returns them as elements of an array:
*/

function getNamesArr() {
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';

    //? return as an array
    return [firstName, lastName];
}
console.log(getNamesArr());


// The following shows how to get the return value from the getNames() function:

let namesArr = getNamesArr();
let [fname, lname] = getNamesArr();
console.log(' This is the array variable storing the returned array of multiple values : - ' + namesArr);
console.log(' Destructured array elements are : ' + fname, lname);
// Because the names variable is an array, you can reference its elements using the square brackets, like this:
// We can also do destructuring while storing the result of the returned array.

const firstNameArr = namesArr[0],
    lastNameArr = namesArr[1];

console.log(' These are the normal variables storing the returned array of multiple values  seperately : - ' + firstNameArr + " " + lastNameArr);


// In ES6, you can use the ARRAY DESTRUCTURING ASSIGNMENT syntax to unpack values from an array more intuitively, like this:

const [firstNameDeArr, lastNameDeArr] = getNamesArr();
console.log(' These are the Destructuring variables storing the returned array of multiple values seperately : - ' + firstNameDeArr + " " + lastNameDeArr);


// In this code, the firstName and lastName variables will take the first and second elements of the return array.




//! Returning multiple values from an function using an object.

//  If you want to assign a name to each returned value to make it more readable and easier to maintain, you can use an object:-

function getNamesObj1() {
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';

    // return values
    return {
        'firstName': firstName,
        'lastName': lastName
    };
}
console.log(getNamesObj1());

// Since the names of the properties are the same as the variables, you can shorten it using the object literal syntax extensions in ES6 as follows:

function getNamesObj() {
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';

    return { firstName, lastName };
}

// And you can get the return value as an object like this:

let namesObj = getNamesObj();

console.log(' These is the Object variable storing the returned Object of multiple values in Object : - ' + namesObj);


let firstNameVar = namesObj.firstName,
    lastNameVar = namesObj.lastName;

console.log(' These are the Normal variables storing the returned Objects values seperately : - ' + firstNameVar + " " + lastNameVar);

// If you want to unpack properties from an object, you can use the object destructuring syntax as follows:

// let { firstNameObjVar, lastNameObjVar } = getNamesObj();
// This will give output as undefined because:- Variables used for Object Destructuring must have the similar name that is given in the object. 

let { firstName, lastName } = getNamesObj();

console.log(' These are the Object Destructuring variables storing the returned Object of multiple values seperately : - ' + firstName + " " + lastName);


/*
? Imp Summary-
JavaScript doesn’t support functions that return multiple values. However, we can wrap multiple values into an array or an object and return the array or the object.
?Use destructuring assignment syntax to unpack values from the array, or properties from objects.
*/





/*
!-------- IIFE- Immediately invoked funciton expressions --------

In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called “immediately-invoked function expressions” (abbreviated as IIFE).


!If we use below code it gives - syntax error because of parentheses below.

function go() {
    console.log('Hi);
} go();  // <-- can't call Function Declaration immediately

*/

//16. Create an IIFE that logs "Hello from IIFE" to the console. 

(function (){
    var msg="Hello from IIFE";
    console.log(msg); 
})();



(function () {
    var msg = "Hey Gyus Wassup..!";
    console.log(msg);
})();

//* Here the function is encapsulated in the annonymous function and called immediately. So the code executes right away and has its own private variables.

// There exist other ways besides parentheses to tell JavaScript that we mean a Function Expression:

//todo-------------------------- Ways to create IIFE

(function () {
    console.log("Parentheses around the function");
})();

(function () {
    console.log("Parentheses around the whole thing");
}());

//!
!function () {
    console.log("Bitwise NOT operator starts the expression");
}();

//!
+function () {
    console.log("Unary plus starts the expression");
}();

//? In all the above cases we declare a Function Expression and run it immediately. Let’s note again: nowadays there’s no reason to write such code.




/* 
! Practicing the returns when the functions are returned.
 There are basically two differences while returning function from a functions.
 ?1) Returning the value of the function call from the parent function. This is done in example 1 below.
 ?2) Returning the function declaration from a parent function. In example 2 below

Learning = When a function is called it will always return the value and while calling the function we need to take care that the arguments passed are valid / declared / not undefined etc.
But while declaring the function it is not necessary because the function is dead thus it wont throw any errors untill and unless it is called.
Same is followed when returning something from the function. 

? What is return = 

*- It is simply a keyword that is used to end the function execution and send back the processed value from the function to where it was called. Once the return is reached no lines in function are executed. There can be multiple returns in the function but only one is called based on the conditions.
todo- On the right side of return = If there is any expression or function call then return will return its resultant value to  the place where the function is called.

todo- On the right side of return = If there is a value or object or string or array or any declaration of function or object then it will return it as it is without processing or evaluating it further.

*- We can simply say that return acts as a pseudo variable which will return what is on its right side.

? Example 1 explained = 

*- Here when we are returning in the parent function we are actually calling the callback function with 2 arguments. 
- This will actually make the call to the callback function and the call will be replaced by the processed value returned by the logic function. (i.e actually sum() function) So here the value will be the sum of a,b.


? Example 2 explained = 
*- Here while returning in the parent function we are not returning the value received from the call of the function. Rather we are returning the function declaration written in front of the return statement.
- Thus this is not treated as the call to function. Rather it is just a function declaration that is stored in annother variable.
todo- The basic difference here between the normal function declaration and the nested or returned function declarartion is that the returned declaration will have the context of the parent function. This means that the information and value of the parent function is available to the returned func decl..
- This is also the clasic example for the closure function. and for currying.


*/

//Todo Example 1 ---------------------------------------------------------------------

function arithmetic(logic, a, b) {
    return logic(a, b);
}

function sum(x, y) {
    return x + y;
}

let math = arithmetic(sum, 10, 5);      // math = 15
console.log(math);                      // Op = 15
console.log(arithmetic(sum, 10, 5));    // Op = 15
console.log(math());                    // Error = not a function
console.log(arithmetic(sum, 10, 5)());  // Error = not a function



//Todo Example 2 ----------------------------------------------------------------------

function arithmetic2(logic, a, b) {
    return function xyz() {
        return logic(a, b);
    }
}

function sum2(x, y) {
    return x + y;
}

let math2 = arithmetic2(sum2, 10, 5);       // math2 = [function xyz(){}]; 
console.log(math2);                         // Op = [function xyz(){}]
console.log(arithmetic2(sum2, 10, 5));      // Op = [function xyz(){}]
console.log(math2());                       // Op = 15
console.log(arithmetic2(sum2, 10, 5)());    // Op = 15


//Todo Example 2 ----------------------------------------------------------------------

function returnStmt(a, b, c) {
    // return `${(a + b + c == 15) ? (a + b + c) : "Not 15"}`;
    return (a + b + c == 15) ? (a + b + c) : "Not 15";
}
console.log(returnStmt(5, 5, 5));
