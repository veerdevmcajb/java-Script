//! 

// This is the basic example of using the various methods of arrays.

var mern = ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "NODE JS", "MATERIAL UI"];
console.log(mern);

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*


// mern[0] = 420;
// console.log(mern);

//? Alternative to push
// mern[6] = "Push me";
// mern[mern.length] = "Push me";

//? Alternative to pop
// mern[6] = undefined;
// mern[mern.length] = undefined;

// console.log(mern);

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//!  Converting the arrays to strings.


let numbs = ['11', 12, '13', '14', '15', '16'];

// console.log(typeof (numbs[1]));
// console.log(numbs);
// console.log('\n');

//? Below Statement will only print the array as a string but will not convert it to string.
console.log(numbs.toString());//11,12,13,14,15,16

console.log(numbs);//?[ '11', 12, '13', '14', '15', '16' ] no changes in orignal array
console.log(typeof (numbs[1]));//number
console.log('\n');


// Below Statement will convert array as a string but in one go. Means first the toString() will convert whole array then directly store the final result in the numbs variable.
numbs = numbs.toString();
console.log(numbs);//11,12,13,14,15,16
console.log('\n');

// Below statment will print the STRING element indexed at 0.
console.log(numbs[0]);//1
// This stmt will print the string from index 4 till the length
console.log(numbs.substr(4, numbs.length - 1));//2,13,14,15,16


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*

//! ****************  Array.join(); method

//? Coverting the array in string and joining all elements into a string using the join() method, but in addition you can specify the separator: like * , / , - , '' , etc.

var mern = ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "NODE JS", "MATERIAL UI"];

let joinedArr = mern.join("/");
console.log(joinedArr);//HTML*CSS*JAVASCRIPT*REACT JS*NODE JS*MATERIAL UI //? output is a string
console.log(mern);//[ 'HTML', 'CSS', 'JAVASCRIPT', 'REACT JS', 'NODE JS', 'MATERIAL UI' ]//?no change in orignal array

// Join method is much desirable than the toString mehtod because here we can join the array elements without any seperator also.
mern = mern.join('');
console.log(mern);//HTMLCSSJAVASCRIPTREACT JSNODE JSMATERIAL UI //?output is a String
console.log('\n');


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*

//  Pop and Push method not only pops/ pushes the element but also returns the poped out element 'value' or pushed in element 'number' as the return value.
// These methods not only performs the action but also modifies the array itself. So this can also be called as the array operation method.
//  This can even perform action on the Const Arrays.

//! JS pop method() removes the last element from an array.
console.log(mern.pop());
console.log(mern);

//! JS push method() to push the element in an array at last position.
console.log(mern.push("EXPRESS JS"));
console.log(mern);

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*

//! The shift() method removes the first array element and "shifts" all other elements to a lower index.
//!The shift() method returns the value that was "shifted out":

console.log(" The shifted/removed element is : -" + mern.shift());
console.log(mern);

// let arr = [1,2,3,4,5];
// delete arr[2];
// console.log(arr)

//? The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
//? The unshift() method returns the new array length.

console.log(
  " The length of arry after unshifting the element : -" +
    mern.unshift("REACT NATIVE")
);
console.log(mern);

// Deleting the array elements. Deleting removes the specified items //? but leaves the undefined values as holes in the array.
// Note- Delete is the java operator and not the array method

delete mern[0];
console.log(mern);

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*
// ! Array.concat();


//? The concat() method creates a new array by merging (concatenating) existing arrays.
// Note that here the array is not joined as string but rather it is concatinated as an array and the method returns the new concatinated array as the return value and does not change the orignal arrays unless they are reassigned.
// IT can take any number of arrays for concatination irrespective of length and type.

var mern = ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "NODE JS", "MATERIAL UI"];

const dataScience = [
  "Python",
  "PowerBI",
  "NLP",
  "Voice Processing",
  "Image Processing",
];
const conArray = mern.concat(dataScience);
console.log(conArray);
console.log("No changes is actual array: ", mern);

let mean = ["AngularJS", "MongoDB"];

var popularLangs = mern.concat(mean, dataScience);
console.log(popularLangs);

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-  SPLICE  *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*

/*
?VIMP point - splice method directly works on the orignal array.
 x
*The splice() method can be used to add new items to an array:
*The first parameter (3) defines the position where new elements should be added (spliced in).
*The second parameter (0) defines how many elements should be removed.
*The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*This method performs the direct action on the array itself so this can also be called as the array mutating method.

?Syntax- 
todo----- arr.splice(startIndex, NumberOfElementsToRemove, newElement1, newElement2, newElementN)
*/
const arrSplice = ["Apple", "OnePlus", "Samsung", "MI", "Vivo", "Realme"];
console.log(arrSplice);
console.log("\n");

arrSplice.splice(3, 1,);
// arrSplice.splice(3, 1, "Spark", "Motorola");
arrSplice.splice(3, 0, "Spark", "Motorola");
console.log(arrSplice);//? it mutet origanal array


/*
[
  'Apple',    'OnePlus',
  'Samsung', //? 'Spark',
  ?'Motorola', 'MI',
  'Vivo',     'Realme'
]
*/

// arrSplice[3] = "spark"
// arrSplice[4] = "motorola"

// This will pop out the first 3 elements without replacing with any new array elemnts.
console.log("pop out the first 3 elements without replacing");
arrSplice.splice(0, 3);
console.log(arrSplice);

// This will pop out the 3 elements from index[1] of an Array without replacing with any new array elemnts.
console.log(
  "pop out the 3 elements from index[1] of an Array without replacing"
);

console.log(arrSplice.splice(1, 3));
console.log(arrSplice);
console.log("\n");

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-   SLICE   *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*

//? VIMP point - slice method does not directly work on the orignal array but returns a new array.

// The slice() method slices out a piece of an array into a new array.
// This example slices out a part of an array starting from array element number 1 means index.
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument

// Syntax
//todo------------- arr.slice(starIndex, endIndex);


const arrSlice = ["Apple", "OnePlus", "Samsung", "MI", "Vivo", "Realme"];
console.log(arrSlice);

console.log("\n Slice method = First element of the above array is deleted ");
console.log(arrSlice.slice(1, 3));//? it can not muttet origanal array gives new array

console.log(
  "\n It is deleted but not from actual array. Therefore use the splice method to delete elements "
);
console.log(arrSlice);

console.log(
  "\n Slice method = index[1] element of the above array is deleted "
);
console.log(arrSlice.slice(1));
console.log(arrSlice);

console.log(
  "\n Slice method = index[1] to index[3] elements of the above array are deleted "
);
console.log(arrSlice.slice(1, 3));//? not include last index
console.log(arrSlice);


// We can use it to get things using - indices.

console.log(arrSlice.slice(-1)); //* This will Return the last element in the array
console.log(arrSlice.slice(-3, -2)); //* MI 
console.log(arrSlice.slice(-2));  //* Vivo , Realme
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*   END OF BASIC ARRAY METHODS   *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*














//  7, 11, 13

// let num = 6;
let num = 7;
let PrimeStatus = true
for (let i = 2; i < num ; i++){
  console.log(`${num} % ${i} =`,num % i)
  if(num % i === 0){
    PrimeStatus = false;
    break
  }
}

if(PrimeStatus){
  console.log(`${num} is a prime number`)
}else {
  console.log(`${num} is not a prime number`)
}












