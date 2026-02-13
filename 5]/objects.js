// Definition :- A javaScript object is an entity/data type having state and behavior
// (properties and method).

// Perfect definition = A JS Obj is a data type with properties and methods, where properties and methods will have name and value.
/*

name - Always a string, if you give number it will be converted to string.
Value - It can have any type of value. Any of the 8 data types in JS.


? Syntax:-
Any of the scope
let const var
*/
// Todo - Empty Object.
// let objectName = {};

// Todo - Object with primitive values
var abhi = Symbol("Name")

let objectName = {
  property1: "Value1",
  property2: "value2",
  one: 1,
  truthyVal: true,
  [abhi] : "This is a symbol"
};

console.log(objectName)

let val = "property1";

//? We can not edit value when we freez the key

// Object.freeze(objectName);
// objectName.one = 3
// console.log(objectName.one);

//? call all object keys and values
// console.log(Object.keys(objectName));
// console.log(Object.values(objectName));
// console.log(Object.entries(objectName));


//? Object destructure ==> we used to repeated lenthy keys call again and again
//?Syntex
//? {Key name : New name} = Object name


const {property1} = objectName;
console.log(property1);
const {property1 : Hello} = objectName;
console.log(Hello);

console.log(objectName);
console.log(objectName[abhi]);
console.log(objectName.property1); // Value1
console.log(objectName["property1"]); // Value1
console.log(objectName[val]); // Value1
console.log(objectName.val); // Undefined - Because there is no property in the obj named "val"

// Todo - Object with non-primitive values

let objNonPrim = {
  object2: {
    name: "Abhishek",
    lname: "Dhone",
    address: {
      hometown: "NAshik",
    },
  },
  array1: [1, 2, 3, 4, 5],
  function1: function () {
    console.log("This is the object method");
  },
};
console.log(objNonPrim);
objNonPrim.function1();


//? Object.assign

var a = {
  1 : "A",
  2 : "B"
}
var b = {
  11 : "A",
  12 : "B"
}
var c = {
  21 : "A",
  22 : "B"
}
//it will not work
var z ={ a, b , c}
console.log(z)//Nested object

var d = Object.assign({},a,b,c)
console.log(d)
//? another method
var e = { ...a, ...b, ...c};
console.log(e)


console.log(Object.keys(d));//? returns array [ '1', '2', '11', '12', '21', '22' ]
console.log(Object.values(d));//? returns array  [ 'A', 'B', 'A', 'B', 'A', 'B' ]
console.log(Object.entries(d));
/*
[
  [ '1', 'A' ],
  [ '2', 'B' ],
  [ '11', 'A' ],
  [ '12', 'B' ],
  [ '21', 'A' ],
  [ '22', 'B' ]
]
 
*/
console.log(d.hasOwnProperty("Abhi"));//false

// First object example.

let person = {
  fname: "Abhishek",
  lname: "Dhone",
  contact: 8888888888,
  cars: ["Mustang", "Lamborghini", "Rolls Royce"],
  cities: {
    birth: "Shahada",
    livesIn: "Nashik",
    worksIn: "Pune",
    dream: "California",
  }, // Remember that no semicolons here.
  func: function () {
    return (this.fullName = this.fname + " " + this.lname);
  }, // Remember that no semicolons here. ALso remember the () after FuncName.
};

// This is how we print an object.
// Multiple methods of printing an Object.

console.log("\n This is the content of the object :--");
console.log(person.fullName); // Expected Outputs:- Undefined because func() method never called

person.func();

// Simplest method using the Dot operator.
console.log(" \n Diplaying Object Content using Dot (.) operator :- ");

console.log(person.fname);
console.log(person.lname);
console.log(person.contact);
console.log(person.cars);

console.log(person.fullName); // Expected Outputs:- Undefined if func() method never called , if called then Output: Abhishek Dhone
// person.func(); // To create the Property using the function
// console.log(person.fullName);

//!                     Another method using the Brackets.
// We use brackets when we derive the name of the property through an expression or if we are accessing it using the variable that is holding the name of the object property. Thus we can write any expression in the brackets that gives us the name of the property.
console.log(
  " \n Diplaying Object Content using Brackets [Any Expression / Variable] :- "
);

let cont = "contact";
console.log(person["fname"]);
console.log(person["l" + "name"]);
console.log(person[cont]);
console.log(person["cars"]);
console.log(person["fullName"]); // Expected Outputs:- Undefined but In Reality Output: Abhishek Dhone
// person.func(); // To create the Property using the function
// console.log(person['fullName']);

