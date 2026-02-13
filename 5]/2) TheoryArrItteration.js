//! VVIMP MEthods
// map()      filter()     reduce()

// Sytac for any array methods.
// arrayName.method(someArguments);


/*
! 1. `map()` Method

What it Does: Creates a new array by applying a function to each element of the original array without changing it.
Returns: A new array containing the results of applying the function to each element.
Syntax: 

let newArray = array.map(function(currentValue, index, arr), thisValue);

todo Example: Suppose you have  an array of product prices and you want to apply a discount to each price. `map()` can be used to create a new array of discounted prices.

*/



//! Basic Map Examples

//? Writing callback method inside map call.

var arr = [1,2,3,4,5,6];

let mapArray = arr.map(
    function add(currentValue, index, array){
        return currentValue * 2;
    }
);

console.log(mapArray);
console.log("my old array after map : ", arr)


//? Writing callback method outside map and sending its definition as a callback.

var arr = [1,2,3,4,5,6];

let mapArray2 = arr.map(add);

function add(currentValue, index, array){
    return currentValue * 2;
}

console.log(mapArray2);
console.log("my old array after map : ", arr)


//? Writing callback method outside map and using all the parameters passed to the callback function.

var arr = [1,2,3,4,5,6];

let mapArray3 = arr.map(add);

function add(currentValue, index, array){
    let newValue;

    if(index < (array.length - 1) ){
        newValue = array[index] + array[index +1];
    }else{
        newValue = currentValue + array[0]; 
    }

    return newValue;
}

console.log(mapArray3);
console.log("my old array after map : ", arr)




// mapArray = [2,4,6,8,10,12];



/*

! 2. `filter()` Method
What it Does: Creates a new array with all elements that pass the test implemented by the provided function.
Returns: A new array containing the elements that pass the test. If no elements pass the test, an empty array is returned.

The filter function always returns a truthy or falsy value. (Value itself is not important its auto converted to boolean).
Syntax: 

let newArray = array.filter(function(currentValue, index, arr), thisValue);

!Example: From a list of students, filter out those who have scored above a certain mark.

*/
//? filterArray = [2,4,6,8,10];

var arr = [1,2,3,4,5,6,7,8,9,10];

let filterArray = arr.filter(filterEven);

// function filterEven(value, index, array){

//     if(value%2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }


function filterEven(value, index, array){
    return value%2 === 0;
}

console.log("This is filtered Array :" , filterArray);
console.log("This is orignal Array :" , arr);


//? Using all the params in the callback function'

//? filterArray = [2,4,6,8,10];

var arr = [1,2,3,4,5,6,7,8,9,10];

let filterArray2 = arr.filter(filterEven);

