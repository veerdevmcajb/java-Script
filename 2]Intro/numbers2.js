// ========================
//! Rounding Operations
// ========================

// One of the most used operations when working with numbers is rounding.

// There are several built-in functions for rounding:

// Math.floor - Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
// Math.ceil - Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
// Math.round - Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
// Math.trunc (not supported by Internet Explorer) - Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

//! The table of differences:


//? Math.floor   Math.ceil    Math.round   Math.trunc
//     3.1          3            3            3
//     3.6          3            4            4
//    -1.1         -2           -1           -1
//    -1.6         -2           -1           -2

// ========================
//! Rounding to n-th Digit After the Decimal
// ========================

// If we'd like to round the number to n-th digit after the decimal, there are two ways to do so:

//? 1. Multiply-and-divide:
// For example, to round the number to the 2nd digit after the decimal,
// we can multiply the number by 100, call the rounding function, and then divide it back.


// console.log(Math.round(-3.4));



let num1 = 1.23456;
let roundedNum1 = Math.round(num1 * 100) / 100;
console.log("Example 1:", roundedNum1); // 1.23456 -> 123.456 -> 123 -> 1.23

//? 2. toFixed(n) method:
// This method rounds the number to n digits after the point and returns a string representation of the result.

let num2 = 12.34;
let roundedNum2 = num2.toFixed(1);
console.log("Example 2:", roundedNum2); // "12.3"

//? It rounds up or down to the nearest value, similar to Math.round:

let num3 = 12.36;
let roundedNum3 = num3.toFixed(1);
console.log("Example 3:", roundedNum3); // "12.4"

// Note: The result of toFixed is a string. 
// If the decimal part is shorter than required, zeroes are appended to the end.

let num4 = 12.34;
let roundedNum4 = +num4.toFixed(5); // Convert the result to a number

console.log("Example 4:", roundedNum4); // 12.34
