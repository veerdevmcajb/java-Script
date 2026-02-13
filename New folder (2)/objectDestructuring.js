//!           Destructuring Assignment

/*
? The basic syntax is:
let {var1, var2} = {var1:…, var2:…}

-We should have an existing object on the right side, that we want to split into variables.
-The left side contains an object-like “pattern” for corresponding properties.
-In the simplest case, that’s a list of variable names in {...}.
*/

//Todo- Example.

let { height, width, title } = { title: "Menu", height: 200, width: 100 }

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

/* 
- Properties options.title, options.width and options.height are assigned to the corresponding variables with same names. The order does not matter.
- Here the sequence is not important unlike in array destructuring. The names are matched and values are stored. 
*/

//!-- Variables having different name than the property ---

/*
- The pattern on the left side may be more complex and specify the mapping between properties and variables.

- If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon:
*/

let options = {
    main: "Menu",
    width: 500,
    height: 800
};

// { sourceProperty: targetVariable }
let { width: w, height: h, main } = options;

console.log(w);
// console.log(width);//! error
console.log(h);
console.log(main);

// Means here the assignment works from left to right.
// width -> w
// height -> h
// main -> main



//!------------------Default Values------------------

/*
- Just like with arrays or function parameters, default values can be any expressions or even function calls. They will be evaluated if the value is not provided.
- In the code below funciton gets the myName, but not title.
*/

let elem = {
    myName: "Abhishek",
    nickName: 'Arjun'
};

let { nickName = getNick(), myName } = elem;
console.log(nickName);
console.log(myName);

// This function will never be called because the object under destructuring already has the nickName property.
function getNick() {
    return 'No Nick Name';
}


//!------------------- Partial destructuring---------------

// If we have a complex object with many properties, we can extract only what we need:

let emp = {
    emp_name: 'Labourdeep',
    lname: 'swazchmuller'
};

let { emp_name } = emp;
console.log(emp_name);
console.log(lname);//console.log(lname);


//!------------------The rest pattern “…” ----------------

// We can use the rest pattern, just like we did with arrays. It’s not supported by some older browsers (IE, use Babel to polyfill it), but works in modern ones.
{
    
let options = {
    main: "Menu",
    width: 500,
    height: 800
};

let { menu, main, ...arr } = options;
// console.log(menu); // no error only undefined.
console.log(main); 
console.log(menu); 
// console.log(arr.main); // unndefined

//? rest Operator
//? array = array store
//? Object = object store

console.log(arr.height);
console.log(arr.width);
console.log(arr);

}

//! VIMP NOTE

// We can not do this- Because the Javascript treats the curly braces {...} as code blocks and thus it cant understand that we are doing the destructuring.

let x, y, z;
// {x,y,z} = { x: 'xuv', y: 'yamaha', z: 'zest' };

// As a solution we need to include the paranthesis around the whole destructuring to let 
// JS know that here we are doing destructuring assignment and this is not a normal code block with curly braces.

({ x, y, z } = { x: 'xuv', y: 'yamaha', z: 'zest' });
console.log(x, y, z);


// !----------------- Nested Destricturing---------------

/*
If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.
*/

let users = {
    email: {
        id: 'Dhone.Abhishek',
        mail: '@gmail.com'
    },
    fullName: ['Abhishek', 'Dhone'],
    regular: true,
    city: 'nashik',
};

// Destructuring the complex object.

let {
    email: { id, mail },
    fullName: [fname, sname],
    regular,
    city,
    state = "maharashtra"// extra value
} = users;

// console.log(email) //ReferenceError: email is not defined
// console.log(fullName) // ReferenceError: fullName is not defined
console.log(id)
console.log(mail)
console.log(regular)
console.log(city)
console.log(state)





console.log(' \n This is an example of Nested Destructuring');
console.log(id, mail, fname, sname, regular, city, state);
// console.log(email);

