
let str="Shivanand";
console.log(str.length);

console.log(str.charAt(4));
console.log(str.slice(0,5)); // slice fo substring

console.log(str.split(" "));
console.log(str.substring(0,4));
 
console.log(str.lastIndexOf("a"));

let str2=" Chandankar";

console.log(str+" " + str2);

console.log(str.concat( str2));


console.log(str.charCodeAt(4)); // Returns the Unicode value of the character at the specified index.

console.log(str.includes('Shiv')); // check includes

console.log("last index of a ", str.lastIndexOf('a'));

console.log(str.localeCompare("ShivanandChandankar"));

console.log(str.toUpperCase())

console.log('Shiv'+'Chandankar'); // concat using + operator



for(let char of str){
    console.log(char)
}

var rev="";
for(let i=str.length-1;i>=0; i--){
    rev= rev+str[i]
}
console.log(rev);
