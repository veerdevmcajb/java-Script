// This will contain various examples to practice the array itterations.

/*
!---------------Filter through function -------------------
todo-- How to pass extra arguments to the filter function of arrays.

importance: 5

We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

Make a set of “ready to use” filters:

inBetween(a, b) – between a and b or equal to them (inclusively).
inArray([...]) – in the given array.
The usage must be like this:

arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
For instance:

 .. your code for inBetween and inArray 

let arr = [1,. 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) );       // 3,4,5,6
alert( arr.filter(inArray([1, 2, 10])) );   // 1,2

*/

//? For this a wrapper function is used in which the return function will return the boolean on the basis of the condition. In short the function written in Return acts as the orignal filter's callback function. It will have the (value, index, array) parameters. and not the outer function.

//? Actually the call made by the wrapper function replaces the the call at filter(here) by the returned anonymous funciton. and the value,index,array arguments are passed to this returned anonymous function. And this will return the true or false values on the conditional basis written in it.


//todo ----- Inbetween Values
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function inBetween(a, b) {              //Line 1
    return function (value) {               //Line 2
        return (value >= a && value <= b);      //Line 3
    };
}

console.log(arr.filter(inBetween(3, 6))); // line 1   
//Output = 3,4,5,6

let arr2 = [1,2,3,4,5,6];

function power(pow){
    return function powerof(value, index, array){
        return value ** pow;
    }
}
console.log(arr2.map(power(3)));

/*
? Explaination of above code:

line 0 =  Here generally the filter calls a call back function which is written as a value without paranthesis eg. filterFunc . If we are writing a function with arguments and parenthesis then it is not used as a call back function rather the function returned by it will be used as call back function.

line 1 = Here the inBetween(a,b) is defined with parameters a and b to receive the arguments passed in line 0.

line 2 =  This is the actual function which is returned at the point where the inBetween is called. This return function gets the value , index , array args. Here x is used for the values. 

line 3 = At this point it has the access to the variables of the outer function i.e. a and b also to the values of array as x. This iterates and traverses over all the array elements then it verifies the condition and returns true or false values to the filter function and accordingly the new aray with filtered values is formed.

line 0 = Here the accumulated result of the filter function is received and the result is displayed.

*/



//!----------- Test of Includes using filter -------------

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// Explaination is same as above code is explained.




/*
!----------Sort an Object by its property values ----------

importance: 5
We’ve got an array of objects to sort:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

The usual way to do would be = 
1] by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

2] by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);

Can we make it even less verbose, like this?
users.sort(byField('name'));
users.sort(byField('age'));

So, instead of writing a function, just put byField(fieldName).

Write the function byField that can be used for that.

*/


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

let res=users.sort((a,b)=>a.age-b.age)
console.log(res);

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('name'));
console.log(users);

users.sort(byField('age'));
console.log(users);




