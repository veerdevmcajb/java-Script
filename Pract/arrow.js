
function sum(a,b){
    return a+b;
}
console.log(sum(5,10));


let sum = function(a,b){
    return a+b;
}
console.log(sum(10,20));

// using arrow function 

let sum1=(a,b)=>{
    return a+b;
}
console.log(sum1(100,400));

let sum2=(a,b)=>a+b;
console.log(sum2(1000,2000));

console.log((a,b)=>a*b);


let square = num=>num*num;
console.log(square(10,5));

let mult = (num1, num2) => num1*num2;
console.log(mult(2,5));


