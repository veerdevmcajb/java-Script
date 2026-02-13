//  for of => Array
//  for in => Object

// for in  Obj => key
// for in  Array => Index
// for of  Array => Values

let arr = ["a", "b", "c"];
// let arr1 = ["a2", "b2", "c2"]

// for (let i = 0; i > arr.length; i++){
//   console.log(arr[i])
// }

for (let z of arr) {
  console.log(z);
}

let obj = {
  name: "Abhishek",
  lName: "Dhone",
  number: 1231212,
};

for (let key in obj) {
  console.log("Key", key);
  console.log("Val", obj[key]);
}

let arr1 = ["a2", "b2", "c2"];

for (let key in arr1) {
  console.log("Index", key);
  console.log("Val", arr1[key]);
}

//todo---- Example 1: Using for...in with arrays
var colorsArray = ["red", "green", "blue"];

console.log("Using for...in with arrays:");

for (let p in colorsArray) {
  console.log(p); //! Outputs: 0, 1, 2 (indices, not values)
  console.log(colorsArray[p]);
}

console.log("------------------------");

//todo---- Example 2: Using for...of with arrays
console.log("Using for...of with arrays:");
var colorsArray = ["red", "green", "blue"];
for (let color of colorsArray) {  
  console.log(color); //? Outputs: red, green, blue
}
console.log("------------------------");

//todo------------- Example 3: Using for...in with objects
const personObject = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log("Using for...in with objects:");
for (let key in personObject) {
  console.log(`${key}: ${personObject[key]}`);
}
console.log("------------------------");

//todo-------------------- Example 4: Using for...of with strings
const messageString = "Hello";

console.log("Using for...of with strings:");
for (let char of messageString) {
  // messageString[char]
  console.log(char); // Outputs: H, e, l, l, o
}
console.log("------------------------");

//! ************************* Nested Examples

//todo-------------- Example 5: Using for...in with nested arrays

var nestedColorsArray = [
  ["red", "green", "blue"],
  ["yellow", "purple", "orange"],
];

console.log("Using for...in with nested arrays:");

for (let index in nestedColorsArray) {
  console.log(nestedColorsArray[index]);
  for (let color of nestedColorsArray[index]) {
    console.log(color); // Outputs: red, green, blue, yellow, purple, orange
  }
}
console.log("------------------------");

for (let i in [1, 2, 3, 4, 5]) {
  console.log(i);
}

// Example 6: Using for...of with nested objects
const obj3 = {
  name: "Abhishek",
  lName: "Dhone",
  number: 1231212,
};
const arrOfObj3 = Object.entries(obj3) 
console.log(arrOfObj3)
// [ 
// [ 'name', 'Abhishek' ], 
// [ 'lName', 'Dhone' ], 
// [ 'number', 1231212 ]
// ]
const arrOfObj3Vals = Object.values(obj3)
console.log(arrOfObj3Vals);
for (let val of Object.values(obj3)){
// for (let val of [ 'Abhishek', 'Dhone', 1231212 ]){
  console.log(val)
}

const arrOfObj3Keys = Object.keys(obj3)
console.log(arrOfObj3Keys);
for (let key of Object.keys(obj3)){
  console.log(key)
}



var nestedPersonObject = {
  person1: {
    name: "John",
    age: 30,
  },
  person2: {
    name: "Alice",
    age: 25,
  },
};

console.log(Object.entries(nestedPersonObject)); //? Returns an array of object propertys
/*
[
  [ 'person1', { name: 'John', age: 30 } ],
  [ 'person2', { name: 'Alice', age: 25 } ]
]

*/
// console.log(Object.values(nestedPersonObject));//? Returns an array of all obj key & values without object names
/*
[ { name: 'John', age: 30 }, { name: 'Alice', age: 25 } ]
*/


var nestedPersonObject = {
  person1: {
    name: "John",
    age: 30,
  },
  person2: {
    name: "Alice",
    age: 25,
  },
};
console.log(Object.values(nestedPersonObject)); //This will return all the values in the object without names.
//? values alwas return array of an object property




var nestedPersonObject = {
  person1: {
    name: "John",
    age: 30,
  },
  person2: {
    name: "Alice",
    age: 25,
  },
};
console.log("Using for...of with nested objects:");
for (let person of Object.values(nestedPersonObject)) {
// for (let person of [ { name: 'John', age: 30 }, { name: 'Alice', age: 25 } ]) {
  console.log(person.name); // Outputs: John, Alice
}
console.log("------------------------");

// Example 7: Using for...in with nested objects
console.log("Using for...in with nested objects:");
for (let key in nestedPersonObject) {
  console.log(`${key}: ${nestedPersonObject[key].name}`);
}
console.log("------------------------");

// Example 8: Using for...of with nested arrays
var nestedColorsArray = [
  ["red", "green", "blue"],
  ["yellow", "purple", "orange"],
];
console.log("Using for...of with nested arrays:");
for (let colors of nestedColorsArray) {
  for (let color of colors) {
    console.log(color); // Outputs: red, green, blue, yellow, purple, orange
  }
}
console.log("------------------------");
