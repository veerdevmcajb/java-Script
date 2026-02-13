// Function apply method.

/*

                        Method Reuse
With the apply() method, you can write a method that can be used on different objects.

The JavaScript apply() Method
The apply() method is similar to the call() method (previous chapter).

In this example the fullName method of person is applied on person1.

*/

// First example

const person = {
  firstname: "someone",
  lastname: "smith",
  myFunction() {
    console.log(
      " I am Method of the Object: Anytime Call, Apply and Bind me " +
        this.fname
    );
  },
  fullName: function () {
    // return this.fname + " " + this.lname;

    // return this.fname + " " + this.lname + ' ' + this.firstname + ' ' + this.lastname;
    /*
        This will not throw an error but this will always return an undefined value for this.firstname and this.lastname.
        */

    return `${this.fname}  ${this.lname} , ${this.firstname}  ${this.lastname}`;

    /*
        This will always throw an error Here the firstname and lastname are undefined as it doesnot have the direct access. But we can access it using the this.firstName, this.lastname. 'this' can always refer to only one object.
        
        Therefore this.firstname and this.lastname will also be inaccessible if we do call or apply or bind.
        */
  },
};

const person1 = {
  fname: "Abhishek",
  lname: "Dhone",
};

const person2 = {
  fname: "Chandu",
  lname: "Sangle",
};

console.log(person.fullName());//undefined  undefined , someone  smith
console.log(person.fullName.call(person1));//Abhishek  Dhone , undefined  undefined
console.log(person.fullName.apply(person1));//Abhishek  Dhone , undefined  undefined
person.myFunction.apply(person2);// I am Method of the Object: Anytime Call, Apply and Bind me Chandu

// In this example the apply method performs exactly similar to the call method because there are no arguments passed.

// If the arguments are passed then call and apply behave differently. Call method takes arguments seprately but the apply method takes the arguments as an array.

/*
    The difference is:
        ?The call() method takes arguments separately.
        ?The apply() method takes arguments as an array.
*/

// Therefore when we wish to use the arguments seperately the call method is best suited and when we need to pass the argyments as the array then apply method is best suitable.

// Apply method with arguments.

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
  empDetails.fullName.apply(employee1, ["Banglore", "India", "Cricket"])
);

console.log(
  empDetails.fullName.apply(employee1, ["Banglore", "India", "Cricket"])
);

console.log(
  empDetails.fullName.apply(employee1, ["Banglore", "India", "Cricket"])
);

// We can use the apply method to simulate various usefull thing in JavaScript. For instance JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

let maxNum1 = Math.max(1,2,3,4,5,6,7);
console.log(maxNum1);

let maxNum = Math.max.apply(null, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(maxNum);

//? The first argument (null) does not matter. It is not used in this example. These examples will give the same result:
//? Reason = Here in the max function the max function does not use the value of 'this' so it is only conserned with the arguments that are passed to it. Therefore we dont need to pass any object and apply it to some object. Rather here we just need to pass the set of values as seperate arguments.

maxNum = Math.max.apply(Math, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(maxNum); // This will return 10.

maxNum = Math.max.apply(" ", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(maxNum); // This Will also return 10.

maxNum = Math.max.apply(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(maxNum); // This Will also return 10.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
maxNum = Math.max(...arr);
console.log(maxNum); // This Will also return 10.
// Above spread works here because it simply spreads here the array elements as seperate arguments while calling the Math.max method.

/*
JavaScript Strict Mode
In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner(object) of the invoked function. In "non-strict" mode, it becomes the global object.
*/
