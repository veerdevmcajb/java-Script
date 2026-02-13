/*

! ------------- Functions backstage working ----------------

- JavaScript functions are objects, allowing them to be passed around and manipulated like any other object. 

- When a function is executed, an execution context is created and pushed onto the call stack. 

- This context includes the function's arguments, local variables, and the value of this.

! Execution Process:

Function Invocation: When a function is called, JavaScript creates an execution context for that function.

Call Stack: This context is pushed onto the call stack, which keeps track of all the function calls.

Variable Storage: Within each execution context, there's a space to store variables and named functions defined in that function.

Execution: The function's code is executed line by line. If it calls other functions, a new execution context is created for those function calls, pausing the execution of the current function and pushing the new context onto the stack.

Returning Values: Once a function completes its execution and returns a value, its execution context is popped off the call stack, and control returns to the context below it in the stack.

Garbage Collection: JavaScript engines have a garbage collector that periodically frees up memory used by objects and functions that are no longer reachable or needed, including those related to popped execution contexts.

*/

function outer(){
    var count = 0;

    return inner(){
        return ++count;
    }
}


//! See this example in the visualizer.
//? https://www.jsv9000.app/
//? https://ui.dev/javascript-visualizer/

let a =1;
let b=2;
console.log(a,b);

function parent(){
  let count = 0;
return function child(){
    return ++count;
  }
}

let child = parent();
console.log(child());
console.log(child());
console.log(child());


/*
! Garbage Collection:

Garbage collection in JavaScript is an automatic process where the engine identifies and frees up memory that is no longer in use, helping to ensure efficient memory management and prevent memory leaks.

? Understanding Garbage Collection: Duniyadari example
Imagine you're at a party in a large hall. Each group of friends represents an object in JavaScript, and the connections between them (handshakes, eye contact, etc.) represent references between objects. As long as there's a chain of connections leading back to you (the global scope, or the party's host), the group is considered "in reach" and part of the party.

Starting the Party (Program Initialization): When the party starts (a program runs), groups (objects) form, and connections (references) are established. Some groups are directly connected to you (global variables), while others form chains of connections among themselves.

The Party Goes On (Execution Phase): As the night progresses (the program runs), some groups might dissolve as people leave, or new groups may form. In JavaScript, this is akin to objects being created and references being changed as the program executes.

Time to Wind Down (Garbage Collection): At some point, it's time to wind down. Groups that no longer have a connection to you (unreachable objects) are akin to guests who are no longer part of the party—they can safely leave the hall (memory can be freed).

? How JavaScript Knows Who to Send Home: Duniyadari example
The JavaScript engine employs a "garbage collector" that periodically scans the "hall" to determine which groups are no longer connected to you. This process typically involves:

Marking Phase: The garbage collector starts from you (the roots, like global variables) and marks all directly or indirectly connected groups.
Sweeping Phase: The collector then identifies groups that weren't marked as connected to you. These are considered unreachable and safe to "send home" (free up memory).
Real-life Example:
Consider an application where you manage contacts. Each "contact" is an object, and some contacts might be grouped (referenced) together (e.g., family members referencing each other). Over time, you may delete a contact, removing your direct reference to it. If that contact is not part of any group (no other objects reference it), it becomes like a guest standing alone without connection to you, making it eligible for garbage collection.

? Always yaad rakho:
- Garbage collection is automatic, but understanding it helps in writing more efficient code.
- Circular references aren't an issue in modern JavaScript engines but can be problematic in non-managed environments or when interfacing with certain web APIs.
*/