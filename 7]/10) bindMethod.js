/*
Function Borrowing
With the bind() method, an object can borrow a method from another object.

The example below creates 2 objects (person and member).

The member object borrows the fullname method from the person object:
*/

const empDetails = {
  firstname: "Abhishek",
  lastname: "Dhone",
  fullName: function () {
    return (
      this.fname +
      " " +
      this.lname
    );

    // return this.fname + " " + this.lname + ' , ' + firstname + lastname;
    //  Here the firstname and lastname are undefined as it doesnot have the direct access. Also not through this keyword because this can always refer to only one object.
    // therefore this.firstname and this.lastname will also be in accessible.
  },
};

const employee1 = {
  fname: "Bhushan",
  lname: "Gaikwad",
};

// While we use the call for method borrowing we directly call the method and get the result or returned value from the function.
console.log(empDetails.fullName.call(employee1));//Bhushan Gaikwad
let a = empDetails.fullName.call(employee1);
console.log(a);
// While we use bind for method borrowing we get the new bound function. In which the 'this' keyword will always refer to the borrowing object. Therefore we need to call the bound method explicitly using the paranthesis ().
console.log(empDetails.fullName.bind(employee1));//[Function: bound fullName]
console.log(empDetails.fullName.bind(employee1)());//Bhushan Gaikwad
console.log(employee1.fullName)//undefined

// syntax 1
let empName = empDetails.fullName.bind(employee1);
console.log(empName());//Bhushan Gaikwad

// syntax 2 = giving parenthesis after a full call x.y.z(emp1)();
console.log(empDetails.fullName.bind(employee1)());//Bhushan Gaikwad

/*
-----------------------Preserving this---------------------
?Sometimes the bind() method has to be used to prevent loosing this.

*In the following example, the person object has a display method. In the display method, this refers to the person object
*/

const person = {
  firstName: "Abhishek",
  lastName: "Dhone",
  display: function () {
    let x = this.firstName + " " + this.lastName;
    return x;
  },
};

console.log(person.display());

/*
When a function is used as a callback, this is lost.

This example will try to display the person2 name after 3 seconds, but it will display undefined instead:
*/

const person2 = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = this.firstName + " " + this.lastName;
    return x;
  },
};
let xxx = setTimeout(person2.display, 3000);
console.log(xxx);



// In background the callback method is not able to find the value of this therefore we use the binding method.
//! Below function will not run correctly because it is not called using the object. Called directly callback();
//? In backgroud it will look as follows. Fake example

function setTimeout(callback, miliseconds){
  if(miliseconds === 0){
    return function callback(){
    let x = this.firstName + " " + this.lastName;
    return x;
  };
  }
}


// Below function will run correctly because we are using the bind method to bind the value of this.
// In backgroud it will look as follows. Fake example

function setTimeout(callback, miliseconds){
  if(miliseconds === 0){
    return function callback(){
    let x = person2.firstName + " " + person2.lastName; // Because bound function is sent as a callback function.
    return x;
  };
  }
}



/*
?            The bind() method solves this problem.

In the following example, the bind() method is used to bind person.display to person.
This example will display the person name after 3 seconds:
*/

const person3 = {
  firstName: "John",
  lastName: "Doe",
  display: function (hobby) {
    let x = this.firstName + " " + this.lastName + hobby;
  },
};


//!------------------------------


let display = person3.display.bind(person3);

console.log(setTimeout(display, 3000));

// We can also do the binding while defining the method.

const person4 = {
  firstName: "John",
  lastName: "Doe",
  displays: function () {
    let x = this.firstName + " " + this.lastName;
  },
  display: this.displays.bind(this),
};

let displays = person4.displays.bind(person4);
console.log(setTimeout(displays, 3000));

console.log(setTimeout(person4.display, 3000));
// Here only display is used. Which is the method that is binded and thus preserves the value of this when it is called.




{


let obj = {
  name : "Abhi",
  lname: "Dhone",
  full : function (d){
    return (this.name + " " + this.lname +" "+ d)
  }
}


let fullname = obj.full.bind(obj)
let result = fullname()
console.log(result)



let obj1 = {
  name : "Swaraa",
  lname: "Yadav",
}


let s = obj.full.bind(obj1)
// console.log(s())

setTimeout(() => {
  console.log(s("hello"))
}, 1000);

}







