/*

? What is a class..?
=> In object-oriented programming (OOP), a class is an extensible program-code-template for creating objects, providing initial values for state (properties) and behavior (member functions or methods).

?Interview Definition = The class is like a blueprint or the skeleton for creating new Objects. It has some properties and methods that are availabele in the new Object created using the Class.

*/

/*
In practice, 
we often need to create many objects of the same kind, like users, or goods or whatever.
So we can use constructors then why classes.

? Why Classe when we have constructors.?
*Ans. 
- When we create the instances using the constructor we not only create the copies of the properties but also the functions that are defined in the constructor functions. thus every object will have the same copy of that functions defined in the constructor as their own methods. But this is memory consuming and very repetitive thus we have the classes.

- Classes also have the function definitions that are used by the objects created using the class. But instead of holding the copy of functions as methods the new objects will access it from the class's prototype. Means repetition and object size is reduced.


The “class” syntax
The basic syntax is:

class MyClass {

    / compulsory constructor method with parameters. 
     constructor(x,y) { 
     property1 = x;
     property2 = y;
     ... }

     / class methods.
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
}

Then use new MyClass() to create a new object with all the listed methods.
The constructor() method is called automatically by new, so we can initialize the object there.

For example:
*/

class EmployeeDetails {
    constructor(fname, empId, num){
        this.fname = fname;
        this.empId = empId;
        this.phoneNo = num;
    }

    sayHi(){
        console.log("Hey Hi, This is ",this.fname, "here");
    }
}

let employee1 = new EmployeeDetails("Abhishek", "156966", "88882961216");
let employee2 = new EmployeeDetails("Maroti", "156966", "88882961216");
let employee3 = new EmployeeDetails("Satyam", "156966", "88882961216");

console.log(employee1);
console.log(employee1.empId);
console.log(employee1.phoneNo);
employee1.sayHi();
employee2.sayHi();
employee3.sayHi();

console.log(EmployeeDetails.fname);

// Example 2

class User55 {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
    
}

let user55a = new User55("John");
user55a.sayHi();

/*
? What happens when new User("John") is called.?
- A new object is created.
- The constructor runs with the given argument and assigns it to this.name.
- Then we can call object methods, such as user.sayHi().

! No comma between class methods
A common pitfall for novice developers is to put a comma between class methods, which would result in a syntax error.
The notation here is not to be confused with object literals. Within the class, no commas are required.

? What is a class?

?Ans = In JavaScript, a class is a kind of function.

~ console.log(typeof User); // function

? What class User {...} construct really does ? 

*Ans. 
- It Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
- Stores class methods, such as sayHi, in User.prototype.
- After new User object is created, when we call its method, it’s taken from the prototype, just as described in the chapter F.prototype. So the object has access to class methods.

Here’s the code to introspect it:

~ console.log(User === User.prototype.constructor); // true

/ The methods are in User.prototype, e.g:

~ console.log(User.prototype.sayHi); // the code of the sayHi method

/ there are exactly two methods in the prototype
~ console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

/ rewriting class User in pure functions

* 1. Create constructor function
function User(name) {
  this.name = name;
}

/ A function prototype has "constructor" property by default, so we don't need to create it

* 2. Add the method to prototype
User.prototype.sayHi = function() {
  alert(this.name);
};

* Usage:
let user = new User("John");
user.sayHi();

* The result of this definition is about the same. So, there are indeed reasons why class can be considered a syntactic sugar to define a constructor together with its prototype methods.



Todo--- Still, there are important differences ---------------------------------------------------------

1) A function created by class is labelled by a special internal property [[IsClassConstructor]]: true. So it’s not entirely the same as creating it manually.

2) The language checks for that property in a variety of places. For example, unlike a regular function, it must be called with new:

3) Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".

4) That’s good, because if we for..in over an object, we usually don’t want its class methods.

5) Classes always use strict. All code inside the class construct is automatically in strict mode.

6) Besides, class syntax brings many other features that we’ll explore later.

*/



