//! ----------------------- Error Handling ------------------------ 

/*
!             Throw, and Try...Catch...Finally
1] The try statement defines a code block to run (to try).

2] The catch statement defines a code block to handle any error.

3] The finally statement defines a code block to run regardless of the result.

4] The throw statement defines a custom error.

vimp note- As there is no way to know which catch is for which try-> The JavaScript statements try and catch come in pairs:

Errors can be coding errors made by the programmer (coder made), errors due to wrong input (user made), and other unforeseeable things. BUt only the runtime errors and not the parsetime errors.

? Why Error Handling..?

Ans- Error handling is done for various reasons as follows.

    1) To prevent the programme from abruptly ending with an error.
     If we handle the error we can resume the normal functioning of the code.

    2) To catch the particular error and handle it using the specific error handler 
     for that type of error. Using this we can get the things done using multiple ways if one way fails.

    3) To maintain the log of errors while preventing the code from crashing and preventing the errors in future.
    
    4) Catch can be used to send a new network request, suggest an alternative to the visitor, send information about the error to a logging facility, … . All much better than just ending the programm.


!               JavaScript Throws Errors
When an error occurs, JavaScript will normally stop and generate an error message.
The technical term for this is: JavaScript will throws an exception.
That means--> JavaScript will actually create an Error object with two properties: name and message.

*/


// First Example.

console.logg('Hello guys..!');

try {
    console.logg('Hello guys..!');
    // Below is the syntax error which is not caught by the catch block. The Try and catch are incompetet to hancle the syntax error.
    // if{}
}
catch (err) {
   // Here I  will solve the error
    console.log("Hello guys..!");
    
    console.log("Sorry dear user I got an error! please visit later ");
    console.log("Error Name", err.name);
    console.log("Error Message", err.message);
}



/*
!                   The throw Statement
The throw statement allows you to create a custom error.
Technically you can throw any exception (throw an error).
The exception can be a JavaScript String, a Number, a Boolean or an Object:
*/

// Script for validation. Please see the index.html file for the html code.

function myFunction() {
    const message = document.getElementById("msg");
    message.innerHTML = "";
    // let x = document.getElementById("demo").value;
    let x = NaN;
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";

        x = Number(x);

        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    }
    catch (err) {
        // message.innerHTML = "input is " + err;
        console.log("input is " + err);
    }
    finally {
        // document.getElementById("demo").value = "";
        console.log("Always run")
    }



}


/*
!               Error Object Properties
?  Property         	    Description

name	        Sets or returns an error name
message	        Sets or returns an error message (a string)



!               Error Name Values
Six different values can be returned by the error name property:

?   Error Name            	Description
EvalError-------> An error has occurred in the eval() function.
RangeError------> A number "out of range" has occurred.
ReferenceError--> An illegal reference has occurred.
SyntaxError-----> A syntax error has occurred. // coder makes a mistake in a program
TypeError-------> A type error has occurred.   // 
URIError--------> An error in encodeURI() has occurred.

~ Mnemonic to remember = UT ERRS = UT ERRORS
*/


/*
!        try...catch only works for runtime errors

? For try...catch to work, the code must be runnable. In other words, it should be a valid JavaScript.
It won’t work if the code is syntactically wrong. 

~ Eg-
try {
  {{{{{{{{{{{{
} catch (err) {
  alert("The engine can't understand this code, it's invalid");
}

The errors that occur on the reading phase are called “parse-time” errors and are unrecoverable (from inside that code).

So, try...catch can only handle errors that occur in the valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.

For all built-in errors, the error object has two main properties: name and message. It may have the stack property.

Error.stack = Current call stack: a string with information about the sequence of nested calls that led to the error. Also used for debugging purposes.

*/


/*
!                   Rethrowing Errors
? Why rethrow errors..?
Ans- The catch block must only handle the errors that it is capable of handling and other errors must be rethrown. To prevent script from dying and not missing the bugs.

? How to Rethrow the error.?
Ans- Throwing the error from the catch block means Rethrowing the error.
Eg-
*/

