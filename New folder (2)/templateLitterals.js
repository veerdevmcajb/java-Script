//  !---------------------- Template Litterals -----------------------
/* 
- Template literals in JavaScript provide a way to create strings with embedded expressions, multi-line strings, and string interpolation. 
- They are enclosed by backticks (`) rather than single or double quotes. 
- Expressions within the template literals are identified by the dollar sign and curly braces (${expression}).
*/

// console.log(` This is the world average ${true ? "This is truth" : "This is false"} `);

// Example 1: Basic usage of Template Literals
// Traditional string concatenation
const traditionalGreeting = "Hello, " + "World!";
console.log(traditionalGreeting); // Output: Hello, World!

// Using template literals
const templateGreeting = `Hello, World!`;
console.log(templateGreeting); // Output: Hello, World!
// Note: Template literals use backticks (` `) instead of quotes (' or ")

// Example 2: String Interpolation
const name = "Alice";
const age = 25;

// Traditional way
const traditionalIntroduction = "My name is " + name + " and I am " + age + " years old.";
console.log(traditionalIntroduction);

// Using template literals
const templateIntroduction = `My name is ${name} and I am ${age} years old.`;
console.log(templateIntroduction);
// Note: Variables and expressions can be embedded directly within template literals.

// Example 3: Expressions inside Template Literals
const price = 10;
const taxRate = 0.05;
const total = `Total: $${price * (1 + taxRate)}`;
console.log(total); // Output: Total: $10.5
//* Note: Any valid JavaScript expression can be included inside ${} in a template literal.

// Example 4: Multi-line Strings
// Traditional way using concatenation
const traditionalAddress = 
"123 Main St.\n" +
"Anytown, USA\n" +
"12345";

console.log(traditionalAddress);

// Using template literals
const templateAddress = 
`123 Main St.
Anytown, USA
12345`;

console.log(templateAddress);
// Note: Template literals preserve line breaks and spaces, making them ideal for multi-line strings.

// Example 5: Nested Template Literals
const user = { id: 1, name: "John Doe" };
const item = { id: 2, name: "Widget", price: 9.99 };

const orderMessage = `  Order Details:
  User: ${user.name} (ID: ${user.id})
  Item: ${item.name} (ID: ${item.id}, Price: $${item.price})`;

console.log(orderMessage);
// Note: Template literals can be nested, allowing for complex string constructions.

// Example 6: Tagged Template Literals
// A simple tag function that logs the strings and values
function highlight(strings, ...values) {
  console.log('Strings:', strings);
  console.log('Values:', values);
  return 'Processed String';
}

const quantity = 3;
const pricePerUnit = 5;
// Using the tag function with a template literal
const taggedResult = highlight`You bought ${quantity} units at $${pricePerUnit} each.`;
console.log(taggedResult);
// Note: Tagged templates allow parsing template literals with a function, providing more control over string creation.


// Example 7: Advanced Expression Interpolation
// Template literals can contain more complex expressions, like function calls or operations
function double(x) {
    return x * 2;
  }
  
  const number = 4;
  const resultExpression = `Double of ${number} is ${double(number)}.`;
  console.log(resultExpression); // Output: Double of 4 is 8.
  
  // Example 8: Using Template Literals with Conditional Expressions
  const isLoggedIn = true;
  const userName = "Jane Doe";
  
  // You can use conditional (ternary) operators inside template literals
  const loginMessage = `User status: ${isLoggedIn ? `Logged in as ${userName}` : "Not logged in"}.`;
  console.log(loginMessage);
  // Output varies based on the isLoggedIn variable
  
  // Example 9: Using Template Literals with Array Methods
  const fruits = ["Apple", "Banana", "Cherry"];
  const fruitList = `Fruits: ${fruits.map(fruit => fruit).join(", ")}.`;
  console.log(fruitList); // Output: Fruits: Apple, Banana, Cherry.
  
  // Example 10: Escaping in Template Literals
  // Backticks and other expressions inside template literals can be escaped using a backslash (\)
  const codeSnippet = `Here's some code: \`${double.toString()}\``;
  console.log(codeSnippet);
  // Output: Here's some code: `function double(x) { return x * 2; }`
  
  // Example 11: Nesting Template Literals
  // Template literals can be nested within each other
  const student = { name: "Emily", grade: 90 };
  const studentInfo = `Student Info:
  - Name: ${student.name}
  - Grade: ${student.grade >= 90 ? `A (Score: ${student.grade})` : "B or below"}`;
  console.log(studentInfo);
  // Output: Student Info:
  // - Name: Emily
  // - Grade: A (Score: 90)
  
  // Example 12: Tagged Template Literals with Processing
  // Tagged templates can be used for localization, styled components, and more.
  function style(strings, ...values) {
    // Example: simple style parser (for demonstration)
    let str = "";
    strings.forEach((string, i) => {
      str += `${string}${values[i] ? `<span style="color: red;">${values[i]}</span>` : ""}`;
    });
    return str;
  }
  
  const error = "Unexpected token";
  const lineNumber = 10;
  const errorMsg = style`Error: ${error} at line ${lineNumber}.`;
  console.log(errorMsg);
  // Note: This is a simplistic example. In a real scenario, you'd return HTML or another desired format.
    
