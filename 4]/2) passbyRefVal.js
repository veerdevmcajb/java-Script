let lname = "Dhone";
let lname2 = "soni";
let lname3 = "parekh";

let str = `Abhishek ${lname} but 
in MP the call me ${lname2} and 
in GJ call me ${false ? "p" : lname3} `
 
console.log(str);




//? Example 1: Pass by Value
// let a = "Abhi"
function passByValue(value) {
    console.log(`Inside passByValue - Original Value: ${value}`);
    value = 20; // Modifying the local copy of the value
    console.log(`Inside passByValue - Modified Value: ${value}`);
  }
  
  let num = 10;
  console.log("Example 1: Pass by Value");

  console.log(`Before passByValue - Original Value: ${num}`); // 10
  passByValue(num); 

  console.log(`After passByValue - Original Value (unchanged): ${num}`); // 10
  console.log("------------------------");
  


//? Example 2: Pass by Reference

  function passByReference(obj) {
    console.log("Inside passByReference - Original Object:", obj); // { property: "Original Property" }

    obj.property = "Modified Property"; // Modifying the object's property

    console.log("Inside passByReference - Modified Object:", obj); // { property: "Modified Property" }
  }
  
  const myObject = { property: "Original Property" };

  console.log("Example 2: Pass by Reference");
  console.log("Before passByReference - Original Object:", myObject); // { property: "Original Property" }
  passByReference(myObject);
  console.log("After passByReference - Modified Object:", myObject); // { property: "Modified Property" }
  console.log("------------------------");
  

//? Example 3: Pass by Reference (Array)

  function passArrayByReference(arr) {
    console.log("Inside passArrayByReference - Original Array:", arr);
    arr.push("New Element"); // Modifying the array by adding a new element
    console.log("Inside passArrayByReference - Modified Array:", arr);
  }
  
  const myArray = [1, 2, 3];
  console.log("Example 3: Pass Array by Reference");
  console.log("Before passArrayByReference - Original Array:", myArray);
  passArrayByReference(myArray);
  console.log("After passArrayByReference - Modified Array:", myArray);
  console.log("------------------------");
  
  // Additional Notes:
  // - Primitive types (like numbers and strings) are passed by value.
  // - Objects (including arrays) are passed by reference.
  
  