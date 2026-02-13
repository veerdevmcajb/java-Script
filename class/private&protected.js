/*
!  --------------  Private and protected   -------------    Internal and external interface    

- In object-oriented programming, properties and methods are split into two groups:

1 - Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
2 - External interface – methods and properties, accessible also from outside the class.

Todo - An example: of mobile phone

? The internal interface has all the internal components.

- The components are interconnected and rely on each other to operate. The processor might need information stored in memory to execute a task, or the camera module may require power from the battery to take a photo.

? The external interface has all the external components.

- The phone's external interface is designed to be user-friendly, requiring no knowledge of the internal workings. You can make calls, send messages, take photos, and use apps without knowing how the CPU processes data or how the camera's sensor captures light.

? - In JavaScript, there are two types of object fields (properties and methods):

1) Public: accessible from anywhere. That means the external interface. 
Until now we were only using public properties and methods.

2) Private: accessible only from inside the class. 
This means internal interface.

- In many other languages there also exist “protected” fields: accessible only from inside the class and those extending it (like private, but plus access from inheriting classes). We usually want inheriting classes to gain access to them.


? What is the similarity between the private and protected properties.?
*Ans -
- They provide the encapulation and abstraction to prevent the complexity and prevent unwanted changes that may trigger erroes.
- Find more on net.


? What are the differences between the privte and protected properties in JS.?
*Ans -  
                        Protected                           and                       Private
1) These are not implement at language level                        - These are implement at the language level using #.
2) These can be accessed from outside without using Api's           - Accessed only using the internal api's and no other way.
3) Underscore _ is used as prefix to make it private.               - Hash # is used to make them private.
4) Inherited by other classes as their own Protected properties.    - Not inherited by the childs. Its only for internal.
5) We can make it read only by only providing the get and no set.   - Its not even possible to read it without using api's.


? How to make the properties protected.?
*Ans- 
- Protected fields are not implemented in JavaScript on the language level but they are emulated. 
- This is done using the Underscores before the property. Eg- _name= 'No name';
- Then we use the getter and setter methods to make them protected. 
And in that we will get and set the properties using the underscore _ as prefix.

Example- creating the coffee class with protected water property.
*/


class CoffeeMachine {
  constructor(power) {
    this._power = power;
  }
  // Here we are making the power property read only by not providing the setter for it.
  // This works because normally from outside we cant change the power property without using the _ .

  _waterAmount = 0; // Here we are setting the default value for waterlevel if not provided.

  // If we are creating the setter method in the class then it is not necessary to create it for the instance by passing the value to the class constructor during creation because we can seperately set the value to the object by this set method. Using the this keyword is important.

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount + "ML";
  }

  get power() {
    return this._power;
  }
}

console.log(CoffeeMachine._waterAmount);
// output = Undefined.
// The class fields are not accessible bu just using the class name.
//  We need the class instance / object to access the fields of the class. Similar to the way we use to access the methods.

let cm1 = new CoffeeMachine(100);
cm1.waterAmount = 10;
console.log(cm1.waterAmount);
// output = 0

// Here the class field will act as the default value for the New object. Means the value is set without using the constructor.

// Therefore we can say that although classes have the static methods it dont have the staic fields. Fields are for every new object created.
cm1.waterAmount = -10;
console.log(cm1.waterAmount);
// output = 0

// Because the set method has worked on the input provided.

/*
!                   Making roperties Read-only 

We need to do so when sometimes it happens that a property must be set at creation time only, and then never modified.
That’s exactly the case for a coffee machine: power never changes.
To do so, we only need to make getter, but not the setter:
*/

cm1.power = 500;
console.log(cm1.power);
// Inside it will not change the power value when we change the power value.

cm1._power = 500;
console.log(cm1._power);
// Inside it will change the power value when we change the _power value.


/*
!                   Getter/setter functions

- Here we used getter/setter syntax.
- But most of the time get.../set... functions are preferred, like this:

class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachine().setWaterAmount(100);

- That looks a bit longer, but functions are more flexible. They can accept multiple arguments (even if we don’t need them right now).


TODO-          Protected fields are inherited

- If we inherit class MegaMachine extends CoffeeMachine, then nothing prevents us from accessing this._waterAmount or this._power from the methods of the new class.

- So protected fields are naturally inheritable. Unlike private ones that we’ll see below.

*/

//!              Private properties and methods.
/*
- A recent addition
- This is a recent addition to the language. Not supported in JavaScript engines, or supported partially yet, requires polyfilling.

- Privates should start with #. They are only accessible from inside the class.

- For Eg., Here’s a private #waterLimit property and the water-checking private method #fixWaterAmount.
*/

class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }

  getWaterAmount(){
    return this.#waterLimit;
  }
}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class

coffeeMachine.#fixWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error








/*
! Extra gyan --------------- This can be ignored completely

On the language level, # is a special sign that the field is private. We can’t access it from outside or from inheriting classes.
Private fields do not conflict with public ones. We can have both private #waterAmount 
and public waterAmount fields at the same time.

For instance, let’s make waterAmount an accessor for #waterAmount:

class CoffeeMachine {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount); // Error
Unlike protected ones, private fields are enforced by the language itself. That’s a good thing.

But if we inherit from CoffeeMachine, then we’ll have no direct access to #waterAmount. We’ll need to rely on waterAmount getter/setter:

class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    alert( this.#waterAmount ); // Error: can only access from CoffeeMachine
  }
}
In many scenarios such limitation is too severe. If we extend a CoffeeMachine, we may have legitimate reasons to access its internals. That’s why protected fields are used more often, even though they are not supported by the language syntax.

Private fields are not available as this[name]
Private fields are special.

As we know, usually we can access fields using this[name]:

class User {
  ...
  sayHi() {
    let fieldName = "name";
    alert(`Hello, ${this[fieldName]}`);
  }
}
With private fields that’s impossible: this['#name'] doesn’t work. That’s a syntax limitation to ensure privacy.

*/
