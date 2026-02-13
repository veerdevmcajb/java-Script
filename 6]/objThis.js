//* Object Methods and this.

// objects are the concept of the object oriented programming. 
// As objects can represent many entities in the program thus an entity like
//  the user will also perform actions and actions will be performed on it, 
// so for this the objects has the methods. 
// Eg the user may need access permision thus accessPermission : function() { } will be a method for the object.

// * Multiple ways of declaring the object method.

// todo -  Method 1

// This is an example for understanding the use of the this keyword in the oject and real world programming.
let user = {
  fname: "Abhishek",
  lname: "Dhone",
  permision: "full access",
  birth: 1857,

  changePermision: function () {
    this.permision = "partial access";
    return "permission changed to " + this.permision;
  },

  getFullname: function () {
    // Do intergration calculation.
    // Find speed of light.
    return this.fname + " " + this.lname;
  },
};



// return user.fname +' ' + user.lname; In object We can write like this too, instead of using the 'this' keyword.

console.log(user.getFullname());
console.log(user.permision);
console.log(user.changePermision());
console.log(user.permision);



console.log(this);

// todo - Method 2

let user2 = {};

user2.age = function () {
  return 28;
};

console.log(user2.age());

// todo - Method 3 = Using the shorthand method.

let user3 = {
  sayHi() {
    console.log(" Hello Programmer..! ");
  },
};

user3.sayHi();

/*
!                    “this” is not bound
*   In JavaScript, keyword this behaves differently than most of the other programming languages. It can be used in any function, even if it’s not a method of an object.

*   Other programming language, use the "bound this", where methods defined in an object always have 'this' referencing ownself / own object. ( Because the pure oop follows the concept of strict abstraction and encaptualation)

*   In JavaScript this is “free”, its value is evaluated at call-time / run-time and does not depend on where the method was declared, but rather on what object is “before the dot” operator.
*/

/*
!                      What is this?
1] In JavaScript, the 'this' keyword refers to an object.
2] Which object depends on how this is being invoked (used or called).
3] The this keyword refers to different objects depending on how it is used:

*a] In an object method, this refers to that object.
?b] Alone, this refers to the window(in a browser) or global(in the node) object.
? *c] In a function, this refers to the global object.
?  d] In a function, in strict mode, this is undefined.
? *e] In an event, this refers to the element that received the event.
? *f] Methods like call(), apply(), and bind() can refer this to any object.
 
! Note
this is not a variable. It is a keyword. You cannot directly change the value of this like we do it for variables.
   
! When this is used Alone
When used alone, this refers to the global object.
Because this is running in the global scope.
In a browser window the global object is [object Window]
    
! Arrow functions have no “this”
?- Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
- For Eg. here arrow() uses this from the outer user.sayHi() method:
       
      
- That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate this, but rather to take it from the outer context. 

(Dad function and this Dad functtion takes it from its Dad object.)
(That means the "this" of the Arrow function remembers it Dad and Grandpa).
                   
*/

// Very basic example for understanding only

let users = {
  firstName: "Abhishek",
  sayHi() {
    console.log("The value of this inside the sayHi method ", this);

    let normalFunc = function () {
      console.log(
        "Value of this insied the child normal function of sayHi()method: ",
        this.firstName
      );
      // The value of "this" is lost inside the nested normal function of the object method.
    };

    let arrow = () =>
      console.log(
        "Value of this insied the child arrow function of sayHi()method: ",
        this.firstName
      );
    // The value of "this" is preserved / remembered inside the nested arrow function of the object method.

    normalFunc();
    arrow();
  },
  arrow: () => {
    console.log(this.firstName);
  },
};
users.sayHi(); // Abhishek
users.arrow(); // undefined

// Best Example for understanding "this"
let users2 = {
  firstName: "Abhishek",

  sayHi: function () {
    console.log(this.firstName);
  },

  sayHi2() {
    console.log(this.firstName);
  },

  // An example of this in the arrow function inside the Object Method.
  sayHi3() {
    const say = () => {
      console.log(this.firstName);
    };
    say();
  },
 
  // An example of this in the arrow function as the objct Method.
  sayHi4: () => {
    console.log(this);
  },
};

users2.sayHi(); // Abhishek
users2.sayHi2(); // Abhishek
users2.sayHi3(); // Abhishek
users2.sayHi4(); // Undefined , Because the arrow function does not have any parent function to refer to. Thus value of this is the global object and window.sayHi4() is undefined.
