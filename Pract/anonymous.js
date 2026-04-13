
function greeting(){
    console.log('Hello I am Here');
}

console.log('Before');

setTimeout(greeting,1000);
console.log('After');

setTimeout(function(){
    console.log("Anonymous Function ");
},4000);

// anonymous function is a function without name 
// they are used as argument to a other function.
// useful for creating functional scope. and avoiding Global variables.
