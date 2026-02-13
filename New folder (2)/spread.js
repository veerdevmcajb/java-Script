
/*
!                      Spread Syntax

? Waht is spread operator..?

? Interviewer Ans - Spread is an operator which is used to UNPACK THE VALUES of itterable into individual variables or values.
(itterables = array, string, etc)

- It is like ...Rest but reverse because it is not used in parameters but in arguments when instead of passing an 
array or iterable directly as a single variable we need to pass their values as multiple arguments while calling a func().

This is usefull when some functions dont accept an array but only multiple values as arguments.

Eg. Math.max(1,2,3,4,5) This will give result as 5
but Math.max(numbsArray) This will give an error
Thus we use the spread syntax. Spread just spreads all the values of array or itterable on the place of '...arrayLike'.

We also can pass multiple iterables this way.
We can even combine the spread syntax with normal values.
Example -->
*/

let array1 = [1,2,3,4,5,6,7,8,9]

console.log(array1);
console.log(...array1);



// Example 1: Using Spread operator to combine arrays
const fruits = ['Apple', 'Banana', 'Mango', ['grapes', "strawberry"]];
const vegetables = ['Spinach', 'Broccoli', 'Carrot'];

const combined = [...fruits, ...vegetables];
console.log(combined);
// Output: ['Apple', 'Banana', 'Mango', ['Grape', "strawberry"], 'Spinach', 'Broccoli', 'Carrot']

// Example 2: Using Spread operator in function calls
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6 - Each element of array is passed as an argument

// Example 3: Copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3] - Creates a shallow copy of the original array

// Example 4: Spreading elements on array initialization
const moreFruits = ['Strawberry', ...fruits, 'Pineapple'];
console.log(moreFruits);
// Output: ['Strawberry', 'Apple', 'Banana', 'Mango', 'Pineapple']

// Example 5: Using Spread operator with strings
const greeting = "Hello";
const chars = [...greeting];
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']
console.log(...greeting); // Output: H  e  l  l  o

// Example 6: Combining objects
const user = { name: 'John Doe', age: 28 };

const updatedUser = { ...user, location: 'USA', age: 30 };

console.log(updatedUser);
// Output: { name: 'John Doe', age: 30, location: 'USA' } - 'age' is updated, 'location' is added


// ! -------------------- Practice -----------------------

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(' The largest Number using the Spread on math.max ' + Math.max(1, ...arr1, 2, ...arr2, 25)); 
//(1 ,1,-2,3,4 ,  2,  8, 3, -8, 1, 25)
// Output = 25

//Todo- Also, the spread syntax can be used to merge arrays.
let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr3, 2, ...arr4]; // Output = 15

console.log(merged);

// Here we use the spread syntax to turn the string into array of characters:

let str = "Abhishek Dhone";
console.log([...str]);

/*
? Why not use Array.from(str) ?
Ans-  there’s a difference between Array.from(obj) and [...obj]:
Array.from operates on both array-likes and iterables.
The spread syntax works only with iterables.
*/


/*
!              Spread for Copying an array / object
Remember when we talked about Object.assign() in the past?
It is possible to do the same thing with the spread syntax.
*/


let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters, then put the result into a new array

// do the arrays have the same contents?
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy));             // true
console.log(arr == arrCopy)// false

// are the arrays equal?
console.log(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr);             // 1, 2, 3, 4
alert(arrCopy);         // 1, 2, 3


//? Destructuring arrays with Spread operator

const scores = [98, 95, 93, 90, 88, 85];
const [top1, top2, ...others] = scores;
console.log(`Top 1: ${top1}, Top 2: ${top2}, Others: ${others}`);
// Output: Top 1: 98, Top 2: 95, Others: 93,90,88,85


//! --------------Very very important concept. -------------
//! ------------------Copying the Object.-------------------


let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters then return the result in a new object

// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
alert(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}


// Destructuring objects with Spread operator
const userProfile = {
    username: 'janeDoe',
    email: 'jane@example.com',
    age: 30,
    country: 'USA'
  };
  
  const { username, email, ...details } = userProfile;
  console.log(`Username: ${username}, Email: ${email}, Details:`, details);
  // Output: Username: janeDoe, Email: jane@example.com, Details: { age: 30, country: 'USA' }
  