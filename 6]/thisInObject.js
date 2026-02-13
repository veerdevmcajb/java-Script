// Understanding the 'this' keyword in the context of JavaScript Objects

//! If you cant explain you have not understood it completly.


/*
The 'this' keyword within an object refers to the object itself. 
It's used to access properties and methods of the object from within its methods.
*/

// Basic Usage in an Object Method
const person = {
  name: "Abhishek",
  greet: function () {
    // Here, 'this' refers to the 'person' object.
    // 'this.name' is used to access the 'name' property of the object.
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // Output: Hello, my name is Abhishek

// 'this' in Nested Objects
const company = {
  name: "Tech Solutions",
  department: {
    name: "Development",
    getDepartmentName: function () {
      // 'this' refers to the 'department' object, not the 'company' object.
      return this.name; // Refers to 'department.name'
    },
  },
};

console.log(company.department.getDepartmentName()); // Output: Development


// 'this' and Method Borrowing
const person1 = {
  name: "Jane",
  greet: function () {
    console.log("Hello, my dad's name is " + this.name);
  },
};

person1.greet();

const person2 = {
  name: "Nayan",
};

// Borrowing 'greet' method from 'person1' for 'person2' using call
person1.greet.call(person2)

// Directly copying and Borrowing 'greet' method from 'person1' for 'person2'.
person2.greet = person1.greet;

person2.greet(); // Output: Hello, my name is Nayan


// 'this' Losing Context
const person3 = {
  name: "Alice",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};


// When assigning a method that uses 'this' to a variable, it loses its original context.
const greetVariable = person3.greet;
greetVariable(); // Output: Hello, my name is undefined

/*
  In above eg you will get the undefined because in backgriound only thr funciton definition is copied where this is written as the "this" and not Alice
  It is simply copying the function definition as follows:-

  const greetVariable = function () {
    console.log("Hello, my name is " + this.name);
  };
*/


// To retain the context, use the bind() method.
const boundGreet = person3.greet.bind(person3);
boundGreet(); // Output: Hello, my name is Alice


// Learn below in Object Accessors file.

// 'this' in Getter and Setter Methods
const person4 = {
  firstName: "Abhishek",
  lastName: "Nayan",
  get fullName() {
    // 'this' refers to the 'person4' object.
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(person4.fullName); // Output: Abhishek Nayan

person4.fullName = "Jane Roe";
console.log(person4.fullName); // Output: Jane Roe

/*
Please remember this --->
  In the context of an object, 'this' provides a reference to the object itself and is commonly used within methods to access or modify the object's properties. Care must be taken when methods are assigned to variables or passed as callbacks, as 'this' may lose its intended context, which can be mitigated using function binding techniques like bind().
  */
