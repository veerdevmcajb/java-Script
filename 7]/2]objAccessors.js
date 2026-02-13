// Getters and setters allow you to define Object Accessors (Computed Properties).

/*

? Why Using Getters and Setters?

It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes

Differenve between getting and setting the values using the object method and using the get and set:

1) Normal Object Methods access fullName as a function: person.fullName().
2) Getter and Setters access fullName as a property: person.fullName. The second method provides a simpler syntax.

*/


// Examples of geters and setters in the object
//? name of set and get methods are the same always

const emp = {
  //.....
    set lang(lang) {
      this.language = lang.toUpperCase();
    },
      //! we can not return the value in  set that will cause an error


    get lang() {
      return this.language.toLowerCase();
    }
}

//todo--- for giving value we call the method name that will be same for both get and set
//todo--- for calling get method we use function (method) name
//todo--- for calling set method we use key name inside the set method

// console.log(emp);
// emp.lang = "English";// assingning value to set
// console.log(emp);
// console.log(emp.language);//? calling set method
// console.log(emp.lang);//? calling get method

console.log(emp)//{ lang: [Getter/Setter] }

emp.language = "HInDi";// added language property

console.log(emp)//{ lang: [Getter/Setter], language: 'HInDi' } //regular property

console.log(emp.language);//HInDi //? Calling regular property

console.log(emp.lang);// hindi //  calling getter

// console.log("English".toUpperCase());


/*
? Behind the scene

const emp = {
  language : lang, (here lang is the argument that has balue "ENGLISH")
}


emp.language = "English"
*/

/*



? Vimp notes for getter and setter methods of the object.



1) While setting the property outside the object we will set it like we set it to normal object properties. 
Means without using the set or get function.
Just like normal properties.

*2) While accessing the properties also we dont call the getter function rather we just type. obj.property without using ().
  in above example we don't use ()
3) While setting the property we use set and get keywords for the special object properties.

?4) The name of set and get can be different from the property that we are setting. Eg. here we use the set lang and get lang for setting the language properties. 
todo-------- But The name of the set and get methods must be same. eg here both are named as "lang"

?5) While setting the property in set method and returning the property from the get method both must have the same name . This is the actual property name that we are creating on that object.

6) Later we will use the same name of the property outside the object to set and get the property of the object like we do normally for normal properties of the object.

*/



/*
!   Object.defineProperty()
?- The Object.defineProperty() method can also be used to add Getters and Setters:

todo- How to use the object.defineProperties(obj_name , property_name , { attributes as properties of the options object. })

- The meaning of the funciton arguments passed to the defineProperties method()

?Adds a property to an object, or modifies attributes of an existing property.

@param o — Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

@param p — The property name.

@param attributes — Descriptor for the property. It can be for a data property or an accessor property.


Todo -  A Counter Example
*/

//? Define object Object.defineProperty(obj, "key", {value});

const obj = { counter: 0 };

// Define setters and getters

Object.defineProperty(obj, "reset", {
    get: function () { this.counter = 0; }
});

Object.defineProperty(obj, "increment", {
    get: function () { this.counter++; }, //? value increse by 1
    set: function (incrementBy) { this.counter = this.counter + incrementBy}
});

Object.defineProperty(obj, "decrement", {
    get: function () { this.counter--; }
});

Object.defineProperty(obj, "add", {
    set: function (value) { this.counter += value; }
});

Object.defineProperty(obj, "subtract", {
    set: function (value) { this.counter -= value; }
});

// console.log(obj);

// Play with the counter:


// obj.add = 5;//? we need to call method first than value is updated
// console.log(obj.counter);// here now value of obj.counter is 5

// obj.subtract = 1;
// console.log(obj.counter);// here now value of obj.counter is 4

obj.increment;
console.log(obj.counter);// 1

obj.increment = 5;
console.log(obj.counter);// 1 + 5 = 6

obj.reset;
console.log(obj.counter);

// obj.decrement;

/*
Object accessors provide a way to get or set the properties of an object.
They are defined by getter and setter methods in an object.

Advantages:
1. Offer a simpler syntax for accessing object properties.
2. Provide finer control over how property values are set or returned.
3. Allow validation and computation on properties before retrieving or setting them.
4. Enhance encapsulation and data hiding within an object.

Usage:
- Managing internal properties while exposing a simple API.
- Validating data before setting a property.
- Computed properties based on other properties.
*/


// Example 1: Basic Getter and Setter
const person = {
    firstName: 'John',
    lastName: 'Doe',
    
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
      const parts = name.split(' ');//[]
      // parts["Jane", "Smith"]
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  
  // console.log(person.fullName); // John Doe //? getter call 


  // console.log(person.firstName); // Jane //? property call
  
  console.log(person.fullName);
  person.fullName = 'Abhishek Dhone'; //? setter call setting new value
  console.log(person);

  console.log(person.fullName); // Abhishek Dhone

  console.log(person.firstName); // Abhishek
  
  person.city = "Pune"; // addene new property
  console.log(person);
  
  
  /*
  Explanation:
  - The `fullName` property is accessed using a getter that combines `firstName` and `lastName`.
  - Setting `fullName` updates `firstName` and `lastName` using the setter.
  */
  
  // Example 2: Using Object.defineProperty
  const student = {
    firstName: 'Michael',
    lastName: 'Jordan'
  };
  
  Object.defineProperty(student, 'fullName', {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      const parts = value.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  });


//? here we adding property not get set method 
//!------------------------ just for knowladge no use in any example in this document 

person.prototype.makeSound = function() {
  return `${this.type} says ${this.sound}`;
};


  
  console.log(student.fullName); // Michael Jordan
  
  student.fullName = 'LeBron James';
  console.log(student.fullName); // LeBron James
  console.log(student.firstName); // LeBron
  
  /*
  Explanation:
  - `Object.defineProperty` allows more detailed configuration of the property `fullName`.
  - The property doesn't actually exist in the object as a value but is accessed and set through getters and setters.
  */
  
  //? Practical Example 3: Validation with Setter
  const account = {
    _balance: 0,

    get balance() {
      return this._balance;
    },
    
    set balance(value) {
      if (value < 0) {
        console.log('Balance cannot be negative.');
      }else{
        this._balance = value;
      }
    }
  };
  
  account.balance = 100;
  console.log(account.balance); // 100
  
  account.balance = -50;
  
  /*
  Explanation:
  - The setter for `balance` includes validation to prevent setting a negative balance.
  - Attempting to set a negative balance throws an error.
  */
  
  /*
  Note to remember....:
  - Getters and setters can also be defined for object prototypes and classes.
  - They can be used to create computed properties that are based on other properties.
  - It's a common practice to prefix internal properties with an underscore (_) when using accessors.
  */
  
  // Short note:
  // Object accessors are a powerful feature in JavaScript that enhance object property interaction, allowing for validation, computed properties, and improved encapsulation.
  

  