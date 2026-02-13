// ! Private, Protected, static


/* 
? Private Fields and Methods: Denoted by #, private fields and methods are accessible only within the class where they are declared. 
They cannot be accessed outside the class or by subclass instances.

? Protected Fields and Methods: JavaScript does not natively support protected members.
 By convention, an underscore _ prefix is used to indicate that a member is intended to be protected. This means it should be accessible in the class and its subclasses, but this is not enforced by the language.

? Static Methods: Denoted by the static keyword, static methods are called on the class itself, not on instances of the class. 
They are often used for utility functions that do not require access to instance properties.

? Public Methods: Methods without any specific keyword are public, meaning they can be accessed from outside the class.
*/


/* 
!| Feature       | Private                                                                  | Protected                                                                                                | Static                                                                                                 |

 Keyword         | `#` prefix (e.g., `#privateField`)                                       | No specific keyword in JavaScript; by convention, use `_` prefix (e.g., `_protectedField`)               | `static` keyword (e.g., `static staticMethod()`)                                                       |
 Accessibility   | Accessible only within the class where they are defined                  | Intended to be accessible within the class and subclasses; enforced by convention, not by the language   | Accessible on the class itself, rather than on instances of the class                                  |
 Inheritance     | Not inherited by subclasses                                              | Intended to be inherited by subclasses; convention-based in JavaScript                                   | Inherited by subclasses, but remains accessible only on the class, not on instances                    |
 Instance Usage  | Cannot be accessed by instances of the class or from outside the class   | Accessible by instances of the class and subclasses, by convention                                       | Cannot be accessed through class instances; must be accessed through the class name                    |
 Use Case        | For private state or functionality that should not be exposed externally | For internal state or functionality that should be accessible to subclasses                              | For functionality that does not depend on instance state and is shared across all instances            |

? Note on Protected in JavaScript:
JavaScript does not have built-in support for `protected` members as some other languages like Java or C++ do. The notion of `protected` members in JavaScript is convention-based, typically signified by prefixing the member name with an underscore `_`. This is a signal to developers that the member is intended for use within the class and its subclasses, but it's not enforced by the language.

 */


class MyClass {
    // A private field, accessible only within this class
    #privateField = "I am private";

    // Simulating a protected field using a naming convention (not truly protected)
    _protectedField = "I am protected";

    constructor() {
        // Private fields are accessed with the this keyword
        console.log(this.#privateField); // Accessing the private field
    }

    // A private method, accessible only within this class
    #privateMethod() {
        return 'Private Method';
    }

    // Simulating a protected method using a naming convention (not truly protected)
    _protectedMethod() {
        return 'Protected Method';
    }

    // A public method that can access private and protected members
    publicMethod() {
        console.log(this.#privateMethod()); // Accessing the private method
        console.log(this._protectedMethod()); // Accessing the 'protected' method
        console.log(this.#privateField); // Accessing the private field
        console.log(this._protectedField); // Accessing the 'protected' field
    }

    // A static method - belongs to the class, not to instances of the class
    static staticMethod() {
        return 'Static Method';
    }
}

const myInstance = new MyClass();

// Public method can be called on an instance
myInstance.publicMethod();

// Static method is called on the class itself, not on an instance
console.log(MyClass.staticMethod());

// Accessing private or protected fields/methods from outside the class will result in errors
// console.log(myInstance.#privateField); // SyntaxError: Private field '#privateField' must be declared in an enclosing class
// console.log(myInstance.#privateMethod()); // SyntaxError
// console.log(myInstance._protectedField); // While this works due to the naming convention, it's against the intended encapsulation.

// Inheritance example to demonstrate 'protected' fields and methods
class SubClass extends MyClass {
    constructor() {
        super();
        // 'Protected' fields and methods can be accessed by subclasses
        console.log(this._protectedField); // Accessing the 'protected' field from the subclass
        console.log(this._protectedMethod()); // Accessing the 'protected' method from the subclass
    }
}

const mySubInstance = new SubClass();