function readJson() {
    let json = '{"age": 30}';
// let blabla
    try {
        blabla();
    } catch (err) {
        if (!(err instanceof TypeError)) {
            throw err; // Here this rethrow will act as return and will return the err object.
        }
        console.log("It was a Type error, please give a proper type.");
    }
}

try {
    readJson(); // The thrown error comes here and gets thrown by the Try Block.
} catch (err) {
    console.log(" Rethrown Error is Caught Externally :" + err);
}



/*
!         VVimp Notes about Try....Catch...Finally

?                   finally and return
The finally clause works for any exit (an error or no error) from try...catch. That includes an explicit return.
Finally is executed just before the control returns to the outer code.
*/
function func() {

    try {
        console.log("I am trying hard..!");
        return 1;  // Line 1
    } catch (err) {
        //Blablalballab;

    } finally {
        console.log( 'finally' );
    }
}

console.log( func() ); // first works alert from finally, and then this one

/*
? In line 1 above= Funciton will not end here and finally will be Executed. Then the orignal return will be returned with the value 1.
*/




//!               Creating own errors
/*
We can create custom errors by usinmg these methods-

1] Throw Keyword-  We can throw anything as an error.

2] Built-in Error constructors- We can create the built in error constructors. Eg. let err = new SyntaxError(Message);

3] Extending Built-in Error class- We can inherit the properties of the Error or other default error classes.

4] Creating own Error class/ object/ constructor- We can do so because throw allows us to throw any thing including the object. thus we can use above methods to create and throw errors immediately.
*/

// This is the default Error class Pseudo code.
//! Example no 1

class Error {
    constructor(message) {
        this.message = message;
        this.name = "MyError";
        // (different names for different built-in error classes)
    }
}

try{
    const err = new Error("This is the MyError member");
    throw err
    // throw { message:"Please dont call me error, Dil se bura lagta hai bhai", name:"BadWords"};
}catch(err){
    console.log(" Name = ",err.name , " Message = ",err.message);
}

// This is our custom error constructor class.

class ValidationError extends Error {
    constructor(message) {
        super(message);                 // line 1
        this.name = "ValidationError";  // line 2
    }
}

function test() {
    throw new ValidationError("Whoops...! There is a custom Error...");
}

try {
    test();
} catch (err) {
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
}

//Todo- Please note: in the line (1) we call the parent constructor. JavaScript requires us to call super in the child constructor, so that’s obligatory. The parent constructor sets the message property.

//Todo- The parent constructor also sets the name property to "Error", so in the line (2) we reset it to the right value.

// Above code being used in real scenario.

//! Example no 2

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new ValidationError("Unable to find the feild = age");
    }
    if (!user.name) {
        throw new ValidationError("Unable to find the feild = name");
    }
    return user;
}
// new Error("asjfgausg")

// Working example with Try and catch.

try {
    let user = readUser('{"age": 25}'); // JSON like input is passed as an argument.
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Invalid data :\t" + err.message);
    } else if (err instanceof SyntaxError) {
        console.log(" JSON Syntax Error:" + err.message);
    } else {
        throw err;
    }
}


/*
Instead of this line-
todo.   if (err instanceof ValidationError)
we can also use-
todo.   if (err.name =="ValidaitonError")

The instanceof version is much better, because in the future we are going to extend ValidationError, make subtypes of it, like PropertyRequiredError. And instanceof check will continue to work for new inheriting classes.
*/


//! Example no 3

// This particular constructor function is used for extending the ValidationError used in above Example no 1.

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property:" + property);
        this.name = "PropertyRequiredError";
        this.property = property; // line 1
    }
}

// Eg 2 function is modified for testing Eg 3

function readUser2(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new PropertyRequiredError("age"); // line 2
    }

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
    return user;
}


