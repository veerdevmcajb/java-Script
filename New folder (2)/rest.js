//! -------------------- Rest parameters and spread syntax.

/*
!                    Rest parameters ...

?.. What is Rest operator ...?  IMP DEFINITION
Ans = Rest is an opertor which is written as the parameter in function definition. 
Rest is used to store the indefinite number of parameters into an array.

- A function can be called with any number of arguments, no matter how it is defined.
- There will be no error because of “excessive” arguments.
- The rest of the parameters can be included by using three dots ... followed by the name of the array that will contain them.
- The dots literally mean “gather the remaining parameters into an array”.

  Note: The Rest parameter feature for functions that need to handle
  an indefinite number of arguments or for destructuring arrays and objects while
  capturing the remaining parts.

? interviewer = The rest operator is used to collect the remaining arguments in a single array parameter.

? Syntax = ...arguments
*/

// This is function overloading which is not available in JS
// function myFunction(a,b){ }
// function myFunction(a,b,c){  }
// function myFunction(a,b,c,d){   }

// myFunction(a,b) 
// myFunction(a,b,c)
// myFunction(a,b,c,d) 

//? This is how it is in JS
// function myFunction(a,b,c,d){   }
// myFunction(a,b,c)

//? Basic Example to remember the Rest operator

function myFunction(a,b,c,d,...arr){
  // arr[0]; // e
  // arr[1]; // f
  // arr[2]; // g
  // arr[3]; // h

  for(let i = 0 ; i<arr.length ; i++){
    console.log(arr[i]);
  }
 }

//  myFunction(1,2,3,4,5,6,7,8);
//  myFunction(1,2,3,4,5,6,7,8,9,11,12,13,14,15);

 // use of spread operator
 let array = [1,2,3,4,5,6,7,8];

 myFunction(...array);

// Example 1: Using Rest parameters to handle multiple arguments
function sum(...numbers) {
    // The 'numbers' variable is an array containing all arguments passed to the function
    return numbers.reduce((total, current) => total + current, 0);
  }
  
  console.log(sum(1, 2, 3)); // Output: 6 - The function can handle any number of arguments
  
  // Example 2: Mixing regular parameters with Rest parameters
  function registerUser(username, ...options) {
    // The first argument will be assigned to 'username', and the rest to 'options'
    console.log(`Username: ${username}`);
    console.log(`Options:`, options);
  }
  
  registerUser('johnDoe', 'option1', 'option2', 'option3');
  // Output:
  // Username: johnDoe
  // Options: ['option1', 'option2', 'option3']
  
  // Example 3: Using Rest parameters in arrow functions
  const multiply = (...args) => args.reduce((acc, val) => acc * val, 1);
  
  console.log(multiply(2, 3, 4)); // Output: 24 - Works the same as in regular functions
  
  // Example 4: Destructuring arrays with Rest parameters
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
  const [first, second, ...remaining] = fruits;
  
  console.log(first); // Output: Apple
  console.log(second); // Output: Banana
  console.log(remaining); // Output: ['Orange', 'Mango', 'Pineapple'] - Rest of the fruits
  
  // Example 5: Using Rest parameters to collect arguments in object destructuring
  const userProfile = {
    username: 'janeDoe',
    email: 'jane@example.com',
    age: 30,
    country: 'USA'
  };
  
  function displayProfile({ username, ...rest }) {
    console.log(`Username: ${username}`);
    console.log('Other details:', rest);
  }
  
  displayProfile(userProfile);
  // Output:
  // Username: janeDoe
  // Other details: { email: 'jane@example.com', age: 30, country: 'USA' }
  
  

//! ------------------ 


function sum(a, b) { return a + b; }
console.log(sum(1, 2, 3, 4, 5));

function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
console.log(sumAll(1));
console.log(sumAll(1, 10, 100));
console.log(sumAll(1, 10, 100, 1000));

// Here ...args means gather all the rest of arguments in args array.

// We can choose to get the first parameters as variables, and gather only the rest.

//! Rest parameter must be at the end only and not in middle or start.

function showNames(fName, lName, ...allNames) {
    console.log(`${fName} ${lName}`);
    // Rest of the arguments passed will go into the parameter allNames Array.
    for (let x of allNames) {
        console.log(`\t next name is :- ${x}`);
    }
}

console.log(" This is shown using the ...Rest Keyword");

showNames('Krishna', 'Yadav', 'Murlidhar', 'Shyam', 'Gopal', 'Hari', 'Parah Bramha', 'Yashoda nandan', 'Shri Krishna', '1000 other names');


/*
            ! The “arguments” variable
- There is also a special array-like object named arguments that contains all arguments by their index.
- Here we can specify few or no parameters in the function declaration.
- While using this there is no need to specify any parameters and we can directly access the arguments from the array of arguments. Similar to above example.  By slightly modifing it.

Drawbacks of arguments =
1] Old type and mostly found in legacy code, 
2] Cant use partialy unlike ...Rest, always contains all arguments. 
3] Itterable and array type but not Arrays so cant apply array methods.
4] Arrow functions does not have 'arguments' array.

*/

function showArgsArray(fName) {
    console.log(`${fName} ${arguments[1]}`);
    // Rest of the arguments passed will go into the parameter allNames Array.
    for (let x of arguments) {
        console.log(`\t next name is :- ${x}`);
    }
}

console.log(" \n This is shown using the default arguments Array of the function arguments. ");

showArgsArray('Krishna', 'Yadav', 'Murlidhar', 'Shyam', 'Gopal', 'Hari', 'Parah Bramha', 'Yashoda nandan', 'Shri Krishna', '1000 other names');

