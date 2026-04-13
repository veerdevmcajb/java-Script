// array is a list of multiple values.
// inde start with 0

let arr=[1,2,3,'pop','null',
    {name:'Shiv',RollNo:45}];
    console.log(arr);

    console.log(arr[3]);
    console.log(arr[4]);
    console.log(arr[5]);
    console.log(arr[5].name);
    console.log(arr[6]);
    
console.log("=======================");

    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }

    let food=['bread','rice','meat','pizza'];
    food.forEach(function(food){
        console.log(food);
        
    })

    let arr2=[1,2,3,4,5];
    arr2.forEach(function(num,ind){
        console.log(num,ind);    
    })

    console.log(arr2.isArray);
    console.log(arr2.length);
    
    let fruits = ['Apple','Orange','Mango','banana','Kivi'];
    //console.log(fruits);

    let poppedElement = fruits.pop();
    console.log("After Pop Array : ",poppedElement); // remove last element from array.
    
    console.log(fruits);
    let pushElement = fruits.push('g');
    console.log("After Push array : ",fruits); // add element in last position in aray.

    let shoftElement = fruits.shift();
    console.log("After shift arr : ",fruits); // remove 1st element from array

    let unshiftElement = fruits.unshift("AAA");
    console.log(fruits); // add element in first position in array .

    console.log("============ for Each ===============")
    fruits.forEach(function(fruits){
        console.log(fruits);
    });

    console.log("=====for of loop====")
    for(const x of fruits){
        console.log(x);
    }

    console.log("======= for loop======")
    for(i=0;i<fruits.length;i++){
        console.log(fruits[i]);
    }

    let numbs = [10,20,30,40];
    var  res = numbs.toString();
    console.log(res);
    console.log(typeof(numbs));
    console.log(typeof(res));

    var jfs=["HTML","CSS","JS","React","JAVA","ADV JAVA"];
    console.log(jfs);
    var joinedArr = jfs.join("/"); // join() method 
    console.log(joinedArr);

    const AiMl=["Python","sql","genAI","ML","AI"];

    //const conArray = jfs.concat(AiMl); // concat Array using concat() method.
    //console.log(conArray);
    
    // splice() 

    AiMl.splice(2,0,"AWS","Stat"); // splice method is used to add elements in array
    console.log(AiMl);

    AiMl.splice(0,3); // pop out the first 3 elements 
    console.log(AiMl);

    //slice(startIndex,endIndex)
    // slice () method create a new array 
    console.log("=======================")
    console.log(AiMl.slice(1,3));
    console.log("original array ", AiMl);
    console.log(AiMl.slice(-1));
    console.log(AiMl.slice(-2));

    console.log(AiMl.reverse());


    let num=[10,20,30,40];
    console.log(num);
    num.splice(4,0,50);
    console.log(num)

    console.log("length is : ",num.length);

    console.log("reverse Array is ", num.reverse());

    let number = 11;
    let PrimeStatus = true;

    for(let i=2;i<number ; i++){
        if(number % i===0){
            PrimeStatus = false;
            break;
        }
    }
  
    if(PrimeStatus){
        console.log(`${number} is prime`);
    }else{
        console.log(`${number} is not prime`);
    }

    let numArr=[1,10,2,3,4,5,6,7,8,10,9,11];
    let res=numArr.map((a)=>a*2);
    console.log(res);

    let even = numArr.filter((a)=>a%2==0);
    console.log(even);

    let sum= numArr.reduce((acc,val)=>acc + val);
    console.log("sum of array elements is : ",sum);

    let res1=numArr.every((val)=>val>10); 
    console.log("every () method ",res1); // every () method check all value pass the test.

    let res2 = numArr.some((val)=>val>9);
    console.log("some () ",res2); // some() method check some of the value pass the test.

    console.log(numArr.indexOf(10)); // check index of the value.

    console.log(numArr.lastIndexOf(10));

    console.log(numArr.sort());

    const keys = numArr.keys();
    console.log(keys);

    let name =Array.from("shivanandchandankar");
    console.log(name);

    let sName ="VeerDeveloper";
    console.log(typeof(sName));
    let res3= Array.from(sName);
    console.log(typeof(res3));
    console.log(res3);

    let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
    let sortedArray= fruits1.sort();
    console.log(sortedArray);

    let reverseOrder = fruits1.reverse();
    console.log(reverseOrder);


    let users = [
  {
    empId: 123,
    name: "Charlie",
    location: "NYC",
  },
  {
    empId: 234,
    name: "Bob",
    location: "WDC",
  },
  {
    empId: 432,
    name: "Alice",
    location: "Wonderland",
  },
];

// function objSort(a,b){
//     console.log(a.name.localeCompare(b.name));
//     return a.name.localeCompare(b.name);
// }
// users.sort(objSort);
// console.log(users);

users.sort(function(a,b){
    return a.empId - b.empId;

});
console.log(users);

let prices = [29.99,9.99,199.99,49.99];
prices.sort(function(a,b){
    return a-b;
});
console.log(prices);
