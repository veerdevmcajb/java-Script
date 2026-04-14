// String Manipulation – Using for Loop

// 1. Reverse a string without using built-in reverse methods.
var str = "Shiv";
var reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  // console.log(str[i])
  reverse = reverse + str[i];
  console.log(reverse);
}

// 2. Count the number of vowels in a string. a,e,i,o,u,A,E,I,O,U
var str = "Abhishekoooo";
var count = 0;
var abc = "";
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
console.log(count);

// 3. Count how many times a specific character appears in a string.
var str = "abcdaaa";
var obj = {};
// console.log(obj["A"])
for (let i = 0; i < str.length; i++) {
  if (!obj[str[i]]) {
    //obj["A"], obj["b"] === undefined
    obj[str[i]] = 1;
  } else {
    obj[str[i]] = obj[str[i]] + 1;
  }
  console.log(obj);
}

// 4. Remove all spaces from a string.
var str = "R em o v e ";
var result = "";
for (let i = 0; i < str.length; i++) {
  // console.log(str[i] === ' ')
  if (!(str[i] === " ")) {
    result = result + str[i];
  }
  // console.log(result)
}
console.log(result);

// 5. Convert all lowercase letters to uppercase (without using .toUpperCase() directly on the whole string).

// 6. Find the index of the first occurrence of a given character in a string.
var str = "Aiiiibhishek";
var char = "s";
var occurrence = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === char) {
    occurrence = i;
    break;
  }
}
console.log(occurrence);

// 7. Replace all vowels with *.
var str = "Abhishekoooo";
var abc = "";
for (let i = 0; i < str.length; i++) {
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u" ||
    str[i] === "A"
  ) {
    abc = abc + "*";
  } else {
    abc = abc + str[i];
  }
  console.log(abc);
}
console.log(abc);

// 8. Check if a string is a palindrome.
// var str = "madam";
var str = "Abhishek";
var reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse = reverse + str[i];
}
console.log(`${str} is a palindrome =`, str === reverse);
 
// 9. Count the number of words in a string (words separated by spaces).
var str = "Count the number of words in a string";
// var str = "";
var word = "";
var array = [];
for (let i = 0; i <= str.length; i++) {
  if (str[i] === " ") {
    array.push(word);
    word = "";
    // console.log(array)
  } else if (i === str.length - 1) {
    // console.log(word)
    word = word + str[i];
    // console.log(word)
    array.push(word);
  } else {
    word = word + str[i];
  }
}
console.log(array);
console.log(`Number of words in string= ${array.length}`);

// 10. Extract all digits from a string and form a new string containing only digits.
var str = "a123bhi7343";
var newDigitString = "";
for (let i = 0; i < str.length; i++) {
  let num = Number(str[i]);
  console.log(num);
  console.log("NaN comparison =", Number.isNaN(num));
  if (!Number.isNaN(num)) {
    newDigitString = newDigitString + num;
  }
}
console.log(newDigitString);
console.log(typeof newDigitString);

// 11. Reverse each word in a sentence while keeping the order of words the same.

let str1 = "Abhishek Vijay Dhone"

function reverseWord(str) {
  var reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i])
    reverse = reverse + str[i];
    // console.log(reverse);
  }
  return reverse
}

var word = "";
var resultString = '';

for (let i = 0; i <= str1.length; i++) {
  if (str1[i] === " ") {
    let newWord = reverseWord(word)
    resultString = resultString + newWord  + " "
    word = "";
    // console.log(array)
  } else if (i === str1.length - 1) {
    // console.log(word)
    word = word + str1[i];
    let newWord = reverseWord(word)
    resultString = resultString  + newWord
    // console.log(word)
  } else {
    word = word + str1[i];
  }
}
console.log(resultString);

// 12. Remove duplicate characters from a string.
// var str = "aabbccdd"
// var removedDub = ''

// for(let i = 0; i < str.length; i++){
//     if(!removedDub.includes(str[i])){
//         removedDub = removedDub + str[i]
//     }
// }

// console.log(removedDub)


