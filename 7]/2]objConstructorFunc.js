
/*
!               Object using the constructor Function().
-We can not add a new PROPERTY to an existing object constructor like we do to the objects. obj.newProp = 'xyz';
-We cannot add a new METHOD to an object constructor the same way you add a new method to an existing object.
-Adding methods to an object constructor must be done inside the constructor function. 
-Means we can not pass the method in the parameter of the Constructor Function.
 
*   When a function is executed with new, it does the following steps:
1] A new empty object is created and its reference is assigned to 'this'.
2] The function body executes. Usually it modifies "this", adds new properties to it.
3] The value of this is returned. Which gets stored in the new variable crated using let/var/const varName.

The main purpose of constructors is to implement reusable object creation code.

? Imp Question = Why we use the object constructor functions instead of using the classes?
Ans- For creating the simple objects we use the constructor function. coz it provides simpler syntax and quick implementation and creation. Also memory consumption and the execution is bit faster because functions are faster than classes.
 But for complex objects we use the Classes as tempaltes for objects. 

? What type of functions can be used to create the constructors..?
Ans- Technically, any function (except arrow functions, as they don’t have this) can be used as a constructor. It can be run with new, and it will execute the algorithm above. The “capital letter first” is the convention, to make it clear that a function is to be run with new.

*/


function AboutMe(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.getAge = function () {
        return this.fname + ' ' + this.lname;
    };
};

let myself = new AboutMe('Abhishek', 'Dhone', 8485866580, 1857);
//!  Never forget using the 'new' keyword before the constructor function.

let objStr = JSON.stringify(myself);
let objVal = Object.values(myself);

console.log(" \n This object is made using the constructor function: printed using Object.values " + objVal);
console.log(" \n This object is made using the constructor function: printed using JSON.stringify " + objStr);

//Note -  We can add the P and M to an object created using the object constructor (like we do for normal objects. But We can not add the prpperties and methods to the Object Constructor Function directly, like we do for normal objects. For this we need to use the PROTOTYPE. 


//!       Prototype and Prototype inheritance.

/*
? All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.

Adding Properties and Methods to Objects
Sometimes you want to add new properties (or methods) to all existing objects of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.

Using the prototype Property
The JavaScript prototype property allows you to add new properties to object constructors:

Example
*/

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

// The JavaScript prototype property also allows you to add new methods to objects constructors:

function Person2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person2.prototype.name = function () {
    return this.firstName + " " + this.lastName;
};

//Todo-- Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.



/*

*/