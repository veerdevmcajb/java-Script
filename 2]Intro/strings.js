
/*
!                                   String Methods:

Syntax:
let str = "Abhishek";
str.methodName(argument);

1. str.charAt(index):
   - Returns the character at the specified index.

2. str.charCodeAt(index):
   - Returns the Unicode value of the character at the specified index.

3. concat(str1, str2, ..., strX):
   - Combines two or more strings and returns a new string.

4. endsWith(searchString, length):
   - Checks if a string ends with the specified characters. Optionally, you can provide a length parameter to indicate the portion of the string to consider.

5. fromCharCode(num1, num2, ..., numX):
   - Returns a string created by using the specified sequence of Unicode values.

6. includes(searchString, position):
   - Checks if a string contains the specified characters. Optionally, you can provide a position parameter to indicate where to start the search.

7. indexOf(searchValue, fromIndex):
   - Returns the index of the first occurrence of a specified value in a string. Optionally, you can provide a fromIndex parameter to start the search from a specific index.

8. lastIndexOf(searchValue, fromIndex):
   - Returns the index of the last occurrence of a specified value in a string. Optionally, you can provide a fromIndex parameter to start the search from a specific index.

9. localeCompare(compareString):
   - Compares two strings in the current locale and returns -1, 0, or 1, depending on whether the string comes before, is equal to, or comes after the specified string.

10. match(regexp):
   ? - Searches a string for a match against a regular expression and returns an array of matches.

11. repeat(count):
    - Returns a new string containing the specified number of copies of the original string.

12. replace(searchValue, replaceValue):
    ?- Searches a string for a specified value or regular expression and returns a new string where the first occurrence is replaced with the specified value.

13. search(regexp):
    - Searches a string for a specified value or regular expression and returns the index of the first match.

14. slice(startIndex, endIndex):
    - Extracts a section of a string and returns a new string without modifying the original string. The section is defined by a start index and an end index.

15. split(separator, limit):
   ? - Splits a string into an array of substrings based on a specified separator. Optionally, you can provide a limit to control the number of splits.

16. startsWith(searchString, position):
    - Checks if a string starts with the specified characters. Optionally, you can provide a position parameter to indicate where to start the search.

17. substr(startIndex, length):
    - Extracts a specified number of characters from a string, starting at a specified index.

18. substring(startIndex, endIndex):
    - Extracts characters from a string between two specified indices.

19. toLocaleLowerCase() / toLocaleUpperCase():
    - Returns a new string with the characters converted to lowercase/uppercase according to the host's locale.

20. toLowerCase() / toUpperCase():
    - Returns a new string with the characters converted to lowercase/uppercase.

21. trim():
    - Removes whitespace from both ends of a string.

22. valueOf():
    - Returns the primitive value of a string object.


! Search Methods:

1. indexOf(searchValue, fromIndex):
   - Returns the index of the first occurrence of a specified value in a string. Optionally, you can provide a fromIndex parameter to start the search from a specific index.

2. lastIndexOf(searchValue, fromIndex):
   - Returns the index of the last occurrence of a specified value in a string. Optionally, you can provide a fromIndex parameter to start the search from a specific index.

3. search(regexp):
   - Searches a string for a specified value or regular expression and returns the index of the first match.

4. match(regexp):
   - Searches a string for a match against a regular expression and returns an array of matches.

5. includes(searchString, position):
   - Checks if a string contains the specified characters. Optionally, you can provide a position parameter to indicate where to start the search.

6. startsWith(searchString, position):
   - Checks if a string starts with the specified characters. Optionally, you can provide a position parameter to indicate where to start the search.

7. endsWith(searchString, length):
   - Checks if a string ends with the specified characters. Optionally, you can provide a length parameter to indicate the portion of the string to consider.

*/


// String length()
let op1 = "ababababababababbababababab";
console.log(op1.length);

// String slice(start, end)
let op2 = "Hello this is Abhishek Dhone";
console.log(op2.slice(14, 27));//Abhishek

