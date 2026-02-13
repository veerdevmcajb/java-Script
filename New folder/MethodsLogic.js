// Basic JavaScript Coding Problems (1–30)
// 1. Write a function to reverse a string.
// Input: hello → Output: olleh
function strRev(str) {
  //   var reverse = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     // console.log(str[i])
  //     reverse = reverse + str[i];
  //     console.log(reverse);
  //   }
  //   return reverse

  return str.split("").reverse().join("");
}

console.log(strRev("Abhishek"));

// var arr = [1,2,3,4,5]
// console.log(arr.reverse())

// 2. Check if a given string is a palindrome.
// Input: madam → Output: true
function palindrome(str) {
  let rev = str.split("").reverse().join("");
  return str === rev;
}
console.log(palindrome("Abhishek"));
console.log(palindrome("madam"));

// 3. Count the number of vowels in a string.
// Input: javascript → Output: 3
function checkvowels(str) {
  // let vow = 'aeiouAEIOU';
  // let count = 0
  // for(let i = 0; i < str.length; i++){
  //     if(vow.includes(str[i])){
  //         count++
  //     }
  // }
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A"
    ) {
      // console.log(str[i])
      count++;
    }
  }
  return count;
}
console.log(checkvowels("Abhishek"));

// 4. Calculate the factorial of a number using recursion.
// Input: 5 → Output: 120

//  5 = 5 * 4 * 3 * 2 * 1

function factorial (num) {
    // let result = 1
    // for(let i = 1; i <= num ; i++){
    //     result = result * i
    // }
    // return result

    // if ( num < 0) {

    // }
    if (num === 0) return 1
    if (num === 1) {
        return num
    }
    return num * factorial(num - 1) // 5 * 4 * 3 * 2 * 1
}
console.log(factorial(5))
console.log(factorial(0))

// 5 * 4 * 3 * 2 * 1 = 120



// 5. Return the nth Fibonacci number.
// Input: 6 → Output: 8

// function FibonacciForNum (index) {
//     let start = 0;
//     let start1 = 1
//     // let result = 1;
//     for(let i = 0; i < index; i++){
//         let result = start + start1;
//         start = start1;
//         start1 = result
//     }
//     return start1
// }
// console.log(FibonacciForNum(6))

function fibonacci(n) {
  if (n < 0) return undefined;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    // i = 2 ; next = 0 + 1 = 1
    // i = 3 ; next = 1 + 1 = 2
    // i = 4 ; next = 1 + 2 = 3
    // i = 5 ; next = 2 + 3 = 5
    // i = 6 ; next = 3 + 5 = 8

    a = b; 
    // i = 2 ; a = 1
    // i = 3 ; a = 1
    // i = 4 ; a = 2
    // i = 5 ; a = 3
    // i = 6 ; a = 5
    b = next; 
    // i = 2 ; b = 1
    // i = 3 ; b = 2
    // i = 4 ; b = 3
    // i = 5 ; b = 5
    // i = 6 ; b = 8
  }
  return b;
}
console.log(fibonacci(6))
console.log(fibonacci(7))



// 6. Write a function to sum all elements in an array.
// Input: [1, 2, 3, 4] → Output: 10

function sumallelements(arr){
    // return arr.reduce((total, currentValue , index, array) => {
    //     return total + currentValue
    // }, 0)

    function sum (total, currentValue , index){
        console.log("Index", index)
        console.log("currentValue", currentValue)
        console.log("total", total)
        return total + currentValue
    }
    // return  arr.reduce(sum, 0) // 0, 1, 3 , 6, 10
    return  arr.reduce(sum) // 1,3,6,10
}

// let myArray = 
console.log(sumallelements([1, 2, 3, 4]))

// 7. Find the maximum and minimum numbers in an array.
// Input: [5, 1, 9, 3] → Output: max = 9, min = 1

