//!------------------  Constructor --------------------

/*
- Constructor functions are used in JavaScript to create objects. 
*- It creates an instance of an object.
- They mimic the concept of constructors found in other programming languages but use functions instead.

todo-----------   A constructor function is typically named with a capital letter to distinguish it from regular functions.

? *When a function is executed with the 'new' keyword, it does the following:
1. Creates a new empty object.
2. Sets the 'this' keyword to reference the new object.
3. Executes the code inside the constructor function, which usually modifies the 'this' object.
4. Returns the new object (implicitly, unless the constructor explicitly returns another object).
*/

//? Normal object created using constructor.

let person0 = {
  name: "Abhishek",
  age: 30,
  describe: function () {
    return `${this.name} is ${this.age} years old.`;
  },
};
// An object that is directly created without using the costructor funcionl.
console.log(person0); // Abhishek is 21 years old.

//? Example 1: Basic Constructor Function

function Person(name, age) {
  // Defining the properties of an object which is to be created.
  this.name = name;
  this.age = age;

  // Method defined within the constructor
  this.describe = function () {
    return `${this.name} is ${this.age} years old.`;
  };

  //! You can do all other operations in the constructor function like you do it in the normal frunctions. But it is not recommended.
  let any = 1 + 100;
  console.log("Now inside the contructor function.");
}

// Creating new objects with the 'new' keyword
const person1 = new Person("Abhishek", 21);
// const person1 = Person("Abhishek", 21); // undefined
console.log(person1.describe()); // Abhishek is 21 years old.
console.log(person1); // Abhishek is 21 years old.

const person2 = new Person("Vikrant", 21);
console.log(person2.describe()); // Vikrant is 21 years old.

//? Ignore this for sometime Example 2: Constructor with Prototypes
// It's a good practice to define functions on the prototype for better memory usage.
function Animal(type, sound) {
  this.type = type;
  this.sound = sound;
}

//? Defining a method on the prototype
//! Adding method in Object Cunstroctor

Animal.prototype.makeSound = function () {
  return `${this.type} says ${this.sound}`;
};

//? Defining a new property on the constructor
//! Adding key and value in Object Cunstroctor
//todo Object_name.Prototype.key = Value

Animal.prototype.pet = true;

const dog = new Animal("Dog", "Woof");
const cat = new Animal("Cat", "Meow");

console.log(dog.makeSound()); // Dog says Woof
console.log(dog.pet);
console.log(cat.makeSound()); // Cat says Meow
console.log(cat.pet);

//? Example 3: Constructors with Return Statement

//! If the constructor function returns an object, that object is returned instead of the 'this' object.

function Vehicle(type) {
  this.type = type;
  // return this;
  //! This return statement overrides the implicit 'this' return.
  // owner = Abhishek Dhone
  return {
    type: "Alien Ship",
  };
}

//In above function (Cunstructor) we only retrning .type no other key and property

const myVehicle = new Vehicle("Car");
console.log(myVehicle.type); // Alien Ship

const myVehicle2 = new Vehicle("Bike");
console.log(myVehicle2.type); // Alien Ship

myVehicle.owner = "Abhishek Dhone"; //* Adding value with obj.assign

console.log("my vehicle ", myVehicle.owner); // Shuhbam Dhone

console.log("my vehicle 2", myVehicle2.owner); // Undefined

//? Now creating it on Vehicle constructor

//todo Object.Prototype.key = Value

Vehicle.prototype.owner = "Abhishek Dhone";
console.log("my vehicle ", myVehicle.owner); // Shuhbam Dhone

console.log("my vehicle 2", myVehicle2.owner); // Undefined

// Example 4: Constructor Function without 'new'
//? Calling a constructor function without 'new' leads to the addition of properties to the global object (window in browsers).
function Gadget(name) {
  console.log(this); // global object.
  this.name = name; // global object property.
}

