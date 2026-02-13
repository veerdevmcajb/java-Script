
/* Example 1: for...in Loop (Iterating over object properties)

Syantax: 

for(let i in array){
  array[i];
}

Here array or object will be itterated till its length.
This will set i to 0
increment by default by 1 ot to next property of object

*/

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  console.log(typeof person)
  
  for (let i in person) {
    // console.log(`${i}: ${person[i]}`);
    console.log("Key = ", i , " and Value = ", person[i]);

    // keep in mind - always access the property of obj using the brackets as follows = obj[]
  };
  
  /*
  Explanation:
  - The for...in loop is used to iterate over the ENUMBERABLE properties of an object.
  - It iterates over the keys (property names) of the object.
  - 'key' represents each property name, and 'person[key]' accesses the corresponding property value.
  - It's important to use 'hasOwnProperty' to filter out inherited properties.
  */
  
  // Example 2: for...of Loop (Iterating over iterable objects like arrays)
  const numbers = [11, 12, 13, 14, 15];
  
  for (let value of numbers) {
    console.log(value);  
  }
  
  /*
  Explanation:
  - The for...of loop is used to iterate over iterable objects, such as arrays, strings, maps, sets, etc.
  - It directly iterates over the values of the iterable, simplifying the syntax.
  - 'num' represents each value in the iterable.
  - It cannot be used to iterate over the properties of an object like for...in.
  */
  
  // Difference between for...in and for...of
  /*
  1. for...in:
     - Iterates over enumerable properties (keys) of an object.
     ?- Suitable for objects, not recommended for arrays (may iterate over inherited properties).
  
  2. for...of:
     - Iterates over iterable objects (values), providing a cleaner syntax.
     ?- Suitable for arrays, strings, maps, sets, etc.
  */
  
  // Example 3: Using for...in with arrays (Not recommended)
  const colors = ["red", "green", "blue"];
  
  for (let index in colors) {
    console.log(index); // Outputs: 0, 1, 2 (indices, not values)
  }
  
  /*
  Explanation:
  - While for...in can be used with arrays, it iterates over indices (as strings) rather than values.
  - It's not recommended for arrays due to potential issues with inherited properties.
  */
  
  // Example 4: Using for...of with strings
  const message = "Hello";
  
  for (let char of message) {
    console.log(char); 
  }
  // Outputs: H, e, l, l, o
  //? Output in string format
  
  /*
  Explanation:
  - for...of can be used with strings to iterate over each character.
  - It provides a clean and concise way to loop through iterable values.
  */
  
  // Addon Notes:
  /*
  - Use for...in when iterating over object properties.
  - Use for...of when iterating over iterable values (arrays, strings, etc.).
  - Avoid using for...in with arrays due to potential issues with inherited properties.
  */
  
  