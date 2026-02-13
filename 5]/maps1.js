// ! ------------------- Maps --------------------------
// A Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

/*
? Method----- Description----------------------------------------------
new Map()	Creates a new Map
set()   	Sets the value for a key in a Map
get()	    Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	    Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
?entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	    Returns the number of elements in a Map

*/

//? There are 2 methods to create a Map
// 1) Passing an Array to new Map()
// 2) Create a Map and use Map.set()

var mapNumbs = new Map([
  ["my_age", 18],
  ["father", 49],
  ["mother", 42],
]);

console.log(mapNumbs);

//! const mapStr = new Map(['ram', 'krishna', 'vishnu', 'shiv', 'ganesh', 'hanuman']);  syntax error

const mapEmt = new Map();

console.log("\n These are the values of mapNumbs : ");
console.log(mapNumbs);

// for line 1 = Activate these lines to see how we can save and use functions from map.
// let age = mapNumbs.get('totalAge');
// console.log(age());

// console.log("\n These are the values of mapStr : ");
// console.log(mapStr);

console.log("\n These are the values of mapEmt : ");
console.log(mapEmt);



// ---------------- Adding Elements using map.set() method --------------------

mapNumbs.set("sister", 15);
console.log(
  "\n These are the values of mapNumbs after adding new element via set() method : "
);
console.log(mapNumbs);



// ------------- Changing Elements using map.set() method ------------------------

// The set() method can also be used to change existing Map values.
console.log("\n Next Year my Age will be : ");
mapNumbs.set("my_age", 19);

console.log(mapNumbs);
console.log(mapNumbs.get("my_age")); //? We can access the map values only using get


let a=new Map([
  ["name","shiv"],
  ["age",25],
  ["city","nad"]
])
console.log(a);

a.set("mobNo",12345);
console.log(a);
console.log(a.get("name"));
console.log(a.delete("mobNo"));
console.log(a);


//! All below methods are wrong methodts to access the elements from the maps.


console.log(mapNumbs["my_age"]);  // Undefined
console.log(mapNumbs[0]);         // Undefined
console.log(mapNumbs.father);     // Undefined
console.log(mapNumbs.my_age);     // Undefined

//? This is the only correct method to get the values from the maps.
console.log(mapNumbs.get("father"));
// Only this will give the output because the map value are accessed by passing the keys to the get method.

console.log("\n get() method can return only one element at a time.");
console.log(mapNumbs.get("my_age", "father"));
//? get() method can return only one element at a time.


// This will only output first argument i.e my_age and next argument will be ignore.

// --------------------- The size property of Maps ------------------------

console.log("\n This is the size of the mapNumbs map : ");
console.log(mapNumbs.size);

//!---------------------- The mapName.delete() method  ---------------------------

// The delete() method removes a Map element:
mapNumbs.delete("sister");
console.log(mapNumbs);

// mapNumbs.delete("sister", "my_age"); // incorrect way to delete the elements.
//? my_age is not deleted because delete() method can only delete 1 value at a time.



//!----------------------- The mapName.has() method  --------------------------

//? The has() method returns true if a key exists in a Map.
let mapHas = mapNumbs.has("my_age");
console.log(mapHas);

mapHas = mapNumbs.has("sister");
console.log(mapHas);

// ---------------------- JavaScript Objects vs Maps ----------------------------
/*
Differences between JavaScript Objects and Maps:

Property:   Object----------------------------|    Map-----------------------------
                                              |
Iterable	Not directly iterable	              |    Directly iterable
Size	    Do not have a size property	        |    Have a size property
Key Types	Keys must be Strings (or Symbols)   |    Keys can be any datatype
Key Order	Keys are not well ordered	          |    Keys are ordered by insertion
Defaults	Have default keys	                  |    Do not have default keys.
*/

// ------------------------- mapName.forEach() Method ---------------------------
var mapNumbs = new Map([
  ["my_age", 18],
  ["father", 49],
  ["mother", 42],
]);
let dispMapEach = "";// for storing value
mapNumbs.forEach(dispMapFunc);

function dispMapFunc(value, key) {
  dispMapEach += key + " = " + value + "\t";
}
console.log("\n This is printed using the forEach method on maps : ");
console.log(dispMapEach);


// This is printed using the forEach method on maps : 
// my_age = 18	father = 49	mother = 42


// ------------------------ mapName.entries() Method ----------------------------

//? The entries() method returns an iterator object with the [key, values] in a Map.
// Displays the Key and Entry as "Key, Value" but only in pair at a time.

let dispMApEntry = "";
for (const [key, value] of mapNumbs.entries()) {
  dispMApEntry += key + "-" + value + " / ";
}
console.log("\n These are the map entries.");
console.log(dispMApEntry);

// These are the map entries.
// my_age-18 / father-49 / mother-42 / 



//? ---------------------------- Not possible on maps and sets mapName.reduce() Method and other methods -----------------------------------

// let reduceMap = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
//   ["d", 4],
// ]
// );

// let resultMap = reduceMap.map((va,key)=> value*2);
// console.log(resultMap);
