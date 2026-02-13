/*

? What is JavaScript?

! Definition = JS is the synchronous, high level, multi paridigm scripting language which is used to make the webpages/ app interactive.

1.  Purpose: 
   - JavaScript was created to make web pages dynamic and interactive.

2.  Scripting Language: 
   - Programs in JavaScript are called scripts.
   - They can be written directly in HTML and run automatically as the page loads.
   - No special preparation or compilation is needed.

? Why is it called JavaScript?

3.  Initial Name: By Brandon Eich - within 15 days.

   - Originally named "LiveScript."
   - Renamed JavaScript to associate with the popularity of Java at the time.
   - Evolved independently with its own specification called ECMAScript.

4.  JavaScript Engines: 
   - JavaScript can run not only in browsers but also on servers and various devices.
   - Different engines (e.g., V8, SpiderMonkey) execute JavaScript on different browsers.

? Standard Sources
- The ECMA-262 specification
https://262.ecma-international.org/5.1/

- MDN JS Reference
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

? What engines are available?
- V8 engine. Chrome, Edge. (optimization is best)
- Chakra engine I.E.
- Spider Monkey Firefox.

? How do engines work

5.  Engine Basics: 
   - Transcompiler - engine. 
   - Engine parses, compiles, and runs scripts.
   - Optimizations are applied at each step.
   - Engines watch and optimize compiled code during execution.

? What can in-browser JavaScript do?

6.  Capabilities: 
   - JavaScript is "safe" and doesn't provide low-level access to memory or CPU.
   - Capabilities depend on the environment; in browsers, it manipulates web pages and interacts with users.
   - Examples: HTML manipulation, user interaction, network requests (AJAX), cookies, local storage.

? What CAN'T in-browser JavaScript do?

7.  Security Limitations: 
   - Restricted from accessing the file system, executing programs, or interacting with devices without user permission.
   - Same Origin Policy prevents cross-site data access. (CORS)
   - Limited interaction between different browser tabs/windows.

? What makes JavaScript unique?

8.  Unique Features: 
   - Fully integrated with HTML/CSS.
   - Simple tasks are done with straightforward syntax.
   - Supported by all major browsers and enabled by default.

9.  Widespread Usage: 
   - Widely used for creating browser interfaces.
   - Also used for servers, mobile applications, etc.

? Languages "over" JavaScript

10.  Transpiled Languages: 
    - New languages transpile to JavaScript before running in the browser.
    - Examples: CoffeeScript, TypeScript, Flow, Dart, Brython, Kotlin.
    - Transpilation allows coding in other languages while converting to JavaScript under the hood.
    
    Examples: 
    - TypeScript and Flow for strict data typing.
    - Dart, Brython, Kotlin, etc

*/


/*

? JS V8 Engine Process in Detail:

1.  Source Code: 
   - JavaScript source code is fed into the V8 engine.

2.  Parsing: 
   - V8's parser breaks down the code into abstract syntax trees (AST).

3.  Compilation: 
   - The AST is converted into an intermediate representation (IR).
   - The IR is then translated into machine code using the Just-In-Time (JIT) compilation.

4.  Optimization: 
   - V8 applies various optimizations to the generated machine code.
   - Optimizations include inlining functions, loop unrolling, and constant folding.

5.  Execution: 
   - The optimized machine code is executed by the JavaScript engine.
   - Execution is performed on a per-function basis, allowing functions to be optimized individually.

6.  Runtime Optimization: 
   - V8 continues to monitor the running script.
   - If a hot function (frequently executed) is identified, V8 may re-optimize it for better performance.

7.  Memory Management: 
   - V8 manages memory allocation for objects and variables in the script.
   - Garbage collection is employed to reclaim memory occupied by unused objects.

8.  Output: 
   - The final output is produced, allowing the web browser to render dynamic content based on the executed JavaScript code.

9.  Hidden Classes: 
   - V8 uses a concept of hidden classes to optimize property access in objects.
   - This enhances property access speed by organizing objects with similar structures.

10.  Ignition and TurboFan: 
    - Ignition is V8's interpreter used for quick code startup.
    - TurboFan is the optimizing compiler that generates efficient machine code for performance-critical parts of the code.


*/


/*


*/
console.log('Hello Bye')