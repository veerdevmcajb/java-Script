
//? A Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// ================================
// Creating a Map
// ================================
// You can create a Map by passing an array of [key, value] pairs to the new Map() constructor.
let myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    [1, 'value3'],
    [{}, 'value4'],
    ["mapMethod", function mapMeth(){
        console.log("Inside the map method")
    }]
]);

//console.log(myMap);

myMap.get("mapMethod")(); // excute the function 
console.log(myMap.get("mapMethod"));

// Adding key-value pairs to a Map
// The set() method adds or updates an element with a specified key and value to the Map.
myMap.set('key3', 'value5');
myMap.set({name: 'John'}, 'value6');

// ================================
// Map Size
// ================================
// The size property returns the number of key/value pairs in the Map.
console.log(myMap.size); // Output will depend on the current number of entries

// ================================
// Retrieving Values
// ================================
// The get() method gets the value associated with a specified key in the Map. If the key doesn't exist, undefined is returned.
console.log(myMap.get('key1')); // 'value1'
console.log(myMap.get('key3')); // 'value5'
console.log(myMap.get({})); // undefined, because {} is not the same object used as the key

// ================================
// Checking for existence
// ================================
// The has() method checks if a Map contains a specified key.
console.log(myMap.has('key2')); // true
console.log(myMap.has('key4')); // false

// ================================
// Deleting key-value pairs
// ================================
// The delete() method removes a specified key-value pair from the Map.
myMap.delete('key2'); // Removes the entry with key 'key2'

// ================================
// Iterating over a Map
// ================================
// You can use the forEach() method, or for...of loop to iterate over the key-value pairs of a Map.

// Using forEach()
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`); // Logs each key-value pair
});

// Using for...of to iterate over [key, value] pairs
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`); // Logs each key-value pair
}

// Using for...of to iterate over keys or values directly
for (let key of myMap.keys()) {
    console.log(key); // Logs each key
}

for (let value of myMap.values()) {
    console.log(value); // Logs each value
}

// ================================
// Converting Map to Array
// ================================
// Sometimes, it's useful to convert a Map into an Array.

console.log(myMap);
// Map(6) {
//     'key1' => 'value1',
//     1 => 'value3',
//     {} => 'value4',
//     'mapMethod' => [Function: mapMeth],
//     'key3' => 'value5',
//     { name: 'John' } => 'value6'
//   }
let keyValueArray = [...myMap];
console.log(keyValueArray); // Converts Map to Array of [key, value] pairs
// [
//     [ 'key1', 'value1' ],
//     [ 1, 'value3' ],
//     [ {}, 'value4' ],
//     [ 'mapMethod', [Function: mapMeth] ],
//     [ 'key3', 'value5' ],
//     [ { name: 'John' }, 'value6' ]
//   ]
// ================================
//! Clearing a Map
// ================================
//? The clear() method removes all key-value pairs from the Map.
myMap.clear();
console.log(myMap.size); // 0

// ================================
// Practical Use Cases
// ================================
// 1. Storing metadata about objects where the object itself is the key:
let objKey = {id: 1};
let metadataMap = new Map();
metadataMap.set(objKey, {description: 'Object metadata'});

// 2. Using non-string values as keys, which is not directly possible with Objects:
let funcKey = function() {};
let functionMap = new Map();
functionMap.set(funcKey, 'Function as a key');

