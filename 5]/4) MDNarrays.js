
// Here some methods of Array are covered in depth and some new methods are discussed with Example.

//!--------------------- Array.of(value1, value2, value3)

//? How to create Array without using constructor and without using the litteral method.

// Using litterals
let array123 = [1,2,3,4,5,6];
console.log(array123);

// Using constructor
let array124 = new Array(1,2,3,4,5,6);
console.log(array124);

// Using Array.of method
let arrOf = Array.of(1, 2, 3, 4, 5, 6);
console.log(
  "\n Array generated neither using constructor nor array literal- used Array.of()."
);
console.log(arrOf);

//! ---------------------- Array.at(index)

//? How to access the the element of array at index 3 without using []..?
let arrAt = arrOf.at(3);
console.log(" Array element accessed without using []");
console.log(arrAt);
console.log("Last Array element accessed without using arr.length ");
console.log(arrOf.at(-1));
// console.log(arrOf[arrOf.length -1]);

//Todo------------ Calling at() on non-array objects
// The at() method reads the length property of this and calculates the index to access.

const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
};
console.log(Array.prototype.at.call(arrayLike, -1)); // "b"
// console.log(Array.at.call(arrayLike, -1)); //! this will not work

//! ----------------------- arr.concat(arr1, arr2 , arrN)
// Array concatination returns a new array but it returns the shallow copy.
// Therefore if there are nested obj or arrays then you will not get a true copy.

let array1 = [["a"], "b", "c"];
let array2 = ["d", "e", "f"];
let array3 = array1.concat(array2);

console.log(array3); // [ [ 'a' ], 'b', 'c', 'd', 'e', 'f' ]

// Changing pass by values

array3[1] = "s";
console.log(array3); // [ [ 'a' ], 's', 'c', 'd', 'e', 'f' ]
console.log(array1); // [ [ 'a' ], 'b', 'c' ] 

array3[0][1] = "aa";
console.log(array3); // [ [ 'a', 'aa' ], 's', 'c', 'd', 'e', 'f' ]
console.log(array1); // [ [ 'a', 'aa' ], 'b', 'c']

// expected output: Array ["a", "b", "c", "d", "e", "f"]

array1.pop();
array2.pop();
array1.pop();
array1[0].push("z");

// This above push('z') will change the value in array because the first nested array stored in the array1 is not a value rather it is the reference to that nested array in memory.
// Therefore when concatination is done the new array created using concat will have values as values only but this nested array is stored as a reference. Therefore any updates will be reflected in the concatinated array also.

console.log(array1);
console.log(array2);
console.log(array3); // Changes due to push into a reference of the nested array.

//!-------------------------------Array.prototype.copyWithin()
/*
The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

Syntax:-

copyWithin(target)
copyWithin(target, start)
copyWithin(targetLocationToPaste, startIndexToCopy, endIndexToCopy)
*/

var arr = [1,2,3,4,5,6,7,8,9,0];
var arr2 = arr.copyWithin(arr, 0);
console.log(arr2);

// !----------------------------Array.prototype.entries()

//todo--------- The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.



const arrayItr = ["a", "b", "c"];

const iterator1 = arrayItr.entries();//? displays [indes, value]

console.log(iterator1.next().value);

console.log(iterator1.next().value);//? next() is used cause of next itrator without Next() value not display or indefined
console.log(iterator1.next().value);//? next() is used cause of next itrator without Next() value not display or indefined
console.log(iterator1.next().value);//? next() is used cause of next itrator without Next() value not display or indefined
// expected output: Array [0, "a"]
/* 
{
  from : 0;
  to : 5;
}
*/
console.log(iterator1.next().value);
// expected output: Array [1, "b"]

//todo------- Therefore iterator can only traverse once.

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}
for (const  element of a.entries()) {
  console.log( element);
}

// 0 'a'
// 1 'b'
// 2 'c'

//Todo------  Using a for...of loop

const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']

// Code block below will not work because the array itterator only work once thus the program will not at all enter in the for loop because the arrayEntries becomes empty if any element is itterated once.

for (const element of arrayEntries) {
  console.log(element);
  console.log("sorry no output");
}

//Todo-----   Calling entries() on non-array objects
// The entries() method reads the length property of this and then accesses each integer index.

const arrayLike1 = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};

for (const entry of Array.prototype.entries.call(arrayLike1)) {
  console.log(entry);
}
/*
[ 0, 'a' ]
[ 1, 'b' ]
[ 2, 'c' ]
*/
//!-------------------------arrayName.fill()

/*

The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array

-   fill is a mutator method: it will change the array itself and return it, not a copy of it.
-   If the first parameter is an object, each slot in the array will reference that object.
-   The fill() method is a mutating method. It does not alter the length of this, but it will change the content of this.

The fill() method fills empty slots in sparse arrays with value as well.

The fill() method is generic. It only expects the "This" value to have a length property. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

Syntax = 
arr.fill(anythingToFill, startIndex, endIndex);

*/

let sparseArray = [1,2,3];
sparseArray[10] = 10;
console.log(sparseArray);
// Using sparse method
sparseArray.fill(4, 3, 10);
console.log(sparseArray);


// Using fill

console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]

console.log(Array(100).fill(1)); // [1 * 100 elements]

// A single and same object, referenced by each slot of the array:
const arr = Array(3).fill({});
const arr=Array(3).fill((5)) //[ 5, 5, 5 ]
console.log(arr); // [{}, {}, {}]

arr[0].hi = "hi";
console.log(arr); // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]


//!-----------------------Array.prototype.flat()

/* 
- The flat() method creates a new array with all sub-array elements concatenated into - it recursively up to the specified depth.
Syntax.
  flat()
  flat(depth)
*/

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // expected output: [0, 1, 2, 3, 4]
console.log(arr1); // [ 0, 1, 2, [ 3, 4 ] ] // Because its not mutating method




//? Default behaviour only flattens to depth 1
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat()); // [ 0, 1, 2, [ [ 3, 4 ] ] ]

//? flat with number argument
const arr3 = [0, 1, 2, [[[3, 4]]]];
console.log(arr3.flat()); // [ 0, 1, 2, [ 3, 4 ] ]

//? Using infinity
const arr4 = [0, 1, 2, [[[[[[[[[[[[[[[3, 4]]]]]]]]]]]]]]]];
console.log(arr4.flat(Infinity)); // [ 0, 1, 2, 3, 4 ]



// Todo------------------ Alternatives = using = reduce and concat
const arr = [1, 2, [3, 4]];

// To flat single level array
arr.flat();
// is equivalent to
arr.reduce((acc, val) => acc.concat(val), []);
// console.log(arr.reduce((acc, val) => acc.concat(val), []));
// [1, 2, 3, 4]

// or with decomposition syntax
const flattened = (arr) => [].concat(...arr);


// Flatten an array without using flat method.

//! Solving some interview questions on arrays and objects using recursion and other advanced function topics.