// Forgot 'new' keyword.
const myGadget = Gadget("Smartphone");
console.log(window.name); // Smartphone
// 'myGadget' will be 'undefined' because Gadget was called without 'new'.
/*
! The main difference between constructor functions and normal (regular) functions in JavaScript lies in their purpose and how they are used:

? Constructor Functions:
*- Purpose : Constructor functions are designed specifically to create objects. 
- They mimic the class concept found in other object-oriented programming languages.

-  Invocation (call) : They are explicitly invoked/called using the `new` keyword. This does something special:
  - Creates a new empty object (`{}`).
  - Sets the newly created object's prototype to be the constructor function's prototype.
  - Sets `this` to reference the newly created object within the constructor function, allowing properties and methods to be added to it.
  - Returns the new object, unless the constructor function returns a different object explicitly.
-  Naming Convention : By convention, constructor functions start with a capital letter to distinguish them from regular functions.

?  Regular Functions:
-  Purpose : Regular functions are used to carry out some operations or compute values. 
-  They may or may not return a value and are not used specifically for creating objects.
-  Invocation/call : Regular functions are called directly without the `new` keyword. The value of `this` inside a regular function depends on how the function was called (global object in non-strict mode, `undefined` in strict mode, or context object if called as a method of an object).
-  Naming Convention : Regular functions usually start with a lowercase letter, following the camelCase convention.

?  Advantages of Constructor Functions:
-  Object Creation : They provide a clear and structured way to create objects and instantiate with specific initial properties and methods.
-  Prototypal Inheritance : Constructor functions are pivotal in JavaScript's prototypal inheritance. Objects created using the same constructor will have the same prototype, allowing shared behavior through prototype methods.
-  Code Reusability : They promote reusability and encapsulation. Similar objects can be created without duplicating code.

?  Disadvantages of Constructor Functions:
-  Syntax Verbose/ complexity : Compared to the `class` syntax introduced in ES6, constructor functions can be more verbose and less intuitive, especially for developers from class-based language backgrounds.
-  Method Redefinition : If methods are defined inside the constructor function, each object instance creates a new copy of the function/method, which can lead to higher memory usage. This can be mitigated by attaching methods to the constructor's prototype instead.
-  `this` Binding : Care must be taken with the `this` keyword. If a method defined on the constructor's prototype is called with a different context, `this` may not point to the instance you expect.

?  Real-World Use Cases:
-  Creating Complex Objects : Before ES6 classes, constructor functions were the primary method of creating complex objects in JavaScript frameworks and libraries.
-  Custom Data Structures : Implementing custom data structures like LinkedLists, Trees, Stacks, and Queues can be efficiently managed using constructor functions for each node or structure element.
-  UI Components : In web development, constructor functions can be used to create instances of UI components, each with its own state and behavior, promoting component reusability and encapsulation.

- Constructor functions were foundational in JavaScript before classes were introduced in ES6. 
- Even though classes offer a more modern and succinct syntax, understanding constructor functions is crucial for understanding the core concepts of JavaScript's object-oriented capabilities and for working with older codebases or libraries that use this pattern.
*/

// Demonstrating Constructor Function

// Constructor Function for a User object
function User(name, age) {
  this.name = name;
  this.age = age;

  //? Adding a method to the constructor's prototype to avoid redefinition across instances
  //* we don't need to define this.key : value it aumatically call when we call the method in new Object

  User.prototype.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

// Creating user instances
const user1 = new User("Alice", 30);
const user2 = new User("Bob", 25);
console.log(user1)
// Invoking the greet method
user1.greet(); // Hello, my name is Alice and I am 30 years old.
user2.greet(); // Hello, my name is Bob and I am 25 years old.

// Demonstrating Normal Function

// Regular function to add two numbers
function add(a, b) {
  return a + b;
}

// Calling the regular function
console.log(add(5, 3)); // 8

// Real-World Use Case: Creating UI Components (Simplified Example)

// Constructor Function for a Modal component
function Modal(title, content) {
  this.title = title;
  this.content = content;

  // Method to display the modal
  this.display = function () {
    console.log(
      `Displaying modal - Title: ${this.title}, Content: ${this.content}`
    );
    // In a real scenario, this method would manipulate the DOM to display modal
  };
}

// Creating a Modal instance
const welcomeModal = new Modal("Welcome", "Hello to our service!");

// Displaying the modal
welcomeModal.display(); // Displaying modal - Title: Welcome, Content: Hello to our service!

/*
  Advantages of Constructor Functions:
  - Clear and structured way to create objects with specific properties and methods.
  - Support for prototypal inheritance.
  - Promote reusability and encapsulation.
  
  Disadvantages of Constructor Functions:
  - More verbose than class syntax.
  - If not using the prototype, each instance creates a new instance of methods.
  - Need to be careful with `this` binding.
  
  Real-World Use Case:
  - Constructor functions can be used to create instances of UI components like modals, each with its own state and behavior.
  */
