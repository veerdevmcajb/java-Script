
console.log(typeof [])
console.log(Array.isArray([]))


console.log(null)

console.log(typeof NaN)
console.log(isNaN( NaN))







//!                  Comparison Operators in JavaScript: == vs. ===

// == (Equality Operator): Used for loose equality check.
// Main - only checks the value 
// The == operator checks for equality after performing type coercion if needed.
// It converts operands to the same type before making the comparison.

// Example 1:
let looseEquality1 = 5 == "5"; // true (string "5" is coerced to a number)
console.log("Loose Equality Example 1:", looseEquality1);

// Example 2:
console.log( null == undefined)
let looseEquality2 = null == undefined; // true (both null and undefined are considered equal)
console.log("Loose Equality Example 2:", looseEquality2);

// Example 3:
let looseEquality3 = "0" == false; // true (boolean false is coerced to a number)
console.log("Loose Equality Example 3:", looseEquality3);

// === (Strict Equality Operator): Used for strict equality.
// Main - Not only checks the value but also the datatype. 
// The === operator checks for equality without performing type coercion.
// It compares both value and type.

// Example 4:
let strictEquality1 = 5 === "5"; // false (string "5" is not equal to the number 5)
console.log("Strict Equality Example 1:", strictEquality1);

// Example 5:
let strictEquality2 = null === undefined; // false (null and undefined are not of the same type)
console.log("Strict Equality Example 2:", strictEquality2);

// Example 6:
let strictEquality3 = "0" === false; // false (string "0" is not equal to boolean false)
console.log("Strict Equality Example 3:", strictEquality3);

// Special Cases:

// Example 7:
let specialCase1 = undefined == false; // false (undefined is not coerced to a boolean)
console.log("Special Case Example 1:", specialCase1);

//! Vimp example
// Here the undefined will be considered as true.
if(undefined){
    console.log("Undifined not converted to false ")
}else{
    console.log("undefined converted to false") // Actual output
}

// Example 8:
let specialCase2 = undefined === false; // false (undefined and false are not of the same type)
console.log("Special Case Example 2:", specialCase2);

// Example 9:
let specialCase3 = null == false; // false (null is not coerced to a boolean)
console.log("Special Case Example 3:", specialCase3);

// Example 10:
let specialCase4 = null === false; // false (null and false are not of the same type)
console.log("Special Case Example 4:", specialCase4);

// Example 11:
let specialCase5 = "" == 0; // true (empty string is coerced to 0)
console.log("Special Case Example 5:", specialCase5);

// Example 12:
let specialCase6 = "" === 0; // false (empty string and 0 are not of the same type)
console.log("Special Case Example 6:", specialCase6);


// Null - The tricky part.

console.log(null > 0);//false
console.log(null < 0);//false
console.log(null >= 0);//true

//!                          Comparing Objects and Arrays:

// Objects and Arrays cannot be compared directly using == or ===.
// They are reference types, and equality is determined by reference, not values in arr or obj.

// Example 13:
let obj1 = { name: "John" }; // #123abc
let obj2 = { name: "John" }; // #678xyz

console.log("Object Comparison Example:", obj1 == obj2); // false (different references)

// Example 14:
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log("Array Comparison Example:", arr1 === arr2); // false (different references)
console.log("Array Comparison Example:", arr1[0] === arr2[0]);// true


// Main example.

let emptArr = [];
let emptArr1 = [];
console.log("Empty Array Comparison Example:", emptArr === emptArr1); // false (different references)



let arr91 = [1,2,3];
let copy = arr91 


console.log(arr91 == copy)
console.log(arr91 === copy)





// Example 15:
let emptyArray1 = [] == 0; // true (empty array is converted to 0)
console.log("Empty Array Comparison Example 1:", emptyArray1);

// Example 16:
// let emptyArray2 = [] === 0; // false (empty array and 0 are not of the same type)
console.log("Empty Array Comparison Example 2:", emptyArray2);

// Example 17:
let emptyArray3 = [] == ""; // true (empty array is coerced to an empty string)
console.log("Empty Array Comparison Example 3:", emptyArray3);

// Example 18:
// let emptyArray4 = [] === ""; // false (empty array and empty string are not of the same type)
console.log("Empty Array Comparison Example 4:", emptyArray4);

// Example 19:
let sameReferenceArray1 = (arr1 = [1, 2, 3]) === (arr2 = arr1); // true (both variables reference the same array)
console.log("Same Reference Array Comparison Example 1:", sameReferenceArray1);



// Example 20: sameReference comparision

let arr11 = [];
let arr12 = [];
console.log(arr11 == arr12) // false

let copyArr11 = arr11;
console.log(arr11 == copyArr11); // true because reference is same
console.log(copyArr11); // [] empty

// Shallow copy.

arr11 = [1,1];
console.log(arr11); // [1,1]

console.log(copyArr11); // [1,1]
// Above copied array will change because it has the referencd of the arr11 and not the actual values


let sameReferenceArray2 = (arr1 = [1, 2, 3]) == (arr2 = arr1); // true (both variables reference the same array, and == coerces)
console.log("Same Reference Array Comparison Example 2:", sameReferenceArray2);

// Example 21:
let differentReferenceArray1 = (arr1 = [1, 2, 3]) == [1, 2, 3]; // false (coercion results in the same content)
console.log("Different Reference Array Comparison Example 1:", differentReferenceArray1);

// Example 22:
// let differentReferenceArray2 = (arr1 = [1, 2, 3]) === [1, 2, 3]; // false (different references)
console.log("Different Reference Array Comparison Example 2:", differentReferenceArray2);

// Example 23:
let differentContentArray1 = [1, 2, 3] == [1, 2, 3]; // false (different references)
console.log("Different Content Array Comparison Example 1:", differentContentArray1);

// Example 24:
// let differentContentArray2 = [1, 2, 3] === [1, 2, 3]; // false (different references)
console.log("Different Content Array Comparison Example 2:", differentContentArray2);
