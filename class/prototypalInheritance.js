//! Prototypal inheritance.

//? What is a prototype = (MDN) = Prototypes are the mechanism by which JavaScript objects inherit features from one another.

const arr1 = [1,2[3[4]]];
const arr2 = [1,2[3[4]]];
const arr3 = [1,2[3[4]]];

Array.prototype.himalayan = function(){
  console.log("Himalayan was bought in 2024 8 feb, U can go on a ride");
}

arr1.himalayan();

arr1.__proto__.bmw = function(){
   console.log("I am getting the BMW before 2025, U can drive it later");
}

arr2.bmw();

/*
? Definition = W3Schools = All JavaScript objects inherit properties and methods from a prototype. Date objects inherit from Date.prototype

1] Array objects inherit from Array.prototype
2] Person objects inherit from Person.prototype

The Object.prototype is on the top of the prototype inheritance chain:
    Date objects, Array objects, and Person objects inherit from Object.prototype

? Uses of the Prototype and two types of prototypes.

Type 1] The Object.Prototype as the top object.
-1) Inherit the properties and methods from default objects and other objects.
-2) It is also used for writing the new methods for the existing object constructors writen in the code.

Type 2] The default [prototype] property that every Obj has.
- It is used to set the reference to the object from which it inherits the properties. It always has a reference to an Object or its Null.

*/

/*
Some imp short notes-

? The only thing u need to remember is this definition - 
* What is Prototypal Inheritance = When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype and this is called “prototypal inheritance”.

2] The property [[Prototype]] is internal and hidden, but there are many ways to set it.
One of them is to use the special name __proto__

3] If the object has its own property or method with the same name it will not look up in its prototype.

4] Point 2 happens because when a property or object is called and not availabel then its automatically taken from the parent object. And this is possible through look up in the prototype chain which may go up till the oldest ancestor available. The prototype chain can be longer.

5] There are only two limitations:
    a) The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
    b) The value of __proto__ can be either an object or null. Other types are ignored.
    c) Also it may be obvious, but still: there can be only one [[Prototype]]. An object may not inherit from two others.

6] note that __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]].

7] modern JavaScript suggests that we should use Object.getPrototypeOf / Object.setPrototypeOf functions

8] Writing doesn’t use prototype-
    The prototype is only used for reading properties.
    Write/delete operations work directly with the object used.

9] Accessor properties are an exception, as assignment is handled by a setter function. So writing to such a property is actually the same as calling a function.
That means the this used in the get and set method will allways refer to the object that is used before the dot (.) while calling the method.

10] If any method or property is called used or called from the Parent object into the child object it will always do the changes into the copies of the child object and not the parent object. Thus we can say that As a result, methods are shared, but the object state is not.

11] for…in loop == The for..in loop iterates over inherited properties too.
- To eliminate the inherited properties = We can use the built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key

*/

//Todo--- Example 1

let country = {
  nation: "India",
  greatFor: "Unity in Diversity",

  patriotSays() {
    console.log(" India is the best Country in the World ");
  },

  locatedIn() {
    console.log(" It is located in Asia Continent ");
  },

  set politicalHead(value) {
    [this.fname, this.lname] = value.split(" ");
  },

  get politicalHead() {
    return `${this.fname} ${this.lname}`;
  },
};

let state = {
  sname: "Maharashtra",
  greatFor: "Culture, Business and Highest GSDP",

  locatedIn() {
    console.log(" It is located in India's Western Part ");
  },
};

state.__proto__ = country;

console.log(
  "\n country.nation inherited form the country object retrived using state.nation : " +
    state.nation
);

console.log("\n This will print the value in the parent object. ");
state.patriotSays();

console.log("\n This will print the value in the parent object. ");
country.patriotSays();

console.log(
  "\n Printed from greatFor Value in Child object. " + state.greatFor
);

console.log(
  " Printed from greatFor Value in Parent object. " + country.greatFor
);

console.log("\n Printed from locatedIn() method in the parent object. ");
country.locatedIn();

console.log("\n Printed from locatedIn() method in the child object. ");
state.locatedIn();

// This will demonstrate the use of this in getters and setters and other methods.

country.politicalHead = "Narendra Modi";
state.politicalHead = "Eknath Shinde";

console.log(`\n Name of Political Head for Country :
 ${country.fname} ${country.lname}`);

console.log(`\n Name of Political Head for State :
 ${state.fname} ${state.lname}`);

console.log("\n");

//Todo--- Example 2 =  Use of the for...in loop.

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// Object.keys only returns own keys
console.log(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
// jumps, then eats
for (let prop in rabbit) {
  console.log(prop);
}

// If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}

/*
! Extra Gyan

Note, there’s one funny thing. Where is the method ojbName.hasOwnProperty coming from? We did not define it. Looking at the chain we can see that the method is provided by Object.prototype.hasOwnProperty. In other words, it’s inherited.

…But why does hasOwnProperty not appear in the for..in loop like eats and jumps do, if for..in lists inherited properties?

The answer is simple: it’s not enumerable. Just like all other properties of Object.prototype, it has enumerable:false flag. And for..in only lists enumerable properties. That’s why it and the rest of the Object.prototype properties are not listed.

Almost all other key/value-getting methods ignore inherited properties
Almost all other key/value-getting methods, such as Object.keys, Object.values and so on ignore inherited properties.

*/

//! Check if we can add the new property or methods on the parent prototype of the child object.
