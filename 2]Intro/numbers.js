
//! ***************************
// Basic info about Numbers
//! ***************************

// JavaScript has only one type of number.
// Numbers can be written with or without decimals.

let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

console.log("Example 1:", x, y);

// Extra large or extra small numbers can be written with scientific (exponent) notation:

let a = 123e5;    // 12300000
let b = 123e-5;   // 0.00123
console.log(1e-5)
console.log("Example 2:", a, b);

// JavaScript numbers are always stored as double precision floating point numbers.
// Integers are accurate up to 15 digits.

let num1 = 999999999999999;   // 999999999999999
let num2 = 9999999999999999;  // 10000000000000000

console.log("Example 3:", num1, num2);

// The maximum number of decimals is 17.

//! ***************************
// Floating Point Precision
//! ***************************

// Floating point arithmetic is not always 100% accurate.

let result = 0.2 + 0.1; // Floating point precision issue
console.log("Example 4:", result);

// Parsing for float precision.
let perfectResult = parseFloat((0.2 / 100) * 100) + parseFloat((0.1 / 100) * 100); 
// Floating point precision issue
console.log("Example 4:", perfectResult);//Example 4: 0.30000000000000004



// To solve the problem, it helps to multiply and divide:

let correctedResult = (0.2 * 10 + 0.1 * 10) / 10;
console.log("Example 5:", correctedResult);//0.3

console.log((0.1 + 0.2).toFixed(1))

//! ***************************
// Adding Numbers and Strings
//! ***************************

// JavaScript uses the + operator for both addition and concatenation.

// Numbers are added. Strings are concatenated.

let numResult = 10 + 20;  // Result is a number
let strResult = "10" + "20";  // Result is a string concatenation
let mixedResult1 = 10 + "20"; // Result is a string concatenation
let mixedResult2 = "10" + 20; // Result is a string concatenation

console.log("Example 6:", numResult, strResult, mixedResult1, mixedResult2);

// Common mistakes to avoid:

let incorrectResult1 = "The result is: " + 10 + 20;  // Result is "The result is: 1020"
let incorrectResult2 = 10 + 20 + "30";  // Result is "30"

console.log("Example 7:", incorrectResult1, incorrectResult2);

//! ***************************
// Numeric Strings
//! ***************************

// JavaScript strings can have numeric content.

let numericString = "100";  // A string with numeric content

// JavaScript will try to convert strings to numbers in numeric operations.

let divisionResult = numericString / "10";  // Result is a number

console.log("Example 8:", divisionResult);

//! ***************************
// NaN - Not a Number
//! ***************************

// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN.

let nanResult = 100 / "Apple";  // Result is NaN

// You can use isNaN() to find out if a value is not a number.

let nanCheck = isNaN(nanResult);  // Result is true

console.log("Example 9:", nanResult, nanCheck);

// Watch out for NaN in mathematical operations.

let nanArithmetic = NaN + 5;  // Result is NaN

console.log("Example 10:", nanArithmetic);

//! ***************************
// Infinity
//! ***************************

// Infinity (or -Infinity) is returned if you calculate a number outside the largest possible number.

let infinityResult = 2 / 0;  // Result is Infinity

console.log("Example 11:", infinityResult);

// Division by 0 also generates Infinity.

// Infinity is a number.

let isInfinity = typeof Infinity;  // Result is "number"

console.log("Example 12:", isInfinity);

//! ***************************
// Hexadecimal
//! ***************************

// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
// 0123456789abcdef

let hexNumber = 0xff;  // Hexadecimal number

console.log("Example 13:", hexNumber);

// Convert numbers to strings in different bases.

let myNumber = 32;

let base32 = myNumber.toString(32);  // Result in base 32
let base16 = myNumber.toString(16);  // Result in base 16 (hexadecimal)
let base10 = myNumber.toString(10);  // Result in base 10 (decimal)
let base8 = myNumber.toString(8);   // Result in base 8 (octal)
let base2 = myNumber.toString(2);   // Result in base 2 (binary)

console.log("Example 14:", base32, base16, base10, base8, base2);

let hexNum = 8;
console.log(hexNum.toString(2));


//! ***************************
// JavaScript Numbers as Objects
//! ***************************

// Numbers can be defined as objects with the new keyword.

let numPrimitive = 123;  // Primitive number value
let numObject = new Number(123);  // Number object (avoid creating this way)

console.log("Example 15:", numPrimitive, numObject);

// Avoid creating Number objects as they complicate the code and slow down execution.


//! ***************************
// Number Methods
//! ***************************

// isFinite()
// Checks whether a value is a finite number
console.log("\nisFinite():", Number.isFinite(42)); // true
console.log("isFinite():", Number.isFinite(Infinity)); // false

// isInteger()
// Checks whether a value is an integer
console.log("\nisInteger():", Number.isInteger(42)); // true
console.log("isInteger():", Number.isInteger(42.5)); // false

// isNaN()
// Checks whether a value is Number.NaN
console.log("\nisNaN():", Number.isNaN(NaN)); // true
console.log("isNaN():", Number.isNaN("NaN")); // false

// isSafeInteger()
// Checks whether a value is a safe integer
console.log("\nisSafeInteger():", Number.isSafeInteger(42)); // true
console.log("isSafeInteger():", Number.isSafeInteger(2 ** 53)); // false

// parseFloat()
// Parses a string and returns a floating-point number
console.log("\nparseFloat():", Number.parseFloat("3.14")); // 3.14

// parseInt()
// Parses a string and returns a whole number
console.log("\nparseInt():", Number.parseInt("42.5")); // 42

// toExponential(x)
// Converts a number into exponential notation with x digits after the decimal point
console.log("\ntoExponential():", (42).toExponential(2)); // "4.20e+1"

// toFixed(x)
// Formats a number with x numbers of digits after the decimal point
console.log("toFixed():", (42.5678).toFixed(2)); // "42.57"
console.log("Accurate float", (0.2 + 0.1).toFixed(2));

// toLocaleString()
// Converts a number into a string, based on the locale settings
console.log("toLocaleString():", (1234567.89).toLocaleString()); // "1,234,567.89"

// toPrecision(x)
// Formats a number to x length
console.log("toPrecision():", (42.5678).toPrecision(4)); // "42.57"

// toString()
// Converts a number to a string
console.log("toString():", (42).toString()); // "42"

// valueOf()
// Returns the primitive value of a number
console.log("valueOf():", (42).valueOf()); // 42
console.log("valueOf():", (42.333).valueOf()); // 42.333

//! ***************************
// Number Properties
//! ***************************

// EPSILON
// Returns the difference between 1 and the smallest number greater than 1
console.log("EPSILON:", Number.EPSILON);

// MAX_SAFE_INTEGER
// Returns the maximum safe integer in JavaScript.
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
// console.log((-9007199254740991).toString(16))

// MIN_SAFE_INTEGER
// Returns the minimum safe integer in JavaScript
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);

// MAX_VALUE
// Returns the largest number possible in JavaScript
console.log("MAX_VALUE:", Number.MAX_VALUE);

// MIN_VALUE
// Returns the smallest number possible in JavaScript
console.log("MIN_VALUE:", Number.MIN_VALUE);

// NaN
// Represents a "Not-a-Number" value
console.log("NaN:", Number.NaN);

// NEGATIVE_INFINITY
// Represents negative infinity (returned on overflow)
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);

// POSITIVE_INFINITY
// Represents infinity (returned on overflow)
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