// !                Getters/setters
// Just like literal objects, classes may include getters/setters, computed properties etc.
{

const user = {
    // _name:"Abhishek",

    get name(){
        return this._name;
    },

    set name(name){
        this._name = name;
    }
}

user.name = "Abhishek"
console.log(user.name);
console.log(user)

const user2 = {
    // _name:"Abhishek",

    get name(){
        return this._name;
    },

    set name(name){
        this._name = name;
    }
}

user.name = "Abhishek"
console.log(user.name);

const user3 = {
    // _name:"Abhishek",

    get name(){
        return this._name;
    },

    set name(name){
        this._name = name;
    }
}

user.name = "Abhishek"
console.log(user.name);












class User {

    // _name = "john";   // This is the class field

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    sayHi(){
        console.log("Hi")
    }

}

let user1 = new User("Abhishek");

// user1.name = "Abhishek";
console.log(user1.name); // Abhishek
console.log(user1._name); // Abhishek because name and _name are same inside a class _ just denotes its private and must not be accessed directly. Rather use get and set api's of the class.

user1 = new User(""); // Name is too short.
console.log(user1.name); // Return John because constructor did not set any name to the name field
console.log(user1._name); // Return John because of the above reason and also because _ or without _ its same.
}
// Above logs make it clear that we can also set the dfault values for the instances of the class of that value is not provided during the constructor call.
// Also it makes us clear that the this.name = name line calls the set method automatically because the set method is present for setting the same property / field.




let user = class {
    constructor(name = "shub") {
        this.name = name;
    }
}
let user0 = new user();
console.log(user0.name)

let user1 = new user('Abhishek')
console.log(user1.name);

console.log(typeof user1);
console.log(typeof user);


let User = class MyClass {
    sayHi() {
        console.log(MyClass); // MyClass name is visible only inside the class
    }
};

let user3 = new User()
user3.sayHi(); // works, shows MyClass definition
// In above code the new User() will return the reference of the new instance created by calling the constructor function of the class and then it is later used to call the sayHi() method thus now this in sayHi will refer to the annonymous object refernce calling on that method.




//!  Making classes on the go and returning it from anywhere.

function makeMyClass() {
    return class {
        constructor(name) {
            this.name = name;
        }
        sayHi() {
            console.log('Hi this is ' + this.name + " here");
        }
    }
}

// If you are returning a class from the function you must create a variable to use the class as a blueprint.
let MyClass = makeMyClass();

// To use the methods defined in the class you will create an obect and then call tbhe methods on that object.
let user4 = new MyClass('shub')
user4.sayHi();




//! We can also use the computed names for the class fields and also while calling them.
{
class User {
    constructor(name) {
        this['na' + 'me'] = name;
    }
}

let user1 = new User("Abhishek");
console.log(user1["nam" + "e"]);
// Here the constructor and the call simply uses the brackets for the accessing the properties and methods. Like we seen its use in the objects.
}


/*
                ! Class fields
1 - Old browsers may need a polyfill
2 - Class fields are a recent addition to the language.
3 - Previously, our classes only had methods.
4 - “Class fields” is a syntax that allows to add any properties.
5 - For instance, let’s add name property to class User:
*/


class User99 {
    constructor(name) {
        this.name = name;
    }
    myFriend = "John";
    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}

new User99("Abhishek").sayHi(); 
// Output = Hello Abhishek // This is because the property set using the constructor is done later thus the later value passed using the constructor overrides the orignal John.
console.log(new User99("Abhishek").myFriend);

// So, we just write " = " in the declaration, and that’s it.
// The important difference of class fields is that they are set on individual objects, not User.prototype:

//* vimp learning here is that the class fields and the class properties that are set using the constructor function are set on the new instances created using the class and not the user.prototype. But the methods or functions written in the classs are set on the prototype and not on the new objects created using the classes.



/*
! Making bound methods with class fields
As demonstrated in the chapter Function binding functions in JavaScript have a dynamic this. It depends on the context of the call.
So if an object method is passed around and called in another context, this won’t be a reference to its object any more.

For instance, this code will show undefined:
*/

class Button1 {
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log(this.value);
    }
}

let button1 = new Button1("hello");

setTimeout(button1.click, 1000); // undefined

/*
The problem is called "losing this".
There are two approaches to fixing it, as discussed in the chapter Function binding:

1) Pass a wrapper - function, such as setTimeout(() => button.click(), 1000).
2) Bind the method to object, e.g.in the constructor.
- Class fields provide another, quite elegant syntax:
*/


class Button {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        alert(this.value);
    }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // hello

/*
- The class field click = () => {... } is created on a per - object basis, there’s a separate function for each Button object, with this inside it referencing that object.We can pass button.click around anywhere, and the value of this will always be correct.
- That’s especially useful in browser environment, for event listeners.
*/