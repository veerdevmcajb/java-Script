//!--------------------- Recursion -------------------

/*
? Recursion = Recursion is a PROGRAMMING PATTERN where a function calls itself directly or indirectly.
* (This means dividing a huge repetitive task into smaller sub tasks and repeating the same process again and again for each sub task).

It is particularly useful for tasks that can be defined in terms of similar subtasks.
It allows the function to operate on simpler versions of the same problem. 

* Key Note
- A recursive function is a function that calls itself until it doesn’t.
- A recursive function always has a condition that stops the function from calling itself. 
(And this is known as the exit statement).

* Advantages of Recursion:
1. Simplifies complex problems: Breaks down a problem into smaller, manageable parts.
2. Cleaner code: Can lead to more readable and maintainable code for certain types of problems, like tree traversals.
3. Natural fit for certain problems: Especially suited for tasks that involve hierarchical data, nested structures, or sequential steps.

! Disadvantages:
1. Performance: Can be less efficient than iterative solutions due to function call overhead and possible stack overflow issues.
2. Memory usage: Each recursive call adds a layer to the call stack, increasing memory usage.
3. Readability: For some, recursive solutions can be harder to understand compared to their iterative counterparts.
*/

// Example 1: Factorial Calculation
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };
 /// factorial
 // 5! = 5 * 4* 3 * 2 * 1
  console.log(factorial(5));//120



function sum_all(n){//5
  if(n === 1){
    return 1
  }
  return n + sum_all(n-1)
};
// 5 + sum_all(5-1)
// 5 + 4 + sum_all(4-1)
// 5 + 4 + 3 + sum_all(3-1)
// 5 + 4 + 3 + 2 + sum_all(2-1)
// 5 + 4 + 3 + 2 + 1


console.log(sum_all(5));//15


  
  console.log(factorial(5)); // 120
  
  // Example 2: Fibonacci Sequence
  function fibonacci(n) {
    if (n <= 1) return n;
    // console.log(n)
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log(fibonacci(6)); // 8
  

  // Example 3: Traversing a Nested Object Structure
  const tree = {
    name: "root",
    children: [
      {
        name: "child1",
        children: [{ name: "grandchild1" }, { name: "grandchild2" }]
      },
      {
        name: "child2"
      }
    ]
  };_
  
  function traverseTree(node) {
    console.log(node.name);
    if (node.children) {
      node.children.forEach(child => traverseTree(child));
    }
  }
  
  traverseTree(tree);
  
  // Output: root, child1, grandchild1, grandchild2, child2
  
  // Uses of Reccuurrsion:
  // 1. DOM Manipulations: Recursively traversing and manipulating DOM elements, such as building a dynamic menu based on a nested data structure.
  // 2. Data Processing: Processing nested data structures like trees or graphs, commonly found in applications dealing with organizational charts or file systems.
  // 3. Algorithms: Implementing certain algorithms such as quicksort, mergesort, or depth-first search in a more intuitive manner.



// ! Other simple example for super 30

//* Simple for loop.

let sum = 0;
for(let n = 10; n >= 1; n--){
  sum = sum + n;
}
console.log(sum);

//* For loop convered to Recursive call.

function sum(n) {
  if (n <= 1) {
    return n;
  }
  return n + sum(n - 1);
}
console.log(sum(10));


/*
! n = 5

Call Stack in first round of itteration
n = 5
5 + sum (4);
4 + sum (3);
3 + sum (2);
2 + sum (1);
sum(1) return 1

After above call the call stack will be emptied as follows.

sum(1) has returned 1 // First return as exit statement
return 2 + 1;        // Line 1
return 3 + 3;
return 4 + 6;
return 5 + 10;       // Final return
console.log(15);

Line 1 Explained :- // As soon as the expression in front of return is completed the return will be wexecuted and the function that returend the value will be removed from the execution context. And this value will be used as a result of the previos call untill the final return is made. 
The final return is always made by the first called function.
The first return is always made by the last function call.

*/
  
  
/*
? This example uses the factsorial function to show how recursion works in JS.
*/

// Defining the recursive factorial function
function factorial(n) {
    // Base case (exit condition): factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
      return 1;
    }
    // Recursive case: n! = n * (n-1)!
    // The function calls itself with n-1 until it reaches the base case
    return n * factorial(n - 1);
  }
  
  // Step-by-Step Explanation:
  
  // 1. Initial Call
  console.log('Starting factorial(3)');
  
  // 2. The function checks if n is 0 or 1. Since 3 is neither, it moves to the recursive case.
  // 3. Recursive Call: factorial(2) is needed to compute 3 * factorial(2)
  
  // Handling Multiple Recursive Calls:
  // 4. For factorial(2), since n is not 0 or 1, it calls factorial(1)
  // 5. For factorial(1), the base case is met (n === 1), so it returns 1
  
  // The Call Stack and Recursion:
  // The call stack grows with each recursive call and starts to unwind as each call reaches the base case and returns.
  
  // Unwinding the Stack:
  // 6. The return value of factorial(1) is passed back to factorial(2)
  // 7. factorial(2) then returns 2 * 1 = 2 to factorial(3)
  // 8. Finally, factorial(3) returns 3 * 2 = 6, completing the computation
  
  // Final Output
  console.log('Factorial of 3 is:', factorial(3)); // Output: 6
  
  /*
  Visualization of Recursive Calls and the Call Stack:
  factorial(3) -> 3 * factorial(2) -> 2 * factorial(1) -> return 1 -> return 2 -> return 6
  
The factorial function breaks down the problem into smaller instances of itself, using the call stack to manage execution context. The base case acts as an exit condition, ensuring the function doesn't call itself indefinitely. This example illustrates the power and elegance of recursion in solving problems that can be divided into smaller, similar problems.
  */

/*
The function starts with an “if” statement that checks if n is less than or equal to 1.
If n is 1 or less, the function simply returns n. This is the base case, which serves as the stopping condition for the recursion.
Recursive Case:

If the base case is not met (i.e., n is greater than 1), the function enters the block after the if statement.
The function returns the sum of n and the result of calling itself with the argument (n - 1). This is where the recursion happens.
How it Works:

For example, if you call sum(3), the function first checks if 3 is less than or equal to 1 (base case not met).
Since it’s not the base case, it calculates 3 + sum(2). Now, it calls itself with the argument 2.
In the next recursive call with sum(2), it calculates 2 + sum(1).
Again, in the next recursive call with sum(1), it reaches the base case and returns 1.
Now, the previous calls are resolved: 2 + 1 gives 3, and 3 + 3 gives the final result of 6.
Termination:

The recursion keeps happening, reducing the problem to smaller subproblems until it reaches the base case.
Once the base case is reached, the function starts to unwind, combining the results from each level of recursion until the final result is obtained.

*/