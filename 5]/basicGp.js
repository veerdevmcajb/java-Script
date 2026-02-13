/*
!----------------------------------- Basic Good Practices

?   Variable Names:

1.   Camel Case:  
   - Example: `userName`, `totalAmount`, `calculateInterest`
   - Explanation: Start with a lowercase letter and capitalize the first letter of each subsequent concatenated word.

2.   Pascal Case (for Constructors/Classes):  
   - Example: `Person`, `CarModel`, `DatabaseConnection`
   - Explanation: Similar to Camel Case, but starts with an uppercase letter.

3.   Kebab Case (rarely used in JS):  
   - Example: `user-name`, `total-amount`, `calculate-interest`
   - Explanation: Words are separated by hyphens. Typically used in HTML attributes.

4.   Avoid Single Character Names:  
   - Example (Avoid): `x`, `y`, `z`
   - Explanation: Choose meaningful names for better readability and understanding.

?   Best Practices:

1.   Descriptive and Meaningful:  
   - Example: Instead of `data`, use `userData`.
   - Explanation: Choose names that convey the purpose or content of the variable.

2.   Use Nouns for Objects:  
   - Example: `customer`, `order`, `product`
   - Explanation: Objects represent entities, and using nouns makes the code more readable.

3.   Use Verbs for Functions/Methods:  
   - Example: `calculateTotal`, `getUserData`
   - Explanation: Functions perform actions, and using verbs describes what the function does.

4.   Avoid Reserved Keywords:  
   - Example (Avoid): `var`, `function`, `class`
   - Explanation: Do not use keywords that are reserved for the language.

5.   Consistent Style:  
   - Example: If you start with Camel Case, maintain it consistently across the codebase.
   - Explanation: Consistency enhances readability and makes the code aesthetically pleasing.

6.   Avoid Acronyms:  
   - Example (Avoid): `getUserInfoFromDB`
   - Explanation: Use full words instead of acronyms to enhance clarity.

7.   Avoid Ambiguous Names:  
   - Example (Avoid): `data`, `temp`
   - Explanation: Choose names that provide a clear understanding of the variable's purpose.

8.   Use Constants for Constants:  
   - Example: `const EMAX_VALU = 100;`
   - Explanation: Constants should be in uppercase with underscores.

9.   Avoid Underscore Prefix/Suffix:  
   - Example (Avoid): `_privateVariable`, `publicMethod_`
   - Explanation: Underscores are not commonly used in JavaScript variable names.

10.   Be Mindful of Context:  
    - Example: If working on a project, follow the established naming conventions of that project.

Keynote = 

The goal is to make your code readable and self-explanatory.
Consistency within a project or team is key.
Choose a style, stick to it, and document any specific conventions your team follows.

*/

//!---------------------------- Examples

//?-------------------------- Variable Names

//? Camel Case

let userName = "John";
let totalAmount = 1000;
let calculateInterest = function () {
  // Function logic
};

//? Pascal Case (for Constructors/Classes)

class Person {
  constructor(name) {
    this.name = name;
  }
}

//? Kebab Case (rarely used in JS)

let user_name = "Jane";
let total_amount = 1500;
let calculate_interest = function () {
  // Function logic
};

//? Avoid Single Character Names

let x = 5;
let y = 10;

//?----------------------------- Best Practices

// Descriptive and Meaningful
let userData = { /* ... */ };

// Use Nouns for Objects
let customer = { /* ... */ };
let product = { /* ... */ };

// Use Verbs for Functions/Methods
let calculateTotal = function () {
  // Function logic
};
let getUserData = function () {
  // Function logic
};

//?--------------------------- Things to be Avoided

// let var = 42; // Avoid using reserved keywords

// Consistent Style
let totalPrice = 200;
let itemCount = 5;

// Avoid Acronyms
let getUserInfoFromDatabase = function () {
  // Function logic
};

// Avoid Ambiguous Names
let temp = { /* ... */ };
let requestData = { /* ... */ };

// Use Constants for Constants
const MAX_VALUE = 100;

// Avoid Underscore Prefix/Suffix
// let _privateVariable = "secret"; // Avoid underscores in names

// Be Mindful of Context
// Follow project or team-specific conventions

// Console log to test the variables and examples
console.log(userName);
console.log(totalAmount);
calculateInterest();

let john = new Person("John");
console.log(john);

console.log(user_name);
console.log(total_amount);
calculate_interest();

console.log(x);
console.log(y);

console.log(userData);
console.log(customer);
console.log(product);

calculateTotal();
getUserData();

console.log(MAX_VALUE);