// In below line email and fullName are not assigned any value, this is because these are used to just give the blueprint for destructuring and copying.
// This also means that the names on left of colon : will not have any value and only used as a pointer.
// console.log(email, id, mail, fullName, fname, sname, regular, city, state);
// console.log(email.id); Even This will not give any value.



// !------------ Smart Function Parameters ----------------

/*
There are times when a function has many parameters, most of which are optional. That’s especially true for user interfaces. Imagine a function that creates a menu. It may have a width, a height, a title, items list and so on.

Here’s a bad way to write such function:
function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}

- In real-life, the problem is how to remember the order of arguments

- Another problem is how to call a function when most parameters are set by default.
- We have to do Like this- (Which is very ugly)
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"]

- Destructuring comes to the rescue!
- We can pass arguments as an object, and the function immediately destructurizes them into variables.
- Imp thing to note here is = the parameter written in the declaration of the function acts as the left side of the destructuring assignment and the arrgument passed will act as the right side of the destructuring assignment. 
- For this we pass the object to the function.

*/

let {a,b,c} = {a:1, b:2, c:3};

function square({base = 10, power = 2}){
  let ans = 1;
  for(let i=0 ; i<power ; i++){
    ans = ans * base;
  }
  console.log(ans);
}

square({power: 2, base:10})


function showUsers({
    email: { id, mail },
    fullName: [fname, sname],
    height = '182cm',    // When we specify non object variables then we have to use equals '=' operator.
    regular,
    city,
    state = "maharashtra"
}) {

    console.log(id, mail, fname, sname, height, regular, city, state);

}
console.log('\n This is using the complex destructuring on function parameters. ');
showUsers(users);

/*
?- For an object of parameters, there will be a variable varName for property incomingProperty, with defaultValue by default.

- Please note that such destructuring assumes that showUsers() does have an argument. If we want all values by default, then we should specify an empty object:
*/

// showUsers({}); // ok, all values are default

// showUsers(); // this would give an error

{
    function showUsersAgain({
        regular,
        city = 'unknown',
        state = "maharashtra"
    }) {
        console.log(regular, city, state);
    }
    console.log('\n Destructuring on function without passing object while using default values. ');
    showUsersAgain({}); // Now no error
    
    // In the code above, the whole arguments object is {} by default, so there’s always something to destructurize.
}

// refernce example 
function power1(a,b){
 return a ** b
};// a = 5 ; b =2

console.log(power1(5,2));
console.log(power1(2,5));



function power({a,b}){
 return a ** b
};// a = 5 ; b =2

console.log(power({ b : 2, a: 5}))
// We can fix this by making {} the default value for the whole object of parameters:
{
function showUsersAgain({
    regular,
    city = 'unknown',
    state = "maharashtra"
} = {}) {
    console.log(regular, city, state);
}
console.log('\n Destructuring on function without passing object while using default values. ');
showUsersAgain(); // Now no error

// In the code above, the whole arguments object is {} by default, so there’s always something to destructurize.
}

{
    
function showUsersAgain({
    email: { id = 'arjunsaraf111', mail = '@gmail.com' }, // We cant provide default values to the nested objects if no object is passed as an argument. But we cant have any empty variables.
    regular,
    city = 'unknown',
    state = "maharashtra"
} = {email:{}}) {
    console.log(regular, city, state);
    console.log(id, mail);
}
console.log('\n Destructuring on function without passing object while using default values. ');
showUsersAgain(); // Now no error

}


// This is the example of the object destructuring using the default parameters

function details({
    name, age, address = 'Maharashtra, India', hobbies = 'not available', salary = 'not disclosed'
}) {
    console.log('these are the details of the employee recently hired : \n');
    console.log(`Name is ${name} , Age is ${age} , Address is " ${address} " , Hobbies are ${hobbies} , Salary is  = ${salary}`);
}

details({ name: 'Abhishek', age: '28', hobbies: ['Flute', 'Reading non fiction'], salary: '$1 Million / Yr' });