try {
    let user = readUser2('{"age": 25 }');
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Invalid data : " + err.message);
        console.log(err.name);
        console.log(err.property);  // line 3
    } else if (err instanceof SyntaxError) {
        console.log("JSON Syntax Error : " + err.message);
    } else {
        throw err;
    }
}


// @line 1 =  The error constructor will receive argument from the function call and that argument is set as property instead of message unlike in the ValidationError class.

// @line 2 = This line passes the name of property for the error object - PropertyRequiredError.

// @line 3 = error.property reflects the property field of the error class.


/*
!       Using the this.name = this.constructor.name;

Please note that this.name in PropertyRequired() Error constructor is again assigned manually. That may become a bit tedious – to assign this.name = <class name> in every custom error class. We can avoid it by making our own “basic error” class that assigns this.name = this.constructor.name. And then inherit all our custom errors from it.

Let’s call it MyError.

Here’s the code with MyError and other custom error classes, simplified:
*/

class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ValidationError2 extends MyError { }

class PropertyRequiredError2 extends ValidationError2 {
    constructor(property) {
        super("No property: " + property);
        this.property = property;
    }
}

// name is correct
console.log('hetttttttt');
console.log(new PropertyRequiredError2("field").name);



//!         Wrapping the exceptions / errors

/*
- We can also wrap the errors so that the 

The purpose of the function readUser in the code above is “to read the user data”. There may occur different kinds of errors in the process. Right now we have SyntaxError and ValidationError, but in the future readUser function may grow and probably generate other kinds of errors.

The code which calls readUser should handle these errors. Right now it uses multiple ifs in the catch block, that check the class and handle known errors and rethrow the unknown ones.

- In the code below we can see two types of errors, but there can be more.

If the readUser function generates several kinds of errors, then we should ask ourselves: do we really want to check for all error types one-by-one every time?

Often the answer is “No”: we’d like to be “one level above all that”. We just want to know if there was a “data reading error” – why exactly it happened is often irrelevant (the error message describes it). Or, even better, we’d like to have a way to get the error details, but only if we need to.

? The technique that we describe here is called “wrapping exceptions”.

1] We’ll make a new class ReadError to represent a generic “data reading” error.
2] The function readUser will catch data reading errors that occur inside it, such as ValidationError and SyntaxError, and generate a ReadError instead.
3] The ReadError object will keep the reference to the original error in its cause property.
4] Then the code that calls readUser will only have to check for ReadError, not for every kind of data reading errors. And if it needs more details of an error, it can check its cause property.

Below code defines ReadError and demonstrates its use in readUser and try..catch:
*/

/*
class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'ReadError';
    }
}

function readUser(json) {
    let user;

    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Syntax Error", err);
        } else {
            throw err;
        }
    }
}

try {
    readUser('{bad json}');
} catch (e) {
    if (e instanceof ReadError) {
        console.log(e);
        // Original error: SyntaxError: Unexpected token b in JSON at position 1
        console.log("Original error: " + e.cause);
    } else {
        throw e;
    }
}


*/


//! Task 1
/*
Create a class FormatError that inherits from the built-in SyntaxError class.

It should support message, name and stack properties.
*/

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatError(" Formatting error");

console.log(err.message);
console.log(err.name);
console.log(err.stack);

console.log(err instanceof SyntaxError);


//! Example to understand How rethrowing of the error / exception works.

// Handling referenceError

// This try block is capable of handling all the errors of all the types.
try{
    errorProne();
    function errorProne(){
        // This try block can only handle reference Error.
        try{
            console.logg('Hello guys..!'); // Type Error
            console.log("THis is the new Variable", x); // Reference Error
            let x;
        }catch(error){
            if(error instanceof ReferenceError){
                let x = 1;
                console.log("THis is the new Variable", x);
            }else{
                throw error;
            }
            log(); // Nested error handling
        }
    }
}catch(err){
    console.log("This was something new..! ",err);
}

