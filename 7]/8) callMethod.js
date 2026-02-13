// Function call method.

/*
!                      Method Reuse
?- With the call() method, you can write a method that can be used on different objects.

- All Functions are Methods
- In JavaScript all functions are object methods.

- If a function is not a method of a JavaScript object, it is a function of the global object.
*/

/*
!               The JavaScript call() Method
*The call() method is a predefined JavaScript method.

*It can be used to invoke (call) a method with an owner object as an argument (parameter).

*With call(), an object can use a method belonging to another object.

This example calls the fullName method of person, using it on person1:

*/

// SYNTAX EXPLAINED - 
//? actualObject.itsMethod.call(borrowingObject);

// FIrst example

const person = {
  fname: "Bablu",
  lname: "Kumar",
  fullName: function () {
    return this.fname + " " + this.lname;
  },
};

const person1 = {
  fname: "Abhishek",
  lname: "Dhone",
};

const person2 = {
  fname: "Bhushan",
  lname: "Gaikwad",
};

console.log(person.fullName());

console.log(person.fullName.call(person2));

console.log(person.fullName.call(person1));


//? The call method along with the arguments.



// Where the call mwthod arguments are passed the arguments are always independent of the object and the funtion.

// SYNTAX EXPLAINED - 
//? actualObject.itsMethod.call(borrowingObject, arg1, arg2, argN);

const empDetails = {
  fullName: function (city, country, hobies) {
    return (
      this.fname + " " + this.lname + " " + city + " " + country + " " + hobies
    );
  },
};

const employee1 = {
  fname: "Bhushan",
  lname: "Gaikwad",
};

const employee2 = {
  fname: "Nayan",
  lname: "Saraf",
};

console.log(
  empDetails.fullName.call(employee1, "Banglore", "India", "Cricket")
  //OrignalObj.methodName.call(beggingObject, arg1, arg2, arg3);
);


console.log(
  empDetails.fullName.call(employee2, "Nashik", "India", "Football")
  //OrignalObj.methodName.call(beggingObject, arg1, arg2, arg3);
);

//? Borrowing functions using call()

function childFunc(arg1, arg2) {

  console.log(this.daddy, arg1, arg2);

}

// Calling the function without a object.
childFunc("Hey ", "Hello!");//undefined Hey  Hello!


const parentObj = { 
  daddy: "This is a xyz" 
};

// Using call() to specify 'this' explicitly
childFunc.call(parentObj, "Hello", "Guys"); // 'This is a daddy arg1 arg2'


// Classes. Event Handling. Fetchning and display.