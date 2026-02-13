/*
Most of the array methods and itteration methods also run on array like objects which has key=numbers and values= any value and the length property. 
*/

// ! Vimp Note = The third argument/ parameter of the callback function is the array itself. This argument eg. 'arr' is the actual array reference thus any changes that we make using the 'arr' will reflect in the orignal array. Therefore try to avoid the use of it coz it may cause loss of data or unintentional changes.


var numbs = [1, 2, 3, 4, 5, 12, 32, 22, 23, 43, 34, 555, 64, 51, 123, 1234, 4321, 321, 231, 244, 432, 51, 632];
console.log("Universal Numbers Array: " + numbs);


var cities = ["Pune", "Nashik", "Pune", "Mumbai", "Nagpur", "Nandurbar", "Dhule", "Pune", "Pune"];
console.log("Universal Strings Array: " + cities);

// This is an example of printing the array elements using the forEach() Function.
//? forEach() function is the call back function. This callbacks for each element of the array untill all elements are traversed.
//* Note- The function takes 3 arguments
// The item value, The item index, The array itself
// If we dont provide the (index and array) parameters then by default the given parameter is taken as the 'value' for the opereations in the function. This is applied for all types of methods like map(), filter(), etc


let txt = "";
numbs.forEach(myFunction);
// We dont need to provide the arguments in the callback function here because the forEach will automatically add the arguments.
//  But is is necessary to provide the parameters in the function definition to make it work.

function myFunction(value, index, array) {
    txt += value + " , ";
    console.log(index);
}
console.log(txt);



//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-

//! ----------------- javaScript map() function. --------------------
//? This is also a callback function like the forEach() therefore all the parameters passed and returned the same.
//* The map() method creates a new array by performing a function on each array element.
//* The map() method does not execute the function for array elements without values.
//* The map() method does not change the original array.
// This example multiplies each array value by 2.

numbs2 = numbs.map(myFunctionForMap);

function myFunctionForMap(value, index, arr) {
    return value * 2;
}

console.log(numbs2);

let arr=[1,2,3,4,5];
// let res=arr.map((val)=>val*2)
// console.log(res);


let even=arr.filter((val)=>val%2==0)
console.log(even);

let sum=arr.reduce((acc,val)=>acc+val)
console.log(sum);


// ? What is the difference between the map() and forEach()  methods of an array.?
/*
- The *map() method returns a new array*, whereas the forEach() method does not return a new array. 
The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.
*/


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*



//! ---------------JavaScript Array filter()-----------------

// The filter() method creates a new array with array elements that passes a test.
// This example creates a new array from elements with a value larger than 18:
// The filter() method does not change the original array.

// This can be considered as conditional map filter which matches the condition and returns the true or false value on the basis of which the new array of values is formed.

// The old array element is passed to the new array only if true value is returned by the filter(function) funciton to itself then at the last the filter function returns the new array formed by its itterations and that array is stored in the new specified variable. like here over18 is the new array variable.
// Vimp note = The callback function in filter argument must always return true or false value. If there is no return in callback function then the undefined is returned and it is considered as false. Otherwise any value will be converted to boolean as per the truthy and falsy logic used for conversion.


const over18 = numbs.filter(myFilter);

function myFilter(value, index, array) {
    return value > 18;
}
console.log(over18);



//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*



//! -------------------Reduce Method()-------------------

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array.
// Note that the variable sum will store only the last value returned by the callback function after the completion of its execution which involves multiple itterations.

// Extra Notes

// reduce(callbackfn: (previousReturnedValue: number, currentValue: number, currentIndex: number, array: number[]), initialValue)

// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

//InitialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
//  - Please note that the initial value is not provided to the callback function as 5th argument rather it is provided as the 2nd argument to the reduce method as follows arr.reduce(callBackFunction, initialValue);



let sum = numbs.reduce(myReduce, 0);
function myReduce(total, value, index, array) { // These are the 4 parameters that are passed to the callback function of the reduce function to get the result.
    return total + value;
}
console.log("Using reduce() method for summation of array elements");
console.log(sum);

// The JavaScript array Reduce() method can also accept an initial value as the function paramenters.
// arr.reduce(callbackFunciton, initial_value)

// Here total = previous value, value = current value of current array element.

let moreSum = numbs.reduce(myReduceInitial, 200);

function myReduceInitial(total, value) {
    return total + value;
}
console.log("Using the reduce() with initial value");
console.log(moreSum);


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*


//!----------------Array Method reduceRight()---------------

// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
// The reduceRight() works from right-to-left in the array. See also reduce().

// let rightSum = numbs.reduceRight(myReduceRight);
// function myReduceRight(total, value, index, array) {
//     return total + value;
// }
// console.log("Using the rightRedux()");
// console.log(rightSum);


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*


//! -----------------Array every() method--------------------

