
//!--------------------- Function is so good because it returns

/*
? What is return = 

Todo - It is simply a KEYWORD that is used to END the function execution and send back the processed value from the function to where it was called.
 Once the return is reached no lines in function are executed.
  There can be multiple returns in the function but only one is called based on the conditions.
*/

// Using multiple returns but with conditions. Only one return will be used at a time.(in a single function call)

function func1(){
    console.log("This function will return the addition after square");
    let a =2;
    let b =20;
    a = a * a;
    b *= b;

    // Conditional return
    if(a>10){
        return a;
    }
       
    let c = a + b;
    return c;
}
console.log(func1());



//? - On the right side of return = If there is any expression or function call then return will return its resultant value to  the place where the function is called.

function add(a, b) {
    return a + b;
  }
  
  var result = add(3, 5); // result is 8
  console.log(result); // Outputs: 8


  //factorial of num
  function fact(n){
    let res=0;
    if(n==0 || n==1){
        return 1;
    }
    else{
        return res=n*fact(n-1);
    }
  }
  let s=fact(5);
  console.log(s);
  
  
  

//? - On the right side of return = If there is a value or object or string or array or any declaration of function or object then it will return it as it is without processing or evaluating it further. 

function greet(name) {
    var greeting = "Hello, " + name + "!";
    return greeting;
  }
  
  var message = greet("Abhishek");
  console.log(message);

// Returning function from the function

function greetMe(name){
    var greeting = "Hello, " + name + "!";
    return function(){
        console.log("This is the final greeting = ", greeting);
    }
}

let returnedFunction = greetMe("Abhishek");
console.log(returnedFunction);

// Calling the returned function
// Example 1
returnedFunction();

// Example 2
greetMe("Abhishek")();

//? - We can simply say that return acts as a pseudo variable which will return what is on its right side.
     
function getPerson() {
    var person = {
      name: "Alice",
      age: 30,
      city: "Wonderland"
    };
    return person;
  }
  
  var alice = getPerson();
  console.log(alice.name); // Outputs: Alice
  console.log(alice.age);  // Outputs: 30
  console.log(alice.city); // Outputs: Wonderland
  


//! ---------------------------- V VIMP ----------------------

/* 

? How to define JavaScript functions that return multiple values.

JavaScript functions can return a single value. To return multiple values from a function, you can PACK the return values as elements of an array or as properties of an object.

Returning multiple values from a function using an array
Suppose the following getNames() function retrieves the first name and last name from a database in the backend or from the result of a third-party API call and returns them as elements of an array:
*/

function getNamesArr() {
    // get names from the database or API
    let firstName = 'Abhishek',
        lastName = 'Dhone';

    // return as an array
    return [firstName, lastName];
}

// The following shows how to get the return value from the getNames() function:

let namesArr = getNamesArr();

console.log(' This is the array variable storing the returned array of multiple values : - ' + namesArr);
console.log("My Name is :", namesArr[0], " ", namesArr[1]);

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
    let firstName = 'Abhishek',
        lastName = 'Dhone';

    // return values
    return {
        firstName, lastName
    };
}

// Since the names of the properties are the same as the variables, you can shorten it using the object literal syntax extensions in ES6 as follows:

function getNamesObj() {
    // get names from the database or API
    // Fetch the name and surname from database. using get method. Call the API.

    let firstName = 'Abhishek',
        lastName = 'Dhone';

    return { firstName, lastName };
}

// And you can get the return value as an object like this:

let namesObj = getNamesObj();

console.log(' These is the Object variable storing the returned Object of multiple values in Object : - ', namesObj);

console.log(' These is the Object variable storing the returned Object of multiple values in Object : - ', getNamesObj().firstName);


let firstNameVar = namesObj.firstName,
    lastNameVar = namesObj.lastName;

console.log(' These are the Normal variables storing the returned Objects values seperately : - ' + firstNameVar + " " + lastNameVar);

// If you want to unpack properties from an object, you can use the object destructuring syntax as follows:

// let { firstNameObjVar, lastNameObjVar } = getNamesObj();
// This will give output as undefined because:- Variables used for Object Destructuring must have the similar name that is given in the object. 

let { firstName, lastName } = getNamesObj();

console.log(' These are the Object Destructuring variables storing the returned Object of multiple values seperately : - ' + firstName + " " + lastName);


/*
* Imp Summary-
JavaScript doesn’t support functions that return multiple values. However, we can wrap multiple values into an array or an object and return the array or the object.
Use destructuring assignment syntax to unpack values from the array, or properties from objects.
*/


//! ------------------------- Returning a function from a funciton

/* 
! Practicing the returns when the functions are returned.
 There are basically two differences while returning function from a functions.
 1) Returning the value of the function call from the parent function. This is done in example 1 below.
 2) Returning the function declaration from a parent function. In example 2 below

Learning = When a function is called it will always return the value and while calling the function we need to take care that the arguments passed are valid / declared / not undefined etc.
But while declaring the function it is not necessary because the function is dead thus it wont throw any errors untill and unless it is called.
Same is followed when returning something from the function. 

? What is return = 
Todo - It is simply a keyword that is used to end the function execution and send back the processed value from the function to where it was called. Once the return is reached no lines in function are executed. There can be multiple returns in the function but only one is called based on the conditions.
- On the right side of return = If there is any expression or function call then return will return its resultant value to  the place where the function is called.
- On the right side of return = If there is a value or object or string or array or any declaration of function or object then it will return it as it is without processing or evaluating it further. 
- We can simply say that return acts as a pseudo variable which will return what is on its right side.

? Example 1 explained = 

- Here when we are returning in the parent function we are actually calling the callback function with 2 arguments. 
- This will actually make the call to the callback function and the call will be replaced by the processed value returned by the logic function. (i.e actually sum() function) So here the value will be the sum of a,b.


? Example 2 explained = 

- Here while returning in the parent function we are not returning the value received from the call of the function. Rather we are returning the function declaration written in front of the return statement.
- Thus this is not treated as the call to function. Rather it is just a function declaration that is stored in annother variable.
- The basic difference here between the normal function declaration and the nested or returned function declarartion is that the returned declaration will have the context of the parent function. This means that the information and value of the parent function is available to the returned func decl..
- This is also the clasic example for the closure function. and for currying.


*/

// Todo Example 1 ---------------------------------------------------------------------

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
