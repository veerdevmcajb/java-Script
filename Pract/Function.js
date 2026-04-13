function greet(name){
    console.log(`Hello ${name}`);
}
greet();

function hello(callback){
   var name = prompt ('plz enter a name');   
    callback(name);
}
hello(greet);


function sum(a,b){
    concole.log(a+b);
}
sum(5,10);

function mult(a,b){
    console.log(a*b);
}
sum(10,5);


//assing a fun in a variable
 const add= function add(a,b){
    return a+b;
 }
 console.log(add(10,90)); // 100 
 

// IIFE

(function (){
    var msg="Hello This is IIFE fun";
    console.log(msg);
})();


// 2nd way to create a IIFE Parentheses around the whole thing
(function (){
    console.log("Parenthesis around the whole function");
}());