function findMaxMin (arr) {
    arr.sort((a,b) => a - b)
    // arr.sort()
    console.log(arr)
    let min = arr[0]
    let max = arr[arr.length - 1]
    let result = `Maximun Num = ${max} and Minum num = ${min}`
    return result 
}
console.log(findMaxMin([5, 1, 9, 3, 11, 101]))

let arr = [5, 1, 9, 3, 11, 101]
// [1, 5, 9, 3, 11, 101]


for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        // if(arr[i] > arr[j]){
        if(arr[i] < arr[j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr)





// 8. Remove all duplicate values from an array.
// Input: [1, 2, 2, 3] → Output: [1, 2, 3]


// 9. Flatten a deeply nested array into a single-level array.
// Input: [1, [2, [3, 4]]] → Output: [1, 2, 3, 4]
// 10. Capitalize the first letter of every word in a string.
// Input: hello world → Output: Hello World
// 11. Find the length of the longest word in a sentence.
// Input: JS is awesome → Output: 7
// 12. Check if two strings are anagrams.
// Input: listen, silent → Output: true
// 13. Find the first non-repeating character in a string.
// Input: aabbcdee → Output: c
// 14. Reverse the words in a sentence.
// Input: hi there → Output: there hi
// 15. Generate all prime numbers up to a given number n.
// Input: 10 → Output: [2, 3, 5, 7]
// 16. Generate a random number between two given numbers.
// Input: 1 and 10 → Output: random int between 1–10
// 17. Convert a sentence to title case.
// Input: js is fun → Output: Js Is Fun
// 18. Find the GCD of two numbers.
// Input: 8, 12 → Output: 4
// 19. Check if a number is an Armstrong number.
// Input: 153 → Output: true
// 20. Check if a number is a perfect square.
// Input: 16 → Output: true
// 21. Find the missing number in an array from 1 to n.
// Input: [1, 2, 4, 5] → Output: 3
// 22. Find the most frequent element in an array.
// Input: [1, 3, 1, 3, 1, 2] → Output: 1
// 23. Implement binary search.
// Input: [1, 2, 3, 4, 5], target = 4 → Output: 3 (index)
// 24. Remove falsy values from an array.
// Input: [0, false, "", 2, true] → Output: [2, true]
// 25. Rotate an array to the right by k steps.
// Input: [1, 2, 3, 4, 5], k = 2 → Output: [4, 5, 1, 2, 3]
// 26. Find the nth largest number in an array.
// Input: [3, 5, 7, 2, 8], n = 2 → Output: 7
// 27. Create a counter function using closures.
// Output: 0, 1, 2, 3... (each call to counter())
// 28. Find the sum of digits in a number.
// Input: 1234 → Output: 10
// 29. Convert a decimal number to binary.
// Input: 13 → Output: 1101
// 30. Convert a binary number to decimal.
// Input: 1010 → Output: 10
// Intermediate JavaScript Coding Problems (31–70)
// 31. Group array objects by a given key.
// Input: [{age:20}, {age:30}, {age:20}] → Output: {20: [...], 30: [...]}
// 32. Check if a number is a palindrome.
// Input: 121 → Output: true
// 33. Check if a number is a power of two.
// Input: 16 → Output: true
// 34. Flatten a nested object into a single-level object.
// Input: {a: {b: {c: 1}}} → Output: {"a.b.c": 1}
// 35. Deep clone a nested object.
// Input: {a:1, b:{c:2}} → Output: deep copy
// 36. Find the intersection of two arrays.
// Input: [1, 2, 3], [2, 3, 4] → Output: [2, 3]
// 37. Find the union of two arrays.
// Input: [1, 2], [2, 3] → Output: [1, 2, 3]
// 38. Calculate the average of numbers in an array.
// Input: [2, 4, 6] → Output: 4
// 39. Get all unique characters in a string.
// Input: aabbcc → Output: abc
// 40. Count character frequency in a string.
// Input: aabc → Output: {a:2, b:1, c:1}
// 41. Count number of words in a sentence.
// Input: JS is fun → Output: 3
// 42. Truncate a string to a given length and append ellipsis.
// Input: JavaScript, 4 → Output: Java...
// 43. Merge two sorted arrays.
// Input: [1,3], [2,4] → Output: [1,2,3,4]
// 44. Remove a specific element from an array.
// Input: [1, 2, 3, 4], remove 3 → Output: [1, 2, 4]
// 45. Validate if a string is a valid email.
// Input: abc@mail.com → Output: true
// 46. Deep compare two objects for equality.
// Input: {a:1}, {a:1} → Output: true
// 47. Check if a string has balanced parentheses.
// Input: (()()) → Output: true
// 48. Chunk an array into parts of length k.
// Input: [1,2,3,4,5], k = 2 → Output: [[1,2],[3,4],[5]]
// 49. Convert a CSV string to an array.
// Input: a,b,c → Output: [a, b, c]
// 50. Replace all spaces in a string with %20.
// Input: hello world → Output: hello%20world
// 51. Implement a throttle function.
// Input: high-frequency calls → Output: limited calls per interval
// 52. Implement a debounce function.
// Input: rapid calls → Output: one call after pause
// 53. Memoize a function result for optimization.
// Input: fib(30) → Output: 832040 (cached)
// 54. Create a custom implementation of Array.prototype.map.
// Input: [1, 2, 3] → Output: [2, 4, 6]
// 55. Create a custom implementation of Array.prototype.filter.
// Input: [1, 2, 3], condition > 1 → Output: [2, 3]
// 56. Create a custom implementation of Array.prototype.reduce.
// Input: [1, 2, 3], sum → Output: 6
// 57. Retry an async function on failure.
// Input: fetch(), 3 attempts → Output: resolved data or final error
// 58. Build a promise queue executor.
// Input: [fn1, fn2, fn3] → Output: resolved in order
// 59. Implement an event emitter class with on, emit, and off.
// Usage: emitter.on('event', handler)
// 60. Create a custom bind function.
// Input: fn.bind(obj) → Output: bound function
// 61. Simulate the new keyword in JavaScript.
// Input: myNew(Constructor) → Output: instance of Constructor
// 62. Implement a once function that can only run once.
// Input: fn() → Output: only first call works
// 63. Deep freeze an object to make it immutable.
// Input: {a: {b: 2}} → Output: frozen nested object
// 64. Generate all permutations of a string.
// Input: abc → Output: all possible orderings
// 65. Write a sleep function using Promises.
// Input: sleep(1000) → Output: pause for 1 second
// 66. Compose multiple functions into one.
// Input: f(g(h(x))) → Output: composed(x)
// 67. Currying: convert add(a, b, c) to add(a)(b)(c).
// Input: add(1)(2)(3) → Output: 6
// 68. Implement a Least Recently Used (LRU) cache.
// Input: cache.put(key, value) / get(key) → Output: eviction logic
// 69. Infinite scroll loader using JavaScript.
// Input: scroll to bottom → Output: load next page
// 70. Validate form input fields dynamically.
// Input: {name: "", email: ""} → Output: error messages
// Advanced JavaScript & DOM Problems (71–100)
// 71. Parse a JSON string manually using recursion.
// Input: '{"a":1}' → Output: {a:1}
// 72. Debounce a resize event handler.
// Input: resize → Output: handler fired after pause
// 73. Detect a loop in a linked list.
// Input: 1 → 2 → 3 → 2 → ... → Output: true
// 74. Generate all substrings of a given string.
// Input: abc → Output: ["a","ab","abc","b","bc","c"]
// 75. Generate all possible combinations from array.
// Input: [1, 2] → Output: [[1], [2], [1, 2]]
// 76. Get current scroll position of the browser window.
// Output: {x: scrollX, y: scrollY}
// 77. Copy text to clipboard using JavaScript.
// Input: Hello → Output: copied to clipboard
// 78. Detect if the user is currently online.
// Output: true or false
// 79. Extract query parameters from a URL string.
// Input: ?id=5 → Output: {id: "5"}
// 80. Convert a cookie string into an object.
// Input: a=1; b=2 → Output: {a: "1", b: "2"}
// 81. Dynamically load a JS script tag into the DOM.
// Input: script URL → Output: script loaded
// 82. Toggle dark mode via a button click.
// Output: adds or removes dark-theme class
// 83. Detect if the browser is on a mobile device.
// Output: true or false
// 84. Highlight all occurrences of a keyword in a paragraph.
// Input: "JavaScript is good", key: "good" → Output: highlighted span
// 85. Count the number of child elements in a given div.
// Output: child count
// 86. Build a tooltip that follows the mouse.
// Output: tooltip appears near cursor
// 87. Use IntersectionObserver to detect element visibility.
// Output: true when element enters view
// 88. Add sticky header when scroll position exceeds a threshold.
// Input: scrollY > 100 → Output: addClass("sticky")
// 89. Lazy load images using data-src attribute.
// Output: set src when image enters view
// 90. Alert the user when closing a tab with unsaved changes.
// Output: confirmation popup
// 91. Render a dynamic list from array items in the DOM.
// Input: [1, 2, 3] → Output: <li>1</li><li>2</li><li>3</li>
// 92. Limit the number of API calls per minute.
// Output: rate limited requests
// 93. Create a countdown timer from 10 to 0.
// Output: 10s, 9s, ... 0s
// 94. Build a tab-switching component.
// Input: click tab → Output: show tab content
// 95. Create a collapsible accordion section.
// Output: toggle content on click
// 96. Build an infinite image carousel.
// Output: auto-scrolls and loops
// 97. Show a tooltip near mouse position on hover.
// Output: floating hint box
// 98. Auto logout a user after 5 minutes of inactivity.
// Output: session expired
// 99. Apply selected theme from dropdown.
// Input: dark, light → Output: apply CSS theme
// 100. Implement drag and drop for DOM elements.
// Output: user can move div elements with mouse
// Basic & Logic-Based Coding Problems (101–130)
// 101. Write a function that returns the second largest number in an array.
// 102. Implement a function to convert Celsius to Fahrenheit.
// 103. Write a function to check if a year is a leap year.
// 104. Count how many times a character appears in a string.
// 105. Swap two numbers without using a third variable.
// 106. Find the largest prime factor of a given number.
// 107. Write a function to check if a given number is even or odd.
// 108. Write a function to calculate the power of a number without using Math.pow().
// 109. Write a function that counts the number of digits in an integer.
// 110. Find the minimum number in a nested array.
// 111. Implement a function that returns the nth triangular number.
// 112. Write a function that checks whether two arrays are equal.
// 113. Find the longest increasing subarray in an array.
// 114. Write a function that reverses a number.
// 115. Implement a function to convert a number to Roman numerals.
// 116. Write a function to find the maximum product of two numbers in an array.
// 117. Count the number of trailing zeros in a factorial of a number.
// 118. Write a function to convert a string to kebab-case.
// 119. Write a function that checks if a string contains only unique characters.
// 120. Count the number of uppercase and lowercase letters in a string.
// 121. Find the intersection of three arrays.
// 122. Write a function to count the number of set bits in a binary number.
// 123. Implement a function to round a number to 2 decimal places.
// 124. Write a function that generates a random hexadecimal color.
// 125. Convert a number to an Excel-style column name.
// 126. Write a function that takes an array and returns it reversed, without using reverse().
// 127. Remove all special characters from a string.
// 128. Convert snake_case to camelCase.
// 129. Find the longest common prefix in an array of strings.
// 130. Write a function that compresses a string using run-length encoding.
// Array & String Transformation Problems (131–160)
// 131. Shuffle the elements of an array randomly.
// 132. Partition an array into two arrays based on a condition.
// 133. Find all pairs in an array that sum to a specific value.
// 134. Rotate a matrix 90 degrees clockwise.
// 135. Check if a string is a valid palindrome after removing at most one character.
// 136. Write a function to find duplicate elements in an array.
// 137. Convert a nested array into a CSV string.
// 138. Parse a CSV string into an array of objects.
// 139. Split a string into chunks of specified length.
// 140. Sort an array of objects by a specific property.
// 141. Merge overlapping intervals from an array of interval pairs.
// 142. Write a function that finds the longest palindromic substring.
// 143. Convert a string of words to camelCase.
// 144. Extract numbers from a mixed string.
// 145. Remove every nth element from an array.
// 146. Write a function to check if two strings are one edit away.
// 147. Remove all adjacent duplicates in a string.
// 148. Count total occurrences of a word in a paragraph.
// 149. Convert a number to words (e.g. 123 → One Hundred Twenty Three).
// 150. Remove all elements in one array from another.
// 151. Return all possible subsets of a given array.
// 152. Write a function that finds the shortest path in a maze.
// 153. Implement a sliding window to find max sum of k consecutive elements.
// 154. Find the subarray with the maximum sum (Kadane’s Algorithm).
// 155. Count the frequency of elements in an array.
// 156. Check if a string is a valid shuffle of two other strings.
// 157. Calculate the edit distance between two strings.
// 158. Write a function that finds the longest repeated substring.
// 159. Group anagrams from an array of words.
// 160. Implement a wildcard pattern matcher (with * and ? support).
// Object, Function & Closure-Based Problems (161–180)
// 161. Clone an object deeply without using JSON methods.
// 162. Implement a function that returns the value of a nested property using dot notation.
// 163. Freeze an object recursively using Object.freeze().
// 164. Merge multiple objects with deep merging support.
// 165. Count the number of keys in a deeply nested object.
// 166. Implement a chaining calculator using closures.
// 167. Create a function to group objects by a nested key.
// 168. Write a function to rename a key in an object.
// 169. Implement a memoized version of any pure function.
// 170. Write a function that logs the call count of any function.
// 171. Create a function wrapper that times the execution duration.
// 172. Write a function to flatten and sort object values into an array.
// 173. Convert an object to a query string.
// 174. Convert a query string back to an object.
// 175. Implement a rate limiter for a function.
// 176. Write a retry wrapper that retries a function N times on failure.
// 177. Create a curry function to sum values like sum(1)(2)(3)().
// 178. Write a function to serialize and deserialize a JavaScript object.
// 179. Implement a pipe function that composes multiple functions.
// 180. Implement a simple pub-sub pattern.
// DOM, Async & Browser-Based Problems (181–200)
// 181. Create a live clock in the browser that updates every second.
// 182. Build a stopwatch with start, stop, and reset controls.
// 183. Implement a dropdown menu that closes on outside click.
// 184. Create a modal component with open and close functionality.
// 185. Build a password strength checker using regex.
// 186. Highlight all matching words in a paragraph.
// 187. Show a scroll-to-top button only after scrolling past 300px.
// 188. Create a typewriter effect for displaying text.
// 189. Implement a countdown timer that counts down to a specific date.
// 190. Detect browser tab visibility and pause/resume functions accordingly.
// 191. Load and display data from an API with fetch().
// 192. Create a progress bar that tracks scroll position.
// 193. Persist a form’s data in localStorage and restore on reload.
// 194. Implement form validation with real-time feedback.
// 195. Build a collapsible sidebar component.
// 196. Show toast notifications using a reusable function.
// 197. Create a tabbed content section.
// 198. Render a tree structure from nested object data.
// 199. Lazy load images using IntersectionObserver.
// 200. Track and display mouse coordinates on screen.