//!         Using the for in method. This will not print the nested object.

console.log(" \n Diplaying Object Content using for in :- ");

for (let x in person) {
  let p = x;
  let v = person[x];
  console.log(` Property : ${p} has Value : ${v}`);
}

//!                  Nested 'For in Loop' for nested objects
// In this we use Array.isArray(arrName) to differentiate between the array and the object.
// First object example.

// let person = {
//     fname: 'Abhishek',
//     lname: 'Dhone',
//     contact: 8888888888,
//     cars: ['Mustang', 'Lamborghini', 'Rolls Royce'],
//     cities: {
//         birth: 'Shahada',
//         livesIn: 'Nashik',
//         worksIn: 'Pune',
//         dream: 'California'
//     }, // Remember that no semicolons here.
//     func: function () {
//         return this.fullName = this.fname + ' ' + this.lname;
//     }  // Remember that no semicolons here. ALso remember the () after FuncName.
// };

console.log(" \n Diplaying Object Content using Nested for in :- ");

for (let key in person) {
  if (typeof person[key] == "object" && Array.isArray(person[key]) == false) {
    console.log(" \n These are the Nested Object Properties :- ");
    let nesObj = person[key];

    for (let nKey in nesObj) {
      let nValue = nesObj[nKey];
      console.log(` Key : ${nKey} has Value : ${nValue}`);
    }
  } else {
    let value = person[key];
    console.log(` Property : ${key} has Value : ${value}`);
  }
}

//  True deep copy of an object with nesting level 1
// let person = {
//   fname: "Abhishek",
//   lname: "Dhone",
//   contact: 8888888888,
//   cars: ["Mustang", "Lamborghini", "Rolls Royce"],
//   cities: {
//     birth: "Shahada",
//     livesIn: "Nashik",
//     worksIn: "Pune",
//     dream: "California",
    // traveled: {
    //     south: "Banglore",
    //     north: "Delhi",
    //     maharashta: "nashik, pune, nandurbar, shahada, dhule"
    // }
//   }, // Remember that no semicolons here.
//   func: function () {
//     return (this.fullName = this.fname + " " + this.lname);
//   }, // Remember that no semicolons here. ALso remember the () after FuncName.
// };


//? copy an object with nested arr and nested object



function deepCopyObj(person) {
  let clonedPerson = {};

  for (let key in person) {
    //todo---------- for nested array
    if (Array.isArray(person[key])) {
      clonedPerson[key] = [];
      let cloneNesArr = clonedPerson[key];
      let nesArr = person[key];

      for (let nKey in nesArr) {
        let nValue = nesArr[nKey];
        cloneNesArr.push(nValue);

        // console.log(` Key : ${nKey} has Value : ${nValue}`);
      }
    } else if (
      typeof person[key] == "object" &&
      Array.isArray(person[key]) == false
    ) {
      //?  These are the Nested Object Properties
      clonedPerson[key] = {};
      let cloneNesObj = clonedPerson[key];
      let nesObj = person[key];

      for (let nKey in nesObj) {
        //todo------------- for object6
        let nValue = nesObj[nKey];
        cloneNesObj[nKey] = nValue;
        // console.log(` Key : ${nKey} has Value : ${nValue}`);
      }
    } else {
      let value = person[key];
      clonedPerson[key] = value;
      // console.log(` Property : ${key} has Value : ${value}`);
    }
  }
  return clonedPerson;
}

let clone = deepCopyObj(person);
console.log(" THis is a clone : \n ", clone);
clone.cities.marriage = "Amsterdam";
clone.cars.push("Bugati Veron");

console.log(" This is a clone : \n ", clone);
console.log(" This is a person : \n ", person);

// const arr = {};
// console.log(Array.isArray(arr));

//!      Displaying the object using the default method Object.value(objName).
let person = {
  fname: "Abhishek",
  lname: "Dhone",
  contact: 8888888888,
  cars: ["Mustang", "Lamborghini", "Rolls Royce"],
  cities: {
    birth: "Shahada",
    livesIn: "Nashik",
    worksIn: "Pune",
    dream: "California",
  }, // Remember that no semicolons here.
  func: function () {
    return (this.fullName = this.fname + " " + this.lname);
  }, // Remember that no semicolons here. ALso remember the () after FuncName.
};


console.log(
  " \n Displaying the object using the default method Object.value(objName) :-"
);
const objValues = Object.values(person);
console.log(objValues);
// ? Object.values() reternse an array
// [
//   'Abhishek',
//   'Dhone',
//   8888888888,
//   [ 'Mustang', 'Lamborghini', 'Rolls Royce' ],
//   {
//     birth: 'Shahada',
//     livesIn: 'Nashik',
//     worksIn: 'Pune',
//     dream: 'California'
//   },
//   [Function: func]
// ]