// The every() method check if all array values pass a test.
// The call back function in this method works similar to the filter method. 
//?Thus returns the boolean value. The only difference here is that the arr.filter() gives the final array and arr.every() returns the final boolean value. 
// This example check if all array values are larger than 10
// Note that here the map/filter differ with every because the every() method after completion of the itteration does not returns the complete array rather it returns true or false as the result.
//? It returns true if all the array values satisfy the given condition means all the values returned by the callback function are true (this callback function has the conditions that every element will go through).

// let allAbove10 = numbs.every(myEvery);

// function myEvery(value, index, array) {
//     return value > 10;
// }
// console.log("Using every() method to verify whether all elements are  > 10 ");
// console.log(allAbove10);


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*


//! ----------------Array Some() method-----------------------

//? Everything is same in respect of some() and every() methotds. Except that the some() method returns true even if some of the elements satisfy the given conditions.
// It is not necessary that every element of array satisfies the condition. Even one element is enough.

let someAbove10 = numbs.some(mySome);
function mySome(value, index, array) {
    return value > 10;
}
console.log("Using some() method to verify whether some  elements are digits > 10 ");
console.log(someAbove10);


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*


//! ----------------Array method- IndexOf()--------------------

//? The indexOf() method searches an array for an element value and returns its position.
// It only returns the index of first match and not all the matches.
// Array.indexOf() returns -1 if the item is not found.
// Syntax = array.indexOf(item, start);


let position = cities.indexOf("Pune") + 1;
console.log(" First position of the matched element");
console.log(position);


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*


//!--------------Array method- lastIndexOf()----------------

//? Array.lastIndexOf() is same as the Array.indexOf(), but returns the position of the last occurrence of the specified element.

let lastPosition = cities.lastIndexOf("Pune");
console.log(" Last position of the matched element");
console.log(lastPosition);


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*


//! -----------------Array method- find() ------------------

//? The find() method returns the VALUE of the first array element(not the indexOf) that passes a test function. Not the index or total number.
// This example finds (returns the value of) the first element that is larger than 10.
// It is like the IndexOf() method but it is only used to find the elements of an array.
// The most imp difference between find and other method like indexOf is that the find method. Takes the callback function as an argumnent.
// If the callback function returns true then the current value in the array is returned as it is. It is returned as value and not as reference. But if its the nested array then it is returned as the reference means pass by reference.
var numbs = [1, 2, 3, 4, 5, 12, 32, 22, 23, 43, 34, 555, 64, 51, 123, 1234, 4321, 321, 231, 244, 432, 51, 632];



var cities = ["Pune", "Nashik", "Pune", "Mumbai", "Nagpur", "Nandurbar", "Dhule", "Pune", "Pune"];


let arrFound = numbs.find(myFind);

function myFind(value, index, array) {
    return value > 10;
}
console.log(" Value of the first found element that matches the given condition");
console.log(arrFound);


//! ------- Applying the find() method for finding the string.-------
var numbs = [1, 2, 3, 4, 5, 12, 32, 22, 23, 43, 34, 555, 64, 51, 123, 1234, 4321, 321, 231, 244, 432, 51, 632];



var cities = ["Pune", "Nashik", "Pune", "Mumbai", "Nagpur", "Nandurbar", "Dhule", "Pune", "Pune"];



let arrStringFound = cities.find(myStringFind)

function myStringFind(value, index, array) {
    let result = false;
    if (value === "Pune") {
        result = true;
    }
    return result;
}

console.log(" Value of the first found element that matches the given condition : ");
console.log(arrStringFound);


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*


//! ----------------- Array method- from() -------------------

//? The Array.from() method returns an Array object from any object with a length property or any iterable object. eg- Strings, Arguments, Objects, Map, Set, etc.

const arrFromStr = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
console.log("This alphabet array is created from the String of Alphabets: " + arrFromStr);


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*


//! -------------------Array method- keys()-----------------

//? Create an Array Iterator object, containing the keys of the array. Then iterate over the keys.

var cities = ["Pune", "Nashik", "Pune", "Mumbai", "Nagpur", "Nandurbar", "Dhule", "Pune", "Pune"];
const myKeys = cities.keys();
console.log(myKeys);

// First method

let text = "";
for (let x of myKeys) {
    text += x + " , ";
}
console.log(text);

// Another method.
console.log(' This is another technique for using keys');
for (let x of myKeys) {
    console.log(x);
}

//! VVIMP = ITERATOR OBJECT BECOMES EMPTY ONCE IT IS ITERATED. WE CANT ITERATE IT ONCE AGAIN. IF WE WISH TO DO SO WE NEED TO RECREATE OR REASSIGN THE OBJECT USING THE ARR.KEYS() METHOD OR WITH ARR.ENTRIES() METHOD.

//! -----------------Array method- entries()-----------------

// Create an Array Iterator, and then iterate over the key/value pairs.

var cities = ["Pune", "Nashik", "Pune", "Mumbai", "Nagpur", "Nandurbar", "Dhule", "Pune", "Pune"];
const myEntries = cities.entries();
console.log(myEntries);

// First method
let text2 = "";
for (let x of myEntries) {
    text2 += x + " , ";
}
console.log(text2);

// Another method
for (let y of myEntries) {
    console.log(y);
}