function filterEven(value, index, array){
    if(index%2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log("This is filtered Array :" , filterArray2);
console.log("This is orignal Array :" , arr);


/*

! 3. `reduce()` Method
What it Does: Executes a reducer function on each element of the array, resulting in a single output value.
Returns: A single value which is the function's accumulated result.

Syntax: 

let singleValue = array.reduce(function(total, currentValue, currentIndex, arr), initialValue);

eg arr = [0,1,2,3,4,5,6,7,8,9,10];

Syntax explained.

    Callback function explained
        - First param is the output return by the previous function executed on the array element.
        - Second param is the current value or current element in the array.
        - Third param is the current index of the currentElement.
        - Fourth param is the array itself. On which the operation is  performed.

    Initial Value:
        - This is the default value to start with. (This is optional).

! Example: Calculating the total sum of all numbers in an array.
*/
// let singleValue = array.reduce(function(total, currentValue, currentIndex, arr), initialValue);

// 

var arr = [1,2,3,4,5,6,7,8,9,10];

let reduceArray = arr.reduce(summation, 5);
 
function summation(total, currentValue, currentIndex, arr){


    console.log("Total :", total);  
    console.log("Current Value :", currentValue);
    console.log("Current Index :", currentIndex);

    let sum = total + currentValue;
    console.log("Sum :", sum);
    return sum;
}

console.log("This is Reduced Value :" , reduceArray);
console.log("This is orignal Array :" , arr);


// Rohit's amazon cart.

// let cart = [{ 
    //     item: "MObile",
    //     price: 20000
    // },
    // { 
    //     item: "MObile",
    //     price: 20000
    // },{ 
    //     item: "MObile",
    //     price: 20000
    // },{ 
    //     item: "MObile",
    //     price: 20000
    // },{ 
    //     item: "MObile",
    //     price: 20000
    // },{ 
    //     item: "MObile",
    //     price: 20000
    // },
    // ];
    
    
    // console.log(cart.map((item)=>item.price).reduce((t,cv)=>t+cv));
    
    

/*
! 4. `forEach()` Method
What it Does: Executes a provided function once for each array element.
Returns: `undefined`. It simply calls the function for each element and does not create a new array.

Syntax: 
    array.forEach(function(currentValue, index, arr), thisValue);
*/



var arr = [1,2,3,4,5,6];

let forEachArray3 = arr.forEach(add);

function add(currentValue, index, array){
    let newValue;

    if(index < (array.length - 1) ){
        newValue = array[index] + array[index +1];
    }else{
        newValue = currentValue + array[0]; 
    }
    
    console.log(newValue);    
    // array[index] = newValue;

    return newValue; // No use of this returned value because forEach will not return any array or value after called.
    // forEach is truly only itterator.
}

console.log(forEachArray3);
console.log("my old array after forEach : ", arr)




/*
!Example: Printing/logging each element of an array.

! 5. `every()` Method
What it Does: Tests whether all elements in the array pass the test implemented by the provided function.
Returns: A Boolean value - `true` if all elements pass the test, otherwise `false`.
Disclaimer: It does not return any array or any values except a single boolean value. (true or false)


Syntax: 

let result = array.every(function(currentValue, index, arr), thisValue);
*/

let everyArr = [2,4,6,8,11,0,12,14,16];

function checkAllEven(value, index, array){
    console.log(value%2 == 0);
    if(value%2 == 0){
        return true;
    }else{
        return false;
    }
}

let everyResult = everyArr.every(checkAllEven);
console.log("Result of Every: ",everyResult);


// function every(){
//     everyresults = [true, true, true, false]

//     return false;
// }


/*
!Example: Checking if every student in a class has passed the exam.

! 6. `some()` Method
What it Does: Tests whether at least one element in the array passes the test implemented by the provided function.
Returns: A Boolean value - `true` if at least one element passes the test, otherwise `false`.
Syntax: 

let result = array.some(function(currentValue, index, arr), thisValue);
*/



let someArr = [2,4,6,8,11,0,12,14,16];

function checkSomeOdd(value, index, array){
    console.log(value%2 !== 0);
    if(value%2 !== 0){
        return true;
    }else{
        return false;
    }
}

let someResult = someArr.some(checkSomeOdd);
console.log("Result of some: ",someResult);




/*
!Example: Checking if there are any products in a list that are out of stock.

! 7. `find()` Method
What it Does: Returns the value of the first element in the array that satisfies the provided testing function.
Returns: The value of the first element that passes the test. If no elements pass the test, `undefined` is returned.
Syntax: 

let found = array.find(function(currentValue, index, arr), thisValue);
*/

let findArr = ["Abhishek", "Rohit", "Deepak", "Vinay", "Tushar", "Maroti"];

function findInArr(value){
    return value.length >= 8;
}

let findResult = findArr.find(findInArr);
console.log(findResult);

if(findResult){
    console.log(findResult)
}else{
    console.log("No element found")
}


/*
!Example: Finding the first student in a list who has scored above 90%.

! 8. `indexOf()` and `lastIndexOf()` Methods
What they Do: `indexOf()` returns the first index at which a given element can be found in the array, and `lastIndexOf()` returns the last index.
Returns: An index number if the element is found; otherwise, `-1`.
Syntax: 

let index = array.indexOf(item, start);
let lastIndex = array.lastIndexOf(item, start);
*/

let indexOfArr = ["Abhishek", "Rohit", "Deepak", "Vinay", "Tushar", "Maroti"];

let indexOfResult = indexOfArr.indexOf("Abhishek");
console.log(indexOfResult);

// eg todo - Finding the index of numbers and strings.



/*
!Example: Finding the position of a specific item in a shopping list.

! 9. `reduceRight()` Method
What it Does: Similar to `reduce()`, but it works from right-to-left in the array.
Returns: A single value which is the function's accumulated result.

Syntax: 
- It is exctly same like the reduce method only difference is that it starts from rightmose element and ends at the leftmost element.

let singleValue = array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue);
*/


var arr = [1,2,3,4,5,6,7,8,9,10];

let reduceRightArray = arr.reduceRight(summation, 5);
 
function summation(total, currentValue, currentIndex, arr){
    console.log("Total :", total);  
    console.log("Current Value :", currentValue);
    console.log("Current Index :", currentIndex);

    let sum = total + currentValue;
    console.log("Sum :", sum);
    return sum;
}

console.log("This is ReduceRightd Value :" , reduceRightArray);
console.log("This is orignal Array :" , arr);



/*
!Example: Calculating the total from right to left in a sequence of transactions.

! 10. `Array.from()` Method
What it Does: Creates a new, shallow-copied Array instance from an array-like or iterable object.
Returns: A new Array instance.
Syntax: 

let newArray = Array.from(arrayLike, mapFunction, thisValue);
*/
var newarr = Array.from("Abhishek");
console.log(newarr)
/*
[
  'A', 'b', 'h',
  'i', 's', 'h',
  'e', 'k'
]
*/
var newarr = Array.from({nsme : "Abhi"});
console.log(newarr)//[]
//?
var a = 11;
var b = 12;
var c = 14;

var newArrr = Array.of(a,b,c)
console.log(newArrr)

/*

!Example: Converting a NodeList (like those returned by `document.querySelectorAll`) to an array.

These methods are fundamental in  for manipulating arrays and are widely used in real-world applications for various

 purposes like data manipulation, filtering, transformation, and aggregation.
 */

 let toBeArray = "Abhishek";
 let obj = {
    fname : 'Abhishek',
    lname : 'Dhone'
 }

 let convertedArr = Array.from(toBeArray);
 console.log(convertedArr);
 
 console.log(Array.from(obj));


/*

!             Reversing an array

- The reverse() method reverses the elements in an array.
- The reverse method when called on the array it will change the actual array.
- It is array mutating method.
- The map, filter, reduce, foreach does not do it directly.

- You can use it to sort an array in descending order:

syntax: 
 arrayName.reverse();

arrSort.reverse();
console.log(arrSort);

*/

let reverseArr = [1,2,3,4,5,6,7,8];
reverseArr.reverse();
console.log(reverseArr);


// Find if the string is palindrome or not.

let str = "madam";

function checkPalindrome(str){

    return str == Array.from(str).reverse().join(""); 

// This is happening in the background.

    // "mam" == ['m','a','m'].reverse();
    // "mam" == ['m','a','m'].join("");
    // "mam" == "mam";
    // true;
    // return true;
}

console.log("Is string Palindrome: ", checkPalindrome(str));


// Polyfill of Join.

function join(arr){
    let joinedStr= "";
    for(let value of arr){
        joinedStr += value;
    }
    return joinedStr;
}

console.log(join(['s','o','n','a','r']));


// Find whether to strings has same letters and number of letters