//!      Displaying the object using the default method JSON.stringify(objName).

console.log(
  " \n Displaying the object using the JSON method JSON.stingify(Object_Name) :-"
);
const objString = JSON.stringify(person);
console.log(objString);


//!      Displaying the object using the default method Object.entries(objName).

console.log(
  " \n Displaying the object using the default method Object.entries(objName) :-"
);
const objEntries = Object.entries(person);
console.log(objEntries);
// ? it returnes array of key value pairs
// [
//   [ 'fname', 'Abhishek' ],
//   [ 'lname', 'Dhone' ],
//   [ 'contact', 8888888888 ],
//   [ 'cars', [ 'Mustang', 'Lamborghini', 'Rolls Royce' ] ],
//   [
//     'cities',
//     {
//       birth: 'Shahada',
//       livesIn: 'Nashik',
//       worksIn: 'Pune',
//       dream: 'California'
//     }
//   ],
//   [ 'func', [Function: func] ]
// ]

//!                  Adding the properties in the objects.

console.log(
  "\n \n Adding 2 properties to an object \n......Process complete 100%"
);
person.favColor = "Blue";
person.workplace = "Google";
console.log(
  ` Newly added properties are: \n ${person.favColor} and ${person.workplace}`
);

//!                  Deleting the properties from the objects.
// delete objectName.propertyName;

delete person.favColor;
delete person.func;
delete person.lname;
console.log(
  "\n The color property is irrelevant and deleted. (Deleted the property and value) : " +
    person.favColor
);

// We can also write the property name as any string or any word including let, var, const, for, even space is allowed.

let user = {
  name: "John",
  age: 30,
  let: "Abhishek",
  for: "Pooja",
  "likes birds": true, // multiword property name must be quoted
};

console.log(user.let);
console.log(user.for);
console.log(user["likes birds"]);
// Here for accessing properties with spaced names we need to use [" "] brackets and quotes or it will be a syntax error+

/*
!                          Computed properties
We can use square brackets in an object literal, when creating an object. That’s called computed properties.
For instance:
*/
// let fruit = prompt("Which fruit to buy?", "apple"); if using browser.

let fruit = "apple";
debugger;

let bags = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
console.log(bags.apple); // 5 if fruit="apple"
console.log(bags[fruit]); // 5 if fruit="apple"

// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit variable.
// Actually during runtime the [fruit] property name is replaced with the actuall string stored in the variable fruit. The brackets [] help the compiler understand that this is not the property name but its derived from the computed value.

let bag = {};
// take property name from the fruit variable
bag[fruit] = 5;





/*
!                     Using the Property Value Shorthand.
In real code, we often use existing variables as values for property names.

properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.
Instead of name:name we can just write name, like this.
*/

let fname = "Abhishek";
let age = 21;
let city = "Pune";

let shortHandObj = {
  fname,
  age,
  city,
};

console.log(shortHandObj);

//? Using it with functions

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

// Instead of above programme we can write the below programe using the Property Value Shorthand.
// We can use both normal properties and shorthands in the same object:

function makeUsers(name, age) {
  return {
    name,
    age,
    etc: "Etc",
  };
}

/*
! There’s a ZINTAX / gotcha with a special property named __proto__. We can’t set it to a non-object value:

let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

*/

/*
!             Property existence test, “in” operator

1] A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. 
2] There will be no error if the property doesn’t exist!
3] Reading a non-existing property just returns undefined. So we can easily test whether the property exists
4] There’s also a special operator "in" for that.

The syntax is:      "key" in object
    Above prog. will return as true if key exists and false if it doesnt.
    eg. 'xyz' in obj;
*/

let testIn = {
  fname: "Abhishek",
  noProperty: undefined,
  someProperty: undefined,
};

console.log(testIn.nothing); // line 1
console.log(testIn.noProperty); // line 2
console.log("noProperty" in testIn); // line 3

// Line 1 = output = Undefined. We can say the property dont exist because we got undefined. This also Means the code will not throw an error.

// Line 2 = output = Undefined. But here we cantnot say that there is no property because here property exists with the undefined value. Therefore we use the key in obj; method to test the existence. see line 3

/*
!               Are Objects Ordered 

-Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

Answer is = “they are ordered in a special fashion”: 
means = 1] only integer properties are sorted and 
        2] others like float, strings, arr, obj etc. they appear in creation order.
*/