let str = "stringify";
console.log( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
console.log( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0
console.log( str.slice(-3, -1) ); //if

// String substr(start, length)

let op3 = "Hello this is Abhishek Dhone";
console.log(op3.substring(14, 10));//is   
 

// slice take negative index 
// substring doesnot take negative index

// String replace("Str or part of Str", "Replacement Str")
let op4 = "Please visit Microsoft at Microsoft.com";
console.log(op4.replace("Microsoft", "W3Schools"));

// String Replace("Str or part of Str", "Replacement Str") /g Used for replacing all instances of string
let op5 = "Please visit Microsoft at Microsoft.com";
console.log(op5.replace(/Microsoft/g, "W3Schools"));

// String toUpperCase()
let op6 = "Hello Friends!";
console.log(op6.toUpperCase());

// String toLowerCase()
let op7 = "HELLO FRIENDS!";
console.log(op7.toLowerCase());

// String concat(String, String)
let op8 = "Great ";
let op81 = "Leaders";
console.log(op8.concat(op81));
console.log(op8+op81);
console.log(op8);


// String trim()
let op9 = "       Trim the space around me        ";
console.log(op9.trim());//Trim the space around me
   
console.log(op9);//       Trim the space around me    

// String padEnd(Final Length , Numbers / Letters)
let op10 = " 3 people have names ";
let padStr = " xyz";
console.log(op10.padEnd(33, padStr));// 3 people have names  xyz xyz xyz
console.log(op10);// 3 people have names 

// String padding to a Number
let numb = 1;
let digits = numb.toString();
let crores = digits.padEnd(9, 0);
let op11 = crores.concat(" ", " = There are 8 zeros in 10 Crores");
console.log(op11);

// String charAt(position)
let op12 = "I Love Coding";
console.log(op12.charAt(4));//v

// String charCodeAt(position)
let op13 = "I Love Coding";
console.log(op13.charCodeAt(4));//118

/* Property access might be a little unpredictable: 
1- It makes strings look like arrays (but they are not)
2- If no character is found, [ ] returns undefined, while charAt() returns an empty string.
3- It is read only. str[0] = "A" gives no error (but does not work!)*/

let op14 = "I Love Coding";
console.log(op14[0]);//I

// String split(Split at letter) // Used to store string as array
let text = "a/b/c/d/e/f";
const myArray = text.split("/");
// [a, b, c, d, e, f]
console.log(myArray[2]);

/* 
If the separator is omitted, the returned array will contain the whole string in index [0].
If the separator is "", //?the returned array will be an array of single characters:
*/
let text1 = "Hello! My Name is Abhishek Dhone and I am from Nashik";
const myArray2 = text1.split(" ");
console.log(myArray2);
/*
[
  'Hello!',  'My',
  'Name',    'is',
  'Abhishek', 'Dhone',
  'and',     'I',
  'am',      'from',
  'Nashik'
]
*/
console.log(myArray2[4]);//Abhishek


//! String Operations 

// Input String
let str1 = "Different Frameworks of JS are React JS, Node JS, Express JS, Vue JS, etc";

// Example 1: indexOf(stringToFind, startFindingFrom)
console.log("Example 1: indexOf()");
console.log(str1.indexOf("JS")); // Returns the index of the first occurrence
console.log(str1.indexOf("JS", 35)); // Returns the index of the first occurrence

// Example 2: lastIndexOf()
console.log("\nExample 2: lastIndexOf()");
console.log(str1.lastIndexOf("JS")); // Returns the index of the last occurrence 66

if(str1.indexOf("JS") == str1.lastIndexOf("JS")){
   console.log("No repetition")
}else{
   console.log("Repeated occurences")
}

// Example 3: search()
console.log("\nExample 3: search()");
console.log(str1.search("JS")); // Returns the index of the first occurrence
// If the string is not found it will return -1;

// Example 4: match()
console.log("\nExample 4: match()");
let strArray = str1.match(/JS/g); // Returns an array of matches
console.log(strArray);
console.log(strArray.length == 1 ? "Single" : "Multiple");

// Example 5: includes()
console.log("\nExample 5: includes()");
console.log(str1.includes("JS", 38)); // Returns a boolean value

// Example 6: startsWith()
console.log("\nExample 6: startsWith()");
let str2 = "Super Man or Women";
console.log(str2.startsWith("Super")); // Returns a boolean value

// Example 7: endsWith()
console.log("\nExample 7: endsWith()");
console.log(str2.endsWith("Women")); // Returns a boolean value

// Additional Example with a different input string
console.log("\nAdditional Example:");
let str3 = "Names Starting with 'Sh' Abhishek Shubhangi Shivam Shamal Shibam Shiv Shivendra Shammi Shailesh Shambhu Shankar Shivay Shyam Shekhar";
console.log(str3);


//? Special characters
/*
Character & its Description

\n	New line

\r	In Windows text files a combination of two characters \r\n represents a new break,non-Windows \n.

\', \", \`	Quotes

\\	Backslash

\t	Tab

\b, \f, \v	Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).

*/





// reverse the string
str="hello";
let rev="";
for(let i=str.length-1;i>=0;i--){
   rev=rev+str[i];
}
console.log(rev);