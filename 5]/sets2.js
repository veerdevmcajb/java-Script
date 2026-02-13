
// A Set is a collection of unique values. Each value can only occur once in a Set.

// ================================
// Creating a Set
// ================================
// You can create a Set by passing an iterable object (like an array) to the new Set() constructor.
let mySet = new Set([1, 2, 3, 4, 5]);

// Adding values to a Set
// The add() method is used to add a new element with a specified value to the Set.
mySet.add(6);
mySet.add('text');
mySet.add({a: 1, b: 2}); // Objects are allowed

// Note: Since Set only stores unique values, adding a value that already exists in the Set will not have any effect.
mySet.add(2); // This will not add '2' again because it's already in the Set

// ================================
// Set Size
// ================================
// The size property returns the number of elements in a Set.
console.log(mySet.size); // Output will be 7 (assuming no duplicates were added)

// ================================
// Checking for existence
// ================================
// The has() method checks if a Set contains a specified value.
console.log(mySet.has(3)); // true
console.log(mySet.has(10)); // false

// ================================
// Deleting values
// ================================
// The delete() method removes a specified value from the Set.
mySet.delete(5); // Removes '5' from the Set

// ================================
// Iterating over a Set
// ================================
// You can use the forEach() method or for...of loop to iterate over the values of a Set.

// Using forEach()
mySet.forEach(value => {
    console.log(value); // Logs each value in the Set
});

// Using for...of
for (let value of mySet) {
    console.log(value); // Logs each value in the Set
}

// ================================
// Converting a Set to an Array
// ================================
// Sometimes, it's useful to convert a Set back into an Array. The spread operator (...) makes this easy.
let myArray = [...mySet];
console.log(myArray); // Converts Set to Array

// ================================
// Removing All Elements
// ================================
// The clear() method removes all elements from a Set.
mySet.clear();
console.log(mySet.size); // 0

// ================================
// Working with String Values
// ================================
// Sets can contain any type of value, including strings. This can be useful for storing unique characters or substrings.

let textSet = new Set('hello');
console.log(textSet); // Set(4) { 'h', 'e', 'l', 'o' } - note that 'l' only appears once

// ================================
// Practical Use Cases
// ================================
// 1. Removing duplicates from an array:
let numbers = [1, 2, 3, 3, 4, 4, 5];
let uniqueNumbers = new Set(numbers);
console.log([...uniqueNumbers]); // [1, 2, 3, 4, 5]

// 2. Checking for the presence of an item in a collection:
let items = new Set(['item1', 'item2', 'item3']);
if (items.has('item2')) {
    console.log('Item2 is in the set');
}

// Note:- Sets are collections of unique values. They are especially useful when the uniqueness of items is a key concern.
