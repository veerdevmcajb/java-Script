//! ---------------------------- sets --------------------------------

//? Definition = A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.

// Creating the set using the new Set method.

// These are universal sets used further in the programme.

// let arr = [1,2,3,4];
// let arr = new Array(1,2,3,4,5,6);

var setNumbs = new Set([12, 21, 34, 66, 8, 8, 67, 88, 89, 39, 23,23,23,23]);
// console.log(Array.from(setNumbs));
console.log(setNumbs);



var setStr = new Set([
  "Abhishek",
  "sagar",
  "pratik",
  "tejas",
  "nayan",
  "om",
  "om",
  "om",
  "om",
]);

console.log("These are the values of setStr : ");
console.log(setStr);

console.log("These are the values of setNumbs : ");
console.log(setNumbs);


// ----------------------------------- Basic of sets experimented   --------------------------------------

// Similarly  like array.push("Value");

//  Adding the elements to an empty set.

const setEmt = new Set();

setEmt.add("Hola");
setEmt.add("Hello");
console.log(setEmt);

setEmt.add("Hola"); //! This one will not be added coz set has only unique values.
console.log(setEmt);

// Adding the variables to the set.
let fname = "Abhishek";
let lname = "Dhone";
setEmt.add(fname);
setEmt.add(lname);
console.log(setEmt);


//? This will also add the values because the values are unique and it has nothing ot do wiht the variable or variable names
fname = "Sagar"
setEmt.add(fname);
console.log(setEmt);

// Adding elements with names similar to already added elements that have same name variables is allowed. Just the final value entering in set shall not be equal.
setEmt.add("fname");
setEmt.add("lname");
console.log(setEmt);

// Adding the same variable multiple times but with different values is allowed.
let firstName = "Elon";
setEmt.add(firstName);

firstName = "Mark";
setEmt.add(firstName);

console.log(setEmt);



const set=new Set() // empty set
set.add("Shiv");    // add value using add method
set.add("veer");    
set.add("Pooja");
let name="Ashu";    // add value unsing variable
set.add(name)
console.log(set);
console.log(set[1]);  // we can't get a value using index set doesnot have index.
console.log(set["veer"]); //undefine
console.log(set.values()); //we can get a all values.
console.log(set.delete("Shiv"));  // delete a value using delete.
console.log(set.values("veer"));
console.log(set.has("shiv")); // check the value is present or not using has() method
console.log(set.size);        // check the size of the set size is a property not a method
console.log(set.clear());     // using clear method we can clear a set
console.log(set);






//? ------------------------ set.forEach() method   -----------------------

// The forEach() method invokes (calls) a function for each Set element.

var setStr2 = new Set([
  "Abhishek",
  "sagar",
  "tejas",
]);

setStr2.forEach(dispForEach);

function dispForEach(value, index) {
  console.log(value);
  // console.log(index); // It is same as value
  // console.log(set);
}


//? Vimp Note = In sets the value and the index is same. Means it does not have index or key like array or object. In sets the key is same as the value.

// Therefore it can not be accessed by index but only by the orignal value.


// ----------------------- Set has no Index / no keys --------------------------

// Trying to access the set elements through index numbers. It actually impossible but just for a try.


// console.log(setEmt2.get("Abhishek")); // Returns undefined because no get method on sets.
// console.log(setEmt2["Abhishek"]); // Returns undefined.
console.log(setNumbs[1]); // Returns undefined.
console.log(setNumbs[0]); // Returns undefined.
console.log(setNumbs[21]);
// Will Not return value 21 stored in set, contrary to expectations.
// This is because the sets dont have keys atall. It has only values and that cant be printed singularly.











//? ------------------------ set.Values() method   -----------------------------

// Using the Values() method of set.
// The values() method returns a new iterator object containing all the values in a Set:
var setNumbs = new Set([12, 21, 34, 66, 8, 8, 67, 88, 89, 39, 23,23,23,23]);

var setStr = new Set([
  "Abhishek",
  "sagar",
  "pratik",
  "tejas",
  "nayan",
  "om",
  "om",
  "om",
  "om",
]);

console.log(setStr.values());

//This will print all the values in set.
let iterate = setStr.values();
console.log(iterate);

//This will also print all the values in set. (no difference in this and above method of printing.)
// Sometimes it may be printed as " Iterator Set Object "

// Listing all items.

let dispIter = "";
for (let x of setStr.values()) {
  console.log(x)
  dispIter += x + " , ";
}
console.log(dispIter);

// -------------------------------- Set Ends  ---------------------------------

//! This is practice of all the methods of set not discussed above.?

const setA = new Set([
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eight",
  "nineth",
  "tenth",
]);
console.log(setA);

//Todo ---------------------set.delete() method. ---------------------------------
/* delete(value: string): boolean

- Removes a specified value from the Set.
- @returns — Returns true if an element in the Set existed and has been removed, or false if the element does not exist.
setA.delete()
*/

let result = setA.delete("first");
console.log(setA);
console.log(result);

result = setA.delete("second", "fourth", "tenth");
console.log(setA);
console.log(result);


//? Delete only takes in the first argument all other arguments are ignored. Means delete only one at a time.

result = setA.delete("tent");
console.log(setA);
console.log(result);
// Wrong property deletion does not cause any error rather it returns false because the property is not found.






//Todo ---------------------set.has() method. ---------------------------------
/*
Syntax = (method) Set<string>.has(value: string): boolean
-- @returns — a boolean indicating whether an element with the specified value exists in the Set or not.
*/

result = setA.has("seventh");
console.log(" This is the result of set.has() = ", result);




//Todo ---------------------set.size; property ---------------------------------
//? Set is not any type of an array because it does not have any length property.
//? Keep in mind that the "size" is the property of the and not the method of the set.

result = setA.size;
console.log(" The length of the setA is = ", result);

result = setA.length; // Undefined - because sets dont have length property.
console.log(" The length of the setA is = ", result);

//Todo ---------------------set.clear() method. ---------------------------------
// This method will completely empty the set thus all the values are deleted from the set. Cant remove single values here.

setA.clear();
console.log(setA);








const set=new Set() // empty set
set.add("Shiv");    // add value using add method
set.add("veer");    
set.add("Pooja");
let name="Ashu";    // add value unsing variable
set.add(name)
console.log(set);
console.log(set[1]);  // we can't get a value using index set doesnot have index.
console.log(set["veer"]); //undefine
console.log(set.values()); //we can get a all values.
console.log(set.delete("Shiv"));  // delete a value using delete.
console.log(set.values("veer"));
console.log(set.has("shiv")); // check the value is present or not using has() method
console.log(set.size);        // check the size of the set size is a property not a method
// console.log(set.clear());     // using clear method we can clear a set
//console.log(set);

// You can use the forEach() method or for...of loop to iterate over the values of a Set.

set.forEach(value => {
    console.log(value); // Logs each value in the Set
});

let myArr=[...set]  // convert set to array 
console.log(myArr);