// 13. Find the longest word in a string.
var str = "i am a longest word Abhishek"
var arr =[];
var word = ''
for(let i = 0; i < str.length; i++){
    if(str[i] === ' ' ){
        arr.push(word);
        word = ''
    }else if (i === str.length - 1) {
        word = word + str[i]
        arr.push(word)
    } else {
        word = word + str[i]
    }
}
console.log(arr) // [ 'i', 'am', 'a', 'longest', 'word', "Abhishek" ]
var longWord = arr[0] 
for (let j = 0; j < arr.length; j++){
    if(longWord.length < arr[j].length) {
        longWord = arr[j]
    }
}
console.log(longWord)

// 14. Count uppercase and lowercase letters separately.
let name="ShIvAnAnD";
let uppcase=[];
let lowercase=[];
for(let i=0;i<name.length;i++){
  if(name[i]>='A' && name[i]<='Z'){
    uppcase.push(name[i]);
  }else{
    lowercase.push(name[i]);
  }
}
console.log("uppcase : ",uppcase);
console.log("lowercase : ",lowercase);


let uppcArr = [...name].filter((a)=> a>='A' && a<='Z');
console.log("using filert ", uppcArr);
let loweArr=[...name].filter((a)=> a>='a' && a<='z');
console.log("lowerArr using filter ",loweArr);



// 15. Replace every occurrence of a given word with another word.
let text = "Hello world, world is beautiful.";
console.log(text.replaceAll("world","Earth"));

// Array Manipulation – Using for Loop

// 1. Find the maximum number in an array.
  let arr=[10,20,40,30,50,90];
  let max=arr.reduce((a,b)=>{
   if(a>b)
     return a;
    else{
      return b;
    }
  });
console.log(max);


// 2. Find the minimum number in an array.
   let arr=[10,20,40,30,50,90];
   let min=arr.reduce((a,b)=>{
    if(a<b){
      return a;
    }else{
      return b;
    }
   })

   console.log(min);
   
// 3. Calculate the sum of all elements in an array.
 let arr=[10,20,40,30,50,90];
 let sum= arr.reduce((a,b)=>a+b)
console.log(sum);


// 4. Calculate the average of an array of numbers.
 let arr=[10,20,40,30,50,90];
   let avgres= arr.reduce((a,b)=>a+b)/arr.length
   console.log(avgres);
   
// 5. Reverse an array without using .reverse().
 let arr=[10,20,40,30,50,90];
let revarr=[];
for(let i=arr.length-1;i>=0; i--){
    revarr.push(arr[i])
}
console.log(revarr);


// 6. Remove duplicates from an array.
 let arr=[10,20,40,30,50,90,10,20];
 let withoutdup=[];
 let dup=[];
 for(let i=0;i<arr.length;i++){
  if(!withoutdup.includes(arr[i])){
    withoutdup.push(arr[i])
  }else{
    dup.push(arr[i]);
  }
 }
 console.log("Without dup ",withoutdup);
 console.log("dup values ", dup);
 


// 7. Find the index of a specific element in an array.
let frits=["apple","banana","mango","orange","kivi"];


// 8. Count how many times a specific number appears in an array.
 let arr=[10,20,40,30,50,90,10,20];
let obj={};
for(let i=0;i<arr.length;i++){
  if(!obj[arr[i]]){
   obj[arr[i]]=1;
  }else{
    obj[arr[i]]= obj[arr[i]]+1;
  }
}
console.log(obj);


// 9. Merge two arrays into a single array (without concat).
let arr1=[1,2,3,4];
let arr2=[5,6,7];
console.log([...arr1, ...arr2]);


// 10. Create a new array containing only even numbers.
 let arr=[1,2,4,3,5,9];

let res=arr.filter((a)=>a%2==0);
console.log(res);

 let even = numArr.filter((a)=>a%2==0);
    console.log(even);


// 11. Create a new array containing only odd numbers.

 let arr=[1,2,4,3,5,9];
let odd=arr.filter((e)=>e%2!=0);
console.log(odd);


// 12. Multiply each element in the array by 2.
 let arr=[10,20,40,30,50,90];
let mult=arr.map((a)=>a*2);
console.log(mult);

// 13. Shift all elements one position to the left.


// 14. Find the second largest element in an array.
 let arr=[10,20,40,30,50,90];
let secLarge = arr.sort().reverse();
console.log(secLarge[1]);

//Replace negative numbers with 0
let arr = [5, -3, 7, -1, 9];
for(let i=0;i<arr.length;i++){
  if(arr[i]<0){
    arr[i]=0;
  }
}
console.log(arr);
