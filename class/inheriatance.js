// !------------------------ Inheritance ---------------
/* 
? class inheritance allows you to extend the functionality of one class (the parent or superclass) into another class (the child or subclass). This mechanism is useful for code reuse and to establish a hierarchical relationship between classes.


Todo - Basic Example

- We define a `Person` class with properties like `name` and `age`, and a method `describe()`. We then create an `Employee` class that extends `Person`, adding an `employeeId` property and overriding the `describe()` method.

 */

// Define a superclass called Animal
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Method to print the sound of the animal
    makeSound() {
      console.log("Animal sound");
    }
  }
  
  // Define a subclass called Dog which extends Animal
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the constructor of the superclass (Animal)
      this.breed = breed;
    }
  
    // Override the makeSound method of the superclass
    makeSound() {
      console.log("Woof woof!");
    }
  
    // Method specific to Dog class
    fetch() {
      console.log(`${this.name} is fetching.`);
    }
  }
  
  let tommy = new Dog("Tommy", "Husky");
  tommy.makeSound();
  tommy.fetch();


  // Define another subclass called Cat which extends Animal
  class Cat extends Animal {
    constructor(name, color) {
      super(name); // Call the constructor of the superclass (Animal)
      this.color = color;
    }
  
    // Override the makeSound method of the superclass
    makeSound() {
      console.log("Meow!");
    }
  
    // Method specific to Cat class
    purr() {
      console.log(`${this.name} is purring.`);
    }
  }
  
  // Create instances of the Dog and Cat classes
  const myDog = new Dog("Buddy", "Labrador");
  const myCat = new Cat("Whiskers", "White");
  
  // Access properties and methods of the Dog class
  console.log(myDog.name); // Output: Buddy
  console.log(myDog.breed); // Output: Labrador
  myDog.makeSound(); // Output: Woof woof!
  myDog.fetch(); // Output: Buddy is fetching.
  
  // Access properties and methods of the Cat class
  console.log(myCat.name); // Output: Whiskers
  console.log(myCat.color); // Output: White
  myCat.makeSound(); // Output: Meow!
  myCat.purr(); // Output: Whiskers is purring.

  
  
// Define the superclass
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}

// Define the subclass
class Employee extends Person {
    constructor(name, age, employeeId) {
        super(name, age); // Call the parent class's constructor
        this.employeeId = employeeId;
    }

    describe() {
        return `${super.describe()} Employee ID: ${this.employeeId}.`; // Call the parent class's method
    }
}

// Usage
const employee1 = new Employee('Abhishek', 28, 'E12345');
console.log(employee1.describe()); // Abhishek is 28 years old. Employee ID: E12345.


/*  Inheriting Static Methods

Static methods are also inherited. Here, we add a static method `greet()` to the `Person` class and demonstrate how it can be accessed from the `Employee` class.

 */
class Person {
    // Previous code...
    static greet() {
        return "Hello!";
    }
}

// Employee class remains the same...

// Usage
console.log(Employee.greet()); // Hello! - Accessed through the subclass

/* 
 Method Overriding

We've already seen an example of method overriding in the `Employee` class's `describe()` method. Method overriding is a feature where the subclass provides a specific implementation of a method that is already defined in its superclass.

 Getter and Setter Inheritance

Getters and setters are special methods that provide read and write access to an object's properties. These are also inherited.
 */

class Person {
    // Previous code...
    get description() {
        return `${this.name} is ${this.age} years old.`;
    }

    set updateAge(newAge) {
        this.age = newAge;
    }
}

// Employee class remains the same...

// Usage
const employee = new Employee('Jane Doe', 30, 'E67890');
console.log(employee.description); // Jane Doe is 30 years old.
employee.updateAge = 31;
console.log(employee.description); // Jane Doe is 31 years old.


 /* Polymorphism

Polymorphism in the context of class inheritance means that a method belonging to a parent class can be executed by an instance of a subclass, with the subclass providing its own implementation.

We've already seen this with the `describe()` method being overridden in the `Employee` class.

 Mixins

Mixins are a way to add functionality to a class from multiple sources.  does not support multiple inheritance directly, but mixins can be used to achieve a similar effect.

 */
// Mixin
let SerializableMixin = Base => class extends Base {
    serialize() {
        return JSON.stringify(this);
    }
};

// Applying mixin to Person
class Person extends SerializableMixin(Object) {
    // Person implementation...
}

const person = new Person('Alice', 32);
console.log(person.serialize()); // {"name":"Alice","age":32}

