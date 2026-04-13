
let product ={
    company:'mango',
    itemname:'cotton candy',
    price:888
};

console.log(product);

// destructing
let company = product.company
console.log(company);

let{company1} = product;
console.log(company1);

// spread Operator
// spread operator is represented as ... dots.

const arr1=[1,2,3,4];
const arr2=[5,6];
console.log(arr1);
console.log(arr2);
console.log(arr1,...arr2);
console.log(...arr1,arr2);

console.log(arr1.flat(arr2)); // using flat we can marge our array

// object Expression on spread
const obj1={a:1,b:2};
const obj2={...obj1,C:3};
console.log(obj2);

// function Arguments
function sum(a,b,c){
    return a+b+c;
}
const numbers =[1,2,3];
console.log(sum(...numbers));

function sum(a,b,c,d){
    return a+b+c+d;
}
const res=[10,20,30,40];
console.log(sum(...res));
