// type_coercion.js

// 1. String Coercion

// Stictly numeric operators will always try to convert all the operands to Number datatype.
// + will work as concatination of first operand is string.

// Example 1: Number to String
let num = 42;
let str = "The answer is: " + num; // Implicitly converts num to a string
console.log(str  ); // Output: "The answer is: 42"

let op1 = "2";
let op2 = "2";
let result = op1 - op2;
console.log(result);

 


// 2. Number Coercion

// Example 2: String to Number
let strNum = "123";
let numFromStr = Number(strNum); // Explicitly converts strNum to a number
let nfs = +strNum; // Explicitly converts strNum to a number
console.log(numFromStr); // Output: 123

let strn="456";
console.log(typeof(strn)); // string
console.log(typeof(+strn));// number

// Example 3: Boolean to Number
let bool = true;
let numFromBool = +bool; // Unary plus operator coerces bool to a number
console.log(numFromBool); // Output: 1 (true is coerced to 1)

let bool1=false;
console.log(+bool1);


// 3. Boolean Coercion

// Example 4: Number to Boolean
let zero = 0;
let boolFromNum = Boolean(zero); // Explicitly converts zero to a boolean
console.log(boolFromNum); // Output: false (0 is coerced to false)

// Example 5: String to Boolean
let emptyStr = "";
let boolFromStr = Boolean(emptyStr); // Explicitly converts emptyStr to a boolean
console.log(boolFromStr); // Output: false (empty string is coerced to false)

// 4. Explicit Coercion

// Example 6: Using String(), Number(), and Boolean() functions
let explicitStr = String(123); // Explicitly converts number to string
let explicitNum = Number("456"); // Explicitly converts string to number
let explicitBool = Boolean("hello"); // Explicitly converts string to boolean
console.log(explicitStr, explicitNum, explicitBool); 
// Output: "123" 456 true

// Example 7: Using parseInt() and parseFloat() for parsing strings
let parsedInt = parseInt(" 12 3 .45 "); // Parses string to integer
let parsedFloat = parseFloat("456.78 "); // Parses string to floating-point number
console.log(parsedInt, parsedFloat); // Output: 123 456.78

// Summary:
// - JavaScript performs automatic type coercion in various operations.
// - String concatenation coerces non-strings to strings.
// - The Number() function, unary plus operator, and explicit conversion functions are used for number coercion.
// - Boolean() function and logical operators are used for boolean coercion.
// - Understanding type coercion is crucial for avoiding unexpected behavior and debugging.



// Other ways of Type coercion.

// 1. String Coercion

// Example 1: Number to String
let numToString = "The answer is: " + 42; // Implicitly converts number to a string
console.log(numToString); // Output: "The answer is: 42"

// Example 2: Boolean to String
let boolToString = "Value: " + true; // Implicitly converts boolean to a string
console.log(boolToString); // Output: "Value: true"

// 2. Number Coercion

// Example 3: String to Number
let strToNumber = Number("123"); // Explicitly converts string to number
console.log(strToNumber); // Output: 123

// Example 4: Boolean to Number
let boolToNumber = +true; // Unary plus operator coerces boolean to a number
console.log(boolToNumber); // Output: 1 (true is coerced to 1)

// Example 5: String to Number with Arithmetic Operations
let strNumAddition = "5" + 3; // Concatenation, implicit conversion to string
let strNumSubtraction = "9" - 3; // Subtraction, implicit conversion to number
console.log(strNumAddition, strNumSubtraction); // Output: "53" 6

// 3. Boolean Coercion

// Example 6: Number to Boolean
let numToBool = Boolean(0); // Explicitly converts number to a boolean
console.log(numToBool); // Output: false (0 is coerced to false)

// Example 7: String to Boolean
let strToBool = Boolean("hello"); // Explicitly converts string to a boolean
console.log(strToBool); // Output: true (non-empty string is coerced to true)

// Example 8: Using Logical Operators
let andOperator = "text" && true; // Returns the second operand (true)
let orOperator = "" || false; // Returns the first truthy operand (false)
console.log(andOperator, orOperator); // Output: true false

// 4. Explicit Coercion

// Example 9: Using String(), Number(), and Boolean() functions
let explicitToString = String(false); // Explicitly converts boolean to string
let explicitToNumber = Number("456abc"); // Explicitly converts string to number
let explicitToBool = Boolean(" "); // Explicitly converts non-empty string to boolean
console.log(explicitToString, explicitToNumber, explicitToBool); // Output: "false" NaN true

// Example 10: Using == Operator
let looseEquality = "5" == 5; // Coerces operands before comparison
let strictEquality = "5" === 5; // Does not perform type coercion
console.log(looseEquality, strictEquality); // Output: true false

// Example 11: Using != Operator
let looseInequality = "5" != 5; // Coerces operands before comparison
let strictInequality = "5" !== 5; // Does not perform type coercion
console.log(looseInequality, strictInequality); // Output: false true

// Example 12: Using Comparison Operators
let greaterThan = "10" > 5; // Coerces operands before comparison
let lessThanOrEqual = "5" <= 5; // Coerces operands before comparison
console.log(greaterThan, lessThanOrEqual); // Output: true true

// Summary:
// - Type coercion happens implicitly in various operations and can be explicitly performed using conversion functions.
// - Understanding the nuances of type coercion is essential for writing robust and predictable JavaScript code.

// ! Important info for auto boolean conversion and while using in the if statements or during comparisions.

// Falsy

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Truthy - All other cases will result in truthy values

console.log(Boolean(' '));
console.log(Boolean("false"));
console.log(Boolean("0"));
console.log(Boolean(-1));


// NaN is not comparable therefore we use isNaN() function to chek if the result is NaN

console.log(NaN == NaN);        // false
console.log(isNaN(NaN));        // true 
